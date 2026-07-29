import React, { useState, useMemo } from 'react';
import { SAMPLE_ACCREDITED_CABS } from '../data/ibstacData';
import { AccreditedCAB } from '../types';
import { Search, Filter, ShieldCheck, CheckCircle2, AlertCircle, Calendar, MapPin, Mail, ExternalLink, Download, FileText, X, Globe2 } from 'lucide-react';

interface PublicRegisterProps {
  initialSearchQuery?: string;
}

export const PublicRegister: React.FC<PublicRegisterProps> = ({ initialSearchQuery = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCab, setSelectedCab] = useState<AccreditedCAB | null>(null);

  const filteredCabs = useMemo(() => {
    return SAMPLE_ACCREDITED_CABS.filter((cab) => {
      const matchesSearch = 
        cab.cabName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cab.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cab.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cab.certificateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cab.primaryStandard.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cab.cityState.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cab.accreditingBody && cab.accreditingBody.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (cab.websiteUrl && cab.websiteUrl.toLowerCase().includes(searchTerm.toLowerCase())) ||
        cab.technicalScopes.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || 
        (selectedCategory === 'iema' ? cab.id === 'iema' : cab.scopeCategory === selectedCategory);
      const matchesStatus = selectedStatus === 'All' || cab.accreditationStatus === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            Public Directory & Verification Register
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Directory of IBSTAC Accredited Bodies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Search active and historic Conformity Assessment Bodies (CABs), verified certification scopes, and official accreditation numbers.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Search Directory</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search CAB name, iema, EGAC, Reg #, Certificate ID, or Standard..."
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs rounded-sm pl-9 pr-3 py-2.5 focus:outline-none focus:border-blue-600 transition-colors"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Scope Category Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Accreditation Scope / Directory</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-blue-600 font-semibold"
              >
                <option value="All">All Scopes & Directories</option>
                <option value="iema">★ IEMA STANDARDS LIMITED Directory (iema)</option>
                <option value="Management Systems Certification Bodies">Management Systems (17021-1)</option>
                <option value="Product Certification Bodies">Product Certification (17065)</option>
                <option value="Testing & Calibration Laboratories">Testing & Calibration (17025)</option>
                <option value="Inspection Bodies">Inspection Bodies (17020)</option>
                <option value="Personnel Certification Bodies">Personnel Credentialing (17024)</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Accreditation Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-blue-600"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Under Review">Under Review</option>
                <option value="Suspended">Suspended</option>
                <option value="Applicant">Applicant</option>
              </select>
            </div>

          </div>

          {/* Quick Sub-Directory Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Quick Directory:</span>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
              className={`text-xs px-2.5 py-1 rounded-xs font-bold transition-all ${selectedCategory === 'All' && !searchTerm ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              All CABs
            </button>
            <button
              onClick={() => { setSelectedCategory('iema'); setSearchTerm(''); }}
              className={`text-xs px-2.5 py-1 rounded-xs font-bold transition-all border ${selectedCategory === 'iema' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100'}`}
            >
              IEMA Directory (iema)
            </button>
            <button
              onClick={() => { setSelectedCategory('Management Systems Certification Bodies'); setSearchTerm(''); }}
              className={`text-xs px-2.5 py-1 rounded-xs font-bold transition-all ${selectedCategory === 'Management Systems Certification Bodies' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Management Systems
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 font-medium">
            <span>Showing <strong className="text-slate-900">{filteredCabs.length}</strong> accredited bodies matching criteria</span>
            {(searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="text-blue-600 hover:underline font-bold uppercase tracking-wider text-[11px]"
              >
                Reset Search Filters
              </button>
            )}
          </div>
        </div>

        {/* Directory Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCabs.map((cab) => (
            <div
              key={cab.id}
              className="bg-white border border-slate-200 hover:border-blue-500 rounded-sm p-6 space-y-4 shadow-xs flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-sm inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    {cab.accreditationStatus}
                  </span>
                  <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200 uppercase tracking-widest">
                    {cab.primaryStandard}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                    {cab.cabName}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Reg No: <strong className="text-slate-800">{cab.registrationNumber}</strong>
                  </p>
                  {cab.accreditingBody && (
                    <div className="mt-2 bg-blue-50/80 border border-blue-200/60 p-2 rounded-xs text-[11px] text-blue-900 font-medium space-y-0.5">
                      <span className="font-bold text-blue-800 block text-[10px] uppercase tracking-wider">Accredited By:</span>
                      <p>{cab.accreditingBody}</p>
                      <p className="text-[10px] text-blue-600 font-semibold">IAF MLA & ILAC MRA Recognized Scope</p>
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{cab.cityState}, {cab.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Accredited: {cab.initialAccreditationDate} • Exp: {cab.expiryDate}</span>
                  </div>
                  {cab.websiteUrl && (
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <Globe2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <a href={cab.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                        {cab.websiteUrl.replace('https://', '').replace('/', '')}
                      </a>
                    </div>
                  )}
                </div>

                {/* Technical Scopes Preview */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Accredited Technical Scope:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {cab.technicalScopes.map((scope, idx) => (
                      <li key={idx} className="bg-slate-50 p-1.5 rounded-sm border border-slate-200 truncate text-[11px] font-medium">
                        • {scope}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedCab(cab)}
                  className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1 uppercase tracking-wider"
                >
                  View Full Record
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}

          {filteredCabs.length === 0 && (
            <div className="col-span-full bg-white border border-slate-200 p-12 text-center rounded-sm space-y-3 shadow-xs">
              <AlertCircle className="w-10 h-10 text-blue-600 mx-auto" />
              <h3 className="font-extrabold text-xl text-slate-900">No Matching CAB Records Found</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                No accredited bodies match your search query or selected filters. Try searching by registration number (e.g. CAB-MS-2024-001) or standard (e.g. ISO 17025).
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                }}
                className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-sm shadow-xs inline-block mt-2 uppercase tracking-widest"
              >
                Clear Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Modal View for CAB Details */}
        {selectedCab && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 text-slate-900">
            <div className="bg-white border border-slate-300 rounded-sm max-w-2xl w-full shadow-2xl p-6 sm:p-8 space-y-6 relative">
              <button
                onClick={() => setSelectedCab(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 p-1 rounded-sm bg-slate-100 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                    {selectedCab.accreditationStatus}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200">
                    Reg: {selectedCab.registrationNumber}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
                  {selectedCab.cabName}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                  Standard Benchmark: <strong className="text-blue-600">{selectedCab.primaryStandard}</strong> ({selectedCab.scopeCategory})
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 bg-slate-50 p-4 rounded-sm border border-slate-200">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Location:</span>
                  <strong className="text-slate-900">{selectedCab.cityState}, {selectedCab.country}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Certificate ID:</span>
                  <strong className="text-blue-600 font-mono font-bold">{selectedCab.certificateId}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Initial Accreditation:</span>
                  <strong className="text-slate-800">{selectedCab.initialAccreditationDate}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Validity Expiry:</span>
                  <strong className="text-slate-800">{selectedCab.expiryDate}</strong>
                </div>
                {selectedCab.accreditingBody && (
                  <div className="col-span-full pt-2 border-t border-slate-200 space-y-1">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Accrediting Authority & Recognition:</span>
                    <p className="font-extrabold text-blue-900">{selectedCab.accreditingBody}</p>
                    {selectedCab.recognitionDetails && (
                      <p className="text-[11px] text-slate-600 leading-normal bg-white p-2 border border-slate-200 rounded-xs mt-1">
                        {selectedCab.recognitionDetails}
                      </p>
                    )}
                  </div>
                )}
                {selectedCab.websiteUrl && (
                  <div className="col-span-full pt-1">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Official Portal:</span>
                    <a href={selectedCab.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-extrabold hover:underline inline-flex items-center gap-1">
                      {selectedCab.websiteUrl}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
                <div className="col-span-full pt-2 border-t border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">Secretariat Contact:</span>
                  <a href={`mailto:${selectedCab.contactEmail}`} className="text-blue-600 font-bold hover:underline">{selectedCab.contactEmail}</a>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                  Approved Technical Scopes of Accreditation
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-800">
                  {selectedCab.technicalScopes.map((scope, idx) => (
                    <li key={idx} className="bg-slate-50 p-2.5 rounded-sm border border-slate-200 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end">
                <button
                  onClick={() => setSelectedCab(null)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm"
                >
                  Close Record
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
