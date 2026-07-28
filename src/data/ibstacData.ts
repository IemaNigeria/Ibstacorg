import { ScopeCategory, AccreditedCAB, GovernanceBody, NewsArticle, StandardReference } from '../types';

export const IBSTAC_OVERVIEW = {
  organizationName: "International Board for Standards, Testing, Accreditation & Certification",
  acronym: "IBSTAC",
  headquarters: "United States",
  subtitle: "An Independent Accreditation & Certification Council",
  tagline: "The Audit Behind the Audit — Confirming Competence, Impartiality & Consistency",
  
  whoWeAre: {
    title: "Who We Are",
    p1: "IBSTAC is an independent accreditation and certification council. We evaluate and accredit the certification bodies, testing and calibration laboratories, inspection bodies, and personnel certification schemes that industries and regulators rely on for assurance — confirming that the organizations doing the certifying are themselves competent, impartial, and consistent.",
    p2: "We do not certify products or manage systems directly. Our role sits one level above that: we accredit the bodies that do, giving industry, regulators, and the public confidence that a certificate, test report, or inspection result actually means what it claims to mean.",
    p3: "In practical terms, IBSTAC functions as the audit behind the audit — the body that confirms a certifier is qualified to certify, before that certifier ever puts its stamp on someone else's work."
  },

  whatWeDo: {
    title: "What We Do",
    summary: "IBSTAC accredits conformity assessment bodies (CABs) across five core scopes under international standards."
  },

  howWeOperate: {
    title: "How We Operate",
    p1: "IBSTAC's own operations are governed by ISO/IEC 17011, the international standard for bodies that accredit conformity assessment bodies. This means our assessment process, assessor competence requirements, decision-making structure, and impartiality safeguards are built to the same benchmark used by accreditation bodies worldwide.",
    independenceNotice: "Our structure is designed around strict independence: the body that accredits must never also compete in the market it oversees."
  },

  whyItMatters: {
    title: "Why It Matters",
    p1: "A certification is only as trustworthy as the body that issued it. Accreditation is the mechanism that keeps that trust in check. Without an independent third party verifying the certifiers themselves, there is no reliable way for a buyer, regulator, or trading partner to know whether a certificate reflects a genuine, competent assessment or a rubber stamp.",
    p2: "By holding certification bodies, laboratories, and inspection bodies to a consistent, internationally recognized standard, IBSTAC helps ensure that a certificate issued anywhere in our accredited network carries real, verifiable weight — supporting safer products, more reliable data, and fairer markets."
  },

  whereWeAreHeaded: {
    title: "Where We're Headed",
    p1: "IBSTAC is built toward international recognition through the two organizations that anchor global accreditation: ILAC (International Laboratory Accreditation Cooperation) for testing and inspection, and IAF (International Accreditation Forum) for management systems and product certification.",
    p2: "Achieving mutual recognition arrangements with these bodies is our long-term benchmark for credibility — and the standard we hold ourselves to from day one, well before formal recognition is granted."
  },

  aboutUs: {
    originAndMandate: {
      title: "Our Origin and Mandate",
      p1: "IBSTAC was established to fill a specific gap in the conformity assessment landscape: a credible, independent accreditation authority built from the ground up around ISO/IEC 17011 discipline, rather than growing certification and accreditation functions out of the same organization. Our founding premise is simple — the body that accredits must never also compete in the market it oversees.",
      p2: "Our mandate is to give certification bodies, testing and calibration laboratories, inspection bodies, and personnel certification schemes a rigorous, transparent, and internationally aligned path to demonstrating their competence — and to give the industries, regulators, and consumers who rely on those bodies a dependable way to verify that competence."
    },
    mission: "To provide independent, technically rigorous accreditation that strengthens confidence in certification, testing, inspection, and personnel credentialing — so that a mark of conformity means the same thing wherever it is relied upon.",
    vision: "To be recognized, through mutual recognition arrangements with ILAC and IAF, as a trusted accreditation authority whose accredited bodies are accepted without question across borders, industries, and regulatory regimes.",
    values: [
      {
        name: "Impartiality",
        desc: "We maintain structural and financial independence from the bodies we accredit, with dedicated governance safeguards against conflicts of interest."
      },
      {
        name: "Technical Rigor",
        desc: "Our assessments are conducted by qualified, sector-experienced assessors applying internationally recognized criteria, not administrative checklists."
      },
      {
        name: "Transparency",
        desc: "Accreditation criteria, scopes, and decision processes are published and consistently applied, and every applicant has access to a fair appeals process."
      },
      {
        name: "Continuous Improvement",
        desc: "Our own management system is subject to internal audit and periodic review, holding IBSTAC to the same standard of scrutiny we apply to others."
      },
      {
        name: "Global Alignment",
        desc: "We build every policy and procedure with ILAC and IAF recognition as the reference point, not as an afterthought pursued later."
      }
    ],
    governanceAndOversight: "IBSTAC operates under a multi-stakeholder governance model designed to prevent capture by any single commercial, sectoral, or political interest. The Governing Council sets policy and strategic direction; Technical Committees provide sector-specific expertise for accreditation decisions in fields such as management systems, product safety, laboratory testing, and personnel certification; and the Impartiality Committee has standing authority to review and challenge any decision or relationship that could compromise objectivity.\n\nAn Appeals and Complaints Panel, structurally separate from assessment teams, ensures that any organization affected by an IBSTAC decision has access to an independent review — a safeguard considered essential under ISO/IEC 17011 and standard practice among peer accreditation bodies internationally.",
    whoWeServe: [
      "Certification bodies — seeking accreditation to demonstrate their competence to issue management system or product certifications.",
      "Testing and calibration laboratories — seeking ISO/IEC 17025 accreditation to validate the technical reliability of their results.",
      "Inspection bodies — seeking ISO/IEC 17020 accreditation for inspection services across industrial, safety, and regulatory contexts.",
      "Personnel certification bodies — seeking ISO/IEC 17024 accreditation for the credentials they issue to individual professionals.",
      "Regulators and industry stakeholders — who rely on IBSTAC-accredited bodies as a trusted reference point when recognizing certifications, test results, or inspection outcomes."
    ],
    lookingAhead: "IBSTAC's roadmap is deliberately staged: establish governance and internal management-system discipline under ISO/IEC 17011; build a track record of consistent, technically sound accreditation decisions across an initial set of sectors; and pursue peer evaluation for ILAC and IAF mutual recognition once that track record is established. Every policy, procedure, and hire between now and then is made with that end point in view."
  }
};

export const ACCREDITATION_SCOPES: ScopeCategory[] = [
  {
    id: "management-systems",
    title: "Management Systems Certification Bodies",
    isoStandard: "ISO/IEC 17021-1",
    shortDesc: "Organizations certifying against standards such as ISO 9001, ISO 14001, ISO 45001, and ISO 27001.",
    fullDesc: "IBSTAC accredits certification bodies that evaluate and certify organizations against global management system standards. Accreditation ensures auditor competence, audit program integrity, impartiality, and systematic decision-making.",
    keyFields: [
      "ISO 9001 (Quality Management Systems)",
      "ISO 14001 (Environmental Management Systems)",
      "ISO 45001 (Occupational Health & Safety)",
      "ISO/IEC 27001 (Information Security Management)",
      "ISO 22000 (Food Safety Management Systems)"
    ],
    assessmentCriteria: [
      "Structural impartiality and independence safeguards",
      "Auditor competence evaluation and sector qualification",
      "Multi-site sampling and audit duration methodologies",
      "Certification decision committee independence"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "product-certification",
    title: "Product Certification Bodies",
    isoStandard: "ISO/IEC 17065",
    shortDesc: "Organizations certifying goods against safety, performance, and quality standards before they reach market.",
    fullDesc: "Product certification bodies evaluate whether a product, process, or service fulfills specified safety, technical, or regulatory requirements. IBSTAC accreditation validates testing rigor, factory production control surveillance, and mark licensing integrity.",
    keyFields: [
      "Electrical & Industrial Equipment Certification",
      "Construction Materials & Structural Products",
      "Medical Devices & Healthcare Technology",
      "Consumer Goods & Product Safety Testing",
      "Environmental & Green Eco-Labeling Schemes"
    ],
    assessmentCriteria: [
      "Product scheme rules and evaluation sampling methods",
      "Surveillance audit frequency and market sampling",
      "Impartiality of product approval officers",
      "Control of certification marks and misuse handling"
    ],
    iconName: "PackageCheck"
  },
  {
    id: "testing-laboratories",
    title: "Testing & Calibration Laboratories",
    isoStandard: "ISO/IEC 17025",
    shortDesc: "Covering technical competence, measurement traceability, method validation, and test result reliability.",
    fullDesc: "ISO/IEC 17025 accreditation is the definitive global benchmark for testing and calibration laboratories. IBSTAC assesses equipment calibration, measurement uncertainty calculations, proficiency testing participation, and technical staff competence.",
    keyFields: [
      "Mechanical & Environmental Testing",
      "Chemical & Bio-analytical Testing",
      "Dimensional & Thermal Calibration",
      "Electrical & Electromagnetic Compatibility (EMC)",
      "Material Metrology & Metallurgical Analysis"
    ],
    assessmentCriteria: [
      "Metrological traceability to SI units",
      "Validation of non-standard and custom test methods",
      "Proficiency testing (PT) scheme performance",
      "Measurement uncertainty budget reporting"
    ],
    iconName: "FlaskConical"
  },
  {
    id: "inspection-bodies",
    title: "Inspection Bodies",
    isoStandard: "ISO/IEC 17020",
    shortDesc: "Covering the inspection of products, processes, installations, and industrial services.",
    fullDesc: "Inspection bodies perform examination of materials, products, installations, plants, processes, work procedures, or services. IBSTAC accredits Type A (independent third-party), Type B (internal in-house), and Type C inspection bodies.",
    keyFields: [
      "Industrial Pressure Equipment & Boilers",
      "Building Structure & Structural Steel Inspections",
      "Oil & Gas Pipeline Integrity & Weld Inspections",
      "Maritime Hull & Cargo Condition Surveys",
      "Electrical & Mechanical Infrastructure Safety"
    ],
    assessmentCriteria: [
      "Type A impartiality and commercial independence",
      "Inspector competence and field assessment observations",
      "Inspection procedure standardization and report control",
      "Equipment calibration and field tool verification"
    ],
    iconName: "ClipboardCheck"
  },
  {
    id: "personnel-certification",
    title: "Personnel Certification Bodies",
    isoStandard: "ISO/IEC 17024",
    shortDesc: "Covering individual credentialing such as auditors, inspectors, welders, and technical specialists.",
    fullDesc: "Personnel certification schemes validate that an individual possesses the specific knowledge, skill, and professional competence required to execute technical roles safely and effectively.",
    keyFields: [
      "ISO Lead Auditors & Management Systems Specialists",
      "Non-Destructive Testing (NDT) Technicians",
      "Certified Welders & Metallurgical Inspectors",
      "Cybersecurity Audit Professionals",
      "Occupational Safety & Health Practitioners"
    ],
    assessmentCriteria: [
      "Job task analysis and scheme specification validation",
      "Examination security, question bank psychometrics, and grading",
      "Impartiality of examiners and invigilators",
      "Recertification and ongoing competence surveillance"
    ],
    iconName: "UserCheck"
  }
];

export const GOVERNANCE_STRUCTURE: GovernanceBody[] = [
  {
    id: "governing-council",
    name: "Governing Council",
    role: "Strategic Policy & Supreme Authority",
    description: "A multi-stakeholder body ensuring broad representation across industry, technical experts, regulatory bodies, and public interest so no single commercial interest can dominate.",
    composition: ["Industry Representatives", "Regulatory Affairs Officers", "Academic & Technical Scholars", "Public Safety Advocates"],
    keyResponsibilities: [
      "Setting overall accreditation policy and strategic direction",
      "Approving accreditation fee structures and expansion of scopes",
      "Ensuring financial and operational independence under ISO/IEC 17011",
      "Appointing chairs for Technical & Impartiality Committees"
    ],
    isoRequirement: "ISO/IEC 17011 Clause 4.2 - Top Management & Governance"
  },
  {
    id: "technical-committees",
    name: "Technical Committees",
    role: "Sector-Specific Depth & Decision Review",
    description: "Sector-specific panels providing deep technical review for accreditation assessments in management systems, laboratories, inspection bodies, and personnel schemes.",
    composition: ["Senior Metrologists", "Lead Assessment Auditors", "Industry Standard Authors", "Subject Matter Specialists"],
    keyResponsibilities: [
      "Reviewing technical assessment reports and assessor findings",
      "Recommending grant, extension, or renewal of accreditation scopes",
      "Drafting sector-specific technical requirement circulars",
      "Evaluating assessor qualification criteria"
    ],
    isoRequirement: "ISO/IEC 17011 Clause 4.3 - Technical Expertise & Competence"
  },
  {
    id: "impartiality-committee",
    name: "Impartiality Committee",
    role: "Standing Oversight & Anti-Conflict Safeguard",
    description: "A standing independent safeguard with total authority to audit and challenge any relationship, financial arrangement, or decision that could compromise IBSTAC's objectivity.",
    composition: ["Independent Legal Counsel", "Ethics & Governance Officers", "Consumer Protection Representatives"],
    keyResponsibilities: [
      "Conducting annual risk-to-impartiality assessments",
      "Monitoring revenue sources to prevent commercial influence",
      "Reviewing cross-over prohibitions (ensuring IBSTAC never offers consulting)",
      "Vetoing decisions with potential conflicts of interest"
    ],
    isoRequirement: "ISO/IEC 17011 Clause 4.4 - Safeguarding Impartiality"
  },
  {
    id: "appeals-panel",
    name: "Appeals and Complaints Panel",
    role: "Independent Judicial Review",
    description: "Structurally independent of assessment teams and decision committees, giving applicant and accredited bodies a fair, unbiased route to challenge adverse decisions.",
    composition: ["External Legal Experts", "Retired Judicial Officers", "Senior Quality Directors"],
    keyResponsibilities: [
      "Investigating formal appeals against accreditation denial or suspension",
      "Reviewing public complaints regarding accredited CAB performance",
      "Issuing binding administrative rulings on procedural fairness"
    ],
    isoRequirement: "ISO/IEC 17011 Clause 10 - Appeals and Complaints Handling"
  },
  {
    id: "secretariat",
    name: "Secretariat & Operations",
    role: "Executive Operations & Document Control",
    description: "Manages day-to-day case handling, assessor scheduling, scope documentation, and master register control across the entire accreditation lifecycle.",
    composition: ["Executive Director", "Case Operations Managers", "Quality System Registrar", "Assessor Logistical Coordinators"],
    keyResponsibilities: [
      "Managing applicant intake and preliminary completeness reviews",
      "Scheduling qualified assessment teams and witnessing audits",
      "Maintaining the Public Registry of Accredited CABs",
      "Managing ISO/IEC 17011 internal management system audits"
    ],
    isoRequirement: "ISO/IEC 17011 Clause 5 & 9 - Management System & Operations"
  }
];

export const SAMPLE_ACCREDITED_CABS: AccreditedCAB[] = [
  {
    id: "cab-001",
    cabName: "Apex Quality Certification LLC",
    registrationNumber: "CAB-MS-2024-001",
    scopeCategory: "Management Systems Certification Bodies",
    primaryStandard: "ISO/IEC 17021-1",
    country: "United States",
    cityState: "Chicago, IL",
    accreditationStatus: "Active",
    initialAccreditationDate: "2024-01-15",
    expiryDate: "2027-01-14",
    technicalScopes: [
      "ISO 9001:2015 (Quality Management)",
      "ISO 14001:2015 (Environmental Management)",
      "ISO 45001:2018 (Occupational Health & Safety)"
    ],
    certificateId: "CERT-9001-88421",
    contactEmail: "info@apexqualitycert.com"
  },
  {
    id: "cab-002",
    cabName: "Vanguard Metrology & Calibration Labs",
    registrationNumber: "CAB-LAB-2023-014",
    scopeCategory: "Testing & Calibration Laboratories",
    primaryStandard: "ISO/IEC 17025",
    country: "United States",
    cityState: "Houston, TX",
    accreditationStatus: "Active",
    initialAccreditationDate: "2023-06-10",
    expiryDate: "2026-06-09",
    technicalScopes: [
      "Mechanical Tension & Hardness Testing",
      "Thermal Sensor Calibration (-40°C to +1200°C)",
      "Dimensional Laser Metrology"
    ],
    certificateId: "LAB-17025-49201",
    contactEmail: "metrology@vanguardlabs.com"
  },
  {
    id: "cab-003",
    cabName: "Global Industrial Safety Inspection Inc.",
    registrationNumber: "CAB-INSP-2024-009",
    scopeCategory: "Inspection Bodies",
    primaryStandard: "ISO/IEC 17020",
    country: "United States",
    cityState: "Seattle, WA",
    accreditationStatus: "Active",
    initialAccreditationDate: "2024-03-22",
    expiryDate: "2027-03-21",
    technicalScopes: [
      "Type A Inspection of High Pressure Piping",
      "Structural Steel Weld Verification",
      "Boiler Safety & Vessel Integrity"
    ],
    certificateId: "INSP-17020-77103",
    contactEmail: "inspections@globalsafetyinc.com"
  },
  {
    id: "cab-004",
    cabName: "CertiTech Professional Credentials Board",
    registrationNumber: "CAB-PERS-2023-005",
    scopeCategory: "Personnel Certification Bodies",
    primaryStandard: "ISO/IEC 17024",
    country: "United States",
    cityState: "Boston, MA",
    accreditationStatus: "Active",
    initialAccreditationDate: "2023-11-01",
    expiryDate: "2026-10-31",
    technicalScopes: [
      "ISO Lead Auditor Qualification Scheme",
      "Certified Non-Destructive Testing Level II",
      "Senior Welding Inspector Certification"
    ],
    certificateId: "PERS-17024-33812",
    contactEmail: "credentials@certitechboard.org"
  },
  {
    id: "cab-005",
    cabName: "BioTech Precision Testing Solutions",
    registrationNumber: "CAB-LAB-2024-033",
    scopeCategory: "Testing & Calibration Laboratories",
    primaryStandard: "ISO/IEC 17025",
    country: "United States",
    cityState: "San Diego, CA",
    accreditationStatus: "Active",
    initialAccreditationDate: "2024-02-18",
    expiryDate: "2027-02-17",
    technicalScopes: [
      "Microbiological Water & Food Testing",
      "Chemical Contaminant HPLC Spectroscopy",
      "Cleanroom Particle Counter Calibration"
    ],
    certificateId: "LAB-17025-99204",
    contactEmail: "compliance@biotechtesting.com"
  },
  {
    id: "cab-006",
    cabName: "VeriProduct Safety Compliance Group",
    registrationNumber: "CAB-PROD-2024-018",
    scopeCategory: "Product Certification Bodies",
    primaryStandard: "ISO/IEC 17065",
    country: "United States",
    cityState: "Atlanta, GA",
    accreditationStatus: "Active",
    initialAccreditationDate: "2024-05-02",
    expiryDate: "2027-05-01",
    technicalScopes: [
      "Industrial Electrical Control Panel Certification",
      "Green Building Materials Eco-Marking",
      "Consumer Machinery Safety Scheme"
    ],
    certificateId: "PROD-17065-11930",
    contactEmail: "productcert@veriproduct.com"
  }
];

export const STANDARDS_REFERENCE: StandardReference[] = [
  {
    code: "ISO/IEC 17011:2017",
    title: "Conformity assessment — Requirements for accreditation bodies accrediting conformity assessment bodies",
    applicability: "Governance & Operations Benchmark for IBSTAC",
    summary: "Specifies general requirements for accreditation bodies assessing and accrediting CABs, covering impartiality, competence, document control, and decision processes."
  },
  {
    code: "ISO/IEC 17021-1:2015",
    title: "Conformity assessment — Requirements for bodies providing audit and certification of management systems",
    applicability: "Management Systems Certification Bodies",
    summary: "Contains principles and requirements for the competence, consistency and impartiality of the audit and certification of management systems of all types."
  },
  {
    code: "ISO/IEC 17025:2017",
    title: "General requirements for the competence of testing and calibration laboratories",
    applicability: "Testing & Calibration Laboratories",
    summary: "Enables laboratories to demonstrate technical competence, operational consistency, and generation of valid measurement results."
  },
  {
    code: "ISO/IEC 17020:2012",
    title: "Conformity assessment — Requirements for the operation of various types of bodies performing inspection",
    applicability: "Inspection Bodies (Type A, B, C)",
    summary: "Covers the competence of bodies performing inspection and for the impartiality and consistency of their inspection activities."
  },
  {
    code: "ISO/IEC 17024:2012",
    title: "Conformity assessment — General requirements for bodies operating certification of persons",
    applicability: "Personnel Credentialing Bodies",
    summary: "Specifies requirements for bodies operating certification of persons against specific requirements, ensuring examination validity and fairness."
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-01",
    title: "IBSTAC Reaffirms ISO/IEC 17011 Discipline Across All Accreditation Scopes",
    date: "July 12, 2026",
    category: "Policy Circular",
    summary: "The Governing Council published Policy Circular PC-2026-04, reaffirming absolute structural separation between accreditation oversight and commercial consulting.",
    content: "The International Board for Standards, Testing, Accreditation & Certification (IBSTAC) has issued Policy Circular PC-2026-04 to all applicant and accredited Conformity Assessment Bodies (CABs). The statement mandates that IBSTAC assessors and staff are strictly prohibited from providing advisory or pre-audit consulting services to bodies subject to IBSTAC accreditation.\n\nThis policy maintains absolute alignment with ISO/IEC 17011 Clause 4.4 and reinforces IBSTAC's foundational premise: the body that accredits must never compete in the market it oversees.",
    author: "IBSTAC Secretariat • Quality Systems Desk"
  },
  {
    id: "news-02",
    title: "Strategic Roadmap toward ILAC & IAF Mutual Recognition Arrangement (MRA)",
    date: "June 04, 2026",
    category: "Global Alignment",
    summary: "IBSTAC outlines its structured multi-stage roadmap for peer evaluation under ILAC (for labs/inspection) and IAF (for management systems).",
    content: "In alignment with IBSTAC's vision, the Governing Council has formally adopted the 2026–2028 Global Alignment Strategic Plan. The plan lays out the operational benchmarks required to submit IBSTAC for peer evaluation under the International Laboratory Accreditation Cooperation (ILAC) and International Accreditation Forum (IAF) mutual recognition frameworks.\n\nKey milestones include finalizing internal 17011 audit records, expanding sector-specific Technical Committees, and publishing standardized scope metrics.",
    author: "Office of International & Regulatory Affairs"
  },
  {
    id: "news-03",
    title: "Guidance Issued for ISO/IEC 17025 Measurement Uncertainty in Thermal Metrology",
    date: "April 19, 2026",
    category: "Technical Guidance",
    summary: "Technical Advisory Circular TG-17025-02 provides standardized criteria for evaluating measurement uncertainty budgets in accredited calibration facilities.",
    content: "The IBSTAC Metrology Technical Committee has released Technical Guidance TG-17025-02. This document clarifies requirements for SI traceability, guard-banding policies, and decision rules applied during ISO/IEC 17025 laboratory assessments.\n\nAccredited laboratories are encouraged to download the guidance document from the IBSTAC document portal prior to their upcoming annual surveillance audit.",
    author: "IBSTAC Metrology Technical Committee"
  }
];
