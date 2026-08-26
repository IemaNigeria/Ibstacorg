import React from 'react';
import { NavPage } from '../types';
import { ShieldCheck, Award, Building2, Globe2, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { IBSTACLogo } from './IBSTACLogo';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs font-sans">
      
      {/* Top Footer Banner */}
      <div className="border-b border-slate-800 py-8 px-4 sm:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <IBSTACLogo showSubtitle={false} size="md" variant="dark" />
            <div>
              <h4 className="font-extrabold text-white text-base tracking-tight">IBSTAC</h4>
              <p className="text-slate-400 text-xs">
                International Bureau For Standard Accreditation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => onNavigate('verify')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-xs transition-all flex items-center gap-2"
              title="Official IBSTAC Company Verification Portal"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verify Company Status</span>
              <ShieldCheck className="w-3.5 h-3.5 opacity-90" />
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-xs transition-colors"
            >
              Apply for Accreditation
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Sitemap Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: About & Mandate */}
        <div className="lg:col-span-2 space-y-3">
          <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">IBSTAC Mandate</h5>
          <p className="text-slate-400 text-xs leading-relaxed">
            IBSTAC is an independent accreditation authority operating under ISO/IEC 17011. We evaluate and accredit management systems certification bodies, product certification bodies, testing & calibration laboratories, inspection bodies, and personnel credentialing schemes.
          </p>
          <div className="pt-2 text-[11px] text-blue-400 font-mono font-semibold">
            "The audit behind the audit" • International Bureau For Standard Accreditation
          </div>
        </div>

        {/* Col 2: Scopes */}
        <div className="space-y-2">
          <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">Accreditation Scopes</h5>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button onClick={() => onNavigate('scopes')} className="hover:text-white transition-colors">
                Management Systems (17021-1)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('scopes')} className="hover:text-white transition-colors">
                Product Certification (17065)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('scopes')} className="hover:text-white transition-colors">
                Testing Laboratories (17025)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('scopes')} className="hover:text-white transition-colors">
                Inspection Bodies (17020)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('scopes')} className="hover:text-white transition-colors">
                Personnel Credentials (17024)
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className="space-y-2">
          <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">Public Services</h5>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button 
                onClick={() => onNavigate('verify')} 
                className="hover:text-emerald-300 transition-colors text-emerald-400 font-bold flex items-center gap-1.5"
                title="Official IBSTAC Company Verification Portal"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verify Company Status</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('register')} className="hover:text-white transition-colors">
                Public Directory of CABs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('governance')} className="hover:text-white transition-colors">
                Governance & Impartiality
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('ai-advisor')} className="hover:text-white transition-colors text-blue-400 font-semibold">
                AI Compliance Assistant
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors">
                News & Policy Circulars
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Governance */}
        <div className="space-y-2">
          <h5 className="font-extrabold text-white text-sm uppercase tracking-wider">Legal & Appeals</h5>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                Secretariat Headquarters
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                File Appeal under Clause 10
              </button>
            </li>
            <li>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("IBSTAC Data Privacy & Confidentiality Statement: All CAB assessment records are held strictly confidential under ISO/IEC 17011 Clause 9.3."); }} className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert("IBSTAC Website Terms of Use: Verification register records are updated daily. Certificates must be verified against master IDs."); }} className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Copyright Ribbon */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-8 text-[11px] text-slate-400 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} IBSTAC (International Board for Standards, Testing, Accreditation & Certification). All Rights Reserved.
          </p>
          <p className="text-slate-500">
            Governed by ISO/IEC 17011 • Built for ILAC & IAF Mutual Recognition Alignment
          </p>
        </div>
      </div>

    </footer>
  );
};
