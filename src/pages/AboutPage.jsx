import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Heart, ArrowRight, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#1c1b1a]">{t.nav.about}</span>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">{t.about.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Heart className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.about.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.about.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-2.5 sm:p-3 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-md max-w-xs sm:max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#faf8f5]">
                <img
                  src="/images/302c8216246d3ac6ca7c809f3d31ad1a.jpg"
                  alt="Lucilia Rosa - Fundadora da Printfoco"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold font-serif-luxury">Lucilia Rosa</h3>
                  <p className="text-[11px] sm:text-xs text-[#ebe6dc]">Fundadora & Diretora de Criação</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-xs space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
                {t.about.boxTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed">
                {t.about.p2}
              </p>
              <div className="pt-3 sm:pt-4 border-t border-[#ebe6dc]">
                <blockquote className="italic text-[#9f825b] font-serif-luxury text-sm sm:text-base">
                  "{t.about.quote}"
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/missao-visao-valores"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors text-center"
              >
                <span>{t.about.btnValues}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#1c1b1a] text-[#1c1b1a] hover:bg-[#1c1b1a] hover:text-white transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.about.btnWhatsApp}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
