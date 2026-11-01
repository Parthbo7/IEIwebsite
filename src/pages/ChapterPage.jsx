import React from 'react';
import { Award, ArrowLeft, Bell, Construction } from 'lucide-react';

export default function ChapterPage({ onNavigate }) {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-gradient-to-b from-[#FAF8FF] via-[#F2F3FF] to-[#FAF8FF]">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center animate-institutional-fade-up">
        {/* Subtle Icon Badge */}
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-3xl bg-white border-2 border-amber-200/80 shadow-md flex items-center justify-center text-amber-600">
            <Award className="w-10 h-10 animate-pulse-subtle" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
            <Construction className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Construction Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200 shadow-2xs">
          <Construction className="w-3.5 h-3.5 text-amber-600" />
          <span>Site is Under Construction</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#002548] tracking-tight">
          IEI Student Chapter 2026–2027
        </h1>
        <p className="text-sm font-semibold text-[#123b66] mt-1">
          Department of Information Technology • MGM's College of Engineering, Nanded
        </p>

        {/* Coming Soon Notice Card */}
        <div className="w-full mt-6 p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
            <Bell className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-[#002548]">
            Events & Activities Schedule
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mt-1">
            The technical event calendar, workshop dates, hackathons, and symposiums for the 2026–2027 session will be announced here once scheduled by the chapter executive committee.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200/70">
            <Construction className="w-3.5 h-3.5 text-amber-600" />
            <span>Site is Under Construction • Coming Soon</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#002548] border border-slate-200 shadow-2xs hover:bg-slate-50 text-xs font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('linktree')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0051d5] text-white shadow-xs hover:bg-[#123b66] text-xs font-semibold transition-all"
          >
            <span>Community Links</span>
          </button>
        </div>
      </div>
    </div>
  );
}
