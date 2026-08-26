import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  Printer, 
  Check, 
  Copy, 
  ShieldCheck, 
  RefreshCw,
  FileText,
  MapPin,
  Calendar,
  Building2,
  Award,
  Layers,
  FlaskConical,
  Wrench,
  Scan,
  Scale,
  QrCode
} from 'lucide-react';
import { SAMPLE_ACCREDITED_CABS } from '../data/ibstacData';
import { AccreditedCAB } from '../types';
import { IBSTACLogo } from './IBSTACLogo';

interface VerificationPortalProps {
  initialQuery?: string;
  onNavigateContact?: () => void;
  onNavigateScopes?: () => void;
}

export const VerificationPortal: React.FC<VerificationPortalProps> = ({
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');
  const [searched, setSearched] = useState(Boolean(initialQuery));
  const [matchedRecord, setMatchedRecord] = useState<AccreditedCAB | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      handleSearch(initialQuery);
    } else {
      // Default to the official Quantum Steel certificate
      setSearchQuery('283944756');
      handleSearch('283944756');
    }
  }, [initialQuery]);

  const handleSearch = (query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setMatchedRecord(null);
      setSearched(false);
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      setSearched(true);
      const found = SAMPLE_ACCREDITED_CABS.find(cab => 
        cab.certificateId.toLowerCase() === q ||
        cab.registrationNumber.toLowerCase() === q ||
        cab.cabName.toLowerCase().includes(q) ||
        cab.certificateId.toLowerCase().includes(q) ||
        (cab.taxOrRegistrationId && cab.taxOrRegistrationId.toLowerCase().includes(q)) ||
        cab.primaryStandard.toLowerCase().includes(q)
      );

      setMatchedRecord(found || null);
      setIsSearching(false);
    }, 250);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const getDisciplineIcon = (discipline: string) => {
    const d = discipline.toLowerCase();
    if (d.includes('mechanical')) return <Wrench className="w-5 h-5 text-emerald-700" />;
    if (d.includes('chemical')) return <FlaskConical className="w-5 h-5 text-emerald-700" />;
    if (d.includes('ndt') || d.includes('testing')) return <Scan className="w-5 h-5 text-emerald-700" />;
    return <Layers className="w-5 h-5 text-emerald-700" />;
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Verification Form Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official IBSTAC Registry</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Certificate Verification Portal
            </h1>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Enter a certificate number to instantly verify company accreditation, standards, address, and accredited testing scopes.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="cert-number" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Certificate Number
              </label>
              <div className="relative">
                <input
                  id="cert-number"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Certificate Number (e.g. 283944756)"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setSearched(false); setMatchedRecord(null); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 px-2 py-1 font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="submit"
                disabled={isSearching}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                {isSearching ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                <span>Verify Certificate</span>
              </button>
            </div>
          </form>

          {/* Quick Examples */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Quick Verify:</span>
            <button
              type="button"
              onClick={() => { setSearchQuery('283944756'); handleSearch('283944756'); }}
              className="text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-mono font-bold px-2.5 py-1 rounded border border-emerald-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>283944756 (Quantum Steel Limited)</span>
            </button>
            <button
              type="button"
              onClick={() => { setSearchQuery('EGAC-IAF-MLA-IEMA-2026'); handleSearch('EGAC-IAF-MLA-IEMA-2026'); }}
              className="text-slate-700 hover:underline font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200 cursor-pointer"
            >
              EGAC-IAF-MLA-IEMA-2026
            </button>
            <button
              type="button"
              onClick={() => { setSearchQuery('CPEM-2024-001'); handleSearch('CPEM-2024-001'); }}
              className="text-slate-700 hover:underline font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200 cursor-pointer"
            >
              CPEM-2024-001
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div>
            {matchedRecord ? (
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                
                {/* Result Status Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-full shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-slate-900">
                          {matchedRecord.cabName}
                        </h2>
                        {matchedRecord.organizationType && (
                          <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 font-medium rounded border border-slate-200">
                            {matchedRecord.organizationType}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Certificate Record Verified & Officially Registered
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      Status: {matchedRecord.accreditationStatus}
                    </span>
                  </div>
                </div>

                {/* Core Company & Certificate Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm">
                  <div className="space-y-2.5">
                    <div>
                      <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Company / Accredited Facility</span>
                      <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4 text-slate-600 shrink-0" />
                        {matchedRecord.cabName}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Certificate Number</span>
                      <span className="font-mono font-bold text-emerald-800 text-sm sm:text-base bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-0.5">
                        {matchedRecord.certificateId}
                      </span>
                    </div>

                    {matchedRecord.address && (
                      <div>
                        <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Facility Address</span>
                        <span className="text-slate-800 flex items-start gap-1.5 mt-0.5 leading-relaxed">
                          <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{matchedRecord.address}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <div>
                      <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Accreditation Standard</span>
                      <span className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        {matchedRecord.primaryStandard}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Issuing Authority</span>
                      <span className="text-slate-800 font-medium block mt-0.5">
                        {matchedRecord.accreditingBody || 'IBSTAC (International Bureau for Standard Accreditation)'}
                      </span>
                    </div>

                    {matchedRecord.validityStatement && (
                      <div>
                        <span className="text-slate-500 text-xs block uppercase tracking-wider font-semibold">Validity Terms</span>
                        <span className="text-slate-700 text-xs italic block mt-0.5">
                          {matchedRecord.validityStatement}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Audit & Surveillance Dates Table */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Accreditation Cycle & Surveillance Schedule</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="text-slate-500 font-medium">Initial Accreditation</div>
                      <div className="font-semibold text-slate-900 mt-0.5">{matchedRecord.initialAccreditationDate}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="text-slate-500 font-medium">Issue Date</div>
                      <div className="font-semibold text-slate-900 mt-0.5">{matchedRecord.issueDate || matchedRecord.initialAccreditationDate}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="text-slate-500 font-medium">Surveillance 1 Due</div>
                      <div className="font-semibold text-slate-900 mt-0.5">{matchedRecord.surveillance1Due || matchedRecord.lastSurveillanceDate || '—'}</div>
                    </div>
                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="text-slate-500 font-medium">Recertification Due</div>
                      <div className="font-semibold text-slate-900 mt-0.5">{matchedRecord.recertificationDue || matchedRecord.expiryDate}</div>
                    </div>
                  </div>
                </div>

                {/* Scope of Accreditation Section */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-slate-500" />
                    <span>Scope of Accreditation</span>
                  </h3>

                  {matchedRecord.detailedScopes && matchedRecord.detailedScopes.length > 0 ? (
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-800 text-white font-bold uppercase tracking-wider">
                            <th className="py-2.5 px-3 border-r border-slate-700 w-1/4">Testing Discipline</th>
                            <th className="py-2.5 px-3 border-r border-slate-700 w-1/2">Scope of Testing</th>
                            <th className="py-2.5 px-3 w-1/4">Reference / Standard</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {matchedRecord.detailedScopes.map((scope, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-3 font-bold text-slate-900 align-top border-r border-slate-200">
                                <div className="flex items-center gap-2">
                                  {getDisciplineIcon(scope.discipline)}
                                  <span>{scope.discipline}</span>
                                </div>
                              </td>
                              <td className="py-3 px-3 text-slate-700 align-top leading-relaxed border-r border-slate-200">
                                {scope.scopeOfTesting}
                              </td>
                              <td className="py-3 px-3 font-mono font-medium text-emerald-800 align-top">
                                {scope.standardReference}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {matchedRecord.technicalScopes.map((scope, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs bg-slate-50 px-3 py-2 rounded border border-slate-200 text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Alliance / Governance Footer */}
                {matchedRecord.recognitionDetails && (
                  <div className="p-3 bg-emerald-50/70 rounded-md border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{matchedRecord.recognitionDetails}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowCertificateModal(true)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Official Certificate</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowCertificateModal(true);
                      setTimeout(() => window.print(), 300);
                    }}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Download PDF</span>
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-md text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer ml-auto"
                  >
                    {copiedUrl ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedUrl ? 'Link Copied' : 'Share Verification Link'}</span>
                  </button>
                </div>

              </div>
            ) : (
              /* Not Found Card */
              <div className="bg-white rounded-lg border border-rose-200 shadow-sm p-6 sm:p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full mx-auto flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Certificate Not Found
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  No certificate record was found for <strong className="font-mono text-slate-900">"{searchQuery}"</strong>. Please check the certificate number and try again.
                </p>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Official Certificate Modal (Document Replica) */}
      {showCertificateModal && matchedRecord && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white text-slate-900 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden my-4 border border-slate-300 max-h-[92vh] flex flex-col">
            
            {/* Modal Top Bar */}
            <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
              <span className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Official IBSTAC Accreditation Certificate</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Certificate Document Content */}
            <div className="overflow-y-auto p-4 sm:p-6 bg-[#fbfbf8]">
              <div className="bg-white p-6 sm:p-10 border-4 border-double border-slate-700 rounded-sm shadow-md space-y-6 text-center relative">
                
                {/* Header with IBSTAC Brand and Values Seal */}
                <div className="flex items-start justify-between border-b border-slate-300 pb-5">
                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-serif">
                      IBST<span className="text-emerald-700">^</span>C
                    </div>
                    <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-600 font-medium">
                      International Bureau for Standard Accreditation
                    </div>
                  </div>

                  {/* Values Shield */}
                  <div className="bg-slate-900 text-amber-300 p-2 sm:p-3 rounded text-[9px] sm:text-[10px] font-bold text-center tracking-widest uppercase space-y-0.5 border border-amber-400/40">
                    <div className="flex justify-center mb-0.5">
                      <Scale className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>COMPETENCE</div>
                    <div>INTEGRITY</div>
                    <div>CONFIDENCE</div>
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold font-serif tracking-wide uppercase text-slate-950">
                    Accreditation Certificate
                  </h2>
                  <div className="text-base sm:text-lg font-mono font-bold text-emerald-800">
                    {matchedRecord.primaryStandard}
                  </div>
                </div>

                {/* Certification Statement */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="italic">This is to certify that the Testing Laboratory of</p>
                  <div className="text-xl sm:text-3xl font-extrabold font-serif text-slate-950 py-1 tracking-wide">
                    {matchedRecord.cabName}
                  </div>
                  {matchedRecord.address && (
                    <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
                      {matchedRecord.address}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 max-w-xl mx-auto pt-2 leading-relaxed">
                    has been assessed and found to be competent to carry out laboratory testing in accordance with the requirements of <strong>{matchedRecord.primaryStandard}</strong> General requirements for the competence of testing and calibration laboratories. This certificate is valid for the scope as detailed below.
                  </p>
                </div>

                {/* Scope Table on Document */}
                {matchedRecord.detailedScopes && matchedRecord.detailedScopes.length > 0 && (
                  <div className="space-y-2 text-left">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-center text-slate-800 border-y border-slate-300 py-1 font-serif">
                      Scope of Accreditation
                    </div>
                    <table className="w-full text-[11px] border border-slate-300 border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold uppercase text-[10px]">
                          <th className="p-2 border border-slate-700 w-1/4">Testing Discipline</th>
                          <th className="p-2 border border-slate-700 w-1/2">Scope of Testing</th>
                          <th className="p-2 border border-slate-700 w-1/4">Reference / Standard</th>
                        </tr>
                      </thead>
                      <tbody>
                        {matchedRecord.detailedScopes.map((scope, idx) => (
                          <tr key={idx} className="border-b border-slate-200">
                            <td className="p-2 font-bold text-slate-900 border-r border-slate-200 align-top">
                              {scope.discipline}
                            </td>
                            <td className="p-2 text-slate-700 border-r border-slate-200 align-top">
                              {scope.scopeOfTesting}
                            </td>
                            <td className="p-2 font-mono font-medium text-emerald-900 align-top">
                              {scope.standardReference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Certificate Meta & Signatures Footer */}
                <div className="border-t border-slate-300 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-left text-xs">
                  <div className="space-y-1 font-mono text-[11px]">
                    <div><strong>CERTIFICATE NUMBER:</strong> {matchedRecord.certificateId}</div>
                    <div><strong>INITIAL ACCREDITATION DATE:</strong> {matchedRecord.initialAccreditationDate}</div>
                    <div><strong>ISSUE DATE:</strong> {matchedRecord.issueDate || matchedRecord.initialAccreditationDate}</div>
                    <div><strong>SURVEILLANCE 1 DUE:</strong> {matchedRecord.surveillance1Due || '03 February 2026'}</div>
                    <div><strong>SURVEILLANCE 2 DUE:</strong> {matchedRecord.surveillance2Due || '03 February 2027'}</div>
                    <div><strong>RECERTIFICATION DUE:</strong> {matchedRecord.recertificationDue || matchedRecord.expiryDate}</div>
                  </div>

                  {/* Golden Embossed IBSTAC Accredited Stamp */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-full border-4 border-amber-600 bg-amber-50 flex flex-col items-center justify-center text-amber-900 shadow-inner p-1">
                      <div className="text-[7px] font-bold uppercase tracking-tighter">International Bureau</div>
                      <div className="text-xs font-extrabold font-serif">IBSTAC</div>
                      <div className="text-[8px] font-bold text-emerald-800">ACCREDITED</div>
                      <div className="text-[6px] tracking-tighter uppercase font-medium">For Standard Accreditation</div>
                    </div>
                  </div>

                  {/* QR Code and Signature */}
                  <div className="text-right space-y-2 flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <div className="text-[9px] text-slate-500 text-right leading-tight">
                        Scan to verify<br />current status on<br /><strong>ibstac.org/verify</strong>
                      </div>
                      <div className="p-1 bg-white border border-slate-300 rounded shadow-xs">
                        <QrCode className="w-10 h-10 text-slate-900" />
                      </div>
                    </div>
                    <div className="pt-2 text-right">
                      <div className="font-serif italic font-bold text-slate-900 text-sm">
                        MJohn John
                      </div>
                      <div className="text-[9px] uppercase font-bold text-slate-600 tracking-wider">
                        Certification Manager
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-footer Alliance Notice */}
                <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-500 text-center flex flex-col sm:flex-row items-center justify-between gap-1">
                  <span>This certificate remains the property of IBSTAC and must be returned on request.</span>
                  <span className="font-semibold text-slate-700">IBSTAC is a member of the International Laboratory Accreditation Alliance.</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
