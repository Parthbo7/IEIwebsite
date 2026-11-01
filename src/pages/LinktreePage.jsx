import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import LinkItem from '../components/LinkItem';
import Footer from '../components/Footer';
import ShareModal from '../components/ShareModal';
import { mainLinks } from '../data/linksData';

export default function LinktreePage() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start py-4 sm:py-8 px-2 sm:px-4 bg-gradient-to-b from-[#FAF8FF] via-[#F2F3FF] to-[#FAF8FF]">
      {/* Centered Mobile Card Experience */}
      <div className="w-full max-w-[440px] flex flex-col items-center sm:bg-white/70 sm:backdrop-blur-md sm:rounded-[36px] sm:shadow-xl sm:shadow-slate-300/40 sm:border sm:border-slate-200/80 sm:p-5 transition-all">
        {/* Profile Header & Top Share Trigger */}
        <ProfileHeader onShare={() => setIsShareOpen(true)} />

        {/* Social & Community Links List */}
        <section className="w-full flex flex-col gap-2.5 px-1 mt-2" aria-label="Social and Chapter Links">
          {mainLinks.map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Share Modal Dialog */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}

