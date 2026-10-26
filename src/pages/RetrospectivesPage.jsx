import React from 'react';
import { Link } from 'react-router-dom';
import { retrospectivesList, siteConfig } from '../data/content';
import { Film, Play, Sparkles, MessageCircle, Check, ArrowRight } from 'lucide-react';

export default function RetrospectivesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">Início</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">Retrospectivas Cinematográficas</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Film className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Vídeos que Marcam Época</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            Retrospectivas <span className="text-[#ab9a7d] italic font-normal">Cinematográficas</span>
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            Transformamos as fotografias e pequenos vídeos da sua família em uma narrativa tocante, sincronizada com músicas inesquecíveis para emocionar todos os convidados durante a festa.
          </p>
        </div>

        {/* Categorias Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {retrospectivesList.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#ffffff] border border-[#d9d6c1] p-8 hover:border-[#ab9a7d] transition-all group shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-[#8c7c60] fill-[#ab9a7d]" />
                  </div>
                  <span className="text-xs font-bold text-[#8c7c60] tracking-widest uppercase">
                    Categoria #{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3 group-hover:text-[#ab9a7d] transition-colors">
                  {item.title}
                </h2>

                <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#d9d6c1]">
                  <span className="text-xs uppercase tracking-wider text-[#8c7c60] font-bold block mb-2">
                    Temas & Opções Sugeridas:
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
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif-luxury text-[#191919]">
              Quer uma retrospectiva com a trilha sonora perfeita?
            </h3>
            <p className="text-sm text-[#555555] max-w-xl">
              Fale conosco para definir a quantidade de fotos, vídeos curtos e as músicas que mais marcaram a sua trajetória.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para retrospectiva em vídeo.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
