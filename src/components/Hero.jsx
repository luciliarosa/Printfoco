import React from 'react';
import { siteConfig } from '../data/content';
import { Sparkles, ArrowRight, Play, Share2, Smartphone, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#f4f1e8] via-[#ffffff] to-[#f4f1e8]">
      {/* Background subtle light ambient circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#d9d6c1]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#ab9a7d]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 noise-light opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs uppercase tracking-[0.2em] text-[#8c7c60] font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
              <span>Desde {siteConfig.foundedYear} • Memórias & Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#191919] leading-[1.18]">
              Transformando <br className="hidden sm:inline" />
              Momentos em <br className="hidden sm:inline" />
              <span className="font-serif-luxury italic font-normal text-[#ab9a7d] underline decoration-[#d9d6c1] decoration-4 underline-offset-8">
                Memórias Inesquecíveis!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#444444] max-w-2xl font-normal leading-relaxed">
              Especialistas em <strong className="text-[#191919] font-bold">Convites Virtuais (Interativos, Vídeos e Imagens)</strong>,{' '}
              <strong className="text-[#191919] font-bold">Retrospectivas cinematográficas</strong> e{' '}
              <strong className="text-[#191919] font-bold">Posts para Redes Sociais</strong> (artes e vídeos). Tudo personalizado com carinho para o seu evento ou marca.
            </p>

            {/* Services Highlight Badges (sem fotografia) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#d9d6c1] px-3.5 py-1.5 rounded-full text-[#191919] font-medium shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-[#ab9a7d]" /> Convites Interativos & Digitais
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#d9d6c1] px-3.5 py-1.5 rounded-full text-[#191919] font-medium shadow-sm">
                <Play className="w-3.5 h-3.5 text-[#ab9a7d]" /> Retrospectivas em Vídeo
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#d9d6c1] px-3.5 py-1.5 rounded-full text-[#191919] font-medium shadow-sm">
                <Share2 className="w-3.5 h-3.5 text-[#ab9a7d]" /> Posts para Redes (Imagens & Vídeos)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#convite-interativo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-[#f4f1e8] hover:bg-[#ab9a7d] hover:text-white transition-all shadow-lg transform hover:-translate-y-1 active:translate-y-0 group"
              >
                <span>Ver Convite Interativo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#formatos-convites"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-xs tracking-wider uppercase border-2 border-[#191919] text-[#191919] bg-[#ffffff] hover:bg-[#191919] hover:text-white transition-all shadow-sm"
              >
                <span>Todos os Serviços</span>
              </a>
            </div>

            {/* Social proof numbers */}
            <div className="pt-6 border-t border-[#d9d6c1] flex items-center justify-center lg:justify-start gap-8 text-xs text-[#666666]">
              <div>
                <span className="block text-2xl font-bold text-[#191919] font-serif-luxury">+8 Anos</span>
                <span className="text-[#8c7c60] font-medium">De Dedicação & Amor</span>
              </div>
              <div className="w-px h-8 bg-[#d9d6c1]" />
              <div>
                <span className="block text-2xl font-bold text-[#191919] font-serif-luxury">100%</span>
                <span className="text-[#8c7c60] font-medium">Feito Sob Medida</span>
              </div>
              <div className="w-px h-8 bg-[#d9d6c1]" />
              <div>
                <span className="block text-2xl font-bold text-[#191919] font-serif-luxury">Lucilia Rosa</span>
                <span className="text-[#8c7c60] font-medium">Fundadora Printfoco</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Subtle Shadow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#d9d6c1] to-[#ab9a7d]/40 blur-xl opacity-60" />
              
              <div className="relative bg-[#ffffff] border border-[#d9d6c1] rounded-3xl p-6 shadow-xl overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#f4f1e8]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ab9a7d] animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-[#191919] font-bold">Printfoco Design</span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#f4f1e8] text-[#8c7c60] font-bold border border-[#d9d6c1]">
                    Tecnologia & Arte
                  </span>
                </div>

                {/* Showcase image */}
                <div className="mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f4f1e8] border border-[#d9d6c1] group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                    alt="Celebrações e Convites Printfoco"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#d9d6c1] font-semibold">Tendência para Festas</span>
                    <p className="text-base font-serif-luxury font-bold">Convite Interativo Digital</p>
                  </div>
                </div>

                {/* Key features chips */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1]/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-[#191919] font-semibold">RSVP no WhatsApp</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1]/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ab9a7d]" />
                    <span className="text-[#191919] font-semibold">GPS & Rota Waze</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1]/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-[#191919] font-semibold">Contagem Regressiva</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1]/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-600" />
                    <span className="text-[#191919] font-semibold">Música & Fotos</span>
                  </div>
                </div>

                {/* Bottom quote note */}
                <div className="mt-4 p-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-center">
                  <p className="text-xs text-[#444444] italic">
                    "Eternize seus momentos especiais com quem entende de sentimento e dedicação."
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
