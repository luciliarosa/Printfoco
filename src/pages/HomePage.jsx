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
    <div className="bg-[#f4f1e8] text-[#191919]">
      
      {/* 1. Hero Executivo & Clean */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f4f1e8] via-[#ffffff] to-[#f4f1e8] border-b border-[#d9d6c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
              <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#191919] leading-[1.15]">
              {t.hero.titleStart} <br className="hidden sm:inline" />
              {t.hero.titleMiddle} <br className="hidden sm:inline" />
              <span className="font-serif-luxury italic font-normal text-[#ab9a7d]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtítulo Objetivo */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Ações Primárias */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/convites/interativo"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-[#f4f1e8] hover:bg-[#ab9a7d] hover:text-white transition-all shadow-sm"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/convites"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-[#191919] text-[#191919] bg-[#ffffff] hover:bg-[#191919] hover:text-white transition-all"
              >
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Indicadores de Qualidade */}
            <div className="pt-8 border-t border-[#d9d6c1] grid grid-cols-3 gap-6 max-w-xl text-left">
              <div>
                <span className="block text-2xl font-bold font-serif-luxury text-[#191919]">{t.hero.stat1Number}</span>
                <span className="text-[11px] text-[#666666] uppercase font-semibold tracking-wider">{t.hero.stat1Label}</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif-luxury text-[#191919]">{t.hero.stat2Number}</span>
                <span className="text-[11px] text-[#666666] uppercase font-semibold tracking-wider">{t.hero.stat2Label}</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-serif-luxury text-[#191919]">{t.hero.stat3Number}</span>
                <span className="text-[11px] text-[#666666] uppercase font-semibold tracking-wider">{t.hero.stat3Label}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Os Três Serviços Principais */}
      <section className="py-20 bg-[#ffffff] border-b border-[#d9d6c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c7c60] block mb-1">
                {t.nav.allFormats}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#191919]">
                {t.home.servicesTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] max-w-md">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Convites Virtuais */}
            <div className="p-8 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all flex flex-col justify-between shadow-sm group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffffff] border border-[#ab9a7d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-[#ab9a7d]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7c60] block mb-1">
                  {t.services.invitesTag}
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3">
                  {t.services.invitesTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-6 font-normal">
                  {t.services.invitesDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d9d6c1]">
                <Link
                  to="/convites"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#ab9a7d] transition-colors"
                >
                  <span>{t.services.invitesLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2. Retrospectivas */}
            <div className="p-8 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all flex flex-col justify-between shadow-sm group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffffff] border border-[#ab9a7d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Film className="w-6 h-6 text-[#ab9a7d]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7c60] block mb-1">
                  {t.services.retroTag}
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3">
                  {t.services.retroTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-6 font-normal">
                  {t.services.retroDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d9d6c1]">
                <Link
                  to="/retrospectivas"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#ab9a7d] transition-colors"
                >
                  <span>{t.services.retroLink}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3. Redes Sociais */}
            <div className="p-8 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all flex flex-col justify-between shadow-sm group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ffffff] border border-[#ab9a7d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-[#ab9a7d]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c7c60] block mb-1">
                  {t.services.socialTag}
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3">
                  {t.services.socialTitle}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-6 font-normal">
                  {t.services.socialDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d9d6c1]">
                <Link
                  to="/posts-redes-sociais"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191919] group-hover:text-[#ab9a7d] transition-colors"
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
      <section className="py-20 bg-[#f4f1e8] border-b border-[#d9d6c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] shadow-md">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] text-xs font-bold uppercase tracking-wider text-[#8c7c60]">
                  <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  <span>{t.home.interactiveHighlightBadge}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#191919]">
                  {t.home.interactiveHighlightTitle}
                </h2>

                <p className="text-sm text-[#555555] leading-relaxed font-normal">
                  {t.home.interactiveHighlightDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#191919] font-medium bg-[#f4f1e8] p-3 rounded-xl border border-[#d9d6c1]">
                    <CheckCircle2 className="w-4 h-4 text-[#8c7c60] shrink-0" />
                    <span>{t.home.featRSVP}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#191919] font-medium bg-[#f4f1e8] p-3 rounded-xl border border-[#d9d6c1]">
                    <MapPin className="w-4 h-4 text-[#8c7c60] shrink-0" />
                    <span>{t.home.featGPS}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#191919] font-medium bg-[#f4f1e8] p-3 rounded-xl border border-[#d9d6c1]">
                    <Clock className="w-4 h-4 text-[#8c7c60] shrink-0" />
                    <span>{t.home.featCountdown}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#191919] font-medium bg-[#f4f1e8] p-3 rounded-xl border border-[#d9d6c1]">
                    <ShieldCheck className="w-4 h-4 text-[#8c7c60] shrink-0" />
                    <span>{t.home.featPix}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                  <Link
                    to="/convites/interativo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] transition-colors shadow-sm"
                  >
                    <span>{t.home.interactiveBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="/projects/convites-virtuais/interativos/tema-natal/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white transition-colors"
                  >
                    <span>{t.home.demoBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="p-4 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] shadow-inner max-w-xs w-full text-center space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ffffff] border border-[#d9d6c1]">
                    <img
                      src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                      alt="Interface do Convite Interativo Printfoco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left space-y-1 px-1">
                    <span className="text-[10px] uppercase font-bold text-[#8c7c60] tracking-wider block">Web Mobile</span>
                    <h4 className="text-sm font-bold text-[#191919] font-serif-luxury">Interface fluida para smartphones</h4>
                    <p className="text-[11px] text-[#666666]">100% responsivo para iPhone e Android.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Breve Visão Institucional */}
      <section className="py-20 bg-[#ffffff] border-b border-[#d9d6c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                Printfoco • {siteConfig.name}
              </span>
              <h2 className="text-3xl font-bold font-serif-luxury text-[#191919]">
                {t.home.institutionalTitle}
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                {t.home.institutionalDesc}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/sobre"
                  className="text-xs font-bold uppercase tracking-wider text-[#191919] hover:text-[#ab9a7d] inline-flex items-center gap-1.5"
                >
                  <span>{t.nav.ourHistory}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[#d9d6c1]">•</span>
                <Link
                  to="/missao-visao-valores"
                  className="text-xs font-bold uppercase tracking-wider text-[#191919] hover:text-[#ab9a7d] inline-flex items-center gap-1.5"
                >
                  <span>{t.nav.missionVisionValues}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-sm font-bold text-[#191919] font-serif-luxury mb-1">Rigor Estético</span>
                <p className="text-xs text-[#555555]">Harmonia visual e legibilidade de alto padrão.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-sm font-bold text-[#191919] font-serif-luxury mb-1">Prazos Firmes</span>
                <p className="text-xs text-[#555555]">Cronogramas cumpridos com responsabilidade.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-sm font-bold text-[#191919] font-serif-luxury mb-1">Privacidade LGPD</span>
                <p className="text-xs text-[#555555]">Tratamento estritamente confidencial.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-sm font-bold text-[#191919] font-serif-luxury mb-1">Atendimento Direto</span>
                <p className="text-xs text-[#555555]">Comunicação ágil e sem intermediários.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Final Limpo */}
      <section className="py-20 bg-[#f4f1e8] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#191919]">
            {t.home.ctaTitle}
          </h2>
          <p className="text-sm text-[#555555] max-w-xl mx-auto">
            {t.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.home.ctaWhatsAppBtn}</span>
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-[#191919] text-[#191919] bg-[#ffffff] hover:bg-[#191919] hover:text-white transition-all"
            >
              <span>{t.home.ctaFormBtn}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
