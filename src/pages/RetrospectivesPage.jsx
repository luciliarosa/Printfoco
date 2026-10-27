import React from 'react';
import { Link } from 'react-router-dom';
import { retrospectivesList, siteConfig } from '../data/content';
import { Film, Play, Sparkles, MessageCircle } from 'lucide-react';

export default function RetrospectivesPage() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Retrospectivas Cinematográficas</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Film className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Vídeos que Marcam Época</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Retrospectivas <span className="text-[#c5a880] italic font-normal">Cinematográficas</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            Transformamos as fotografias e pequenos vídeos da sua família em uma narrativa tocante, sincronizada com músicas inesquecíveis para emocionar todos os convidados durante a festa.
          </p>
        </div>

        {/* Categorias Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {retrospectivesList.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#ffffff] border border-[#ebe6dc] p-5 sm:p-7 md:p-8 hover:border-[#c5a880] transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5 sm:mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 text-[#9f825b] fill-[#c5a880]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#9f825b] tracking-widest uppercase">
                    Categoria #{index + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3 group-hover:text-[#c5a880] transition-colors">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed mb-4 sm:mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9f825b] font-bold block mb-1.5 sm:mb-2">
                    Temas & Opções Sugeridas:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.themes.map((theme, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#faf8f5] border border-[#ebe6dc] text-[#1c1b1a] font-medium flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#c5a880]" />
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
              Quer uma retrospectiva com a trilha sonora perfeita?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl">
              Fale conosco para definir a quantidade de fotos, vídeos curtos e as músicas que mais marcaram a sua trajetória.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para retrospectiva em vídeo.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-7 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md flex items-center justify-center gap-2 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
