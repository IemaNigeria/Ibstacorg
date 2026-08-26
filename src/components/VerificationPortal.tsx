import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  Download, 
  Printer, 
  Check, 
  Copy, 
  ShieldCheck, 
  RefreshCw,
  FileText
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

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Verification Form Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Certificate Verification
            </h1>
            <p className="text-sm text-slate-600">
              Enter your certificate number below to verify and view certificate details.
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
                  placeholder="Enter Certificate Number (e.g. CPEM-2024-001)"
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
            <span className="text-slate-500 font-medium">Examples:</span>
            <button
              type="button"
              onClick={() => { setSearchQuery('CPEM-2024-001'); handleSearch('CPEM-2024-001'); }}
              className="text-emerald-700 hover:underline font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
            >
              CPEM-2024-001
            </button>
            <button
              type="button"
              onClick={() => { setSearchQuery('CPEA-2024-002'); handleSearch('CPEA-2024-002'); }}
              className="text-emerald-700 hover:underline font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
            >
              CPEA-2024-002
            </button>
            <button
              type="button"
              onClick={() => { setSearchQuery('EGAC-IAF-MLA-IEMA-2026'); handleSearch('EGAC-IAF-MLA-IEMA-2026'); }}
              className="text-emerald-700 hover:underline font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
            >
              EGAC-IAF-MLA-IEMA-2026
            </button>
            <button
              type="button"
              onClick={() => { setSearchQuery('CERT-9001-88421'); handleSearch('CERT-9001-88421'); }}
              className="text-emerald-700 hover:underline font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
            >
              CERT-9001-88421
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div>
            {matchedRecord ? (
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                
                {/* Result Status Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-full">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        Certificate Verified
                      </h2>
                      <p className="text-xs text-slate-500">
                        This certificate is genuine and officially recorded in the registry.
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    {matchedRecord.accreditationStatus}
                  </span>
                </div>

                {/* Certificate Details Table */}
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Certificate Number:</span>
                    <span className="sm:col-span-2 font-mono font-bold text-slate-900">{matchedRecord.certificateId}</span>
                  </div>

                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Name / Candidate:</span>
                    <span className="sm:col-span-2 font-bold text-slate-900">{matchedRecord.cabName}</span>
                  </div>

                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Certification / Program:</span>
                    <span className="sm:col-span-2 font-semibold text-slate-900">{matchedRecord.primaryStandard}</span>
                  </div>

                  {matchedRecord.registrationNumber && (
                    <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium">Registration / Membership ID:</span>
                      <span className="sm:col-span-2 font-mono text-slate-800">{matchedRecord.registrationNumber}</span>
                    </div>
                  )}

                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Issue Date:</span>
                    <span className="sm:col-span-2 text-slate-800">{matchedRecord.initialAccreditationDate}</span>
                  </div>

                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Expiry / Validity Date:</span>
                    <span className="sm:col-span-2 text-slate-800">{matchedRecord.expiryDate}</span>
                  </div>

                  <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                    <span className="text-slate-500 font-medium">Issuing Authority:</span>
                    <span className="sm:col-span-2 text-slate-800">
                      {matchedRecord.accreditingBody || 'Institute of Enterprise Management and Analytics (IIEMA)'}
                    </span>
                  </div>

                  {matchedRecord.recognitionDetails && (
                    <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium">Recognition Status:</span>
                      <span className="sm:col-span-2 text-slate-700 text-xs leading-relaxed">
                        {matchedRecord.recognitionDetails}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowCertificateModal(true)}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Certificate</span>
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

      {/* Certificate Viewer Modal */}
      {showCertificateModal && matchedRecord && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white text-slate-900 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden my-6 border border-slate-300">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase">Official Certificate Record</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Certificate Frame */}
            <div className="p-8 space-y-6 text-center bg-[#fffdfa] border-8 border-slate-200 m-4 rounded shadow-inner">
              <div className="space-y-1 border-b border-slate-300 pb-4">
                <div className="text-lg font-bold font-serif uppercase tracking-wider text-slate-900">
                  {matchedRecord.accreditingBody || 'Institute of Enterprise Management and Analytics'}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                  Official Certificate of Certification
                </div>
              </div>

              <div className="py-4 space-y-3">
                <div className="text-xs italic text-slate-600">This is to certify that</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
                  {matchedRecord.cabName}
                </div>
                <div className="text-xs text-slate-600">
                  has fulfilled all requirements and successfully earned the credential:
                </div>
                <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded text-sm font-bold font-mono tracking-wide">
                  {matchedRecord.primaryStandard}
                </div>
              </div>

              <div className="border-t border-slate-300 pt-4 flex flex-wrap justify-between items-center text-xs text-slate-600 text-left">
                <div>
                  <div><strong>Certificate No:</strong> <span className="font-mono">{matchedRecord.certificateId}</span></div>
                  <div><strong>Issue Date:</strong> {matchedRecord.initialAccreditationDate}</div>
                  <div><strong>Valid Through:</strong> {matchedRecord.expiryDate}</div>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>STATUS: VALID</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
