import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#ffffff] text-[#191919] text-xs px-4 py-2.5 rounded-2xl border-2 border-[#d9d6c1] shadow-xl animate-bounce">
          <span className="font-medium">Olá! Posso te ajudar com um orçamento?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8c7c60] hover:text-[#191919] ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
