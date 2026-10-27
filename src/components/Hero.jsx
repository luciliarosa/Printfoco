import React from 'react';
import { siteConfig } from '../data/content';
import { Sparkles, ArrowRight, Play, Share2, Smartphone, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#ffffff] to-[#faf8f5]">
      {/* Background subtle light ambient circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#ebe6dc]/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#c5a880]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 noise-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs uppercase tracking-[0.2em] text-[#9f825b] font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Desde {siteConfig.foundedYear} • Memórias & Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1c1b1a] leading-[1.18]">
              Transformando <br className="hidden sm:inline" />
              Momentos em <br className="hidden sm:inline" />
              <span className="font-serif-luxury italic font-normal text-[#c5a880] underline decoration-[#ebe6dc] decoration-4 underline-offset-8">
                Memórias Inesquecíveis!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#555555] max-w-2xl font-normal leading-relaxed">
              Especialistas em <strong className="text-[#1c1b1a] font-bold">Convites Virtuais (Interativos, Vídeos e Imagens)</strong>,{' '}
              <strong className="text-[#1c1b1a] font-bold">Retrospectivas cinematográficas</strong> e{' '}
              <strong className="text-[#1c1b1a] font-bold">Design para Redes Sociais</strong> (artes e vídeos). Tudo desenvolvido sob medida para o seu evento ou marca.
            </p>

            {/* Services Highlight Badges (sem fotografia) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#ebe6dc] px-3.5 py-1.5 rounded-full text-[#1c1b1a] font-medium shadow-xs">
                <Smartphone className="w-3.5 h-3.5 text-[#c5a880]" /> Convites Interativos & Digitais
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#ebe6dc] px-3.5 py-1.5 rounded-full text-[#1c1b1a] font-medium shadow-xs">
                <Play className="w-3.5 h-3.5 text-[#c5a880]" /> Retrospectivas em Vídeo
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#ffffff] border border-[#ebe6dc] px-3.5 py-1.5 rounded-full text-[#1c1b1a] font-medium shadow-xs">
                <Share2 className="w-3.5 h-3.5 text-[#c5a880]" /> Posts para Redes (Imagens & Vídeos)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#convite-interativo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Ver Convite Interativo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#formatos-convites"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-xs tracking-wider uppercase border border-[#1c1b1a] text-[#1c1b1a] bg-[#ffffff] hover:bg-[#1c1b1a] hover:text-white transition-all shadow-xs"
              >
                <span>Todos os Serviços</span>
              </a>
            </div>

            {/* Social proof numbers */}
            <div className="pt-6 border-t border-[#ebe6dc] flex items-center justify-center lg:justify-start gap-8 text-xs text-[#666666]">
              <div>
                <span className="block text-2xl font-bold text-[#1c1b1a] font-serif-luxury">+8 Anos</span>
                <span className="text-[#9f825b] font-medium">De Dedicação & Afeto</span>
              </div>
              <div className="w-px h-8 bg-[#ebe6dc]" />
              <div>
                <span className="block text-2xl font-bold text-[#1c1b1a] font-serif-luxury">100%</span>
                <span className="text-[#9f825b] font-medium">Feito Sob Medida</span>
              </div>
              <div className="w-px h-8 bg-[#ebe6dc]" />
              <div>
                <span className="block text-2xl font-bold text-[#1c1b1a] font-serif-luxury">Lucilia Rosa</span>
                <span className="text-[#9f825b] font-medium">Fundadora Printfoco</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Subtle Shadow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#ebe6dc] to-[#c5a880]/30 blur-xl opacity-60" />
              
              <div className="relative bg-[#ffffff] border border-[#ebe6dc] rounded-3xl p-6 shadow-xl overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#faf8f5]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#c5a880] animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-[#1c1b1a] font-bold">Printfoco Design</span>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#faf8f5] text-[#9f825b] font-bold border border-[#ebe6dc]">
                    Tecnologia & Arte
                  </span>
                </div>

                {/* Showcase image */}
                <div className="mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf8f5] border border-[#ebe6dc] group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                    alt="Celebrações e Convites Printfoco"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#ebe6dc] font-semibold">Tendência para Festas</span>
                    <p className="text-base font-serif-luxury font-bold">Convite Interativo Digital</p>
                  </div>
                </div>

                {/* Key features chips */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-[#1c1b1a] font-semibold">RSVP no WhatsApp</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c5a880]" />
                    <span className="text-[#1c1b1a] font-semibold">GPS & Rota Waze</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-[#1c1b1a] font-semibold">Contagem Regressiva</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#9e3a4b]" />
                    <span className="text-[#1c1b1a] font-semibold">Música & Fotos</span>
                  </div>
                </div>

                {/* Bottom quote note */}
                <div className="mt-4 p-3 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] text-center">
                  <p className="text-xs text-[#555555] italic">
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
