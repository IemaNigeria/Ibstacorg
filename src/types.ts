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

export interface AccreditedCAB {
  id: string;
  cabName: string;
  registrationNumber: string;
  scopeCategory: string;
  primaryStandard: string;
  country: string;
  accreditationStatus: 'Active' | 'Under Review' | 'Suspended' | 'Applicant';
  initialAccreditationDate: string;
  expiryDate: string;
  technicalScopes: string[];
  certificateId: string;
  contactEmail: string;
  cityState: string;
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

export interface VerificationResult {
  certificateId: string;
  cabName: string;
  cabRegistrationNo: string;
  scope: string;
  issuedTo: string;
  status: string;
  issueDate: string;
  expiryDate: string;
  accreditationScope: string;
  accreditingBody: string;
  verifiedOn: string;
}
