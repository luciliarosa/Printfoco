import React from 'react';
import { Link } from 'react-router-dom';
import { privacyPolicyData, siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">{t.privacyPage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.privacyPage.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.privacyPage.title}
          </h1>
          <p className="text-xs text-[#9f825b] font-semibold">
            {t.privacyPage.updated}
          </p>
        </div>

        {/* Introduction */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-xs mb-6 sm:mb-8 text-xs sm:text-sm text-[#444444] leading-relaxed">
          <p>{privacyPolicyData.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {privacyPolicyData.sections.map((sec, i) => (
            <div
              key={i}
              className="p-5 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-xs space-y-2.5 sm:space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#1c1b1a]">
                {sec.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Direct contact note */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] text-center space-y-3 sm:space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.privacyPage.contactTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            {t.privacyPage.contactSubtitle}
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors shadow-xs text-center"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
