import React from 'react';
import { Link } from 'react-router-dom';
import { inviteTypes } from '../data/content';
import InteractiveInviteSection from '../components/InteractiveInviteSection';
import { Sparkles, Check, ArrowRight, Smartphone, Film, Image, Eye } from 'lucide-react';

export default function InvitesOverviewPage() {
  const iconMap = {
    interativo: Smartphone,
    video: Film,
    imagem: Image
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">Início</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">Convites Virtuais (Todos os Formatos)</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Catálogo Completo</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            Formatos de <span className="text-[#c5a880] italic font-normal">Convites Virtuais</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            A Printfoco oferece três formatos distintos para atender a cada estilo de comemoração, do prático e tradicional à moderna experiência web interativa.
          </p>

          {/* Quick jump to interactive showcase */}
          <div className="pt-2">
            <a
              href="#modelos-interativos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffffff] border border-[#c5a880] text-xs font-bold text-[#1c1b1a] hover:bg-[#1c1b1a] hover:text-white transition-all shadow-xs"
            >
              <Eye className="w-4 h-4 text-[#c5a880]" />
              <span>Ver Demonstrações & Modelos Interativos (Natal, Princesas, Dinossauro) ↓</span>
            </a>
          </div>
        </div>

        {/* Formatos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {inviteTypes.map((type) => {
            const Icon = iconMap[type.id] || Smartphone;
            return (
              <div
                key={type.id}
                className={`p-5 sm:p-7 md:p-8 rounded-3xl flex flex-col justify-between transition-all ${
                  type.highlight
                    ? 'bg-[#ffffff] border-2 border-[#c5a880] shadow-md'
                    : 'bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#c5a880]" />
                    </div>
                    {type.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1c1b1a] text-white">
                        {type.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#9f825b] uppercase tracking-wider block mb-1">
                    {type.tag}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-3">
                    {type.title}
                  </h2>
                  <p className="text-xs text-[#555555] leading-relaxed mb-4 sm:mb-6">
                    {type.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                    {type.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2a2927] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-[#ebe6dc]">
                  <Link
                    to={type.path}
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      type.highlight
                        ? 'bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-sm'
                        : 'bg-[#faf8f5] text-[#1c1b1a] border border-[#ebe6dc] hover:bg-[#1c1b1a] hover:text-white'
                    }`}
                  >
                    <span>Conhecer Este Formato</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: Live Interactive Models Showcase */}
        <div id="modelos-interativos" className="rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-md overflow-hidden">
          <InteractiveInviteSection />
        </div>

      </div>
    </div>
  );
}
