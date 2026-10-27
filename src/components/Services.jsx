import React from 'react';
import { siteConfig, inviteTypes } from '../data/content';
import { 
  Sparkles, Smartphone, Film, Share2, 
  ArrowRight, Check, MessageCircle 
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      id: 'convites',
      title: 'Convites Virtuais (Vários Formatos)',
      badge: 'Interativo & Digital',
      desc: 'Criamos convites digitais únicos em múltiplos formatos: Convite Interativo Web, Convite em Vídeo animado e Convite em Imagem de alta definição.',
      icon: Smartphone,
      link: '#convite-interativo',
      items: [
        'Convite Virtual Interativo (RSVP & Mapas)',
        'Convite em Vídeo Animado com Trilha',
        'Convite em Imagem Digital Estilizada'
      ]
    },
    {
      id: 'retrospectivas',
      title: 'Retrospectivas Emocionantes',
      badge: 'Cinematográfico',
      desc: 'Transformamos memórias em vídeos tocantes, sincronizados com músicas marcantes, destacando os momentos mais felizes da sua vida.',
      icon: Film,
      link: '#retrospectivas',
      items: [
        'Aniversários Infantis com Temas Especiais',
        'Aniversários Adultos & 15 Anos',
        'Retrospectivas de Viagem e Homenagens'
      ]
    },
    {
      id: 'social-media',
      title: 'Posts para Redes Sociais',
      badge: 'Imagens & Vídeos',
      desc: 'Criação de posts criativos (imagens, vídeos curtos, carrosséis e artes) para publicações em redes sociais que aumentam o engajamento e a visibilidade.',
      icon: Share2,
      link: '#posts-redes',
      items: [
        'Artes Estáticas e Carrosséis para Feed',
        'Vídeos Animados & Reels / Stories',
        'Fortalecimento e Identidade de Marca'
      ]
    }
  ];

  return (
    <section id="formatos-convites" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#ebe6dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#faf8f5] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Nossas Especialidades</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            Serviços & <span className="text-[#c5a880] italic font-normal underline decoration-[#ebe6dc] underline-offset-4">Formatos Criativos</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Do convite virtual completo à retrospectiva que emociona, tudo desenvolvido com sensibilidade, arte e dedicação.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:border-[#c5a880] hover:bg-[#ffffff] transition-all duration-300 group hover:-translate-y-0.5 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#1c1b1a] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#c5a880] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#ffffff] border border-[#ebe6dc] text-[#9f825b] font-bold">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3 group-hover:text-[#c5a880] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6 font-normal">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2a2927] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#9f825b] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center justify-between w-full pt-3.5 sm:pt-4 border-t border-[#ebe6dc] text-xs font-bold tracking-wider uppercase text-[#1c1b1a] group-hover:text-[#c5a880] transition-colors"
                >
                  <span>Conhecer Detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Deep Dive: 3 Formatos de Convites */}
        <div className="rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-xs">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1 sm:mb-2">
              Flexibilidade para seu evento
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
              Formatos de Convites Virtuais Printfoco
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Escolha o formato que melhor combina com seu estilo e tipo de celebração:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {inviteTypes.map((type) => (
              <div
                key={type.id}
                className={`rounded-2xl p-5 sm:p-7 transition-all relative flex flex-col justify-between ${
                  type.highlight
                    ? 'bg-[#ffffff] border-2 border-[#c5a880] shadow-md'
                    : 'bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880]'
                }`}
              >
                {type.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1c1b1a] text-[#faf8f5] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-widest px-3.5 py-0.5 rounded-full shadow-xs">
                    {type.badge}
                  </div>
                )}

                <div>
                  <span className="text-[10px] sm:text-[11px] text-[#9f825b] font-bold tracking-wider uppercase block mb-1">
                    {type.tag}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3">
                    {type.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed mb-4 sm:mb-6 font-normal">
                    {type.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    {type.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2a2927] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o ${type.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    type.highlight
                      ? 'bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-sm'
                      : 'bg-[#faf8f5] text-[#1c1b1a] border border-[#ebe6dc] hover:bg-[#1c1b1a] hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir Orçamento</span>
                </a>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
