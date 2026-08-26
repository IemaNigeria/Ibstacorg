export type NavPage = 
  | 'home'
  | 'about'
  | 'scopes'
  | 'governance'
  | 'register'
  | 'verify'
  | 'process'
  | 'ai-advisor'
  | 'news'
  | 'contact';

export interface ScopeCategory {
  id: string;
  title: string;
  isoStandard: string;
  shortDesc: string;
  fullDesc: string;
  keyFields: string[];
  assessmentCriteria: string[];
  iconName: string;
}

export interface DetailedScopeItem {
  discipline: string;
  scopeOfTesting: string;
  standardReference: string;
}

export interface AccreditedCAB {
  id: string;
  cabName: string;
  registrationNumber: string;
  scopeCategory: string;
  primaryStandard: string;
  country: string;
  accreditationStatus: 'Active' | 'Under Review' | 'Suspended' | 'Applicant' | 'Revoked';
  initialAccreditationDate: string;
  expiryDate: string;
  technicalScopes: string[];
  certificateId: string;
  contactEmail: string;
  cityState: string;
  address?: string;
  issueDate?: string;
  surveillance1Due?: string;
  surveillance2Due?: string;
  recertificationDue?: string;
  validityStatement?: string;
  organizationType?: string;
  signatoryOfficer?: string;
  detailedScopes?: DetailedScopeItem[];
  websiteUrl?: string;
  accreditingBody?: string;
  recognitionDetails?: string;
  lastSurveillanceDate?: string;
  nextAuditDate?: string;
  taxOrRegistrationId?: string;
  securityChecksum?: string;
}

export interface VerificationRequestRecord {
  id: string;
  submittedAt: string;
  organizationName: string;
  certificateOrRegNumber: string;
  standard: string;
  requestorName: string;
  requestorEmail: string;
  purpose: string;
  status: 'Pending Review' | 'Verified' | 'Unverified / Disputed';
  notes?: string;
}

export interface GovernanceBody {
  id: string;
  name: string;
  role: string;
  description: string;
  composition: string[];
  keyResponsibilities: string[];
  isoRequirement: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: 'Policy Circular' | 'Global Alignment' | 'Technical Guidance' | 'Council Statement';
  summary: string;
  content: string;
  author: string;
}

export interface StandardReference {
  code: string;
  title: string;
  applicability: string;
  summary: string;
}
