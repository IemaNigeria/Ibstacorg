import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK lazily / safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Simulated Certificate Verification Registry
const REGISTERED_CERTIFICATES: Record<string, any> = {
  "CERT-9001-88421": {
    certificateId: "CERT-9001-88421",
    cabName: "Apex Quality Certification LLC",
    cabRegistrationNo: "CAB-MS-2024-001",
    scope: "Management Systems Certification (ISO 9001:2015 Quality Management Systems)",
    issuedTo: "Nexus Aerospace Systems Inc.",
    status: "Active & Verified",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-14",
    accreditationScope: "ISO/IEC 17021-1",
    accreditingBody: "IBSTAC (United States)",
    verifiedOn: new Date().toISOString(),
  },
  "LAB-17025-49201": {
    certificateId: "LAB-17025-49201",
    cabName: "Vanguard Metrology & Calibration Labs",
    cabRegistrationNo: "CAB-LAB-2023-014",
    scope: "Testing & Calibration Laboratories (ISO/IEC 17025:2017 Mechanical & Thermal)",
    issuedTo: "Precision Automotive Components Corp.",
    status: "Active & Verified",
    issueDate: "2023-06-10",
    expiryDate: "2026-06-09",
    accreditationScope: "ISO/IEC 17025",
    accreditingBody: "IBSTAC (United States)",
    verifiedOn: new Date().toISOString(),
  },
  "INSP-17020-77103": {
    certificateId: "INSP-17020-77103",
    cabName: "Global Industrial Safety Inspection Inc.",
    cabRegistrationNo: "CAB-INSP-2024-009",
    scope: "Inspection Bodies (ISO/IEC 17020:2012 Type A Industrial Pressure Vessels)",
    issuedTo: "Keystone Energy Infrastructure Ltd.",
    status: "Active & Verified",
    issueDate: "2024-03-22",
    expiryDate: "2027-03-21",
    accreditationScope: "ISO/IEC 17020",
    accreditingBody: "IBSTAC (United States)",
    verifiedOn: new Date().toISOString(),
  },
  "PERS-17024-33812": {
    certificateId: "PERS-17024-33812",
    cabName: "CertiTech Professional Credentials Board",
    cabRegistrationNo: "CAB-PERS-2023-005",
    scope: "Personnel Certification Bodies (ISO/IEC 17024:2012 Senior ISO Lead Auditor)",
    issuedTo: "Dr. Marcus Vance",
    status: "Active & Verified",
    issueDate: "2023-11-01",
    expiryDate: "2026-10-31",
    accreditationScope: "ISO/IEC 17024",
    accreditingBody: "IBSTAC (United States)",
    verifiedOn: new Date().toISOString(),
  },
};

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", council: "IBSTAC", timestamp: new Date().toISOString() });
});

// Verification Endpoint
app.get("/api/verify-certificate/:certId", (req, res) => {
  const certId = req.params.certId.trim().toUpperCase();
  const cert = REGISTERED_CERTIFICATES[certId];

  if (cert) {
    res.json({ success: true, found: true, certificate: cert });
  } else {
    res.status(404).json({
      success: false,
      found: false,
      message: `No active accreditation or certified record found for ID: ${certId}. Please verify the certificate number or contact the IBSTAC Secretariat.`,
    });
  }
});

// AI Compliance & Accreditation Advisor Endpoint
app.post("/api/compliance-advisor", async (req, res) => {
  try {
    const { question, scope, standard } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question parameter is required." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        answer: `IBSTAC Guidance Note: IBSTAC accredits Conformity Assessment Bodies (CABs) strictly under ISO/IEC 17011 principles. For the scope (${scope || "General"}), organizations must demonstrate technical competence, structural impartiality, assessor qualification, and complete internal management system audits prior to formal assessment. Please consult our official Accreditation Lifecycle Manual or submit a formal inquiry to the IBSTAC Secretariat.`,
        source: "IBSTAC Regulatory Standard System",
      });
    }

    const systemInstruction = `You are the official AI Technical Advisor for IBSTAC (International Board for Standards, Testing, Accreditation & Certification), an independent United States accreditation council operating under ISO/IEC 17011.

Your role is to advise Conformity Assessment Bodies (CABs), laboratories, certification bodies, regulators, and industry leaders on IBSTAC accreditation requirements, ISO standards (ISO/IEC 17011, ISO/IEC 17021-1, ISO/IEC 17025, ISO/IEC 17020, ISO/IEC 17024, ISO 9001, ISO 14001, ISO 45001), structural impartiality safeguards, ILAC/IAF recognition pathways, and assessment procedures.

Guidelines:
- Maintain an authoritative, precise, professional, and institutional tone.
- Emphasize IBSTAC's core mandate: "We do not certify products or manage systems directly — we accredit the bodies that do (the audit behind the audit)."
- Structure responses clearly with bullet points, standards references, and actionable guidance steps.
- Always include relevant ISO standards citations when answering.`;

    const prompt = `Scope context: ${scope || "General Conformity Assessment"}
Standard context: ${standard || "ISO/IEC 17011"}
User Query: ${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2,
      },
    });

    res.json({
      answer: response.text || "An unexpected error occurred while retrieving standard guidance.",
      source: "IBSTAC AI Technical Advisory System (Gemini 3.6)",
    });
  } catch (error: any) {
    console.error("Gemini Compliance Advisor Error:", error);
    res.status(500).json({
      error: "Unable to process compliance inquiry at this time.",
      details: error?.message || "Internal server error",
    });
  }
});

// Vite Middleware integration for dev/prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`IBSTAC Official Web Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
