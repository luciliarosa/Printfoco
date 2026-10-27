import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { Film, Play, Check, MessageCircle } from 'lucide-react';

export default function VideoInvitePage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#1c1b1a]">Convites Virtuais</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Convite em Vídeo Animado</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Film className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Dinâmico & Emocionante</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Convite em Vídeo <span className="text-[#c5a880] italic font-normal">Animado</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            Convites em vídeo oferecem uma experiência dinâmica e envolvente, combinando animações temáticas criativas, fotos do anfitrião, trilha sonora cativante e a emoção exclusiva do formato audiovisual.
          </p>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-sm space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
                Por que escolher o Convite em Vídeo?
              </h2>
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Trilha Sonora e Emoção</h3>
                    <p className="text-xs text-[#555555]">A música certa desperta a expectativa e a emoção dos convidados logo nos primeiros segundos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Perfeito para Stories e WhatsApp</h3>
                    <p className="text-xs text-[#555555]">Formato vertical otimizado para reprodução automática em smartphones sem perda de qualidade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Animações Personalizadas</h3>
                    <p className="text-xs text-[#555555]">Efeitos visuais alinhados à identidade visual da festa, desde temas infantis até aniversários clássicos de adultos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para convite em vídeo animado.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento de Vídeo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-2.5 sm:p-3 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-md max-w-sm sm:max-w-none mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf8f5]">
                <img
                  src="/images/afb341345d7a26e8d80315b870c56bce.jpg"
                  alt="Convite em Vídeo Printfoco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/70 via-transparent to-transparent flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ffffff]/90 flex items-center justify-center shadow-xl border border-[#c5a880] animate-pulse">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#1c1b1a] fill-[#1c1b1a] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-bold block">Exemplo Audiovisual</span>
                  <span className="text-[11px] text-[#ebe6dc]">Trilha personalizada e animações</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
