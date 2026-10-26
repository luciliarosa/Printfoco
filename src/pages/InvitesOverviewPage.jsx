import React from 'react';
import { Link } from 'react-router-dom';
import { inviteTypes, siteConfig } from '../data/content';
import { Sparkles, Check, ArrowRight, Smartphone, Film, Image } from 'lucide-react';

export default function InvitesOverviewPage() {
  const iconMap = {
    interativo: Smartphone,
    video: Film,
    imagem: Image
  };

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">Início</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">Convites Virtuais (Todos os Formatos)</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Catálogo Completo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            Formatos de <span className="text-[#ab9a7d] italic font-normal">Convites Virtuais</span>
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            A Printfoco oferece três formatos distintos para atender a cada estilo de comemoração, do prático e tradicional à moderna experiência web interativa.
          </p>
        </div>

        {/* Formatos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {inviteTypes.map((type) => {
            const Icon = iconMap[type.id] || Smartphone;
            return (
              <div
                key={type.id}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${
                  type.highlight
                    ? 'bg-[#ffffff] border-2 border-[#ab9a7d] shadow-xl'
                    : 'bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#ab9a7d]" />
                    </div>
                    {type.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#191919] text-white">
                        {type.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold text-[#8c7c60] uppercase tracking-wider block mb-1">
                    {type.tag}
                  </span>
                  <h2 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-3">
                    {type.title}
                  </h2>
                  <p className="text-xs text-[#555555] leading-relaxed mb-6">
                    {type.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {type.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2c2c2c] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#ab9a7d] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#d9d6c1]">
                  <Link
                    to={type.path}
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      type.highlight
                        ? 'bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md'
                        : 'bg-[#f4f1e8] text-[#191919] border border-[#d9d6c1] hover:bg-[#191919] hover:text-white'
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

      </div>
    </div>
  );
}
