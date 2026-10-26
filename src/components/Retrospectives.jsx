import React from 'react';
import { retrospectivesList, siteConfig } from '../data/content';
import { Film, Play, Sparkles, MessageCircle } from 'lucide-react';

export default function Retrospectives() {
  return (
    <section id="retrospectivas" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f4f1e8] via-[#ffffff] to-[#f4f1e8]">
      {/* Background subtle light ambient */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#d9d6c1]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7c60]">
            <Film className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Vídeos Cinematográficos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
            Retrospectivas que <span className="text-[#ab9a7d] italic font-normal underline decoration-[#d9d6c1] underline-offset-4">Tocam o Coração</span>
          </h2>

          <p className="text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
            Reunimos suas fotos e vídeos favoritos com aberturas especiais, efeitos e trilhas sonoras sincronizadas que emocionam a todos no evento.
          </p>
        </div>

        {/* Retrospectives Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {retrospectivesList.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#ffffff] border border-[#d9d6c1] p-8 hover:border-[#ab9a7d] transition-all duration-300 hover:bg-[#f4f1e8]/40 group shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-[#8c7c60] fill-[#ab9a7d]" />
                </div>
                <span className="text-xs font-bold text-[#8c7c60] tracking-widest uppercase">
                  Opção #{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3 group-hover:text-[#ab9a7d] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="space-y-2 pt-4 border-t border-[#d9d6c1]">
                <span className="text-xs uppercase tracking-wider text-[#8c7c60] font-bold block mb-2">
                  Exemplos e Temas Sugeridos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.themes.map((theme, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] font-medium flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#ab9a7d]" />
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#191919]">
              Deseja uma retrospectiva com tema sob medida?
            </h4>
            <p className="text-sm text-[#555555] max-w-xl">
              Conte-nos o tema da festa ou a ideia que você tem em mente! Criamos o vídeo personalizado com fotos, vídeos curtos e a trilha sonora perfeita.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de fazer uma retrospectiva personalizada para meu evento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento Retrospectiva</span>
          </a>
        </div>

      </div>
    </section>
  );
}
