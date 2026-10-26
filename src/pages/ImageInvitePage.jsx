import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { Image, Check, Sparkles, MessageCircle } from 'lucide-react';

export default function ImageInvitePage() {
  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">Início</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#191919]">Convites Virtuais</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">Convite em Imagem Digital</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Image className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Clássico, Elegante & Prático</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            Convite em Imagem <span className="text-[#ab9a7d] italic font-normal">Digital</span>
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            Convites em imagem capturam a essência do seu evento em uma arte visual refinada e encantadora, destacando-se pela harmonia de cores, tipografia luxuosa e riqueza nos detalhes.
          </p>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-md space-y-6">
              <h2 className="text-2xl font-bold font-serif-luxury text-[#191919]">
                Vantagens do Convite em Imagem
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Alta Resolução para Envio ou Impressão</h3>
                    <p className="text-xs text-[#555555]">Você recebe o arquivo em altíssima definição, podendo tanto enviar pelo WhatsApp quanto imprimir em gráfica.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Design Sofisticado e Exclusivo</h3>
                    <p className="text-xs text-[#555555]">Sem modelos genéricos repetidos: cada convite é construído com base na estética e no sentimento do anfitrião.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#191919]">Envio Prático e Instantâneo</h3>
                    <p className="text-xs text-[#555555]">Arquivo leve e direto ao ponto para salvar na galeria do celular e compartilhar rapidamente com parentes e amigos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d9d6c1]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para convite em imagem digital.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento de Convite em Imagem</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-3 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f4f1e8]">
                <img
                  src="/images/28b3adc27ee10ec09e743a1fed65dd34.jpg"
                  alt="Convite em Imagem Printfoco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-bold block">Arte Visual Personalizada</span>
                  <span className="text-[11px] text-[#d9d6c1]">Tipografia e cores nobres</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
