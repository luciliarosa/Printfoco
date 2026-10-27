import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, MapPin, Sparkles, ExternalLink, Play, Pause, Clock, ShieldCheck 
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
      alert(t.simulator.rsvpPlaceholder || "Por favor, digite seu nome.");
      return;
    }
    setRsvpStatus(status);
  };

  const copyPix = () => {
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <section id="convite-interativo" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#ffffff] to-[#faf8f5]">
      {/* Background circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#ebe6dc]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#c5a880]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.interactivePage.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            {t.interactivePage.title}
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            {t.interactivePage.subtitle}
          </p>
        </div>

        {/* Grid: Simulator & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Features Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 order-2 lg:order-1">
            
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
              {t.interactivePage.stepsTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group shadow-xs">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#9f825b]" />
                </div>
                <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">{t.home.featRSVP}</h4>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                  Confirmação direta de presença integrada ao WhatsApp, permitindo controle ágil da lista de convidados.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group shadow-xs">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#9f825b]" />
                </div>
                <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">{t.home.featGPS}</h4>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                  Botões com abertura automática de rotas via Google Maps, Waze ou acionamento de corridas por aplicativo.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group shadow-xs">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#9f825b]" />
                </div>
                <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">{t.home.featCountdown}</h4>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                  Contador ativo em tempo real aumentando a expectativa e o entusiasmo dos convidados até a data.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group shadow-xs">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#9f825b]" />
                </div>
                <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">{t.home.featPix}</h4>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                  Módulo de lista de presentes com chave Pix copia-e-cola segura e elegante para celebrações.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappInviteMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-md text-center"
              >
                <span>{t.interactivePage.btnOrder}</span>
              </a>

              <a
                href="/projects/convites-virtuais/interativos/tema-natal/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-wider text-[#1c1b1a] border border-[#ebe6dc] hover:border-[#1c1b1a] bg-[#ffffff] transition-all shadow-xs text-center"
              >
                <span>{t.interactivePage.btnLiveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#c5a880]" />
              </a>
            </div>

          </div>

          {/* Interactive Live Smartphone Simulator */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 w-full">
            
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
              
              {/* Outer Subtle Shadow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ebe6dc] via-transparent to-[#c5a880]/20 rounded-[44px] blur-xl opacity-60" />

              {/* Smartphone Frame */}
              <div className="relative bg-[#ffffff] border-[3px] sm:border-4 border-[#1c1b1a] rounded-[38px] sm:rounded-[44px] shadow-2xl p-2.5 sm:p-3 overflow-hidden">
                
                {/* Speaker notch */}
                <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 bg-[#1c1b1a] rounded-full flex items-center justify-center gap-2 z-30">
                  <div className="w-8 sm:w-10 h-1 bg-[#444444] rounded-full" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c5a880]" />
                </div>

                {/* Screen Content */}
                <div className="relative bg-[#faf8f5] rounded-[30px] sm:rounded-[34px] overflow-hidden min-h-[480px] sm:min-h-[560px] text-[#1c1b1a] flex flex-col justify-between border border-[#ebe6dc]">
                  
                  {/* Simulator Top Bar / Status */}
                  <div className="pt-7 sm:pt-8 pb-2.5 sm:pb-3 px-3 sm:px-4 bg-[#ffffff] border-b border-[#ebe6dc] flex items-center justify-between text-[10px] sm:text-[11px] text-[#666666]">
                    <span className="flex items-center gap-1 font-bold text-[#1c1b1a]">
                      <Sparkles className="w-3 h-3 text-[#c5a880]" /> {t.simulator.demoBadge}
                    </span>
                    <button 
                      onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                      className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#c5a880]/15 text-[#1c1b1a] hover:bg-[#c5a880] hover:text-white transition-all text-[9.5px] sm:text-[10px] font-semibold"
                    >
                      {isPlayingMusic ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                      <span>{isPlayingMusic ? t.simulator.playingMusic : t.simulator.playMusic}</span>
                    </button>
                  </div>

                  {/* Simulator Main Body */}
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto max-h-[400px] sm:max-h-[460px] scrollbar-thin text-left">
                    
                    {/* Event Banner */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#ffffff] border border-[#ebe6dc]">
                      <img
                        src="/images/c63feeaeadb95346e55b91e717a22044.jpg"
                        alt="Aniversário Especial"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/90 via-[#1c1b1a]/30 to-transparent" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 text-center text-white">
                        <h4 className="text-sm sm:text-base font-serif-luxury font-bold leading-tight">{t.simulator.eventTitle}</h4>
                        <p className="text-[10px] sm:text-[11px] text-[#faf8f5]">{t.simulator.eventDate}</p>
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#ffffff] border border-[#ebe6dc] text-center shadow-xs">
                      <span className="text-[9px] sm:text-[10px] text-[#9f825b] uppercase tracking-wider block mb-1 font-semibold">
                        {t.simulator.countdownTitle}
                      </span>
                      <div className="grid grid-cols-4 gap-1 text-center">
                        <div className="bg-[#faf8f5] p-1 rounded-lg border border-[#ebe6dc]">
                          <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-mono">{timeLeft.days}</span>
                          <span className="text-[7.5px] sm:text-[8px] text-[#666666]">{t.simulator.days}</span>
                        </div>
                        <div className="bg-[#faf8f5] p-1 rounded-lg border border-[#ebe6dc]">
                          <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-mono">{timeLeft.hours}</span>
                          <span className="text-[7.5px] sm:text-[8px] text-[#666666]">{t.simulator.hours}</span>
                        </div>
                        <div className="bg-[#faf8f5] p-1 rounded-lg border border-[#ebe6dc]">
                          <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-mono">{timeLeft.minutes}</span>
                          <span className="text-[7.5px] sm:text-[8px] text-[#666666]">{t.simulator.min}</span>
                        </div>
                        <div className="bg-[#faf8f5] p-1 rounded-lg border border-[#ebe6dc]">
                          <span className="block text-xs sm:text-sm font-bold text-[#1c1b1a] font-mono">{timeLeft.seconds}</span>
                          <span className="text-[7.5px] sm:text-[8px] text-[#666666]">{t.simulator.sec}</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Tabs in Simulator */}
                    <div className="flex rounded-lg bg-[#ffffff] p-1 text-[10px] sm:text-[11px] border border-[#ebe6dc] shadow-xs">
                      <button
                        onClick={() => setActiveTab('convite')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'convite' ? 'bg-[#1c1b1a] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabRSVP}
                      </button>
                      <button
                        onClick={() => setActiveTab('local')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'local' ? 'bg-[#1c1b1a] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabMap}
                      </button>
                      <button
                        onClick={() => setActiveTab('presentes')}
                        className={`flex-1 py-1 rounded-md transition-all font-semibold ${
                          activeTab === 'presentes' ? 'bg-[#1c1b1a] text-white' : 'text-[#666666]'
                        }`}
                      >
                        {t.simulator.tabGifts}
                      </button>
                    </div>

                    {/* Tab 1: RSVP Form */}
                    {activeTab === 'convite' && (
                      <div className="p-3 rounded-xl bg-[#ffffff] border border-[#ebe6dc] space-y-2.5 animate-fadeIn">
                        <span className="text-xs font-bold text-[#1c1b1a] block font-serif-luxury">
                          {t.simulator.rsvpHeading}
                        </span>
                        
                        {rsvpStatus ? (
                          <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs border border-emerald-200 text-center font-medium">
                            ✓ {rsvpStatus === 'sim' ? t.simulator.rsvpConfirmed : t.simulator.rsvpDeclined}
                            <button 
                              onClick={() => setRsvpStatus(null)} 
                              className="block text-[10px] underline mt-1 text-emerald-600 mx-auto"
                            >
                              {t.simulator.rsvpChange}
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder={t.simulator.rsvpPlaceholder}
                              value={guestName}
                              onChange={(e) => setGuestName(e.target.value)}
                              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-[#ebe6dc] focus:outline-hidden focus:border-[#c5a880] bg-[#faf8f5]"
                            />
                            <div className="grid grid-cols-2 gap-1.5">
                              <button
                                onClick={() => handleSimulateRSVP('sim')}
                                className="w-full py-1.5 rounded-lg bg-emerald-600 text-white text-[10.5px] font-bold hover:bg-emerald-700 transition-colors"
                              >
                                {t.simulator.rsvpYes}
                              </button>
                              <button
                                onClick={() => handleSimulateRSVP('nao')}
                                className="w-full py-1.5 rounded-lg bg-[#ebe6dc] text-[#666666] text-[10.5px] font-medium hover:bg-[#d9d6c1] transition-colors"
                              >
                                {t.simulator.rsvpNo}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Map & Location */}
                    {activeTab === 'local' && (
                      <div className="p-3 rounded-xl bg-[#ffffff] border border-[#ebe6dc] space-y-2 animate-fadeIn">
                        <span className="text-xs font-bold text-[#1c1b1a] block font-serif-luxury">{t.simulator.mapHeading}</span>
                        <p className="text-[11px] text-[#666666] leading-tight">
                          {t.simulator.mapAddress}
                        </p>
                        <div className="pt-1 flex gap-1.5">
                          <button
                            onClick={() => alert("Simulação: Abrindo rota no Google Maps")}
                            className="flex-1 py-1.5 rounded-lg bg-[#faf8f5] text-[#1c1b1a] text-[10px] font-semibold border border-[#ebe6dc] hover:border-[#c5a880]"
                          >
                            {t.simulator.openGoogleMaps}
                          </button>
                          <button
                            onClick={() => alert("Simulação: Abrindo rota no Waze")}
                            className="flex-1 py-1.5 rounded-lg bg-[#faf8f5] text-[#1c1b1a] text-[10px] font-semibold border border-[#ebe6dc] hover:border-[#c5a880]"
                          >
                            {t.simulator.openWaze}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Gifts / Pix */}
                    {activeTab === 'presentes' && (
                      <div className="p-3 rounded-xl bg-[#ffffff] border border-[#ebe6dc] space-y-2 animate-fadeIn text-center">
                        <span className="text-xs font-bold text-[#1c1b1a] block font-serif-luxury">{t.simulator.giftHeading}</span>
                        <p className="text-[11px] text-[#666666]">
                          {t.simulator.giftDesc}
                        </p>
                        <div className="p-2 rounded-lg bg-[#faf8f5] border border-dashed border-[#c5a880] text-[10px] font-mono select-all">
                          {siteConfig.contact.email}
                        </div>
                        <button
                          onClick={copyPix}
                          className="w-full py-1.5 rounded-lg bg-[#1c1b1a] text-white text-[10.5px] font-bold hover:bg-[#c5a880] transition-colors"
                        >
                          {copiedPix ? `✓ ${t.simulator.pixCopied}` : t.simulator.copyPix}
                        </button>
                      </div>
                    )}

                  </div>

                  {/* Simulator Bottom Bar */}
                  <div className="p-2.5 bg-[#ffffff] border-t border-[#ebe6dc] text-center">
                    <span className="text-[9.5px] text-[#9f825b] font-medium">
                      {t.simulator.footerNote}
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
