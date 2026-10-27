import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, Smartphone, Film, Share2, ArrowRight, 
  CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, MapPin, Clock 
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#faf8f5] text-[#1c1b1a]">
      
      {/* 1. Hero Executivo & Clean */}
      <section className="relative pt-24 pb-14 sm:pt-28 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#ffffff] to-[#faf8f5] border-b border-[#ebe6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1c1b1a] leading-[1.15]">
              {t.hero.titleStart} <br className="hidden sm:inline" />
              {t.hero.titleMiddle} <br className="hidden sm:inline" />
              <span className="font-serif-luxury italic font-normal text-[#c5a880]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtítulo Objetivo */}
            <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Ações Primárias */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/convites/interativo"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-sm text-center"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/convites"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1c1b1a] text-[#1c1b1a] bg-[#ffffff] hover:bg-[#1c1b1a] hover:text-white transition-all text-center"
              >
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Indicadores de Qualidade */}
            <div className="pt-6 sm:pt-8 border-t border-[#ebe6dc] grid grid-cols-3 gap-2 sm:gap-6 max-w-xl text-left">
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">{t.hero.stat1Number}</span>
                <span className="text-[9.5px] sm:text-[11px] text-[#666666] uppercase font-semibold tracking-wider block">{t.hero.stat1Label}</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">{t.hero.stat2Number}</span>
                <span className="text-[9.5px] sm:text-[11px] text-[#666666] uppercase font-semibold tracking-wider block">{t.hero.stat2Label}</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">{t.hero.stat3Number}</span>
                <span className="text-[9.5px] sm:text-[11px] text-[#666666] uppercase font-semibold tracking-wider block">{t.hero.stat3Label}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Os Três Serviços Principais */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#ffffff] border-b border-[#ebe6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#9f825b] block mb-1">
                {t.nav.allFormats}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-luxury text-[#1c1b1a]">
                {t.home.servicesTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] max-w-md">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Convites Virtuais */}
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] hover:border-[#c5a880] transition-all flex flex-col justify-between shadow-xs group">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a880]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f825b] block mb-1">
                  {t.services.invitesTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3">
                  {t.services.invitesTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 sm:mb-6 font-normal">
                  {t.services.invitesDesc}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <Link
                  to="/convites"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c1b1a] group-hover:text-[#c5a880] transition-colors"
                >
                  <span>{t.services.invitesLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2. Retrospectivas */}
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] hover:border-[#c5a880] transition-all flex flex-col justify-between shadow-xs group">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a880]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f825b] block mb-1">
                  {t.services.retroTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3">
                  {t.services.retroTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 sm:mb-6 font-normal">
                  {t.services.retroDesc}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <Link
                  to="/retrospectivas"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c1b1a] group-hover:text-[#c5a880] transition-colors"
                >
                  <span>{t.services.retroLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3. Redes Sociais */}
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] hover:border-[#c5a880] transition-all flex flex-col justify-between shadow-xs group">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a880]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f825b] block mb-1">
                  {t.services.socialTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3">
                  {t.services.socialTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 sm:mb-6 font-normal">
                  {t.services.socialDesc}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <Link
                  to="/posts-redes-sociais"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c1b1a] group-hover:text-[#c5a880] transition-colors"
                >
                  <span>{t.services.socialLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Destaque Tecnológico: Convite Interativo (Limpo & Executivo) */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#faf8f5] border-b border-[#ebe6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf8f5] border border-[#ebe6dc] text-xs font-bold uppercase tracking-wider text-[#9f825b]">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{t.home.interactiveHighlightBadge}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-luxury text-[#1c1b1a]">
                  {t.home.interactiveHighlightTitle}
                </h2>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                  {t.home.interactiveHighlightDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#1c1b1a] font-medium bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-[#ebe6dc]">
                    <CheckCircle2 className="w-4 h-4 text-[#9f825b] shrink-0" />
                    <span>{t.home.featRSVP}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1c1b1a] font-medium bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-[#ebe6dc]">
                    <MapPin className="w-4 h-4 text-[#9f825b] shrink-0" />
                    <span>{t.home.featGPS}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1c1b1a] font-medium bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-[#ebe6dc]">
                    <Clock className="w-4 h-4 text-[#9f825b] shrink-0" />
                    <span>{t.home.featCountdown}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1c1b1a] font-medium bg-[#faf8f5] p-2.5 sm:p-3 rounded-xl border border-[#ebe6dc]">
                    <ShieldCheck className="w-4 h-4 text-[#9f825b] shrink-0" />
                    <span>{t.home.featPix}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/convites/interativo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors shadow-xs text-center"
                  >
                    <span>{t.home.interactiveBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="/projects/convites-virtuais/interativos/tema-natal/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1c1b1a] text-[#1c1b1a] hover:bg-[#1c1b1a] hover:text-white transition-colors text-center"
                  >
                    <span>{t.home.demoBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#c5a880]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="p-3.5 sm:p-4 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] max-w-xs w-full text-center space-y-2.5 sm:space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ffffff] border border-[#ebe6dc]">
                    <img
                      src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                      alt="Interface do Convite Interativo Printfoco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left space-y-1 px-1">
                    <span className="text-[9.5px] uppercase font-bold text-[#9f825b] tracking-wider block">Web Mobile</span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1c1b1a] font-serif-luxury">Interface fluida para smartphones</h4>
                    <p className="text-[11px] text-[#666666]">100% responsivo para iPhone e Android.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Breve Visão Institucional */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#ffffff] border-b border-[#ebe6dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            
            <div className="space-y-3.5 sm:space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                Printfoco • {siteConfig.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
                {t.home.institutionalTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {t.home.institutionalDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  to="/sobre"
                  className="text-xs font-bold uppercase tracking-wider text-[#1c1b1a] hover:text-[#c5a880] inline-flex items-center gap-1.5"
                >
                  <span>{t.nav.ourHistory}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[#ebe6dc]">•</span>
                <Link
                  to="/missao-visao-valores"
                  className="text-xs font-bold uppercase tracking-wider text-[#1c1b1a] hover:text-[#c5a880] inline-flex items-center gap-1.5"
                >
                  <span>{t.nav.missionVisionValues}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-serif-luxury mb-1">Rigor Estético</span>
                <p className="text-[11px] text-[#555555]">Harmonia visual e legibilidade de alto padrão.</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-serif-luxury mb-1">Prazos Firmes</span>
                <p className="text-[11px] text-[#555555]">Cronogramas cumpridos com responsabilidade.</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-serif-luxury mb-1">Privacidade LGPD</span>
                <p className="text-[11px] text-[#555555]">Tratamento estritamente confidencial.</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-serif-luxury mb-1">Atendimento Direto</span>
                <p className="text-[11px] text-[#555555]">Comunicação ágil e sem intermediários.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Final Limpo */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#faf8f5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.home.ctaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.home.ctaWhatsAppBtn}</span>
            </a>
            <Link
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1c1b1a] text-[#1c1b1a] bg-[#ffffff] hover:bg-[#1c1b1a] hover:text-white transition-all text-center"
            >
              <span>{t.home.ctaFormBtn}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
