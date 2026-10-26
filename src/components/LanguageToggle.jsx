import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-full bg-[#f4f1e8] border border-[#d9d6c1] p-1 text-xs font-bold ${className}`}>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-label="Mudar para Português"
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === 'pt'
            ? 'bg-[#191919] text-white shadow-sm'
            : 'text-[#666666] hover:text-[#191919]'
        }`}
      >
        <span>PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="Switch to English"
        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
          lang === 'en'
            ? 'bg-[#191919] text-white shadow-sm'
            : 'text-[#666666] hover:text-[#191919]'
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
}
