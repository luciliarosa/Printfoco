import React from 'react';
import { socialMediaBenefits, socialMediaFormats, siteConfig } from '../data/content';
import { 
  Share2, TrendingUp, Users, Eye, ArrowUpRight, 
  Palette, MessageCircle, Image, Video, Layers 
} from 'lucide-react';

export default function SocialMedia() {
  const benefitIcons = [TrendingUp, Users, Eye, ArrowUpRight, Palette];
  const formatIcons = [Image, Video, Layers, Palette];

  return (
    <section id="posts-redes" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#ebe6dc]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#faf8f5] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#faf8f5] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b]">
            <Share2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Publicações & Design</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            Posts para <span className="text-[#c5a880] italic font-normal underline decoration-[#ebe6dc] underline-offset-4">Redes Sociais</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Impulsione sua presença online com posts criativos e estratégicos (imagens, vídeos curtos, carrosséis e reels), projetados para aumentar o engajamento e a visibilidade da sua marca.
          </p>
        </div>

        {/* 4 Formatos de Criação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {socialMediaFormats.map((item, i) => {
            const Icon = formatIcons[i % formatIcons.length];
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] p-5 sm:p-6 hover:border-[#c5a880] hover:bg-[#ffffff] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a880]" />
                  </div>
                  <h3 className="font-bold text-[#1c1b1a] text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-[#c5a880] transition-colors">
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
        <div className="mb-10 sm:mb-14 p-5 sm:p-7 md:p-8 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc]">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs uppercase tracking-widest text-[#9f825b] font-bold">
              Quais os benefícios para sua página ou negócio?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {socialMediaBenefits.map((benefit, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#ffffff] border border-[#ebe6dc] p-4 sm:p-5 hover:border-[#c5a880] transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-[#9f825b]" />
                    </div>
                    <h4 className="font-bold text-[#1c1b1a] text-xs mb-1 group-hover:text-[#c5a880] transition-colors">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento de Posts</span>
          </a>
        </div>

      </div>
    </section>
  );
}
