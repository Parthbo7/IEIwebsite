import React, { useState } from 'react';
import { Share2, UserPlus, ExternalLink } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import LinkItem from './components/LinkItem';
import LeadershipSection from './components/LeadershipSection';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import { mainLinks } from './data/linksData';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-slate-800 font-sans flex flex-col items-center justify-start relative overflow-x-hidden selection:bg-blue-100 selection:text-brand-navy py-3 sm:py-8 px-2 sm:px-4">
      {/* Ambient background glows for desktop fidelity */}
      <div className="fixed -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-blue-200/40 via-blue-100/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>
      <div className="fixed top-96 -left-20 w-72 h-72 bg-indigo-100/40 blur-3xl pointer-events-none rounded-full"></div>
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-blue-100/50 blur-3xl pointer-events-none rounded-full"></div>

      {/* Centered Mobile Card: Looks identical on mobile and desktop */}
      <main className="w-full max-w-[440px] flex flex-col items-center relative z-10 sm:bg-white/70 sm:backdrop-blur-md sm:rounded-[36px] sm:shadow-xl sm:shadow-slate-300/40 sm:border sm:border-slate-200/80 sm:p-5 transition-all">
        {/* Profile Identity & Header with Share Button */}
        <ProfileHeader onShare={() => setIsShareOpen(true)} />

        {/* Main Links List */}
        <section className="w-full flex flex-col gap-2.5 px-1 mt-2" aria-label="Social and Chapter Links">
          {mainLinks.map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </section>

        {/* Chapter Leadership Section */}
        <LeadershipSection />

        {/* Membership Call to Action Card */}
        <section className="w-full mt-5 px-1">
          <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-2.5">
              <UserPlus className="w-5 h-5" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-brand-navy">
              Interested in Joining IEI?
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
              Become a recognized student member to access national technical symposiums, research paper grants, and leadership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full mt-3.5">
              <a
                href={mainLinks.find((l) => l.id === 'whatsapp')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Apply via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsShareOpen(true)}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Hub</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Share Modal Dialog */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
