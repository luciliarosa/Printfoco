import React from 'react';
import { aboutData, siteConfig } from '../data/content';
import { Heart, Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#d9d6c1]">
      {/* Background soft circles */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#f4f1e8] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Photo Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer sand card */}
              <div className="relative p-3 rounded-3xl bg-[#f4f1e8] border border-[#d9d6c1] shadow-xl">
                <div className="rounded-2xl overflow-hidden bg-[#ffffff] p-3 border border-[#d9d6c1]/60">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                    <img
                      src="/images/302c8216246d3ac6ca7c809f3d31ad1a.jpg"
                      alt="Fundadora Lucilia Rosa - Printfoco"
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/80 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#ffffff]/95 backdrop-blur-md border border-[#d9d6c1] shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#ab9a7d]/20 flex items-center justify-center border border-[#ab9a7d]">
                          <Heart className="w-5 h-5 text-[#8c7c60] fill-[#ab9a7d]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#191919]">Lucilia Rosa</h4>
                          <p className="text-[11px] text-[#666666] font-medium">Fundadora & Criadora Printfoco</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative badge corner */}
              <div className="absolute -bottom-6 -left-4 bg-[#ffffff] border border-[#ab9a7d] rounded-2xl p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#ab9a7d]" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#8c7c60] font-semibold">Fundada em</span>
                    <span className="text-xl font-bold font-serif-luxury text-[#191919]">2017</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#f4f1e8] text-xs uppercase tracking-[0.2em] text-[#8c7c60] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
              <span>Nossa História</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
              {aboutData.title}
            </h2>

            <div className="space-y-4 text-[#444444] text-base sm:text-lg font-normal leading-relaxed">
              <p>
                {aboutData.story}
              </p>
              <p>
                {aboutData.mission}
              </p>
              <blockquote className="p-4 rounded-xl bg-[#f4f1e8] border-l-4 border-[#ab9a7d] italic text-[#191919] font-serif-luxury text-base">
                "{aboutData.highlight}"
              </blockquote>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-base font-bold text-[#191919] font-serif-luxury mb-1">Amor & Cuidado</span>
                <span className="text-xs text-[#666666]">Cada detalhe tratado como único e especial.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-base font-bold text-[#191919] font-serif-luxury mb-1">Inovação Web</span>
                <span className="text-xs text-[#666666]">Convites modernos que surpreendem convidados.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1]">
                <span className="block text-base font-bold text-[#191919] font-serif-luxury mb-1">Pontualidade</span>
                <span className="text-xs text-[#666666]">Entrega rápida e suporte humanizado.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
