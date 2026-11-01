import React, { useState } from 'react';
import { Users, Phone, Mail, Check, Copy } from 'lucide-react';
import { chapterInfo } from '../data/linksData';

export default function LeadershipSection() {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { leadership } = chapterInfo;

  const handleCopyMail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(leadership.email);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(leadership.president.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="w-full mt-5 px-1" aria-labelledby="leadership-title">
      <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-4 sm:p-5 border border-blue-100 shadow-sm shadow-blue-900/5">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2 id="leadership-title" className="text-xs sm:text-sm font-bold text-brand-navy">
                Chapter Leadership Desk
              </h2>
              <p className="text-[10px] text-slate-500 font-normal">
                Academic Session 2025–2026
              </p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            Official
          </span>
        </div>

        {/* Stacked Leadership Cards */}
        <div className="flex flex-col gap-2.5 mt-3">
          {/* Faculty Coordinator Card */}
          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-200 transition-all flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              {leadership.facultyCoordinator.initials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded w-fit">
                Faculty Coordinator
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">
                {leadership.facultyCoordinator.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-normal truncate">
                {leadership.facultyCoordinator.department}
              </p>
            </div>
          </div>

          {/* Student Chapter President Card */}
          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-200 transition-all flex items-start gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#123B66] text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform mt-0.5">
              {leadership.president.initials}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded w-fit">
                  Chapter President
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">
                {leadership.president.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-normal">
                {leadership.president.role}
              </p>
              
              {/* Contact Pill with Call & Copy */}
              <div className="flex items-center gap-2 mt-2">
                <a
                  href={`tel:${leadership.president.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs hover:border-blue-300 transition-all"
                  title="Call President"
                >
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span>{leadership.president.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                  title={copiedPhone ? "Copied!" : "Copy Number"}
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Official Email Banner */}
        <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Official Contact Email
              </p>
              <a
                href={`mailto:${leadership.email}`}
                className="text-xs font-bold text-blue-700 hover:underline truncate block"
              >
                {leadership.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyMail}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:border-blue-300 shadow-2xs hover:text-blue-700 transition-all flex-shrink-0"
          >
            {copiedMail ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
