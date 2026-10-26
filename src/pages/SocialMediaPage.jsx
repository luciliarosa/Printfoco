import React from 'react';
import { Link } from 'react-router-dom';
import { socialMediaBenefits, socialMediaFormats, siteConfig } from '../data/content';
import { 
  Share2, TrendingUp, Users, Eye, ArrowUpRight, 
  Palette, Sparkles, MessageCircle, Image, Video, Layers 
} from 'lucide-react';

export default function SocialMediaPage() {
  const benefitIcons = [TrendingUp, Users, Eye, ArrowUpRight, Palette];
  const formatIcons = [Image, Video, Layers, Palette];

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">Início</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">Posts para Redes Sociais</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Share2 className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Design Estratégico para Redes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            Posts para <span className="text-[#ab9a7d] italic font-normal">Redes Sociais</span>
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            Criamos conteúdos visuais impactantes (artes estáticas, vídeos curtos/reels, stories dinâmicos e carrosséis) desenvolvidos estrategicamente para aumentar seu engajamento, tráfego e visibilidade.
          </p>
        </div>

        {/* 4 Formatos de Criação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialMediaFormats.map((item, i) => {
            const Icon = formatIcons[i % formatIcons.length];
            return (
              <div
                key={i}
                className="rounded-3xl bg-[#ffffff] border border-[#d9d6c1] p-6 hover:border-[#ab9a7d] transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-md mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-1">
              Resultados Práticos
            </span>
            <h2 className="text-3xl font-bold font-serif-luxury text-[#191919]">
              Quais os Benefícios para Sua Marca?
            </h2>
            <p className="text-sm text-[#555555] mt-2">
              Investir em design profissional e constante gera retornos tangíveis:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {socialMediaBenefits.map((benefit, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] p-5 hover:border-[#ab9a7d] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#ffffff] border border-[#d9d6c1] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-[#8c7c60]" />
                    </div>
                    <h3 className="font-bold text-[#191919] text-xs mb-1.5 group-hover:text-[#ab9a7d] transition-colors">
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

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-1">
              Deseja um pacote mensal de publicações?
            </h3>
            <p className="text-sm text-[#555555]">
              Montamos cronogramas personalizados com artes e vídeos para alimentar suas redes sociais com consistência.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para pacote de posts e vídeos para redes sociais.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar Pacotes no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
