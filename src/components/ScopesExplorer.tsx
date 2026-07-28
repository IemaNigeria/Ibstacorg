import React, { useState } from 'react';
import { ACCREDITATION_SCOPES } from '../data/ibstacData';
import { ScopeCategory } from '../types';
import { ShieldCheck, PackageCheck, FlaskConical, ClipboardCheck, UserCheck, ArrowRight, CheckCircle2, FileText, X, Download, Eye } from 'lucide-react';

import scopeManagementSystems from '../assets/images/scope_management_systems_1785248598273.jpg';
import scopePersonnel from '../assets/images/scope_personnel_1785248613954.jpg';
import heroLab from '../assets/images/hero_lab_calibration_1785246836046.jpg';
import heroInspection from '../assets/images/hero_inspection_audit_1785246848928.jpg';
import heroSummit from '../assets/images/hero_global_summit_1785246860343.jpg';

const SCOPE_IMAGE_MAP: Record<string, string> = {
  'scope-1': scopeManagementSystems,
  'scope-2': heroSummit,
  'scope-3': heroLab,
  'scope-4': heroInspection,
  'scope-5': scopePersonnel
};

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-blue-600" />,
  FlaskConical: <FlaskConical className="w-6 h-6 text-blue-600" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
  UserCheck: <UserCheck className="w-6 h-6 text-blue-600" />
};

interface ScopesExplorerProps {
  onSelectScopeForApply: (scopeId: string) => void;
}

export const ScopesExplorer: React.FC<ScopesExplorerProps> = ({ onSelectScopeForApply }) => {
  const [selectedScope, setSelectedScope] = useState<ScopeCategory | null>(null);

  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            Conformity Assessment Scopes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            IBSTAC Accreditation Scopes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Providing independent technical evaluation for conformity assessment bodies (CABs) across five core sectors under global ISO/IEC standards.
          </p>
        </div>

        {/* 5 Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCREDITATION_SCOPES.map((scope) => {
            const img = SCOPE_IMAGE_MAP[scope.id];
            return (
              <div 
                key={scope.id}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-sm overflow-hidden transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  {/* Featured Card Image Header */}
                  {img && (
                    <div className="relative h-40 overflow-hidden bg-slate-900">
                      <img 
                        src={img} 
                        alt={scope.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="bg-slate-950/80 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-sm tracking-widest backdrop-blur-xs">
                          {scope.isoStandard}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-sm bg-blue-50 border border-blue-100 group-hover:border-blue-300 transition-colors shrink-0">
                        {ICON_MAP[scope.iconName] || <ShieldCheck className="w-5 h-5 text-blue-600" />}
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {scope.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {scope.shortDesc}
                    </p>

                    {/* Key Technical Fields */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Key Sector Applications:</span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {scope.keyFields.slice(0, 3).map((field, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span className="truncate">{field}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scope Action Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedScope(scope)}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
                  >
                    View Criteria
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectScopeForApply(scope.id)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-2 rounded-sm transition-all uppercase tracking-widest"
                  >
                    Apply Under Scope
                  </button>
                </div>

              </div>
            );
          })}

          {/* Standards Compliance Card */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-sm p-6 flex flex-col justify-between text-center space-y-4 shadow-md">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-sm bg-slate-800 border border-slate-700 mx-auto flex items-center justify-center text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-white uppercase tracking-tight">ISO/IEC 17011 Discipline</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All IBSTAC assessments follow strict ISO/IEC 17011 procedures. Assessors are sector specialists subject to rigorous technical review.
              </p>
            </div>

            <div className="bg-slate-950 p-3 rounded-sm border border-slate-800 text-xs text-blue-400 font-bold uppercase tracking-widest">
              Zero Conflicts • No Consulting Offered
            </div>
          </div>
        </div>

        {/* Modal Drawer for Scope Details */}
        {selectedScope && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-300 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative text-slate-900">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedScope(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 p-1 rounded-sm bg-slate-100 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  Benchmark: {selectedScope.isoStandard}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
                  {selectedScope.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  IBSTAC Technical Accreditation Criteria & Requirements
                </p>
              </div>

              {/* Description */}
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 text-slate-700 text-sm leading-relaxed">
                {selectedScope.fullDesc}
              </div>

              {/* Key Applications */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                  Recognized Technical Sectors & Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedScope.keyFields.map((field, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-sm border border-slate-200 text-slate-800 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Criteria */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <h4 className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                  IBSTAC Assessment & Audit Criteria
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedScope.assessmentCriteria.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-sm border border-slate-100">
                      <span className="font-bold text-blue-600 shrink-0">{idx + 1}.</span>
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Modal Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#download-checklist"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Accreditation Checklist & Application Guide for ${selectedScope.isoStandard} requested. Downloading IBSTAC Circular PDF...`);
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  Download Scope Checklist (PDF)
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedScope(null)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest rounded-sm w-1/2 sm:w-auto"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const id = selectedScope.id;
                      setSelectedScope(null);
                      onSelectScopeForApply(id);
                    }}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-xs w-1/2 sm:w-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
