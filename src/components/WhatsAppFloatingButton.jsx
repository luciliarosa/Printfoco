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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble (oculto no mobile muito pequeno para não cobrir a tela) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#ffffff] text-[#1c1b1a] text-xs px-3.5 py-2 rounded-2xl border border-[#ebe6dc] shadow-xl animate-bounce">
          <span className="font-medium">Olá! Posso te ajudar com um orçamento?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9f825b] hover:text-[#1c1b1a] ml-1 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botão Flutuante Pulsante com toque confortável */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
      </a>
    </div>
  );
}
