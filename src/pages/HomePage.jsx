import React from 'react';
import { ArrowRight, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { chapterInfo } from '../data/linksData';

export default function HomePage({ onNavigate }) {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-[#F2F3FF] to-[#FAF8FF]">
      {/* Animated Rotating Blueprint Orbital Circles & Drafting Coordinate System */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
        {/* Static Blueprint Grid & Radial Glow Background */}
        <svg className="absolute inset-0 w-full h-full text-blue-600/15 opacity-40" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="48" id="drafting-fine-grid" patternUnits="userSpaceOnUse" width="48">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeDasharray="2 6" strokeWidth="0.5" />
            </pattern>
            <radialGradient cx="50%" cy="50%" id="radial-lens" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect fill="url(#drafting-fine-grid)" height="100%" width="100%" />
          {/* Static Crosshair Axes */}
          <line stroke="currentColor" strokeDasharray="6 8" strokeWidth="0.75" x1="50%" x2="50%" y1="0" y2="100%" />
          <line stroke="currentColor" strokeDasharray="6 8" strokeWidth="0.75" x1="0" x2="100%" y1="50%" y2="50%" />
          <circle cx="50%" cy="50%" fill="url(#radial-lens)" r="520" />
        </svg>

        {/* Interactive Rotating Orbital Complex Centered Behind Hero */}
        <div className="absolute w-[800px] h-[800px] sm:w-[920px] sm:h-[920px] max-w-none flex items-center justify-center pointer-events-none">
          {/* Layer 1: Outermost dashed orbital ring (Rotating Clockwise 60s) */}
          <div className="absolute inset-0 orbital-spin-clockwise">
            <svg className="w-full h-full text-blue-600/30" fill="none" viewBox="0 0 920 920" xmlns="http://www.w3.org/2000/svg">
              <circle cx="460" cy="460" opacity="0.45" r="410" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.2" />
              <circle cx="460" cy="50" fill="#0051d5" opacity="0.85" r="4" />
              <circle cx="870" cy="460" fill="#316bf3" opacity="0.7" r="3.5" />
              <circle cx="460" cy="870" fill="#0051d5" opacity="0.85" r="4.5" />
              <circle cx="50" cy="460" fill="#316bf3" opacity="0.7" r="3.5" />
              <circle cx="750" cy="170" fill="#0051d5" opacity="0.5" r="2.5" />
              <circle cx="170" cy="750" fill="#0051d5" opacity="0.5" r="2.5" />
            </svg>
          </div>

          {/* Layer 2: Mid-outer segmented engineering ring with tick marks (Rotating Counter-Clockwise 45s) */}
          <div className="absolute w-[620px] h-[620px] sm:w-[720px] sm:h-[720px] orbital-spin-counter">
            <svg className="w-full h-full text-blue-600/40" fill="none" viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg">
              <circle cx="360" cy="360" opacity="0.4" r="310" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="360" cy="360" opacity="0.5" r="290" stroke="currentColor" strokeDasharray="10 14" strokeWidth="1.5" />
              <line stroke="currentColor" strokeWidth="1.5" x1="360" x2="360" y1="42" y2="58" />
              <line stroke="currentColor" strokeWidth="1.5" x1="662" x2="678" y1="360" y2="360" />
              <line stroke="currentColor" strokeWidth="1.5" x1="360" x2="360" y1="662" y2="678" />
              <line stroke="currentColor" strokeWidth="1.5" x1="42" x2="58" y1="360" y2="360" />
              <circle cx="360" cy="50" fill="#0051d5" opacity="0.9" r="4" />
              <circle cx="670" cy="360" fill="#0051d5" opacity="0.9" r="4" />
              <circle cx="360" cy="670" fill="#0051d5" opacity="0.9" r="4" />
              <circle cx="50" cy="360" fill="#0051d5" opacity="0.9" r="4" />
            </svg>
          </div>

          {/* Layer 3: Inner technical calibration ring (Rotating Clockwise 36s) */}
          <div className="absolute w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] orbital-spin-clockwise-slow">
            <svg className="w-full h-full text-blue-600/50" fill="none" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
              <circle cx="260" cy="260" opacity="0.5" r="215" stroke="currentColor" strokeDasharray="6 6" strokeWidth="0.75" />
              <circle cx="260" cy="260" opacity="0.3" r="160" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="260" cy="45" fill="#316bf3" r="3.5" />
              <circle cx="475" cy="260" fill="#316bf3" r="3.5" />
              <circle cx="260" cy="475" fill="#316bf3" r="3.5" />
              <circle cx="45" cy="260" fill="#316bf3" r="3.5" />
            </svg>
          </div>

          {/* Layer 4: Close halo ring right behind central emblem (Rotating Counter-Clockwise 28s) */}
          <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] orbital-spin-counter-fast">
            <svg className="w-full h-full text-blue-600/40" fill="none" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
              <circle cx="160" cy="160" opacity="0.6" r="120" stroke="currentColor" strokeDasharray="3 4" strokeWidth="0.8" />
              <circle cx="160" cy="40" fill="#0051d5" r="2.5" />
              <circle cx="280" cy="160" fill="#0051d5" r="2.5" />
              <circle cx="160" cy="280" fill="#0051d5" r="2.5" />
              <circle cx="40" cy="160" fill="#0051d5" r="2.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Central Symmetrical Architecture Module */}
      <div className="relative z-10 w-full max-w-[760px] mx-auto flex flex-col items-center text-center animate-institutional-fade-up">
        {/* Official Emblem Node */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/20 via-[#123b66]/30 to-blue-400/20 rounded-full blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-3 flex items-center justify-center shadow-lg border-2 border-blue-600/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg || chapterInfo.logo}
              alt="Institution of Engineers (India) Official Chapter Emblem"
              className="w-full h-full object-contain filter drop-shadow-xs select-none"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo.png';
              }}
            />
          </div>
        </div>

        {/* Institutional Eyebrow Credential Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 shadow-2xs mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0051d5]"></span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#002548]">
            Department of Information Technology • MGM's College of Engineering, Nanded
          </span>
        </div>

        {/* Hero Typographic Stack */}
        <div className="flex flex-col items-center gap-1 max-w-2xl">
          <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-slate-500 font-bold">
            WELCOME TO
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#002548] tracking-tight uppercase mt-1 leading-tight">
            IEI STUDENT CHAPTER
          </h1>
          <p className="text-base sm:text-xl font-semibold text-[#123b66] tracking-normal mt-0.5">
            Department of Information Technology
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
            MGM's College of Engineering, Nanded
          </p>
          <p className="text-xs text-slate-500 max-w-xl mt-1 opacity-90 leading-relaxed">
            Under the auspices of The Institution of Engineers (India) • Established by Royal Charter 1935
          </p>
        </div>

        {/* Translucent Glass Motto / Tagline Plaque */}
        <div className="w-full max-w-lg mt-6 mb-8 px-6 py-3.5 rounded-2xl bg-white/80 border border-blue-100 backdrop-blur-md shadow-xs">
          <div className="flex items-center justify-center gap-2 text-[#002548]">
            <Sparkles className="w-4 h-4 text-[#0051d5] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#002548] tracking-wide italic font-medium">
              “Connecting Minds. Inspiring Innovation. Building Engineers.”
            </p>
            <Sparkles className="w-4 h-4 text-[#0051d5] flex-shrink-0" />
          </div>
        </div>

        {/* Primary & Secondary Action Pathways */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          {/* Explore About Us CTA */}
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0051d5] text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-[#123b66] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 text-center"
          >
            <span>Explore About Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Explore Events CTA */}
          <button
            type="button"
            onClick={() => onNavigate('chapter')}
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#002548] border border-slate-200/90 text-xs sm:text-sm font-semibold shadow-xs hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 text-center"
          >
            <Calendar className="w-4 h-4 text-[#0051d5]" />
            <span>Explore Events</span>
          </button>
        </div>

        {/* Subtle Tertiary Bio-Link Pathway */}
        <div className="mt-8 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('linktree')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-[#0051d5] py-1.5 px-3 rounded-lg hover:bg-blue-50/70 transition-all duration-150 group font-medium"
          >
            <span>Access Student Community Links & Portals</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Blueprint Corner Coordinate Markings */}
      <div aria-hidden="true" className="hidden md:flex absolute top-4 left-6 flex-col text-left opacity-40 select-none text-[10px] text-slate-500 font-mono">
        <span className="tracking-widest">CHAPTER SEC. IT-NND</span>
        <span className="leading-tight">LAT 19.1764° N • LON 77.3178° E</span>
      </div>
      <div aria-hidden="true" className="hidden md:flex absolute bottom-4 right-6 flex-col text-right opacity-40 select-none text-[10px] text-slate-500 font-mono">
        <span className="tracking-widest">SESSION 2026–2027</span>
        <span className="leading-tight">IEI CHARTERED DIVISION 13</span>
      </div>
    </div>
  );
}

