import React from 'react';
import { Link } from 'react-router-dom';
import { privacyPolicyData, siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">{t.privacyPage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.privacyPage.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury text-[#191919]">
            {t.privacyPage.title}
          </h1>
          <p className="text-xs text-[#8c7c60] font-semibold">
            {t.privacyPage.updated}
          </p>
        </div>

        {/* Introduction */}
        <div className="p-8 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-sm mb-10 text-sm text-[#444444] leading-relaxed">
          <p>{privacyPolicyData.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {privacyPolicyData.sections.map((sec, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-sm space-y-3"
            >
              <h2 className="text-xl font-bold font-serif-luxury text-[#191919]">
                {sec.title}
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Direct contact note */}
        <div className="p-8 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] text-center space-y-4">
          <h3 className="text-xl font-bold font-serif-luxury text-[#191919]">
            {t.privacyPage.contactTitle}
          </h3>
          <p className="text-xs text-[#555555]">
            {t.privacyPage.contactSubtitle}
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{t.privacyPage.btnContactDPO}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
