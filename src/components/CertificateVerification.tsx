import React, { useState } from 'react';
import { VerificationResult } from '../types';
import { Search, CheckCircle2, XCircle, ShieldCheck, Building2, Calendar, FileText, ArrowRight, RefreshCw, Award } from 'lucide-react';
import ibstacSeal from '../assets/images/ibstac_seal_logo_1785245394222.jpg';

interface CertificateVerificationProps {
  prefilledCertId?: string;
}

export const CertificateVerification: React.FC<CertificateVerificationProps> = ({ prefilledCertId = '' }) => {
  const [certInput, setCertInput] = useState(prefilledCertId || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleVerify = async (certIdToVerify: string) => {
    if (!certIdToVerify.trim()) return;

    setLoading(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const res = await fetch(`/api/verify-certificate/${encodeURIComponent(certIdToVerify.trim())}`);
      const data = await res.json();

      if (res.ok && data.success && data.certificate) {
        setResult(data.certificate);
      } else {
        setErrorMsg(data.message || 'No active accreditation record found for this Certificate ID.');
      }
    } catch (err: any) {
      setErrorMsg('Failed to connect to the IBSTAC Master Verification Register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleVerify(certInput);
  };

  const sampleCertIds = [
    { id: 'CERT-9001-88421', label: 'Apex Quality (ISO 9001)' },
    { id: 'LAB-17025-49201', label: 'Vanguard Metrology (ISO 17025)' },
    { id: 'INSP-17020-77103', label: 'Global Safety Inspection (ISO 17020)' },
    { id: 'PERS-17024-33812', label: 'CertiTech Personnel (ISO 17024)' }
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" /> Official Master Registry Lookup
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Certificate & Report Verification Portal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Instantly validate the authenticity, validity status, and accredited scope of certificates or test reports issued within the IBSTAC accredited network.
          </p>
        </div>

        {/* Verification Form Card */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Enter Certificate / Report / CAB ID Number:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    placeholder="e.g. CERT-9001-88421 or LAB-17025-49201"
                    className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 font-mono text-xs rounded-sm pl-10 pr-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>

                <button
                  type="submit"
                  disabled={loading || !certInput.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-sm shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 shrink-0"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Verifying...
                    </>
                  ) : (
                    <>
                      Verify Record <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Sample IDs */}
            <div className="pt-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1.5">
                Try Sample Registered Certificate IDs:
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleCertIds.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setCertInput(item.id);
                      handleVerify(item.id);
                    }}
                    className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs px-2.5 py-1 rounded-sm font-mono transition-colors shadow-xs"
                  >
                    {item.id} <span className="text-slate-400 font-sans font-normal">({item.label})</span>
                  </button>
                ))}
              </div>
            </div>
          </form>

          {/* Verification Result Display */}
          {result && (
            <div className="bg-white border-2 border-blue-600 rounded-sm p-6 sm:p-8 space-y-6 shadow-md relative">
              
              {/* Header Status Seal */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={ibstacSeal} 
                    alt="IBSTAC Seal" 
                    className="w-12 h-12 rounded-full border border-slate-200 shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] text-blue-600 font-mono uppercase tracking-widest font-extrabold block">
                      IBSTAC Official Master Register
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Verified & Active Certificate Record
                    </h3>
                  </div>
                </div>

                <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-sm text-xs font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  STATUS: {result.status}
                </span>
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-800 font-medium">
                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Certificate ID:</span>
                  <strong className="text-blue-600 font-mono text-sm font-bold">{result.certificateId}</strong>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Accredited CAB Name:</span>
                  <strong className="text-slate-900 text-sm font-extrabold">{result.cabName}</strong>
                  <span className="text-slate-500 text-[11px] block mt-0.5">Reg #: {result.cabRegistrationNo}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Issued To Client / Organization:</span>
                  <strong className="text-slate-900 font-bold">{result.issuedTo}</strong>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Accreditation Standard Benchmark:</span>
                  <strong className="text-blue-600 font-mono font-bold">{result.accreditationScope}</strong>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Issue Date:</span>
                  <strong className="text-slate-800">{result.issueDate}</strong>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-sm border border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Validity Expiry Date:</span>
                  <strong className="text-slate-800">{result.expiryDate}</strong>
                </div>

                <div className="col-span-full bg-slate-50 p-4 rounded-sm border border-slate-200 space-y-1">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Certified Technical Scope Description:</span>
                  <p className="text-slate-800 text-xs leading-relaxed font-medium">
                    {result.scope}
                  </p>
                </div>
              </div>

              {/* Timestamp & Verification Authority Seal */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 font-medium">
                <span>Accrediting Authority: <strong className="text-slate-900">{result.accreditingBody}</strong></span>
                <span>Verified On: {new Date(result.verifiedOn).toLocaleString()}</span>
              </div>

            </div>
          )}

          {/* Error Message Display */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 p-6 rounded-sm text-red-900 space-y-3 text-center">
              <XCircle className="w-10 h-10 text-red-600 mx-auto" />
              <h4 className="font-extrabold text-lg text-red-900">Record Verification Unsuccessful</h4>
              <p className="text-xs leading-relaxed max-w-lg mx-auto text-red-800">
                {errorMsg}
              </p>
              <p className="text-[11px] text-red-700 font-mono font-semibold">
                For manual verification queries, please submit an official request to the IBSTAC Secretariat at <a href="mailto:verify@ibstac.org" className="underline font-bold">verify@ibstac.org</a>.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
