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

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", council: "IBSTAC", timestamp: new Date().toISOString() });
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

    const systemInstruction = `You are the official AI Technical Advisor for IBSTAC (International Board for Standards, Testing, Accreditation & Certification), operating under the International Bureau For Standard Accreditation in compliance with ISO/IEC 17011.

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
