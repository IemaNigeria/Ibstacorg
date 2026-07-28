import React, { useState } from 'react';
import { FileText, CheckCircle2, Calculator, Send, ArrowRight, ShieldCheck, Clock, DollarSign, Building2, HelpCircle } from 'lucide-react';

interface ApplicationProcessProps {
  initialScopeId?: string;
  onOpenAiAdvisor: () => void;
}

export const ApplicationProcess: React.FC<ApplicationProcessProps> = ({ initialScopeId = 'management-systems', onOpenAiAdvisor }) => {
  // Calculator state
  const [calcScope, setCalcScope] = useState(initialScopeId);
  const [calcSites, setCalcSites] = useState(1);
  const [calcAssessors, setCalcAssessors] = useState(2);

  // Application Inquiry Form state
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    country: 'United States',
    selectedScope: initialScopeId,
    standard: 'ISO/IEC 17021-1 (Management Systems)',
    currentStatus: 'New Applicant',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fee calculation helper
  const calculateEstimate = () => {
    let baseFee = 3500;
    if (calcScope === 'testing-laboratories') baseFee = 4200;
    if (calcScope === 'inspection-bodies') baseFee = 3800;
    if (calcScope === 'product-certification') baseFee = 4500;
    if (calcScope === 'personnel-certification') baseFee = 3900;

    const siteCost = (calcSites - 1) * 1200;
    const totalEstimate = baseFee + siteCost;
    const estimatedWeeks = 8 + (calcSites * 2);

    return { totalEstimate, estimatedWeeks };
  };

  const { totalEstimate, estimatedWeeks } = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            ISO/IEC 17011 Accreditation Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How to Apply for IBSTAC Accreditation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A transparent, rigorous 5-stage pathway for certification bodies, laboratories, inspection bodies, and personnel schemes.
          </p>
        </div>

        {/* 5-Stage Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {/* Stage 1 */}
          <div className="bg-white border border-slate-200 p-5 rounded-sm space-y-3 relative flex flex-col justify-between shadow-xs hover:border-blue-500 transition-colors">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                1
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">Application & Intake</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Submit formal application, quality manual, cross-reference matrices, and organizational scope documents.
              </p>
            </div>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider pt-2 border-t border-slate-100">Stage 1 • Secretariat Review</span>
          </div>

          {/* Stage 2 */}
          <div className="bg-white border border-slate-200 p-5 rounded-sm space-y-3 relative flex flex-col justify-between shadow-xs hover:border-blue-500 transition-colors">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                2
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">Document Assessment</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Off-site evaluation of management system documentation against target ISO standards (17025, 17020, 17021-1, etc.).
              </p>
            </div>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider pt-2 border-t border-slate-100">Stage 2 • Technical Auditor</span>
          </div>

          {/* Stage 3 */}
          <div className="bg-white border border-slate-200 p-5 rounded-sm space-y-3 relative flex flex-col justify-between shadow-xs hover:border-blue-500 transition-colors">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                3
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">On-Site & Witnessing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                On-site facility assessment and live witnessing of CAB personnel conducting audits, tests, or inspections.
              </p>
            </div>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider pt-2 border-t border-slate-100">Stage 3 • Field Assessor Team</span>
          </div>

          {/* Stage 4 */}
          <div className="bg-white border border-slate-200 p-5 rounded-sm space-y-3 relative flex flex-col justify-between shadow-xs hover:border-blue-500 transition-colors">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                4
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">Council Decision</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Independent Technical Committee review of findings, corrective actions, and formal accreditation vote.
              </p>
            </div>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider pt-2 border-t border-slate-100">Stage 4 • Technical Committee</span>
          </div>

          {/* Stage 5 */}
          <div className="bg-white border border-slate-200 p-5 rounded-sm space-y-3 relative flex flex-col justify-between shadow-xs hover:border-blue-500 transition-colors">
            <div className="space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                5
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">Award & Surveillance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Issuance of IBSTAC Accreditation Certificate, publication in Master Directory, and annual surveillance cycle.
              </p>
            </div>
            <span className="text-[10px] text-slate-900 font-bold uppercase tracking-wider pt-2 border-t border-slate-100">Stage 5 • Ongoing Maintenance</span>
          </div>

        </div>

        {/* Interactive Fee & Timeline Estimator */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider">
                <Calculator className="w-4 h-4" /> Assessment Planning Tool
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Interactive Fee & Duration Estimator
              </h3>
            </div>

            <button
              onClick={onOpenAiAdvisor}
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Ask AI Scope Advisor
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Target Accreditation Scope:</label>
                <select
                  value={calcScope}
                  onChange={(e) => setCalcScope(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600 text-xs"
                >
                  <option value="management-systems">Management Systems Certification Bodies (ISO/IEC 17021-1)</option>
                  <option value="product-certification">Product Certification Bodies (ISO/IEC 17065)</option>
                  <option value="testing-laboratories">Testing & Calibration Laboratories (ISO/IEC 17025)</option>
                  <option value="inspection-bodies">Inspection Bodies (ISO/IEC 17020)</option>
                  <option value="personnel-certification">Personnel Certification Bodies (ISO/IEC 17024)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Number of Facilities / Sites:</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={calcSites}
                    onChange={(e) => setCalcSites(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Assessor Team Size:</label>
                  <select
                    value={calcAssessors}
                    onChange={(e) => setCalcAssessors(parseInt(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600 text-xs"
                  >
                    <option value={2}>2 Technical Assessors</option>
                    <option value={3}>3 Technical Assessors (Multi-sector)</option>
                    <option value={4}>4 Technical Assessors (Complex Scope)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Estimate Results Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded-sm space-y-4 text-center">
              <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest block">Estimated Initial Assessment Investment</span>
              
              <div className="space-y-1">
                <span className="text-3xl font-extrabold text-slate-900 block">
                  ${totalEstimate.toLocaleString()} <span className="text-xs text-slate-500 font-sans font-normal">USD</span>
                </span>
                <span className="text-xs text-slate-500 block">
                  Includes document review, preliminary & on-site audit
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-around text-xs text-slate-700">
                <div>
                  <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span>Timeline: <strong className="text-slate-900">~{estimatedWeeks} Weeks</strong></span>
                </div>
                <div>
                  <ShieldCheck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span>Cycle: <strong className="text-slate-900">3-Year Renewal</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Official Application Inquiry Form */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="space-y-1 border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Preliminary Application & Scope Inquiry
            </h3>
            <p className="text-xs text-slate-600">
              Submit your organization's details to receive formal ISO/IEC 17011 application forms and assessor scheduling options.
            </p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Organization / CAB Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    placeholder="e.g. Apex Certification Services Ltd."
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Primary Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Dr. Eleanor Vance, Quality Director"
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="quality@organization.com"
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Country / Jurisdiction *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United States, Canada, Germany..."
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Target Accreditation Scope *</label>
                  <select
                    value={formData.selectedScope}
                    onChange={(e) => setFormData({ ...formData, selectedScope: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  >
                    <option value="management-systems">Management Systems Bodies (ISO 9001 / 14001 / 45001)</option>
                    <option value="product-certification">Product Certification Bodies (ISO/IEC 17065)</option>
                    <option value="testing-laboratories">Testing & Calibration Labs (ISO/IEC 17025)</option>
                    <option value="inspection-bodies">Inspection Bodies (ISO/IEC 17020)</option>
                    <option value="personnel-certification">Personnel Credentials (ISO/IEC 17024)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Current Accreditation Status</label>
                  <select
                    value={formData.currentStatus}
                    onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                  >
                    <option value="New Applicant">New Applicant (First Time)</option>
                    <option value="Transfer Request">Transfer from another Accreditation Body</option>
                    <option value="Scope Extension">Existing IBSTAC CAB Seeking Scope Extension</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Specific Standards or Scope Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention specific testing methods, standards, or multi-site locations..."
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                Submit Application Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="bg-slate-50 border border-blue-200 p-8 rounded-sm text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
              <h4 className="font-extrabold text-2xl text-slate-900">Application Inquiry Received</h4>
              <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed font-medium">
                Thank you, <strong>{formData.contactName}</strong>. The IBSTAC Secretariat has logged your inquiry for <strong>{formData.organizationName}</strong> under scope <em>{formData.selectedScope}</em>.
              </p>
              <p className="text-xs text-blue-600 font-mono font-bold">
                Official Case Ref: IBSTAC-APP-2026-{(Math.floor(Math.random() * 8000) + 1000)}
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
