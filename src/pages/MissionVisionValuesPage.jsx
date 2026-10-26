import React from 'react';
import { Link } from 'react-router-dom';
import { institutionalData } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Target, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function MissionVisionValuesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#191919]">{t.nav.about}</span>
          <span>/</span>
          <span className="text-[#191919] font-bold">{t.missionVisionValues.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Target className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.missionVisionValues.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            {t.missionVisionValues.title}
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            {t.missionVisionValues.subtitle}
          </p>
        </div>

        {/* Missão e Visão Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Missão */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#ab9a7d]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-1">
                {t.missionVisionValues.missionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#191919] mb-4">
                {t.missionVisionValues.missionTitle}
              </h2>
              <p className="text-base text-[#444444] leading-relaxed">
                {t.missionVisionValues.missionDesc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d9d6c1] flex items-center gap-2 text-xs font-semibold text-[#8c7c60]">
              <Sparkles className="w-4 h-4 text-[#ab9a7d]" />
              <span>Compromisso com precisão e sofisticação</span>
            </div>
          </div>

          {/* Visão */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#ffffff] border-2 border-[#d9d6c1] hover:border-[#ab9a7d] transition-all shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-[#191919]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-1">
                {t.missionVisionValues.visionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#191919] mb-4">
                {t.missionVisionValues.visionTitle}
              </h2>
              <p className="text-base text-[#444444] leading-relaxed">
                {t.missionVisionValues.visionDesc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d9d6c1] flex items-center gap-2 text-xs font-semibold text-[#8c7c60]">
              <Sparkles className="w-4 h-4 text-[#ab9a7d]" />
              <span>Referência em inovação e convites virtuais</span>
            </div>
          </div>

        </div>

        {/* Valores Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] shadow-md mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block mb-1">Princípios</span>
            <h2 className="text-3xl font-bold font-serif-luxury text-[#191919]">
              {t.missionVisionValues.valuesTitle}
            </h2>
            <p className="text-sm text-[#555555] mt-2">
              {t.missionVisionValues.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionalData.valores.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ab9a7d] shrink-0" />
                  <h3 className="font-bold text-base text-[#191919] font-serif-luxury">{val.title}</h3>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="text-center">
          <Link
            to="/convites/interativo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white hover:bg-[#ab9a7d] transition-all shadow-md"
          >
            <span>{t.missionVisionValues.btnInvite}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
