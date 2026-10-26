import React from 'react';
import { siteConfig, inviteTypes } from '../data/content';
import { 
  Sparkles, Smartphone, Film, Share2, 
  ArrowRight, Check, MessageCircle, Layers 
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
    <section id="formatos-convites" className="py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#d9d6c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#f4f1e8] text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7c60]">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Nossas Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
            Serviços & <span className="text-[#ab9a7d] italic font-normal underline decoration-[#d9d6c1] underline-offset-4">Formatos Criativos</span>
          </h2>

          <p className="text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
            Do convite virtual completo à retrospectiva que emociona, tudo desenvolvido com sensibilidade, arte e dedicação.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] p-8 flex flex-col justify-between hover:border-[#ab9a7d] hover:bg-[#ffffff] transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#ffffff] border border-[#ab9a7d] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#191919] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7 text-[#ab9a7d] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#ffffff] border border-[#d9d6c1] text-[#8c7c60] font-bold">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3 group-hover:text-[#ab9a7d] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#2c2c2c] font-medium">
                        <Check className="w-4 h-4 text-[#8c7c60] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#d9d6c1] text-xs font-bold tracking-wider uppercase text-[#191919] group-hover:text-[#ab9a7d] transition-colors"
                >
                  <span>Conhecer Detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Deep Dive: 3 Formatos de Convites */}
        <div className="rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] p-8 sm:p-12 relative overflow-hidden shadow-md">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-2">
              Flexibilidade para seu evento
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#191919]">
              Formatos de Convites Virtuais Printfoco
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Escolha o formato que melhor combina com seu estilo e tipo de celebração:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inviteTypes.map((type) => (
              <div
                key={type.id}
                className={`rounded-2xl p-7 transition-all relative flex flex-col justify-between ${
                  type.highlight
                    ? 'bg-[#ffffff] border-2 border-[#ab9a7d] shadow-xl'
                    : 'bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d]'
                }`}
              >
                {type.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#191919] text-[#f4f1e8] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    {type.badge}
                  </div>
                )}

                <div>
                  <span className="text-[11px] text-[#8c7c60] font-bold tracking-wider uppercase block mb-1">
                    {type.tag}
                  </span>
                  <h4 className="text-xl font-bold font-serif-luxury text-[#191919] mb-3">
                    {type.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed mb-6 font-normal">
                    {type.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {type.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2c2c2c] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#ab9a7d] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para o ${type.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    type.highlight
                      ? 'bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md'
                      : 'bg-[#f4f1e8] text-[#191919] border border-[#d9d6c1] hover:bg-[#191919] hover:text-white'
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
