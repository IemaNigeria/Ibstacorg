import React, { useState } from 'react';
import { Mail, MapPin, Phone, Building2, Send, ShieldAlert, CheckCircle2, FileText, Scale } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'appeals'>('inquiry');
  
  // Inquiry form
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: 'General Accreditation Inquiry',
    message: ''
  });
  const [inquirySent, setInquirySent] = useState(false);

  // Appeals form
  const [appealData, setAppealData] = useState({
    cabName: '',
    cabRegNo: '',
    appealType: 'Challenge to Assessment Finding',
    details: ''
  });
  const [appealSent, setAppealSent] = useState(false);

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            Secretariat & Legal Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact IBSTAC Secretariat & Appeals Panel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Contact the Secretariat for case scheduling, media relations, or submit a formal appeal under ISO/IEC 17011 Clause 10.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Headquarters Info (Left Column) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest block">
                Council Headquarters
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                IBSTAC Secretariat
              </h3>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">United States Executive Secretariat</strong>
                  <span className="text-slate-600">International Board for Standards, Testing, Accreditation & Certification</span>
                  <span className="block text-slate-500 mt-1">Washington, D.C. Metropolitan Area, United States</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Official Case Handling Email:</strong>
                  <a href="mailto:secretariat@ibstac.org" className="text-blue-600 hover:underline font-semibold">secretariat@ibstac.org</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Independent Appeals Panel:</strong>
                  <a href="mailto:appeals@ibstac.org" className="text-blue-600 hover:underline font-semibold">appeals@ibstac.org</a>
                </div>
              </div>
            </div>

            {/* ISO 17011 Governance Statement */}
            <div className="bg-white border border-slate-200 p-4 rounded-sm text-xs space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-[11px]">
                <ShieldAlert className="w-4 h-4 text-blue-600" />
                Appeals Protection Guarantee
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Under ISO/IEC 17011, submission of an appeal or complaint will never result in discriminatory action against the submitting body.
              </p>
            </div>
          </div>

          {/* Form Portal (Right Column) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Toggle Tabs */}
            <div className="flex border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`py-3 px-6 border-b-2 transition-colors ${
                  activeTab === 'inquiry'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Official Inquiry Form
              </button>
              <button
                onClick={() => setActiveTab('appeals')}
                className={`py-3 px-6 border-b-2 transition-colors ${
                  activeTab === 'appeals'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Appeals & Complaints Submission
              </button>
            </div>

            {/* Tab 1: General Inquiry */}
            {activeTab === 'inquiry' && (
              <div>
                {!inquirySent ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setInquirySent(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          placeholder="e.g. Robert Sterling"
                          className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Your Email Address *</label>
                        <input
                          type="email"
                          required
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          placeholder="r.sterling@company.com"
                          className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Subject</label>
                      <select
                        value={inquiryData.subject}
                        onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                      >
                        <option value="General Accreditation Inquiry">General Accreditation Inquiry</option>
                        <option value="Assessor Qualification Inquiry">Assessor / Auditor Qualification</option>
                        <option value="Media & Public Relations">Media & Public Relations</option>
                        <option value="Regulatory Recognition">Regulatory Body Recognition</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Message Body *</label>
                      <textarea
                        rows={4}
                        required
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        placeholder="State your question or inquiry..."
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm shadow-xs transition-colors flex items-center gap-2"
                    >
                      Send Message to Secretariat
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  <div className="bg-slate-50 border border-blue-200 p-6 rounded-sm text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto" />
                    <h4 className="font-extrabold text-xl text-slate-900">Inquiry Dispatched</h4>
                    <p className="text-xs text-slate-700 max-w-sm mx-auto font-medium">
                      Thank you, {inquiryData.name}. The IBSTAC Secretariat will review your inquiry and respond within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setInquirySent(false)}
                      className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Appeals Submission */}
            {activeTab === 'appeals' && (
              <div>
                {!appealSent ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setAppealSent(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="bg-slate-50 p-3 rounded-sm border border-slate-200 text-[11px] text-slate-700 font-medium">
                      <strong className="text-slate-900">ISO/IEC 17011 Clause 10 Protection:</strong> Appeals are handled by an independent panel separate from assessment teams.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">CAB / Appellant Body Name *</label>
                        <input
                          type="text"
                          required
                          value={appealData.cabName}
                          onChange={(e) => setAppealData({ ...appealData, cabName: e.target.value })}
                          placeholder="e.g. Vanguard Calibration Corp."
                          className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Registration # (If Applicable)</label>
                        <input
                          type="text"
                          value={appealData.cabRegNo}
                          onChange={(e) => setAppealData({ ...appealData, cabRegNo: e.target.value })}
                          placeholder="e.g. CAB-LAB-2023-014"
                          className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Type of Appeal or Complaint</label>
                      <select
                        value={appealData.appealType}
                        onChange={(e) => setAppealData({ ...appealData, appealType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                      >
                        <option value="Challenge to Assessment Finding">Challenge to Assessment Non-Conformity</option>
                        <option value="Challenge to Decision Ruling">Challenge to Scope Suspension or Reduction</option>
                        <option value="Complaint Regarding Assessor Conduct">Complaint Regarding Assessor Conduct</option>
                        <option value="Public Complaint regarding Accredited CAB">Public Complaint regarding an IBSTAC Accredited Body</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold uppercase tracking-wider text-[11px] mb-1">Detailed Grounds for Appeal *</label>
                      <textarea
                        rows={4}
                        required
                        value={appealData.details}
                        onChange={(e) => setAppealData({ ...appealData, details: e.target.value })}
                        placeholder="Provide background, audit dates, and specific grounds for review..."
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 p-2.5 rounded-sm focus:border-blue-600"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm shadow-xs transition-colors flex items-center gap-2"
                    >
                      File Formal Appeal to Independent Panel
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  <div className="bg-slate-50 border border-blue-200 p-6 rounded-sm text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto" />
                    <h4 className="font-extrabold text-xl text-slate-900">Appeal Docket Created</h4>
                    <p className="text-xs text-slate-700 max-w-sm mx-auto font-medium">
                      Your appeal for <strong>{appealData.cabName}</strong> has been logged into Docket <span className="font-mono text-blue-600 font-bold">IBSTAC-APL-2026-09</span> and assigned to the independent Appeals Panel.
                    </p>
                    <button
                      onClick={() => setAppealSent(false)}
                      className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm"
                    >
                      Submit Another Filing
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
