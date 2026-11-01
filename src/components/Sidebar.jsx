import React from 'react';
import { Home, Info, Award, Share2, X, PanelLeftClose } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { chapterInfo } from '../data/linksData';

export const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Us', icon: Info },
  { id: 'chapter', label: 'IEI Chapter 2026–2027', icon: Award },
  { id: 'linktree', label: 'Linktree', icon: Share2 },
];

export default function Sidebar({
  currentRoute,
  onNavigate,
  isMobileOpen,
  onCloseMobile,
  isCollapsed,
  onToggleCollapse,
}) {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-[#002548]/50 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[260px] bg-[#002548] text-white z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none ${
          isMobileOpen
            ? 'translate-x-0'
            : isCollapsed
            ? '-translate-x-full lg:-translate-x-full'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header & Navigation Links */}
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="p-5 flex flex-col items-start gap-1 bg-[#123b66]/40 border-b border-white/5">
            <div className="flex items-center justify-between w-full mb-1">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 shadow-sm flex items-center justify-center">
                <img
                  src={logoImg || chapterInfo.logo}
                  alt="IEI Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logo.png';
                  }}
                />
              </div>

              {/* Desktop Collapse / Hide Button */}
              <button
                type="button"
                onClick={onToggleCollapse}
                className="hidden lg:flex text-[#83a6d7] hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                title="Collapse Navigation Bar"
                aria-label="Collapse Navigation Bar"
              >
                <PanelLeftClose className="w-5 h-5" />
              </button>

              {/* Mobile Close Button */}
              <button
                type="button"
                onClick={onCloseMobile}
                className="lg:hidden text-[#83a6d7] hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="font-bold text-base text-white tracking-tight">
              IEI Student Chapter
            </div>
            <div className="text-[11px] font-semibold text-[#83a6d7] uppercase tracking-wider">
              Department of IT
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-1.5 p-3.5 mt-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile();
                  }}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200 text-left w-full ${
                    isActive
                      ? 'bg-[#0051d5] text-white font-bold shadow-md shadow-blue-900/30'
                      : 'text-[#d3e3ff] hover:bg-[#123b66] hover:text-white font-medium'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info in sidebar */}
        <div className="p-3.5 bg-[#001726]/70 m-3 rounded-2xl flex flex-col gap-0.5 text-center border border-white/5">
          <div className="text-xs font-semibold text-white">
            MGM's College of Engg.
          </div>
          <div className="text-[11px] text-[#a6c9fc]/80">
            Nanded, Maharashtra
          </div>
          <div className="text-[10px] text-slate-400 pt-1 border-t border-white/10 mt-1">
            © 2026–2027 IEI Student Chapter
          </div>
        </div>
      </aside>
    </>
  );
}

