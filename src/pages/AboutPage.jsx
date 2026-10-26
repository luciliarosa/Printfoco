import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Heart, ArrowRight, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#191919]">{t.nav.about}</span>
          <span>/</span>
          <span className="text-[#191919] font-bold">{t.about.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Heart className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.about.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            {t.about.title}
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-5">
            <div className="p-3 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#f4f1e8]">
                <img
                  src="/images/302c8216246d3ac6ca7c809f3d31ad1a.jpg"
                  alt="Lucilia Rosa - Fundadora da Printfoco"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-serif-luxury">Lucilia Rosa</h3>
                  <p className="text-xs text-[#d9d6c1]">Fundadora & Diretora de Criação</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-sm space-y-4">
              <h2 className="text-2xl font-bold font-serif-luxury text-[#191919]">
                {t.about.boxTitle}
              </h2>
              <p className="text-base text-[#444444] leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-base text-[#444444] leading-relaxed">
                {t.about.p2}
              </p>
              <div className="pt-4 border-t border-[#d9d6c1]">
                <blockquote className="italic text-[#8c7c60] font-serif-luxury text-base">
                  "{t.about.quote}"
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/missao-visao-valores"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] transition-colors"
              >
                <span>{t.about.btnValues}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white transition-colors"
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
