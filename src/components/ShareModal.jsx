import React, { useState } from 'react';
import { Share2, Check, Copy, X } from 'lucide-react';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://iei-it-mgm.web.app';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'IEI Student Chapter - Department of IT | MGM CoE Nanded',
          text: 'Official Linktree & Resource Hub of IEI IT Student Chapter',
          url: currentUrl,
        });
      } catch (err) {
        // User cancelled or ignored
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 relative">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Share Chapter Hub</h3>
            <p className="text-xs text-slate-500">Share with classmates & colleagues</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-200/80">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent px-2 text-xs text-slate-600 font-mono focus:outline-hidden select-all"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Open System Share Menu</span>
          </button>
        )}
      </div>
    </div>
  );
}

