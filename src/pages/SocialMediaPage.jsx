import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaBenefits, socialMediaFormats, siteConfig } from '../data/content';
import { 
  Share2, TrendingUp, Users, Eye, ArrowUpRight, 
  Palette, MessageCircle, Image, Video, Layers 
} from 'lucide-react';

export default function SocialMediaPage() {
  const benefitIcons = [TrendingUp, Users, Eye, ArrowUpRight, Palette];
  const formatIcons = [Image, Video, Layers, Palette];

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Posts para Redes Sociais</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Share2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Design Estratégico para Redes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Posts para <span className="text-[#c5a880] italic font-normal">Redes Sociais</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            Criamos conteúdos visuais impactantes (artes estáticas, vídeos curtos/reels, stories dinâmicos e carrosséis) desenvolvidos estrategicamente para aumentar seu engajamento, tráfego e visibilidade.
          </p>
        </div>

        {/* 4 Formatos de Criação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {socialMediaFormats.map((item, i) => {
            const Icon = formatIcons[i % formatIcons.length];
            return (
              <div
                key={i}
                className="rounded-3xl bg-[#ffffff] border border-[#ebe6dc] p-5 sm:p-6 hover:border-[#c5a880] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform">
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
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-sm mb-10 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1">
              Resultados Práticos
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
              Quais os Benefícios para Sua Marca?
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1 sm:mt-2">
              Investir em design profissional e constante gera retornos tangíveis:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {socialMediaBenefits.map((benefit, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] p-4 sm:p-5 hover:border-[#c5a880] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-[#9f825b]" />
                    </div>
                    <h3 className="font-bold text-[#1c1b1a] text-xs mb-1 group-hover:text-[#c5a880] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] text-[#666666] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
              Pronto para elevar a identidade visual da sua página?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl">
              Solicite um pacote personalizado de artes e vídeos ou peça posts avulsos de acordo com a sua necessidade.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para posts e vídeos para redes sociais.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-7 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md flex items-center justify-center gap-2 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento de Posts</span>
          </a>
        </div>

      </div>
    </div>
  );
}
