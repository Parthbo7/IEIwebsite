import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ChapterPage from './pages/ChapterPage';
import LinktreePage from './pages/LinktreePage';

const validRoutes = ['home', 'about', 'chapter', 'linktree'];

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return validRoutes.includes(hash) ? hash : 'home';
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem('iei_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('iei_sidebar_collapsed', String(next));
      } catch {}
      return next;
    });
  };

  // Sync hash with route state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route) => {
    if (validRoutes.includes(route)) {
      setCurrentRoute(route);
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-[#002548]">
      {/* Sidebar (Fixed on Desktop, Slide-in Drawer on Mobile, Collapsible) */}
      <Sidebar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />

      {/* Main Content Area (Offset by 260px on Desktop when expanded, 0px when collapsed) */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'lg:pl-0' : 'lg:pl-[260px]'
        }`}
      >
        {/* Top Header Navbar */}
        <Navbar
          currentRoute={currentRoute}
          onOpenMobile={() => setIsMobileOpen(true)}
          onNavigate={handleNavigate}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={handleToggleSidebar}
        />

        {/* Page Views with Smooth Viewport Transition */}
        <main className="flex-1 pt-16 lg:pt-0 w-full">
          {currentRoute === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentRoute === 'about' && <AboutUsPage onNavigate={handleNavigate} />}
          {currentRoute === 'chapter' && <ChapterPage onNavigate={handleNavigate} />}
          {currentRoute === 'linktree' && <LinktreePage />}
        </main>
      </div>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
