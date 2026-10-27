import React from 'react';
import { Link } from 'react-router-dom';
import { institutionalData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Target, Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function MissionVisionValuesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#1c1b1a]">{t.nav.about}</span>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">{t.missionVisionValues.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Target className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.missionVisionValues.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.missionVisionValues.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            {t.missionVisionValues.subtitle}
          </p>
        </div>

        {/* Missão e Visão Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          
          {/* Missão */}
          <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#c5a880]" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1">
                {t.missionVisionValues.missionTag}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-4">
                {t.missionVisionValues.missionTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed">
                {t.missionVisionValues.missionDesc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-[#ebe6dc] flex items-center gap-2 text-xs font-semibold text-[#9f825b]">
              <Sparkles className="w-4 h-4 text-[#c5a880]" />
              <span>Compromisso com precisão e sofisticação</span>
            </div>
          </div>

          {/* Visão */}
          <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-4 sm:mb-6">
                <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-[#1c1b1a]" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1">
                {t.missionVisionValues.visionTag}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a] mb-2 sm:mb-4">
                {t.missionVisionValues.visionTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed">
                {t.missionVisionValues.visionDesc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-[#ebe6dc] flex items-center gap-2 text-xs font-semibold text-[#9f825b]">
              <Sparkles className="w-4 h-4 text-[#c5a880]" />
              <span>Referência em inovação e convites virtuais</span>
            </div>
          </div>

        </div>

        {/* Valores Section */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] shadow-sm mb-10 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block mb-1">Princípios</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
              {t.missionVisionValues.valuesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1 sm:mt-2">
              {t.missionVisionValues.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {institutionalData.valores.map((val, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] hover:border-[#c5a880] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center text-xs font-bold text-[#c5a880] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm sm:text-base font-serif-luxury text-[#1c1b1a] mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/convites/interativo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] shadow-md transition-all text-center"
          >
            <span>{t.missionVisionValues.btnInvite}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
