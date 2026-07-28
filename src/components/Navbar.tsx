import React, { useState } from 'react';
import { NavPage } from '../types';
import { Shield, Search, CheckCircle2, Menu, X, FileText, Globe, Building2, HelpCircle } from 'lucide-react';
import ibstacSeal from '../assets/images/ibstac_seal_logo_1785245394222.jpg';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenQuickVerify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuickVerify }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 shadow-sm border-b border-slate-200">
      {/* Top Utility Ribbon */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-widest text-[10px] text-blue-400">
              <Building2 className="w-3.5 h-3.5" /> United States Accreditation Council
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              Governed by <strong className="text-white">ISO/IEC 17011</strong> Standard
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-semibold">
            <button
              onClick={onOpenQuickVerify}
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider text-[10px] transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verify Certificate / CAB Record
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => handleNavClick('ai-advisor')}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              AI Compliance Assistant
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Seal */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm shrink-0 shadow-sm">
            <span className="text-white font-black text-xl tracking-tighter">IB</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl sm:text-2xl tracking-tighter leading-none text-slate-900 group-hover:text-blue-600 transition-colors">
                IBSTAC
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm">
                US Council
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-slate-500 hidden sm:block mt-0.5">
              International Standards Board
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`py-1 transition-colors ${
              currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`py-1 transition-colors ${
              currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('scopes')}
            className={`py-1 transition-colors ${
              currentPage === 'scopes' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Scopes
          </button>

          <button
            onClick={() => handleNavClick('governance')}
            className={`py-1 transition-colors ${
              currentPage === 'governance' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Governance
          </button>

          <button
            onClick={() => handleNavClick('register')}
            className={`py-1 transition-colors ${
              currentPage === 'register' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Public Registry
          </button>

          <button
            onClick={() => handleNavClick('process')}
            className={`py-1 transition-colors ${
              currentPage === 'process' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            How to Apply
          </button>

          <button
            onClick={() => handleNavClick('news')}
            className={`py-1 transition-colors ${
              currentPage === 'news' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            News
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`py-1 transition-colors ${
              currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors rounded-sm shadow-sm"
          >
            Contact Secretariat
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-2 text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('scopes')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            Accreditation Scopes
          </button>
          <button
            onClick={() => handleNavClick('governance')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            Governance & Impartiality
          </button>
          <button
            onClick={() => handleNavClick('register')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            Directory of Accredited CABs
          </button>
          <button
            onClick={() => handleNavClick('verify')}
            className="block w-full text-left px-3 py-2 rounded text-emerald-400 hover:bg-slate-900"
          >
            Verify Certificate / Report
          </button>
          <button
            onClick={() => handleNavClick('process')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            How to Apply
          </button>
          <button
            onClick={() => handleNavClick('ai-advisor')}
            className="block w-full text-left px-3 py-2 rounded text-amber-300 hover:bg-slate-900"
          >
            AI Compliance Assistant
          </button>
          <button
            onClick={() => handleNavClick('news')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            News & Publications
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-slate-900"
          >
            Contact Secretariat
          </button>
          
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('process')}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center py-2.5 rounded shadow"
            >
              Apply for Accreditation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
