import React, { useState } from 'react';
import { siteConfig, interactiveTemplates } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import ServiceRulesModal from './ServiceRulesModal';
import { 
  Sparkles, ExternalLink, RotateCcw, Smartphone, Laptop, 
  Crown, TreePine, Footprints, Heart, Baby, Beer, 
  Plane, Ticket, Clapperboard, BookOpen, Gamepad2,
  CheckCircle2, MapPin, Clock, ShieldCheck, FileText, Wifi, Globe
} from 'lucide-react';

export default function InteractiveInviteSection() {
  const { t } = useLanguage();
  
  // Device & Theme State
  const [device, setDevice] = useState('mobile'); // 'mobile' | 'desktop'
  const [selectedThemeId, setSelectedThemeId] = useState('natal');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [iframeKey, setIframeKey] = useState(0); // For reloading the invitation envelope
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  // Current active template
  const currentTheme = interactiveTemplates.find(tpl => tpl.id === selectedThemeId) || interactiveTemplates[0];

  const iconForTheme = (id) => {
    if (id === 'natal') return TreePine;
    if (id === 'princesas') return Crown;
    if (id === 'dinossauro') return Footprints;
    if (id === 'casamento') return Heart;
    if (id === 'cha-revelacao') return Baby;
    if (id === 'aniversario-adulto') return Beer;
    if (id === 'passaporte') return Plane;
    if (id === 'ingresso-vip') return Ticket;
    if (id === 'raspadinha') return Sparkles;
    if (id === 'stories') return Smartphone;
    if (id === 'cinema') return Clapperboard;
    if (id === 'revista') return BookOpen;
    if (id === 'game') return Gamepad2;
    return Sparkles;
  };

  const getTemplateCategory = (id) => {
    if (id === 'casamento' || id === 'passaporte') return 'casamento';
    if (id === 'princesas' || id === 'dinossauro' || id === 'cha-revelacao' || id === 'cinema' || id === 'game') return 'infantil';
    if (id === 'ingresso-vip' || id === 'stories' || id === 'revista') return '15anos';
    return 'adulto'; // natal, aniversario-adulto, raspadinha
  };

  const filteredTemplates = interactiveTemplates.filter(tpl => {
    if (selectedCategory === 'all') return true;
    return getTemplateCategory(tpl.id) === selectedCategory;
  });

  const handleReload = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <section id="convite-interativo" className="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#ffffff] to-[#faf8f5]">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#ebe6dc]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#c5a880]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.interactiveShowcase?.badge || "Simulador com Convites Reais"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            {t.interactiveShowcase?.title || "Modelos Disponíveis & Experiência Ao Vivo"}
          </h2>

          <p className="text-[#555555] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            {t.interactiveShowcase?.subtitle || "Veja os convites reais funcionando dentro do simulador! Toque para abrir o lacre do envelope, ouvir a música, interagir com os recursos e testar no celular ou no computador."}
          </p>

          {/* Aviso sobre Entrega Online via Link & Prazo */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Entrega 100% Online via Link</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Disponível até 5 dias após o evento</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#555555] bg-white px-3 py-1.5 rounded-full border border-[#ebe6dc] shadow-xs">
              <Wifi className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Requer conexão à internet</span>
            </span>

            <button
              type="button"
              onClick={() => setIsRulesModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#1c1b1a] bg-[#faf8f5] px-3.5 py-1.5 rounded-full border border-[#c5a880] hover:bg-[#c5a880] hover:text-white transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Regras & Como Funciona</span>
            </button>
          </div>
        </div>

        {/* Controls Container: Device Switcher & Theme Selector */}
        <div className="max-w-4xl mx-auto space-y-4 mb-6 sm:mb-10">
          
          {/* Device Switcher (Mobile vs Computer) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9f825b]">
              Modo de Visualização:
            </span>
            <div className="inline-flex p-1.5 rounded-2xl bg-[#ebe6dc]/60 border border-[#ebe6dc] w-full sm:w-auto shadow-xs">
              <button
                type="button"
                onClick={() => setDevice('mobile')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-5 rounded-xl text-xs font-bold transition-all ${
                  device === 'mobile'
                    ? 'bg-[#1c1b1a] text-white shadow-sm'
                    : 'text-[#555555] hover:text-[#1c1b1a]'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#c5a880]" />
                <span>Simulador de Celular (Mobile)</span>
              </button>

              <button
                type="button"
                onClick={() => setDevice('desktop')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-5 rounded-xl text-xs font-bold transition-all ${
                  device === 'desktop'
                    ? 'bg-[#1c1b1a] text-white shadow-sm'
                    : 'text-[#555555] hover:text-[#1c1b1a]'
                }`}
              >
                <Laptop className="w-4 h-4 text-[#c5a880]" />
                <span>Simulador de Computador (Desktop)</span>
              </button>
            </div>
          </div>

          {/* Theme Selector Tabs */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9f825b]">
              Selecione o Convite Real para Testar ({filteredTemplates.length} de {interactiveTemplates.length} Modelos):
            </span>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-[#ebe6dc]/40 border border-[#ebe6dc]">
              {[
                { id: 'all', label: 'Todos (13)' },
                { id: 'casamento', label: '💍 Casamentos' },
                { id: '15anos', label: '👑 15 Anos & Balada' },
                { id: 'infantil', label: '🎈 Infantil & Games' },
                { id: 'adulto', label: '🍸 Adulto & Festas' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#1c1b1a] text-white shadow-xs'
                      : 'text-[#555555] hover:text-[#1c1b1a] hover:bg-[#ffffff]/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 w-full">
              {filteredTemplates.map((tpl) => {
                const IconComponent = iconForTheme(tpl.id);
                const isSelected = selectedThemeId === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => {
                      setSelectedThemeId(tpl.id);
                      setIframeKey(prev => prev + 1);
                    }}
                    className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#ffffff] border-2 border-[#1c1b1a] shadow-md ring-2 ring-[#c5a880]/30'
                        : 'bg-[#ffffff]/80 border-[#ebe6dc] hover:border-[#c5a880] hover:bg-[#faf8f5]'
                    }`}
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ 
                        backgroundColor: isSelected ? tpl.accentColor : '#faf8f5',
                        color: isSelected ? '#ffffff' : tpl.accentColor,
                        border: '1px solid #ebe6dc'
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1c1b1a] truncate font-serif-luxury">
                          {tpl.name}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#666666] truncate mt-0.5">
                        {tpl.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme Highlight Banner & Action Buttons */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-[#2a2927]">
              <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0" />
              <span>
                {selectedThemeId === 'natal' && (
                  <>
                    <strong>Tema Natal em Família:</strong> Inclui envelope com lacre, Ceia Compartilhada (prato + bebida) e <strong>Árvore Interativa com bolinhas dos cachorrinhos Thor e Jade</strong>!
                  </>
                )}
                {selectedThemeId === 'princesas' && (
                  <>
                    <strong>Tema 1 Ano Princesas:</strong> Lacre real com coroa, valsa mágica, varinha de condão com chuva de estrelas, RSVP e guia de mimos da Princesa Helena!
                  </>
                )}
                {selectedThemeId === 'dinossauro' && (
                  <>
                    <strong>Tema 1 Ano Dinossauro:</strong> Passaporte jurássico, sons e rugidos de dinos fofos, folhagens tropicais, contagem e confirmação da expedição do Theo!
                  </>
                )}
                {selectedThemeId === 'casamento' && (
                  <>
                    <strong>Tema Casamento Rústico Chic:</strong> Envelope com lacre botânico 3D, melodia clássica de Pachelbel, moldura de foto dos noivos, dress code e cotas Pix de lua de mel!
                  </>
                )}
                {selectedThemeId === 'cha-revelacao' && (
                  <>
                    <strong>Tema Chá Revelação com Enquete:</strong> Caixa de surpresa 3D, enquete ao vivo Theo x Lívia com placar sincronizado com Planilha Google, confetes e canção de ninar!
                  </>
                )}
                {selectedThemeId === 'aniversario-adulto' && (
                  <>
                    <strong>Tema Boteco 40 Anos:</strong> Estilo lousa, caneca de chopp interativa, batucada de samba, brinde com som de taças, cardápio de petiscos e playlist Spotify!
                  </>
                )}
                {selectedThemeId === 'passaporte' && (
                  <>
                    <strong>Tema Passaporte & Cartão de Embarque:</strong> Bilhete aéreo com check-in interativo, carimbo sonoro de visto aprovado, roteiro de Destination Wedding na praia e dicas da mala!
                  </>
                )}
                {selectedThemeId === 'ingresso-vip' && (
                  <>
                    <strong>Tema Ingresso VIP Festival:</strong> Cartão holográfico 3D com efeito flip frente e verso, line-up da noite, resgate de pulseira neon e batida de DJ!
                  </>
                )}
                {selectedThemeId === 'raspadinha' && (
                  <>
                    <strong>Tema Raspadinha Digital:</strong> Película dourada interativa para raspar com o dedo na tela, explosão de fagulhas e revelação de local secreto!
                  </>
                )}
                {selectedThemeId === 'stories' && (
                  <>
                    <strong>Tema Stories em Tela Cheia:</strong> Formato nativo vertical igual ao Instagram, toque para avançar stories, barra de progresso e figurinha de enquete!
                  </>
                )}
                {selectedThemeId === 'cinema' && (
                  <>
                    <strong>Tema Claquete de Cinema:</strong> Claquete de gravação interativa com som de estalo de madeira, holofotes de pré-estreia, combo de pipoca e pôster do aniversariante!
                  </>
                )}
                {selectedThemeId === 'revista' && (
                  <>
                    <strong>Tema Revista Editorial Vogue:</strong> Capa de revista de alta moda, folheamento de páginas editorial, colunas de texto, cronograma e traje gala!
                  </>
                )}
                {selectedThemeId === 'game' && (
                  <>
                    <strong>Tema Arcade 8-bits:</strong> Tela de fliperama retrô com som clássico de moeda 1UP, pixel art animada, power-ups da festa e multiplayer!
                  </>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Reload Button */}
              <button
                type="button"
                onClick={handleReload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faf8f5] text-[#1c1b1a] hover:bg-[#ebe6dc] transition-colors font-bold text-[11px] border border-[#ebe6dc]"
                title="Recarregar e fechar o envelope para abrir novamente"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Reiniciar Envelope</span>
              </button>

              {/* Fullscreen Button */}
              {currentTheme.liveUrl && (
                <a
                  href={currentTheme.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors font-bold text-[11px] shadow-xs"
                >
                  <span>Abrir em Tela Cheia</span>
                  <ExternalLink className="w-3 h-3 text-[#c5a880]" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SIMULATOR VIEWPORT WITH REAL EMBEDDED INVITATION (IFRAME) */}
        {/* ======================================================== */}

        {device === 'mobile' ? (
          /* ======================================= */
          /* REAL INVITATION IN MOBILE PHONE FRAME   */
          /* ======================================= */
          <div className="flex justify-center items-center py-2 sm:py-4">
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] md:max-w-[450px]">
              
              {/* Outer Glow with Theme Color */}
              <div 
                className="absolute -inset-4 rounded-[50px] blur-2xl opacity-35 transition-all duration-500"
                style={{ backgroundColor: currentTheme.accentColor }}
              />

              {/* Smartphone Outer Casing */}
              <div className="relative bg-[#1c1b1a] p-2.5 sm:p-3 rounded-[46px] shadow-2xl border-[4px] border-[#2b2a29]">
                
                {/* Dynamic Island / Speaker Pill */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#111111] rounded-full flex items-center justify-center gap-2 z-30 pointer-events-none">
                  <div className="w-8 h-1 bg-[#2a2927] rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-[#1c1b1a] border border-[#3a3938]" />
                </div>

                {/* Smartphone Screen Viewport with Real Iframe */}
                <div className="relative bg-[#ffffff] rounded-[36px] overflow-hidden shadow-inner border border-[#333333]">
                  <iframe
                    key={`mobile-${currentTheme.id}-${iframeKey}`}
                    src={currentTheme.liveUrl}
                    title={currentTheme.name}
                    className="w-full h-[650px] sm:h-[720px] border-0 rounded-[36px] bg-[#ffffff]"
                    allow="autoplay"
                  />
                </div>

                {/* Home Indicator Bar */}
                <div className="pt-2 pb-1 flex justify-center">
                  <div className="w-28 h-1 bg-[#555555] rounded-full" />
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* ======================================= */
          /* REAL INVITATION IN DESKTOP BROWSER FRAME */
          /* ======================================= */
          <div className="py-2 sm:py-4">
            <div className="max-w-[960px] mx-auto">
              
              {/* Computer Outer Shell */}
              <div className="relative rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-[#1c1b1a] bg-[#1c1b1a] shadow-2xl overflow-hidden p-2 sm:p-2.5">
                
                {/* Browser Top Window Bar */}
                <div className="bg-[#242322] px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between text-xs text-[#888888] border-b border-[#333333]">
                  
                  {/* Traffic Light Dots & Tab Preview */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] inline-block" />
                    
                    {/* Active Tab */}
                    <div className="ml-3 sm:ml-4 hidden sm:flex items-center gap-2 px-3 py-1 bg-[#ffffff] text-[#1c1b1a] rounded-t-lg text-[11px] font-semibold">
                      <Sparkles className="w-3 h-3 text-[#c5a880]" />
                      <span className="max-w-[200px] truncate">{currentTheme.name}</span>
                    </div>
                  </div>

                  {/* Browser Address Bar with URL */}
                  <div className="flex-1 max-w-sm sm:max-w-md mx-2 sm:mx-4 bg-[#1c1b1a] px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-[#c5a880] flex items-center justify-center gap-1.5 border border-[#333333]">
                    <span className="text-emerald-400 text-xs">🔒</span>
                    <span className="truncate">https://printfoco.com.br/convite/{currentTheme.id}</span>
                  </div>

                  {/* Reload button in browser bar */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleReload}
                      className="text-[#9f825b] hover:text-white p-1 rounded-sm transition-colors"
                      title="Recarregar"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                    <span className="hidden md:inline-block text-[10px] text-[#9f825b]">
                      Desktop
                    </span>
                  </div>
                </div>

                {/* Desktop Viewport Screen with Real Iframe */}
                <div className="bg-[#ffffff] rounded-b-xl sm:rounded-b-2xl overflow-hidden shadow-inner">
                  <iframe
                    key={`desktop-${currentTheme.id}-${iframeKey}`}
                    src={currentTheme.liveUrl}
                    title={currentTheme.name}
                    className="w-full h-[620px] sm:h-[700px] border-0 bg-[#ffffff]"
                    allow="autoplay"
                  />
                </div>

                {/* Laptop Base Stand / Chin Notch */}
                <div className="h-3 sm:h-4 bg-gradient-to-b from-[#2a2927] to-[#111111] rounded-b-xl flex items-center justify-center mt-1">
                  <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#444444] rounded-full" />
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* HIGHLIGHTED FEATURES / BENEFITS GRID                    */}
        {/* ======================================================== */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#ebe6dc]">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] uppercase tracking-widest text-[#9f825b] font-bold block mb-1">
              Recursos Avançados
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
              Por Que Escolher um Convite Virtual Interativo?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#9f825b]" />
              </div>
              <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">RSVP no WhatsApp</h4>
              <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                Confirmação direta e instantânea no WhatsApp dos anfitriões, com controle de número de convidados.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#9f825b]" />
              </div>
              <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">GPS & Rotas Integradas</h4>
              <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                Botões de 1 clique que abrem a rota exata no Google Maps e Waze para nenhum convidado se perder.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#9f825b]" />
              </div>
              <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">Cronômetro Regressivo</h4>
              <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                Contador dinâmico em segundos que aumenta a expectativa e engaja seus convidados até a grande data.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-[#9f825b]" />
              </div>
              <h4 className="font-bold text-[#1c1b1a] text-xs sm:text-sm mb-1">Mimos & Pix Rápido</h4>
              <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed">
                Guia de tamanhos e chave Pix elegante com botão de cópia rápida para presentes ou contribuições.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA Action */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappInviteMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-md"
            >
              <span>{t.interactivePage.btnOrder || "Pedir Meu Convite Interativo Personalizado"}</span>
            </a>
          </div>

        </div>

      </div>

      {/* Modal de Regras de Serviços e Prazos */}
      <ServiceRulesModal 
        isOpen={isRulesModalOpen} 
        onClose={() => setIsRulesModalOpen(false)} 
      />
    </section>
  );
}