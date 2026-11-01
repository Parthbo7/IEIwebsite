import React from 'react';
import { Menu, Construction, CheckCircle2, PanelLeft, PanelLeftClose } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { chapterInfo } from '../data/linksData';

export default function Navbar({
  currentRoute,
  onOpenMobile,
  onNavigate,
  isSidebarCollapsed,
  onToggleSidebar,
}) {
  const isUnderConstruction = currentRoute === 'about' || currentRoute === 'chapter';

  return (
    <>
      {/* Mobile Top Header (fixed) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-2xs z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenMobile}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logoImg || chapterInfo.logo}
              alt="IEI Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo.png';
              }}
            />
            <span className="font-bold text-sm text-[#002548] tracking-tight">
              IEI Student Chapter
            </span>
          </div>
        </div>

        {isUnderConstruction ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold border border-amber-200 shadow-2xs">
            <Construction className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span>Site is Under Construction</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] font-semibold border border-blue-100 shadow-2xs">
            <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0" />
            <span>Official Portal</span>
          </div>
        )}
      </header>

      {/* Desktop Top Header (sticky within the main content area) */}
      <header className="hidden lg:flex sticky top-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 z-30 items-center justify-between px-6 lg:px-8 transition-all duration-300">
        <div className="flex items-center gap-3">
          {/* Toggle / Collapse Sidebar Navigation Button */}
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-slate-700 hover:text-[#0051d5] hover:bg-blue-50/80 active:bg-blue-100 transition-all border border-slate-200/80 shadow-2xs group"
            title={isSidebarCollapsed ? "Show Navigation Bar" : "Hide / Collapse Navigation Bar"}
            aria-label={isSidebarCollapsed ? "Show Navigation Bar" : "Hide / Collapse Navigation Bar"}
          >
            {isSidebarCollapsed ? (
              <>
                <PanelLeft className="w-4 h-4 text-[#0051d5]" />
                <span className="text-xs font-semibold text-[#002548]">Show Menu</span>
              </>
            ) : (
              <>
                <PanelLeftClose className="w-4 h-4 text-slate-600 group-hover:text-[#0051d5]" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-[#0051d5] hidden xl:inline">Collapse</span>
              </>
            )}
          </button>

          <img
            src={logoImg || chapterInfo.logo}
            alt="IEI Logo"
            className="h-8 w-auto object-contain cursor-pointer"
            onClick={() => onNavigate('home')}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/logo.png';
            }}
          />
          <span className="font-bold text-sm text-[#002548] tracking-tight">
            MGM's College of Engineering • Department of Information Technology
          </span>
        </div>

        <div className="flex items-center gap-3">
          {isUnderConstruction ? (
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/90 shadow-2xs px-3.5 py-1 rounded-full text-xs font-semibold text-amber-800">
              <Construction className="w-3.5 h-3.5 text-amber-600" />
              <span>Site is Under Construction</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 bg-blue-50/80 border border-blue-100 shadow-2xs px-3.5 py-1 rounded-full text-xs font-semibold text-blue-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Chapter Portal • 2026–2027</span>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
