import React from 'react';
import { aboutData } from '../data/content';
import { Heart, Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#ffffff] border-y border-[#ebe6dc]">
      {/* Background soft circles */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#faf8f5] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Visual Column / Photo Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-xs sm:max-w-md">
              
              {/* Outer sand card */}
              <div className="relative p-2.5 sm:p-3 rounded-3xl bg-[#faf8f5] border border-[#ebe6dc] shadow-lg">
                <div className="rounded-2xl overflow-hidden bg-[#ffffff] p-2 sm:p-3 border border-[#ebe6dc]">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#faf8f5]">
                    <img
                      src="/images/302c8216246d3ac6ca7c809f3d31ad1a.jpg"
                      alt="Fundadora Lucilia Rosa - Printfoco"
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/80 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-[#ffffff]/95 backdrop-blur-md border border-[#ebe6dc] shadow-md">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#c5a880]/15 flex items-center justify-center border border-[#c5a880] shrink-0">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#9f825b] fill-[#c5a880]" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-[#1c1b1a] truncate">Lucilia Rosa</h4>
                          <p className="text-[10px] sm:text-[11px] text-[#666666] font-medium truncate">Fundadora & Criadora Printfoco</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative badge corner */}
              <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-4 bg-[#ffffff] border border-[#c5a880] rounded-2xl p-3 sm:p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a880]" />
                  <div>
                    <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-semibold">Fundada em</span>
                    <span className="text-lg sm:text-xl font-bold font-serif-luxury text-[#1c1b1a]">2017</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#faf8f5] text-xs uppercase tracking-[0.2em] text-[#9f825b] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Nossa História</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
              {aboutData.title}
            </h2>

            <div className="space-y-3 sm:space-y-4 text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
              <p>
                {aboutData.story}
              </p>
              <p>
                {aboutData.mission}
              </p>
              <blockquote className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border-l-4 border-[#c5a880] italic text-[#1c1b1a] font-serif-luxury text-sm sm:text-base">
                "{aboutData.highlight}"
              </blockquote>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-sm sm:text-base font-bold text-[#1c1b1a] font-serif-luxury mb-1">Amor & Cuidado</span>
                <span className="text-xs text-[#666666]">Cada detalhe tratado como único e especial.</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-sm sm:text-base font-bold text-[#1c1b1a] font-serif-luxury mb-1">Inovação Web</span>
                <span className="text-xs text-[#666666]">Convites modernos que surpreendem convidados.</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc]">
                <span className="block text-sm sm:text-base font-bold text-[#1c1b1a] font-serif-luxury mb-1">Pontualidade</span>
                <span className="text-xs text-[#666666]">Entrega ágil e suporte humanizado.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
