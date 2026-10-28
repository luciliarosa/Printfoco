import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { retrospectivesList, siteConfig } from '../data/content';
import RetrospectiveVideoPlayer from '../components/RetrospectiveVideoPlayer';
import ServiceRulesModal from '../components/ServiceRulesModal';
import { Film, Play, Sparkles, MessageCircle, FileText, Globe, Clock, Download, Wifi } from 'lucide-react';

export default function RetrospectivesPage() {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Retrospectivas Cinematográficas</span>
        </div>

        {/* Header com Informações de Entrega Online & Download MP4 */}
        <div className="max-w-4xl mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Film className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Vídeos que Marcam Época • Online via Link & Download MP4</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Retrospectivas <span className="text-[#c5a880] italic font-normal">Cinematográficas</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            Transformamos as fotografias e pequenos vídeos da sua família em uma narrativa tocante, sincronizada com músicas inesquecíveis para emocionar todos os convidados durante a festa.
          </p>

          {/* Destaque das Regras e Modelo Online Exclusivo */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Link Online Exclusivo para Telão ou Celular</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>No ar até 5 dias pós-evento</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Download className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Download vitalício do vídeo em MP4 (Full HD)</span>
            </div>

            <button
              type="button"
              onClick={() => setIsRulesModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1c1b1a] bg-[#faf8f5] px-3.5 py-1.5 rounded-full border border-[#c5a880] hover:bg-[#c5a880] hover:text-white transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Ver Regras & Como Funciona</span>
            </button>
          </div>

          {/* Aviso sobre Conexão com a Internet */}
          <div className="p-3 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] flex items-center gap-2.5 text-xs text-[#666666]">
            <Wifi className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span>
              <strong>Atenção:</strong> Como tudo é entregue de forma 100% online via link web seguro, você e seus convidados precisam de <strong>conexão com a internet</strong> ativa para reproduzir os vídeos e convites.
            </span>
          </div>
        </div>

        {/* Player de Demonstração em Vídeo com Molduras e Múltiplos Temas */}
        <RetrospectiveVideoPlayer />

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

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setIsRulesModalOpen(true)}
              className="px-5 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase border border-[#c5a880] text-[#1c1b1a] hover:bg-[#faf8f5] transition-all shrink-0"
            >
              Regras do Serviço
            </button>
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

      {/* Modal de Regras e Prazos dos Serviços */}
      <ServiceRulesModal 
        isOpen={isRulesModalOpen} 
        onClose={() => setIsRulesModalOpen(false)} 
      />
    </div>
  );
}
