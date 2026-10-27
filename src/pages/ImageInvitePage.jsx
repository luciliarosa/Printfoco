import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { Image, Check, MessageCircle } from 'lucide-react';

export default function ImageInvitePage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <Link to="/convites" className="hover:text-[#1c1b1a]">Convites Virtuais</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Convite em Imagem Digital</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Image className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Clássico, Elegante & Prático</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Convite em Imagem <span className="text-[#c5a880] italic font-normal">Digital</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            Convites em imagem capturam a essência do seu evento em uma arte visual refinada e encantadora, destacando-se pela harmonia de cores, tipografia luxuosa e riqueza nos detalhes.
          </p>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-sm space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
                Vantagens do Convite em Imagem
              </h2>
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Alta Resolução para Envio ou Impressão</h3>
                    <p className="text-xs text-[#555555]">Você recebe o arquivo em altíssima definição, podendo tanto enviar pelo WhatsApp quanto imprimir em gráfica.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Design Sofisticado e Exclusivo</h3>
                    <p className="text-xs text-[#555555]">Sem modelos genéricos repetidos: cada convite é construído com base na estética e no sentimento do anfitrião.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1c1b1a]">Envio Prático e Instantâneo</h3>
                    <p className="text-xs text-[#555555]">Arquivo leve e direto ao ponto para salvar na galeria do celular e compartilhar rapidamente com parentes e amigos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para convite em imagem digital.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1b1a] text-white hover:bg-[#c5a880] flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento de Convite em Imagem</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-2.5 sm:p-3 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-md max-w-sm sm:max-w-none mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf8f5]">
                <img
                  src="/images/28b3adc27ee10ec09e743a1fed65dd34.jpg"
                  alt="Convite em Imagem Printfoco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-bold block">Arte Visual Personalizada</span>
                  <span className="text-[11px] text-[#ebe6dc]">Tipografia e cores nobres</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
