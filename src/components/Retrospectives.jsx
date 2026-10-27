import React from 'react';
import { retrospectivesList, siteConfig } from '../data/content';
import { Film, Play, Sparkles, MessageCircle } from 'lucide-react';

export default function Retrospectives() {
  return (
    <section id="retrospectivas" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#ffffff] to-[#faf8f5]">
      {/* Background subtle light ambient */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#ebe6dc]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b]">
            <Film className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Vídeos Cinematográficos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            Retrospectivas que <span className="text-[#c5a880] italic font-normal underline decoration-[#ebe6dc] underline-offset-4">Tocam o Coração</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Reunimos suas fotos e vídeos favoritos com aberturas especiais, efeitos e trilhas sonoras sincronizadas que emocionam a todos no evento.
          </p>
        </div>

        {/* Retrospectives Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {retrospectivesList.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#ffffff] border border-[#ebe6dc] p-5 sm:p-7 md:p-8 hover:border-[#c5a880] transition-all duration-300 hover:bg-[#faf8f5]/60 group shadow-xs relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-3.5 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 text-[#9f825b] fill-[#c5a880]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#9f825b] tracking-widest uppercase">
                  Opção #{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3 group-hover:text-[#c5a880] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed mb-4 sm:mb-6">
                {item.desc}
              </p>

              <div className="space-y-2 pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#9f825b] font-bold block mb-1.5 sm:mb-2">
                  Exemplos e Temas Sugeridos:
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
          ))}
        </div>

        {/* Callout Box */}
        <div className="rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
              Deseja uma retrospectiva com tema sob medida?
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl">
              Conte-nos o tema da festa ou a ideia que você tem em mente! Criamos o vídeo personalizado com fotos, vídeos curtos e a trilha sonora perfeita.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de fazer uma retrospectiva personalizada para meu evento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md flex items-center justify-center gap-2 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento Retrospectiva</span>
          </a>
        </div>

      </div>
    </section>
  );
}
