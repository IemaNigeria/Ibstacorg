import React from 'react';
import { IBSTAC_OVERVIEW } from '../data/ibstacData';
import { Shield, CheckCircle2, Award, FileText, Target, Eye, Compass, Lock, Scale, BarChart3, Users2 } from 'lucide-react';
import whoWeAreCouncil from '../assets/images/who_we_are_council_1785248585127.jpg';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Shield className="w-3.5 h-3.5 text-blue-600" /> Company Overview & Mandate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            An Independent Accreditation & Certification Authority
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            International Bureau For Standard Accreditation • Operating strictly under ISO/IEC 17011 principles
          </p>
        </div>

        {/* Core Pillars Grid: Who We Are, How We Operate, Why It Matters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Who We Are */}
          <div className="bg-slate-50 border-l-4 border-blue-600 border-r border-t border-b border-slate-200 rounded-sm p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Who We Are</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {IBSTAC_OVERVIEW.whoWeAre.p1}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-200 pt-3">
              {IBSTAC_OVERVIEW.whoWeAre.p2}
            </p>
          </div>

          {/* How We Operate */}
          <div className="bg-slate-50 border-l-4 border-slate-900 border-r border-t border-b border-slate-200 rounded-sm p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">How We Operate</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {IBSTAC_OVERVIEW.howWeOperate.p1}
            </p>
            <div className="bg-white border-l-2 border-slate-900 p-3 rounded-r-sm text-xs text-slate-700 font-medium shadow-xs">
              {IBSTAC_OVERVIEW.howWeOperate.independenceNotice}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-slate-50 border-l-4 border-blue-600 border-r border-t border-b border-slate-200 rounded-sm p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Why It Matters</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {IBSTAC_OVERVIEW.whyItMatters.p1}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-200 pt-3">
              {IBSTAC_OVERVIEW.whyItMatters.p2}
            </p>
          </div>

        </div>

        {/* Mission, Vision, and Origin Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 lg:p-12 space-y-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Origin & Mandate Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                <Compass className="w-4 h-4" /> About Us • Our Origin & Mandate
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {IBSTAC_OVERVIEW.aboutUs.originAndMandate.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {IBSTAC_OVERVIEW.aboutUs.originAndMandate.p1}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {IBSTAC_OVERVIEW.aboutUs.originAndMandate.p2}
              </p>
            </div>

            {/* Featured Image Card */}
            <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-slate-300 shadow-md group">
              <img 
                src={whoWeAreCouncil} 
                alt="IBSTAC Governance Council Committee"
                referrerPolicy="no-referrer"
                className="w-full h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Institutional Leadership</span>
                <p className="text-xs font-bold text-white leading-tight mt-0.5">
                  IBSTAC Executive Secretariat & Multi-Stakeholder Standards Committee
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Mission */}
            <div className="bg-slate-900 text-white rounded-sm p-6 space-y-2 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center gap-2 text-blue-400 font-extrabold text-base uppercase tracking-wider">
                <Target className="w-5 h-5 text-blue-400" />
                Our Mission
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                "{IBSTAC_OVERVIEW.aboutUs.mission}"
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-900 text-white rounded-sm p-6 space-y-2 shadow-md border-l-4 border-blue-400">
              <div className="flex items-center gap-2 text-blue-300 font-extrabold text-base uppercase tracking-wider">
                <Eye className="w-5 h-5 text-blue-300" />
                Our Vision
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                "{IBSTAC_OVERVIEW.aboutUs.vision}"
              </p>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <h4 className="text-xl font-extrabold text-slate-900 text-center">
              Our Foundational Values
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {IBSTAC_OVERVIEW.aboutUs.values.map((val, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-sm space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 font-extrabold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    {val.name}
                  </div>
                  <p className="text-slate-600 text-xs leading-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who We Serve List */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-widest">
                <Users2 className="w-4 h-4" /> Beneficiaries
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Who We Serve</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Empowering conformity assessment bodies, industries, regulators, and market participants across global supply chains.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {IBSTAC_OVERVIEW.aboutUs.whoWeServe.map((item, idx) => {
                const parts = item.split(' — ');
                return (
                  <div key={idx} className="bg-white border border-slate-200 p-3.5 rounded-sm flex items-start gap-2.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <div>
                      <strong className="text-slate-900 font-extrabold block uppercase tracking-tight">{parts[0]}</strong>
                      <span className="text-slate-600">{parts[1]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Global Alignment & Future Roadmap Banner */}
          <div className="bg-slate-900 text-white border border-slate-800 p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 max-w-2xl">
              <h4 className="text-base font-extrabold text-blue-400 uppercase tracking-wider">Where We're Headed • ILAC & IAF Mutual Recognition</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {IBSTAC_OVERVIEW.whereWeAreHeaded.p1}
              </p>
            </div>
            <div className="bg-slate-800 px-5 py-3 rounded-sm border border-slate-700 text-center shrink-0">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-widest">Target Recognition</span>
              <span className="text-sm font-black text-white tracking-tight">ILAC MRA & IAF MLA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
