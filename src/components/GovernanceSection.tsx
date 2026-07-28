import React, { useState } from 'react';
import { GOVERNANCE_STRUCTURE } from '../data/ibstacData';
import { GovernanceBody } from '../types';
import { Landmark, Users, ShieldAlert, Scale, Building2, CheckCircle2, ChevronRight, FileCheck2, Info } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  const [activeBody, setActiveBody] = useState<GovernanceBody>(GOVERNANCE_STRUCTURE[0]);

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Landmark className="w-3.5 h-3.5 text-blue-600" /> ISO/IEC 17011 Structural Independence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Governance & Operational Oversight
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Designed around multi-stakeholder independence to prevent capture by any single commercial, sectoral, or political interest.
          </p>
        </div>

        {/* Interactive Governance Flow / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Governance Structure Navigation (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-1">
              IBSTAC Governance Bodies (Click to view charter):
            </h3>

            {GOVERNANCE_STRUCTURE.map((body) => {
              const isActive = activeBody.id === body.id;
              return (
                <button
                  key={body.id}
                  onClick={() => setActiveBody(body)}
                  className={`w-full text-left p-4 rounded-sm border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className={`text-base font-extrabold ${isActive ? 'text-blue-400' : 'text-slate-900'}`}>
                        {body.name}
                      </strong>
                    </div>
                    <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {body.role}
                    </p>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isActive ? 'text-blue-400 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                </button>
              );
            })}

            {/* Impartiality Pledge Notice */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-sm text-xs space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-extrabold uppercase tracking-wider text-[11px]">
                <ShieldAlert className="w-4 h-4 text-blue-600" />
                Standing Anti-Conflict Prohibition
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                IBSTAC never offers consulting, internal audits, or implementation services to certification bodies or laboratories. Accreditation decisions are made strictly on objective evidence.
              </p>
            </div>
          </div>

          {/* Active Body Details Card (Right Column) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">

            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm inline-block">
                {activeBody.isoRequirement}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
                {activeBody.name}
              </h3>
              <p className="text-sm text-blue-600 font-bold">
                {activeBody.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-sm leading-relaxed">
              {activeBody.description}
            </p>

            {/* Stakeholder Composition */}
            <div className="space-y-3 bg-white p-4 rounded-sm border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" /> Representation & Stakeholder Composition
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                {activeBody.composition.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-sm border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-600" /> Key Mandated Responsibilities
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeBody.keyResponsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-sm border border-slate-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Standard: ISO/IEC 17011 Clause 4 & 5</span>
              <span className="text-blue-600 font-bold uppercase tracking-wider">Fully Operational</span>
            </div>

          </div>

        </div>

        {/* ISO 17011 Discipline Banner */}
        <div className="bg-slate-900 text-white border border-slate-800 p-8 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-md">
          <div className="space-y-1">
            <span className="text-blue-400 font-black text-2xl uppercase tracking-tight block">100% Independent</span>
            <span className="text-xs text-slate-300">No ownership or commercial ties to any CAB</span>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
            <span className="text-blue-400 font-black text-2xl uppercase tracking-tight block">Appeals Safeguard</span>
            <span className="text-xs text-slate-300">Independent review panel for all adverse rulings</span>
          </div>
          <div className="space-y-1">
            <span className="text-blue-400 font-black text-2xl uppercase tracking-tight block">Sector Depth</span>
            <span className="text-xs text-slate-300">Subject-matter experts leading technical review</span>
          </div>
        </div>

      </div>
    </section>
  );
};
