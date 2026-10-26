import React from 'react';
import { socialMediaBenefits, socialMediaFormats, siteConfig } from '../data/content';
import { 
  Share2, TrendingUp, Users, Eye, ArrowUpRight, 
  Palette, Sparkles, MessageCircle, Image, Video, Layers, Check 
} from 'lucide-react';

export default function SocialMedia() {
  const benefitIcons = [TrendingUp, Users, Eye, ArrowUpRight, Palette];
  const formatIcons = [Image, Video, Layers, Palette];

  return (
    <section id="posts-redes" className="py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#d9d6c1]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#f4f1e8] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#f4f1e8] text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7c60]">
            <Share2 className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Publicações & Design</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
            Posts para <span className="text-[#ab9a7d] italic font-normal underline decoration-[#d9d6c1] underline-offset-4">Redes Sociais</span>
          </h2>

          <p className="text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
            Impulsione sua presença online com posts criativos e estratégicos (imagens, vídeos curtos, carrosséis e reels), projetados para aumentar o engajamento e a visibilidade da sua marca.
          </p>
        </div>

        {/* 4 Formatos de Criação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialMediaFormats.map((item, i) => {
            const Icon = formatIcons[i % formatIcons.length];
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] p-6 hover:border-[#ab9a7d] hover:bg-[#ffffff] transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffffff] border border-[#ab9a7d] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#ab9a7d]" />
                  </div>
                  <h3 className="font-bold text-[#191919] text-base mb-2 group-hover:text-[#ab9a7d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="mb-14 p-8 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1]">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold">
              Quais os benefícios para sua página ou negócio?
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {socialMediaBenefits.map((benefit, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#ffffff] border border-[#d9d6c1] p-5 hover:border-[#ab9a7d] transition-all group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-[#8c7c60]" />
                    </div>
                    <h4 className="font-bold text-[#191919] text-xs mb-1.5 group-hover:text-[#ab9a7d] transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] text-[#666666] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para posts e vídeos para redes sociais.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Solicitar Pacote de Posts para Redes</span>
          </a>
        </div>

      </div>
    </section>
  );
}
