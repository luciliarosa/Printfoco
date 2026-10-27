import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveInviteSection from '../components/InteractiveInviteSection';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

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
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">{t.nav.home}</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#1c1b1a]">{t.nav.invites}</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">{t.interactivePage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.interactivePage.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.interactivePage.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            {t.interactivePage.subtitle}
          </p>
        </div>

        {/* Interactive Simulator Section */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-md overflow-hidden mb-10 sm:mb-16">
          <InteractiveInviteSection />
        </div>

        {/* Como Funciona o Passo a Passo */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-sm mb-10 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1">
              Metodologia
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
              {t.interactivePage.stepsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1 sm:mt-2">
              {t.interactivePage.stepsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((st) => (
              <div key={st.step} className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] relative">
                <span className="block text-2xl sm:text-3xl font-bold font-serif-luxury text-[#c5a880] mb-2">{st.step}</span>
                <h3 className="font-bold text-sm sm:text-base text-[#1c1b1a] mb-1.5 font-serif-luxury">{st.title}</h3>
                <p className="text-xs text-[#555555] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-1">
              {t.interactivePage.demoCtaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555]">
              {t.interactivePage.demoCtaSubtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="/projects/convites-virtuais/interativos/tema-natal/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1c1b1a] text-[#1c1b1a] hover:bg-[#1c1b1a] hover:text-white transition-colors text-center"
            >
              <span>{t.interactivePage.btnLiveDemo}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappInviteMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors shadow-sm text-center"
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
