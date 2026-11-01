import React from 'react';
import { CheckCircle2, Award, Share2 } from 'lucide-react';
import { chapterInfo } from '../data/linksData';
import logoImg from '../assets/logo.png';

export default function ProfileHeader({ onShare }) {
  return (
    <header className="w-full flex flex-col items-center text-center pt-1 pb-3 px-1">
      {/* Top Bar inside Mobile View: Verified Badge & Share Button */}
      <div className="w-full flex items-center justify-between mb-4 px-1">
        <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-2xs px-3 py-1 rounded-full text-[11px] font-semibold text-brand-navy">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
          <span>Official Student Chapter</span>
        </div>

        <button
          onClick={onShare}
          type="button"
          aria-label="Share Linktree"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-white/95 hover:bg-blue-50 border border-blue-200/80 shadow-2xs transition-all active:scale-95"
          title="Share Hub"
        >
          <Share2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Share</span>
        </button>
      </div>

      {/* IEI Organization Logo Container */}
      <div className="relative mb-3.5 group">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-2.5 shadow-md shadow-slate-200/90 border-2 border-blue-600/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-blue-500/40">
          <img
            src={logoImg || chapterInfo.logo}
            alt="Institution of Engineers (India) Logo"
            className="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-300"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/logo.png';
            }}
          />
        </div>
        <div className="absolute -bottom-1.5 -right-1.5 bg-blue-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider shadow-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>IT DEPT</span>
        </div>
      </div>

      {/* Titles and Affiliation */}
      <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-navy leading-snug">
        {chapterInfo.title}
      </h1>
      <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
        {chapterInfo.department}
      </p>

      {/* College Name Tag */}
      <div className="mt-2">
        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-100 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
          <span>{chapterInfo.institution}</span>
        </span>
      </div>

      {/* Chapter Motto */}
      <p className="text-xs italic text-slate-500 mt-2 px-3 leading-relaxed max-w-[380px]">
        {chapterInfo.motto}
      </p>
    </header>
  );
}
