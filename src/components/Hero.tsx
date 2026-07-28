import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavPage } from '../types';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  FileCheck, 
  Landmark, 
  Globe2, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles,
  Layers,
  FlaskConical,
  Building2
} from 'lucide-react';

import heroBg from '../assets/images/ibstac_hero_bg_1785245410504.jpg';
import heroLab from '../assets/images/hero_lab_calibration_1785246836046.jpg';
import heroInspection from '../assets/images/hero_inspection_audit_1785246848928.jpg';
import heroSummit from '../assets/images/hero_global_summit_1785246860343.jpg';

interface HeroProps {
  onNavigate: (page: NavPage) => void;
  onSearchRegistry: (query: string) => void;
  onOpenQuickVerify: () => void;
}

interface SlideData {
  id: number;
  image: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: string;
  highlightText: string;
  subtitle: string;
  tagline: string;
  primaryCtaText: string;
  primaryCtaAction: () => void;
  secondaryCtaText: string;
  secondaryCtaAction: () => void;
  isoStandard: string;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSearchRegistry, onOpenQuickVerify }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const slides: SlideData[] = [
    {
      id: 0,
      image: heroBg,
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />,
      badgeText: "Independent Accreditation Authority",
      title: "The Audit Behind",
      highlightText: "The Audit.",
      subtitle: "Confirming that bodies doing certifying, testing, inspecting, and credentialing are competent, impartial, and consistent. IBSTAC provides the global trust layer.",
      tagline: "ISO/IEC 17011 Compliant Governance",
      primaryCtaText: "Apply for Accreditation",
      primaryCtaAction: () => onNavigate('process'),
      secondaryCtaText: "Explore 5 Scopes",
      secondaryCtaAction: () => onNavigate('scopes'),
      isoStandard: "ISO/IEC 17011 • Authority Benchmark"
    },
    {
      id: 1,
      image: heroLab,
      badgeIcon: <FlaskConical className="w-3.5 h-3.5 text-blue-400" />,
      badgeText: "Testing & Calibration Laboratories",
      title: "Precision & Analytical",
      highlightText: "Rigor.",
      subtitle: "Accrediting testing laboratories and calibration facilities under rigorous measurement uncertainty and quality competence standards.",
      tagline: "Laboratory Accreditation Standard",
      primaryCtaText: "View Laboratory Scope",
      primaryCtaAction: () => onNavigate('scopes'),
      secondaryCtaText: "Verify Certificate",
      secondaryCtaAction: onOpenQuickVerify,
      isoStandard: "ISO/IEC 17025 • Testing & Calibration"
    },
    {
      id: 2,
      image: heroInspection,
      badgeIcon: <Building2 className="w-3.5 h-3.5 text-blue-400" />,
      badgeText: "Inspection & Industrial Integrity",
      title: "Uncompromising Field",
      highlightText: "Inspection.",
      subtitle: "Providing formal accreditation for inspection bodies evaluating critical machinery, infrastructure, pressure vessels, and safety systems.",
      tagline: "Field Inspection Compliance",
      primaryCtaText: "Inspection Scope",
      primaryCtaAction: () => onNavigate('scopes'),
      secondaryCtaText: "Public Directory",
      secondaryCtaAction: () => onNavigate('register'),
      isoStandard: "ISO/IEC 17020 • Inspection Bodies"
    },
    {
      id: 3,
      image: heroSummit,
      badgeIcon: <Globe2 className="w-3.5 h-3.5 text-blue-400" />,
      badgeText: "Global Mutual Recognition",
      title: "Accepted Once,",
      highlightText: "Recognized Everywhere.",
      subtitle: "Promoting international trade and technical equivalence through multilateral cross-border conformity recognition pathways.",
      tagline: "ILAC & IAF MRA Alignment",
      primaryCtaText: "Governance Council",
      primaryCtaAction: () => onNavigate('governance'),
      secondaryCtaText: "AI Scope Advisor",
      secondaryCtaAction: () => onNavigate('ai-advisor'),
      isoStandard: "ILAC & IAF • Multilateral Recognition"
    }
  ];

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchRegistry(searchQuery);
      onNavigate('register');
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-12 space-y-8">
        
        {/* SLIDING HERO BANNER CAROUSEL */}
        <div 
          className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] rounded-sm overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Images with Fade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* High Contrast Gradient Overlays for WCAG Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between max-w-3xl">
            
            {/* Top Slide Meta Bar */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-900/60 backdrop-blur-md text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/30 shadow-xs">
                {slide.badgeIcon}
                <span>{slide.badgeText}</span>
              </div>
              <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                {slide.isoStandard}
              </span>
            </div>

            {/* Slide Title & Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 my-auto py-6"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  {slide.title} <br />
                  <span className="text-blue-400">{slide.highlightText}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={slide.primaryCtaAction}
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-md flex items-center gap-2"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={slide.secondaryCtaAction}
                    className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-xs uppercase tracking-widest border border-slate-700 hover:border-slate-500 transition-all rounded-sm backdrop-blur-xs"
                  >
                    {slide.secondaryCtaText}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Progress Bar & Slide Thumb Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === idx 
                        ? 'w-8 bg-blue-500 shadow-xs' 
                        : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="ml-3 text-[11px] font-mono text-slate-400 font-bold">
                  0{currentSlide + 1} / 0{slides.length}
                </span>
              </div>

              {/* Autoplay Play/Pause & Left/Right Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-sm border border-slate-800 transition-colors"
                  title={isPlaying ? "Pause Banner Auto-slide" : "Play Banner Auto-slide"}
                  aria-label="Toggle banner animation"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-400" /> : <Play className="w-3.5 h-3.5 text-slate-300" />}
                </button>

                <div className="h-4 w-px bg-slate-800" />

                <button
                  onClick={handlePrevSlide}
                  className="p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-sm border border-slate-800 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextSlide}
                  className="p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-sm border border-slate-800 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* TWO COLUMN LOWER HERO DASHBOARD: Registry Search & Key Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Public Registry Quick Search Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 text-white font-black text-sm flex items-center justify-center rounded-sm">
                    IB
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 uppercase tracking-tight">Public Registry Directory Search</h3>
                    <p className="text-xs text-slate-500">
                      Real-time lookup for accredited Laboratories, Certification Bodies & Inspection Agencies
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-3">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Search CAB Name, Registration Number, or ISO Standard
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Apex Quality, ISO 17025, CAB-2026..."
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs rounded-sm pl-9 pr-3 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Verification Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-medium">Quick Certificate Audit Verification:</span>
              <button
                onClick={onOpenQuickVerify}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-sm flex items-center gap-1.5 transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                Launch Certificate Verifier
              </button>
            </div>
          </div>

          {/* Governing Oversight Summary */}
          <div className="lg:col-span-5 bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 rounded-sm shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Institutional Safeguards</span>
                <span className="text-[10px] font-mono text-slate-400">ISO/IEC 17011</span>
              </div>

              <h4 className="text-lg font-extrabold text-white mt-3 mb-4">Governing Framework</h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-xs mt-0.5">01</span>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-100">Governing Council</p>
                    <p className="text-[11px] text-slate-400">Multi-stakeholder industry and regulatory representation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-xs mt-0.5">02</span>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-100">Technical Committees</p>
                    <p className="text-[11px] text-slate-400">Sector-specific expert reviews for all accreditation decisions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-mono font-bold text-xs mt-0.5">03</span>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-100">Impartiality Safeguard</p>
                    <p className="text-[11px] text-slate-400">Independent conflict-of-interest review panel.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <Award className="w-3.5 h-3.5" /> ISO 17011 Compliant
              </span>
              <span>United States Secretariat</span>
            </div>
          </div>

        </div>

        {/* Global Benchmark Badges Bar */}
        <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-600">
          <div className="flex items-center gap-2 bg-white p-3 border border-slate-200 rounded-sm shadow-2xs">
            <Award className="w-4 h-4 text-blue-600 shrink-0" />
            <span>ISO/IEC 17011 Discipline</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 border border-slate-200 rounded-sm shadow-2xs">
            <Landmark className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Multi-Stakeholder Council</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 border border-slate-200 rounded-sm shadow-2xs">
            <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Impartiality Safeguard</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 border border-slate-200 rounded-sm shadow-2xs">
            <Globe2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>ILAC & IAF MRA Pathway</span>
          </div>
        </div>

      </div>

      {/* Service Grid Banner */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">Accreditation Scopes</h2>
              <p className="text-xl font-extrabold text-white">Serving Conformity Assessment Bodies Worldwide</p>
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-400 sm:text-right">
              Based in United States • Global Regulatory Outreach
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div 
              onClick={() => onNavigate('scopes')}
              className="p-4 bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors rounded-sm cursor-pointer group"
            >
              <div className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300">ISO/IEC 17021</div>
              <p className="text-[11px] font-semibold text-slate-200 leading-tight">Management Systems Certification</p>
            </div>
            <div 
              onClick={() => onNavigate('scopes')}
              className="p-4 bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors rounded-sm cursor-pointer group"
            >
              <div className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300">ISO/IEC 17025</div>
              <p className="text-[11px] font-semibold text-slate-200 leading-tight">Testing & Calibration Laboratories</p>
            </div>
            <div 
              onClick={() => onNavigate('scopes')}
              className="p-4 bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors rounded-sm cursor-pointer group"
            >
              <div className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300">ISO/IEC 17020</div>
              <p className="text-[11px] font-semibold text-slate-200 leading-tight">Inspection Bodies & Verification</p>
            </div>
            <div 
              onClick={() => onNavigate('scopes')}
              className="p-4 bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors rounded-sm cursor-pointer group"
            >
              <div className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300">ISO/IEC 17065</div>
              <p className="text-[11px] font-semibold text-slate-200 leading-tight">Product Certification Bodies</p>
            </div>
            <div 
              onClick={() => onNavigate('scopes')}
              className="p-4 bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-colors rounded-sm cursor-pointer group"
            >
              <div className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300">ISO/IEC 17024</div>
              <p className="text-[11px] font-semibold text-slate-200 leading-tight">Personnel Certification Schemes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

