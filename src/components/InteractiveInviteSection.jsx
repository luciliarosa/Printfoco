import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { 
  Smartphone, CheckCircle2, MapPin, Music, Heart, Calendar, 
  Gift, Sparkles, ExternalLink, Play, Pause, Clock, ShieldCheck 
} from 'lucide-react';

export default function InteractiveInviteSection() {
  const { t } = useLanguage();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [guestName, setGuestName] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [activeTab, setActiveTab] = useState('convite');

  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateRSVP = (status) => {
    if (!guestName.trim()) {
      alert(t.simulator.rsvpPlaceholder);
      return;
    }
    setRsvpStatus(status);
  };

  const copyPix = () => {
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <section id="convite-interativo" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f4f1e8] via-[#ffffff] to-[#f4f1e8]">
      {/* Background circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#d9d6c1]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ab9a7d]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7c60] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.interactivePage.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
            {t.interactivePage.title}
          </h2>

          <p className="text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
            {t.interactivePage.subtitle}
          </p>
        </div>

        {/* Grid: Simulator & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Features Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <h3 className="text-2xl font-bold font-serif-luxury text-[#191919]">
              {t.interactivePage.stepsTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">{t.home.featRSVP}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Confirmação direta de presença integrada ao seu WhatsApp, permitindo controle ágil da lista de convidados.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">{t.home.featGPS}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Botões com abertura automática de rotas via Google Maps, Waze ou acionamento de corridas por aplicativo.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">{t.home.featCountdown}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Cronômetro digital sincronizado em tempo real marcando a contagem regressiva para o evento.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Music className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">Música & Mídias</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Trilha sonora selecionada e galeria fotográfica responsiva em alta definição.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Gift className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">{t.home.featPix}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Chave Pix ou links para listas de presentes com recurso de cópia rápida em 1 clique.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8]/50 group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f4f1e8] border border-[#ab9a7d] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-[#8c7c60]" />
                </div>
                <h4 className="font-bold text-[#191919] text-sm mb-1">Layout Sob Medida</h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Identidade visual, paleta de cores e tipografia desenvolvidas conforme as diretrizes do evento.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappInviteMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-[#191919] text-[#f4f1e8] hover:bg-[#ab9a7d] hover:text-white transition-all shadow-md"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.interactivePage.btnOrder}</span>
              </a>

              <a
                href="/projects/convites-virtuais/interativos/tema-natal/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-wider text-[#191919] border-2 border-[#d9d6c1] hover:border-[#191919] bg-[#ffffff] transition-all shadow-sm"
              >
                <span>{t.interactivePage.btnLiveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ab9a7d]" />
              </a>
            </div>

          </div>

          {/* Interactive Live Smartphone Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-full max-w-[340px]">
              
              {/* Outer Subtle Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#d9d6c1] via-transparent to-[#ab9a7d]/30 rounded-[48px] blur-xl opacity-60" />

              {/* Smartphone Frame */}
              <div className="relative bg-[#ffffff] border-4 border-[#191919] rounded-[44px] shadow-2xl p-3 overflow-hidden">
                
                {/* Speaker notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#191919] rounded-full flex items-center justify-center gap-2 z-30">
                  <div className="w-10 h-1 bg-[#444444] rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-[#ab9a7d]" />
                </div>

                {/* Screen Content */}
                <div className="relative bg-[#f4f1e8] rounded-[34px] overflow-hidden min-h-[580px] text-[#191919] flex flex-col justify-between border border-[#d9d6c1]">
                  
                  {/* Simulator Top Bar / Status */}
                  <div className="pt-8 pb-3 px-4 bg-[#ffffff] border-b border-[#d9d6c1] flex items-center justify-between text-[11px] text-[#666666]">
                    <span className="flex items-center gap-1 font-bold text-[#191919]">
                      <Sparkles className="w-3 h-3 text-[#ab9a7d]" /> {t.simulator.demoBadge}
                    </span>
                    <button 
                      onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ab9a7d]/20 text-[#191919] hover:bg-[#ab9a7d] hover:text-white transition-all text-[10px] font-semibold"
                    >
                      {isPlayingMusic ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                      <span>{isPlayingMusic ? t.simulator.playingMusic : t.simulator.playMusic}</span>
                    </button>
                  </div>

                  {/* Simulator Main Body */}
                  <div className="p-4 space-y-4 overflow-y-auto max-h-[460px] scrollbar-thin">
                    
                    {/* Event Banner */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#ffffff] border border-[#d9d6c1]">
                      <img
                        src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                        alt="Aniversário Especial"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/90 via-[#191919]/30 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 text-center text-white">
                        <h4 className="text-base font-serif-luxury font-bold leading-tight">{t.simulator.eventTitle}</h4>
                        <p className="text-[11px] text-[#f4f1e8]">{t.simulator.eventDate}</p>
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="p-2.5 rounded-xl bg-[#ffffff] border border-[#d9d6c1] text-center shadow-sm">
                      <span className="text-[10px] text-[#8c7c60] uppercase tracking-wider block mb-1 font-semibold">
                        {t.simulator.countdownTitle}
                      </span>
                      <div className="grid grid-cols-4 gap-1 text-center">
                        <div className="bg-[#f4f1e8] p-1 rounded-lg border border-[#d9d6c1]/60">
                          <span className="block text-sm font-bold text-[#191919] font-mono">{timeLeft.days}</span>
                          <span className="text-[8px] text-[#666666]">{t.simulator.days}</span>
                        </div>
                        <div className="bg-[#f4f1e8] p-1 rounded-lg border border-[#d9d6c1]/60">
                          <span className="block text-sm font-bold text-[#191919] font-mono">{timeLeft.hours}</span>
                          <span className="text-[8px] text-[#666666]">{t.simulator.hours}</span>
                        </div>
                        <div className="bg-[#f4f1e8] p-1 rounded-lg border border-[#d9d6c1]/60">
                          <span className="block text-sm font-bold text-[#191919] font-mono">{timeLeft.minutes}</span>
                          <span className="text-[8px] text-[#666666]">{t.simulator.min}</span>
                        </div>
                        <div className="bg-[#f4f1e8] p-1 rounded-lg border border-[#d9d6c1]/60">
                          <span className="block text-sm font-bold text-[#191919] font-mono">{timeLeft.seconds}</span>
                          <span className="text-[8px] text-[#666666]">{t.simulator.sec}</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Tabs in Simulator */}
                    <div className="flex rounded-lg bg-[#ffffff] p-1 text-[11px] border border-[#d9d6c1] shadow-sm">
                      <button
                        onClick={() => setActiveTab('convite')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'convite' ? 'bg-[#191919] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabRSVP}
                      </button>
                      <button
                        onClick={() => setActiveTab('mapa')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'mapa' ? 'bg-[#191919] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabMap}
                      </button>
                      <button
                        onClick={() => setActiveTab('presentes')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'presentes' ? 'bg-[#191919] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabGifts}
                      </button>
                    </div>

                    {/* Tab 1: RSVP */}
                    {activeTab === 'convite' && (
                      <div className="space-y-2.5 p-3 rounded-xl bg-[#ffffff] border border-[#d9d6c1] shadow-sm">
                        <span className="text-[11px] font-bold text-[#191919] block">{t.simulator.rsvpHeading}</span>
                        <input
                          type="text"
                          placeholder={t.simulator.rsvpPlaceholder}
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full text-xs px-3 py-2 rounded-lg bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] focus:border-[#ab9a7d] outline-none"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSimulateRSVP('sim')}
                            className="flex-1 py-2 rounded-lg bg-[#191919] hover:bg-[#ab9a7d] text-white text-[11px] font-bold transition-colors"
                          >
                            {t.simulator.btnYes}
                          </button>
                          <button
                            onClick={() => handleSimulateRSVP('nao')}
                            className="px-3 py-2 rounded-lg bg-[#e2dec9] text-[#444444] text-[11px] font-medium transition-colors"
                          >
                            {t.simulator.btnNo}
                          </button>
                        </div>
                        {rsvpStatus && (
                          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] text-center font-medium animate-fadeIn">
                            {rsvpStatus === 'sim' 
                              ? `Presença confirmada para ${guestName}` 
                              : `Resposta registrada para ${guestName}`}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Map */}
                    {activeTab === 'mapa' && (
                      <div className="space-y-2 p-3 rounded-xl bg-[#ffffff] border border-[#d9d6c1] text-center shadow-sm">
                        <MapPin className="w-5 h-5 text-[#8c7c60] mx-auto" />
                        <h5 className="text-xs font-bold text-[#191919]">{t.simulator.mapAddress}</h5>
                        <div className="flex gap-2 pt-1">
                          <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-1.5 rounded-lg bg-[#f4f1e8] border border-[#d9d6c1] text-[10px] text-[#191919] font-medium"
                          >
                            {t.simulator.btnMaps}
                          </a>
                          <a
                            href="https://waze.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-1.5 rounded-lg bg-[#f4f1e8] border border-[#d9d6c1] text-[10px] text-[#191919] font-medium"
                          >
                            {t.simulator.btnWaze}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Gifts */}
                    {activeTab === 'presentes' && (
                      <div className="space-y-2 p-3 rounded-xl bg-[#ffffff] border border-[#d9d6c1] text-center shadow-sm">
                        <Gift className="w-5 h-5 text-[#8c7c60] mx-auto" />
                        <h5 className="text-xs font-bold text-[#191919]">{t.simulator.pixHeading}</h5>
                        <div className="p-2 rounded bg-[#f4f1e8] text-[10px] font-mono text-[#191919] break-all border border-[#d9d6c1]">
                          printfocovideo@gmail.com
                        </div>
                        <button
                          onClick={copyPix}
                          className="w-full py-1.5 rounded-lg bg-[#191919] hover:bg-[#ab9a7d] text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          {copiedPix ? t.simulator.btnCopiedPix : t.simulator.btnCopyPix}
                        </button>
                      </div>
                    )}

                  </div>

                  {/* Simulator Footer */}
                  <div className="p-3 bg-[#ffffff] border-t border-[#d9d6c1] text-center">
                    <span className="text-[9px] text-[#8c7c60] tracking-widest uppercase font-semibold block">
                      {t.simulator.footerDev}
                    </span>
                  </div>

                </div>

              </div>

              {/* Interactive badge note */}
              <div className="mt-3 text-center">
                <span className="text-xs text-[#8c7c60] font-semibold inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" /> {t.simulator.testNote}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
