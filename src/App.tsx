import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { ScopesExplorer } from './components/ScopesExplorer';
import { GovernanceSection } from './components/GovernanceSection';
import { PublicRegister } from './components/PublicRegister';
import { VerificationPortal } from './components/VerificationPortal';
import { ApplicationProcess } from './components/ApplicationProcess';
import { AIComplianceAdvisor } from './components/AIComplianceAdvisor';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [registerSearchQuery, setRegisterSearchQuery] = useState('');
  const [verificationInitialQuery, setVerificationInitialQuery] = useState('');
  const [selectedApplyScope, setSelectedApplyScope] = useState('management-systems');

  // Handle URL pathname, hash or direct routing for /verify and other pages
  useEffect(() => {
    const handleUrlRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const queryCert = params.get('cert') || params.get('certificate') || params.get('q') || params.get('query');

      if (queryCert) {
        setVerificationInitialQuery(queryCert);
      }

      if (pathname === '/verify' || pathname.startsWith('/verify') || hash === 'verify' || hash.startsWith('verify')) {
        setCurrentPage('verify');
      } else if (pathname === '/register' || hash === 'register') {
        setCurrentPage('register');
      } else if (pathname === '/scopes' || hash === 'scopes') {
        setCurrentPage('scopes');
      } else if (pathname === '/governance' || hash === 'governance') {
        setCurrentPage('governance');
      } else if (pathname === '/about' || hash === 'about') {
        setCurrentPage('about');
      } else if (pathname === '/process' || pathname === '/apply' || hash === 'process' || hash === 'apply') {
        setCurrentPage('process');
      } else if (pathname === '/ai-advisor' || hash === 'ai-advisor') {
        setCurrentPage('ai-advisor');
      } else if (pathname === '/contact' || hash === 'contact') {
        setCurrentPage('contact');
      }
    };

    handleUrlRoute();
    window.addEventListener('hashchange', handleUrlRoute);
    window.addEventListener('popstate', handleUrlRoute);
    return () => {
      window.removeEventListener('hashchange', handleUrlRoute);
      window.removeEventListener('popstate', handleUrlRoute);
    };
  }, []);

  // Update URL state when page changes
  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick helper to jump straight to verify with a query term
  const handleVerifyQuery = (query: string) => {
    setVerificationInitialQuery(query);
    handleNavigate('verify');
  };

  // Helper when selecting a scope from ScopesExplorer to jump to Apply
  const handleSelectScopeForApply = (scopeId: string) => {
    setSelectedApplyScope(scopeId);
    handleNavigate('process');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Main Navbar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Render based on currentPage */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero 
              onNavigate={handleNavigate}
              onSearchRegistry={(q) => {
                setRegisterSearchQuery(q);
                handleNavigate('register');
              }}
              onVerifyDirect={(q) => handleVerifyQuery(q)}
            />
            <WhoWeAre />
            <ScopesExplorer onSelectScopeForApply={handleSelectScopeForApply} />
            <PublicRegister 
              initialSearchQuery={registerSearchQuery}
              onNavigateVerify={(q) => handleVerifyQuery(q)}
            />
            <GovernanceSection />
            <ApplicationProcess 
              initialScopeId={selectedApplyScope} 
              onOpenAiAdvisor={() => handleNavigate('ai-advisor')}
            />
            <NewsSection />
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            <WhoWeAre />
            <GovernanceSection />
          </div>
        )}

        {currentPage === 'scopes' && (
          <div className="animate-fadeIn">
            <ScopesExplorer onSelectScopeForApply={handleSelectScopeForApply} />
          </div>
        )}

        {currentPage === 'governance' && (
          <div className="animate-fadeIn">
            <GovernanceSection />
          </div>
        )}

        {currentPage === 'register' && (
          <div className="animate-fadeIn">
            <PublicRegister 
              initialSearchQuery={registerSearchQuery}
              onNavigateVerify={(q) => handleVerifyQuery(q)}
            />
          </div>
        )}

        {currentPage === 'verify' && (
          <div className="animate-fadeIn">
            <VerificationPortal 
              initialQuery={verificationInitialQuery}
              onNavigateContact={() => handleNavigate('contact')}
              onNavigateScopes={() => handleNavigate('scopes')}
            />
          </div>
        )}

        {currentPage === 'process' && (
          <div className="animate-fadeIn">
            <ApplicationProcess 
              initialScopeId={selectedApplyScope}
              onOpenAiAdvisor={() => handleNavigate('ai-advisor')}
            />
          </div>
        )}

        {currentPage === 'ai-advisor' && (
          <div className="animate-fadeIn">
            <AIComplianceAdvisor />
          </div>
        )}

        {currentPage === 'news' && (
          <div className="animate-fadeIn">
            <NewsSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fadeIn">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
      />

    </div>
  );
}
