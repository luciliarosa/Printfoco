import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveInviteSection from '../components/InteractiveInviteSection';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function InteractiveInvitePage() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t.interactivePage.step1Title,
      desc: t.interactivePage.step1Desc
    },
    {
      step: "02",
      title: t.interactivePage.step2Title,
      desc: t.interactivePage.step2Desc
    },
    {
      step: "03",
      title: t.interactivePage.step3Title,
      desc: t.interactivePage.step3Desc
    },
    {
      step: "04",
      title: t.interactivePage.step4Title,
      desc: t.interactivePage.step4Desc
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">{t.nav.home}</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#191919]">{t.nav.invites}</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">{t.interactivePage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.interactivePage.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            {t.interactivePage.title}
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            {t.interactivePage.subtitle}
          </p>
        </div>

        {/* Interactive Simulator Section */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-xl overflow-hidden mb-16">
          <InteractiveInviteSection />
        </div>

        {/* Como Funciona o Passo a Passo */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-md mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-1">
              Metodologia
            </span>
            <h2 className="text-3xl font-bold font-serif-luxury text-[#191919]">
              {t.interactivePage.stepsTitle}
            </h2>
            <p className="text-sm text-[#555555] mt-2">
              {t.interactivePage.stepsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.step} className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] relative">
                <span className="block text-3xl font-bold font-serif-luxury text-[#ab9a7d] mb-2">{st.step}</span>
                <h3 className="font-bold text-base text-[#191919] mb-2 font-serif-luxury">{st.title}</h3>
                <p className="text-xs text-[#555555] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-1">
              {t.interactivePage.demoCtaTitle}
            </h3>
            <p className="text-sm text-[#555555]">
              {t.interactivePage.demoCtaSubtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/projects/convites-virtuais/interativos/tema-natal/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white transition-colors"
            >
              <span>{t.interactivePage.btnLiveDemo}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappInviteMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.interactivePage.btnOrder}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
