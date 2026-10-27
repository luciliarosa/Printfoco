import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-full bg-[#faf8f5] border border-[#ebe6dc] p-0.5 sm:p-1 text-[11px] sm:text-xs font-bold ${className}`}>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-label="Mudar para Português"
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === 'pt'
            ? 'bg-[#1c1b1a] text-white shadow-xs'
            : 'text-[#666666] hover:text-[#1c1b1a]'
        }`}
      >
        <span>PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="Switch to English"
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === 'en'
            ? 'bg-[#1c1b1a] text-white shadow-xs'
            : 'text-[#666666] hover:text-[#1c1b1a]'
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
}
