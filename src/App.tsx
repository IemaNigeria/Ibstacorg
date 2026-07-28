import React, { useState } from 'react';
import { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { ScopesExplorer } from './components/ScopesExplorer';
import { GovernanceSection } from './components/GovernanceSection';
import { PublicRegister } from './components/PublicRegister';
import { CertificateVerification } from './components/CertificateVerification';
import { ApplicationProcess } from './components/ApplicationProcess';
import { AIComplianceAdvisor } from './components/AIComplianceAdvisor';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { X, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [registerSearchQuery, setRegisterSearchQuery] = useState('');
  const [selectedApplyScope, setSelectedApplyScope] = useState('management-systems');
  const [quickVerifyOpen, setQuickVerifyOpen] = useState(false);
  const [quickVerifyId, setQuickVerifyId] = useState('CERT-9001-88421');

  // Helper to open verification for a specific certificate ID
  const handleOpenVerifyForId = (certId: string) => {
    setQuickVerifyId(certId);
    setCurrentPage('verify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper when selecting a scope from ScopesExplorer to jump to Apply
  const handleSelectScopeForApply = (scopeId: string) => {
    setSelectedApplyScope(scopeId);
    setCurrentPage('process');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Main Navbar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuickVerify={() => {
          setCurrentPage('verify');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Page Render based on currentPage */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero 
              onNavigate={setCurrentPage}
              onSearchRegistry={(q) => setRegisterSearchQuery(q)}
              onOpenQuickVerify={() => {
                setCurrentPage('verify');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <WhoWeAre />
            <ScopesExplorer onSelectScopeForApply={handleSelectScopeForApply} />
            <PublicRegister 
              initialSearchQuery={registerSearchQuery}
              onVerifyCertId={handleOpenVerifyForId}
            />
            <GovernanceSection />
            <ApplicationProcess 
              initialScopeId={selectedApplyScope} 
              onOpenAiAdvisor={() => setCurrentPage('ai-advisor')}
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
              onVerifyCertId={handleOpenVerifyForId}
            />
          </div>
        )}

        {currentPage === 'verify' && (
          <div className="animate-fadeIn">
            <CertificateVerification prefilledCertId={quickVerifyId} />
          </div>
        )}

        {currentPage === 'process' && (
          <div className="animate-fadeIn">
            <ApplicationProcess 
              initialScopeId={selectedApplyScope}
              onOpenAiAdvisor={() => setCurrentPage('ai-advisor')}
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
        onNavigate={setCurrentPage}
        onOpenQuickVerify={() => {
          setCurrentPage('verify');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
