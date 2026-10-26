import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { Film, Play, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function VideoInvitePage() {
  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">Início</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#191919]">Convites Virtuais</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">Convite em Vídeo Animado</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Film className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Dinâmico & Emocionante</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            Convite em Vídeo <span className="text-[#ab9a7d] italic font-normal">Animado</span>
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            Convites em vídeo oferecem uma experiência dinâmica e envolvente, combinando animações temáticas criativas, fotos do anfitrião, trilha sonora cativante e a emoção exclusiva do formato audiovisual.
          </p>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-md space-y-6">
              <h2 className="text-2xl font-bold font-serif-luxury text-[#191919]">
                Por que escolher o Convite em Vídeo?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Trilha Sonora e Emoção</h3>
                    <p className="text-xs text-[#555555]">A música certa desperta a expectativa e a emoção dos convidados logo nos primeiros segundos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Perfeito para Stories e WhatsApp</h3>
                    <p className="text-xs text-[#555555]">Formato vertical otimizado para reprodução automática em smartphones sem perda de qualidade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Animações Personalizadas</h3>
                    <p className="text-xs text-[#555555]">Efeitos visuais alinhados à identidade visual da festa, desde temas infantis até aniversários clássicos de adultos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d9d6c1]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para convite em vídeo animado.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento de Vídeo</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-3 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f4f1e8]">
                <img
                  src="/images/afb341345d7a26e8d80315b870c56bce.jpg"
                  alt="Convite em Vídeo Printfoco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/70 via-transparent to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ffffff]/90 flex items-center justify-center shadow-2xl border border-[#ab9a7d] animate-pulse">
                    <Play className="w-7 h-7 text-[#191919] fill-[#191919] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-bold block">Edição Dinâmica & Efeitos</span>
                  <span className="text-[11px] text-[#d9d6c1]">Entregue pronto para envio no WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
