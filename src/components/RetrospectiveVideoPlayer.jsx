import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX,
  Film, Smartphone, Monitor, Camera, Video, Zap, Sparkles,
  Download, FileText, CheckCircle2, Crown, Trees, Flower2
} from 'lucide-react';
import { siteConfig } from '../data/content';
import ServiceRulesModal from './ServiceRulesModal';

export default function RetrospectiveVideoPlayer() {
  const [activeTheme, setActiveTheme] = useState('spiderman'); // 'spiderman' | 'princesas' | 'safari' | 'floral'
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [format, setFormat] = useState('horizontal'); // 'horizontal' (16:9) | 'vertical' (9:16)
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [downloadModalNotice, setDownloadModalNotice] = useState(false);

  const playerContainerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const melodyTimerRef = useRef(null);
  const noteIdxRef = useRef(0);

  // --- Temas de Demonstração de Retrospectivas ---
  const themesData = {
    spiderman: {
      id: 'spiderman',
      name: 'Homem-Aranha (Aranhaverso)',
      badge: 'Tema Ação & Aventura',
      icon: '🕷️',
      accentColor: '#dc2626',
      heroColor: '#2563eb',
      borderClass: 'border-[#dc2626]',
      bgHeader: 'bg-[#fef2f2] text-[#b91c1c] border-[#dc2626]',
      buttonClass: 'bg-[#dc2626] text-white',
      soundType: 'sawtooth',
      melody: [
        { freq: 261.63, dur: 0.25 }, // C4
        { freq: 261.63, dur: 0.25 },
        { freq: 261.63, dur: 0.25 },
        { freq: 349.23, dur: 0.55 }, // F4
        { freq: 392.00, dur: 0.35 }, // G4
        { freq: 440.00, dur: 0.45 }, // A4
        { freq: 523.25, dur: 0.65 }, // C5
        { freq: 440.00, dur: 0.35 },
        { freq: 523.25, dur: 0.90 },
      ],
      scenes: [
        {
          type: 'intro',
          title: 'Abertura Heróica',
          badge: 'CENA 01 • ENTRADA NO ARANHAVERSO',
          comicTag: 'THWIP! 🕸️',
          headline: 'ARTHUR NO ARANHAVERSO',
          caption: 'Com grandes poderes vêm grandes comemorações!',
          duration: 6,
          accentColor: '#dc2626',
          heroColor: '#2563eb'
        },
        {
          type: 'photo',
          title: 'A Origem do Herói',
          badge: 'CENA 02 • FOTO DO PARTO / CHEGADA AO MUNDO',
          comicTag: 'ORIGEM! ⚡',
          placeholder: '📸 Espaço para Foto do Nascimento / A Chegada do Herói',
          caption: '18 de Março • Todo grande herói tem uma história de origem lendária...',
          hint: 'Foto da maternidade ou os primeiros dias nos braços dos papais heróis',
          duration: 7,
          accentColor: '#2563eb',
          heroColor: '#dc2626'
        },
        {
          type: 'photo',
          title: 'Treinando Poderes',
          badge: 'CENA 03 • FOTO DE MESVERSÁRIO / FANTASIA',
          comicTag: 'SUPER! 💥',
          placeholder: '📸 Espaço para Foto com Fantasia do Aranha ou Brincando',
          caption: 'Desenvolvendo os superpoderes: sorriso contagiante, fofura e mil travessuras!',
          hint: 'Fotos de mesversário, ensaio temático ou poses heroicas do dia a dia',
          duration: 7,
          accentColor: '#dc2626',
          heroColor: '#facc15'
        },
        {
          type: 'video',
          title: 'Herói em Ação (Vídeo)',
          badge: 'CENA 04 • VÍDEO DO CELULAR DOS PAIS',
          comicTag: 'AÇÃO! 🎬',
          placeholder: '🎬 Espaço para Mini-Vídeo gravado no celular (Herói correndo e pulando)',
          caption: 'Escalando o sofá, lançando teias imaginárias e correndo pela casa toda!',
          hint: 'Vídeo real gravado no WhatsApp ou câmera do celular, com som original sincronizado',
          duration: 8,
          accentColor: '#16a34a',
          heroColor: '#dc2626'
        },
        {
          type: 'outro',
          title: 'Grande Celebração',
          badge: 'CENA 05 • FINAL ÉPICO & PARABÉNS',
          comicTag: 'PARABÉNS! 🎂',
          placeholder: '🎂 Espaço para Foto Oficial dos 4 Aninhos & Mensagem da Família',
          caption: 'Parabéns ao nosso super-herói favorito pelo seu 4º aniversário! Viva o Arthur!',
          hint: 'Encerramento emocionante com a foto principal da festa e os nomes de toda a família',
          duration: 7,
          accentColor: '#f59e0b',
          heroColor: '#dc2626'
        }
      ]
    },
    princesas: {
      id: 'princesas',
      name: 'Reino das Princesas (Menina)',
      badge: 'Tema Conto de Fadas',
      icon: '👑',
      accentColor: '#ec4899',
      heroColor: '#f59e0b',
      borderClass: 'border-[#ec4899]',
      bgHeader: 'bg-[#fdf2f8] text-[#be185d] border-[#ec4899]',
      buttonClass: 'bg-[#ec4899] text-white',
      soundType: 'sine',
      melody: [
        { freq: 523.25, dur: 0.35 }, // C5
        { freq: 659.25, dur: 0.35 }, // E5
        { freq: 783.99, dur: 0.35 }, // G5
        { freq: 1046.50, dur: 0.65 }, // C6
        { freq: 880.00, dur: 0.40 }, // A5
        { freq: 783.99, dur: 0.50 }, // G5
        { freq: 659.25, dur: 0.70 }, // E5
      ],
      scenes: [
        {
          type: 'intro',
          title: 'Abertura Real',
          badge: 'CENA 01 • O PRIMEIRO REINADO',
          comicTag: 'ERA UMA VEZ... ✨',
          headline: 'O REINADO ENCANTADO DE HELENA',
          caption: 'O primeiro aninho da princesinha mais amada do nosso reino...',
          duration: 6,
          accentColor: '#ec4899',
          heroColor: '#f59e0b'
        },
        {
          type: 'photo',
          title: 'O Nascimento Real',
          badge: 'CENA 02 • A CHEGADA DA PRINCESA',
          comicTag: 'BÊNÇÃO! 💖',
          placeholder: '📸 Espaço para Foto da Maternidade / Os Primeiros Olhares',
          caption: 'O dia em que os céus nos presentearam com o maior amor do mundo...',
          hint: 'Foto no colo da mamãe e do papai no hospital ou primeiro banho em casa',
          duration: 7,
          accentColor: '#ec4899',
          heroColor: '#c084fc'
        },
        {
          type: 'photo',
          title: 'Primeiros Sorrisos',
          badge: 'CENA 03 • MÊSVERSÁRIOS & ENSAIO REAL',
          comicTag: 'DOCE MAGIA! 🌸',
          placeholder: '📸 Espaço para Foto com Vestido de Princesa ou Ensaio Newborn',
          caption: 'Iluminando o reino com cada gargalhada e olhar curioso descobrindo a vida...',
          hint: 'Ensaio fotográfico temático de princesa, carruagem ou roupinha com coroa',
          duration: 7,
          accentColor: '#f59e0b',
          heroColor: '#ec4899'
        },
        {
          type: 'video',
          title: 'Passos da Princesa',
          badge: 'CENA 04 • VÍDEO DO CELULAR (PRIMEIROS PASSOS)',
          comicTag: 'EMOÇÃO! 👑',
          placeholder: '🎬 Espaço para Mini-Vídeo Gravado no Celular (Helena Dançando e Andando)',
          caption: 'Os passinhos que enchem a nossa casa de riso e encantamento!',
          hint: 'Vídeo real gravado no celular dos pais, com a voz e a risada doce da bebê',
          duration: 8,
          accentColor: '#a855f7',
          heroColor: '#ec4899'
        },
        {
          type: 'outro',
          title: 'Parabéns Princesa',
          badge: 'CENA 05 • CELEBRAÇÃO DO 1º ANINHO',
          comicTag: 'VIVA A PRINCESA! 🎂',
          placeholder: '🎂 Espaço para Foto Especial de 1 Ano & Agradecimento da Família',
          caption: 'Que a sua vida seja sempre um conto de fadas repleto de amor, saúde e luz!',
          hint: 'Foto com a família real reunida e mensagem de carinho a todos os convidados',
          duration: 7,
          accentColor: '#f59e0b',
          heroColor: '#ec4899'
        }
      ]
    },
    safari: {
      id: 'safari',
      name: 'Aventuras no Safari Baby',
      badge: 'Tema Aventura & Selva',
      icon: '🦁',
      accentColor: '#16a34a',
      heroColor: '#d97706',
      borderClass: 'border-[#16a34a]',
      bgHeader: 'bg-[#f0fdf4] text-[#15803d] border-[#16a34a]',
      buttonClass: 'bg-[#16a34a] text-white',
      soundType: 'triangle',
      melody: [
        { freq: 293.66, dur: 0.3 }, // D4
        { freq: 329.63, dur: 0.3 }, // E4
        { freq: 369.99, dur: 0.3 }, // F#4
        { freq: 440.00, dur: 0.5 }, // A4
        { freq: 369.99, dur: 0.3 },
        { freq: 440.00, dur: 0.6 },
        { freq: 587.33, dur: 0.7 }, // D5
      ],
      scenes: [
        {
          type: 'intro',
          title: 'Expedição na Selva',
          badge: 'CENA 01 • INÍCIO DA EXPEDIÇÃO',
          comicTag: 'RUGIDO! 🐾',
          headline: 'SAFARI DO THEO • 1º ANINHO',
          caption: 'Preparem os chapéus de exploradores para uma aventura selvagem!',
          duration: 6,
          accentColor: '#16a34a',
          heroColor: '#d97706'
        },
        {
          type: 'photo',
          title: 'O Novo Integrante',
          badge: 'CENA 02 • O PEQUENO FILHOTE NASCEU',
          comicTag: 'BEM-VINDO! 🦒',
          placeholder: '📸 Espaço para Foto do Nascimento / Primeiro Mês do Explorador',
          caption: 'O nascimento do pequeno leãozinho que transformou a nossa floresta!',
          hint: 'Foto newborn ou maternidade com bichinho de pelúcia de safari',
          duration: 7,
          accentColor: '#16a34a',
          heroColor: '#eab308'
        },
        {
          type: 'photo',
          title: 'Explorando a Savana',
          badge: 'CENA 03 • MÊSVERSÁRIOS & ROUPINHA DE SAFARI',
          comicTag: 'AVENTURA! 🌴',
          placeholder: '📸 Espaço para Fotos Brincando com Animais / Mêsversários',
          caption: 'Explorando cada cantinho com muita curiosidade e os maiores sorrisos!',
          hint: 'Ensaio fotográfico de safari com jipinho, chapéu de explorador e folhagens',
          duration: 7,
          accentColor: '#d97706',
          heroColor: '#16a34a'
        },
        {
          type: 'video',
          title: 'Vídeo do Explorador',
          badge: 'CENA 04 • MINI-VÍDEO GRAVADO NO CELULAR',
          comicTag: 'SELVA EM FESTA! 🐒',
          placeholder: '🎬 Espaço para Mini-Vídeo do Theo Engatinhando ou Dando Passinhos',
          caption: 'Correndo e explorando a casa com a energia do leãozinho da savana!',
          hint: 'Vídeo real gravado no celular mostrando as travessuras e brincadeiras',
          duration: 8,
          accentColor: '#ca8a04',
          heroColor: '#16a34a'
        },
        {
          type: 'outro',
          title: 'Festa no Safari',
          badge: 'CENA 05 • CELEBRAÇÃO & PARABÉNS',
          comicTag: '1º ANO DE AVENTURA! 🎂',
          placeholder: '🎂 Espaço para Foto Oficial do Aniversário & Mensagem dos Pais',
          caption: 'Parabéns ao nosso pequeno explorador Theo pelo seu 1º aninho de vida!',
          hint: 'Foto com toda a família reunida e agradecimento especial aos convidados',
          duration: 7,
          accentColor: '#16a34a',
          heroColor: '#d97706'
        }
      ]
    },
    floral: {
      id: 'floral',
      name: 'Jardim Encantado / Floral Clean',
      badge: 'Tema Delicado & Romântico',
      icon: '🌸',
      accentColor: '#c5a880',
      heroColor: '#f43f5e',
      borderClass: 'border-[#c5a880]',
      bgHeader: 'bg-[#faf8f5] text-[#9f825b] border-[#c5a880]',
      buttonClass: 'bg-[#c5a880] text-white',
      soundType: 'triangle',
      melody: [
        { freq: 261.63, dur: 0.4 }, // C4
        { freq: 329.63, dur: 0.4 }, // E4
        { freq: 392.00, dur: 0.4 }, // G4
        { freq: 523.25, dur: 0.8 }, // C5
        { freq: 440.00, dur: 0.4 }, // A4
        { freq: 392.00, dur: 0.6 }, // G4
      ],
      scenes: [
        {
          type: 'intro',
          title: 'Florescer da Vida',
          badge: 'CENA 01 • JARDIM DE MEMÓRIAS',
          comicTag: 'FLORESCER... 🌷',
          headline: 'O JARDIM DE MEMÓRIAS DA LAURA',
          caption: 'Como as mais belas flores da primavera, cada momento vivido é eterno...',
          duration: 6,
          accentColor: '#c5a880',
          heroColor: '#f43f5e'
        },
        {
          type: 'photo',
          title: 'Primeiras Pétalas',
          badge: 'CENA 02 • O INÍCIO DE TUDO',
          comicTag: 'GRATIDÃO! 🌿',
          placeholder: '📸 Espaço para Foto Especial de Família / Nascimento',
          caption: 'A semente do amor plantada em nossos corações que floresceu para sempre...',
          hint: 'Foto delicada em tons claros, newborn ou momento de carinho em família',
          duration: 7,
          accentColor: '#f43f5e',
          heroColor: '#c5a880'
        },
        {
          type: 'photo',
          title: 'Desabrochar',
          badge: 'CENA 03 • SORRISOS & CONQUISTAS',
          comicTag: 'DELICADEZA! 🌸',
          placeholder: '📸 Espaço para Fotos de Ensaio Floral / Mêsversários',
          caption: 'A beleza dos detalhes que encantam os nossos dias com leveza e paz...',
          hint: 'Ensaio fotográfico no jardim, guirlanda de flores ou ensaio em luz natural',
          duration: 7,
          accentColor: '#c5a880',
          heroColor: '#e11d48'
        },
        {
          type: 'video',
          title: 'Momento Especial',
          badge: 'CENA 04 • MINI-VÍDEO EMOCIONANTE',
          comicTag: 'POESIA VIVA! 🕊️',
          placeholder: '🎬 Espaço para Mini-Vídeo Gravado no Celular (Sorriso & Carinho)',
          caption: 'Imagens em movimento que guardam a doçura e a pureza de cada instante...',
          hint: 'Vídeo de celular com momentos descontraídos e a voz doce da criança',
          duration: 8,
          accentColor: '#f43f5e',
          heroColor: '#c5a880'
        },
        {
          type: 'outro',
          title: 'Florescer da Festa',
          badge: 'CENA 05 • CELEBRAÇÃO & MENSAGEM FINAL',
          comicTag: 'LUZ & AMOR! 🌺',
          placeholder: '🎂 Espaço para Foto Oficial da Aniversariante & Mensagem',
          caption: 'Que o seu caminho seja sempre repleto de pétalas de alegria e bênçãos!',
          hint: 'Foto com toda a família e agradecimento aos convidados por compartilharem a data',
          duration: 7,
          accentColor: '#c5a880',
          heroColor: '#f43f5e'
        }
      ]
    }
  };

  const currentThemeData = themesData[activeTheme];
  const scenes = currentThemeData.scenes;
  const totalDuration = scenes.reduce((acc, s) => acc + s.duration, 0);

  // --- Web Audio Synthesizer Adaptativo ao Tema ---
  const playThemeMusic = () => {
    if (!audioCtxRef.current || isMuted || !isPlaying) return;

    try {
      const ctx = audioCtxRef.current;
      const melody = currentThemeData.melody;
      const note = melody[noteIdxRef.current % melody.length];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = currentThemeData.soundType;
      osc.frequency.setValueAtTime(note.freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + note.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + note.dur);

      noteIdxRef.current++;
      melodyTimerRef.current = setTimeout(playThemeMusic, note.dur * 1000);
    } catch {
      // Ignorar silenciosamente erros de áudio
    }
  };

  const startAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    clearTimeout(melodyTimerRef.current);
    playThemeMusic();
  };

  const stopAudio = () => {
    clearTimeout(melodyTimerRef.current);
  };

  // Troca de tema
  const handleSelectTheme = (themeKey) => {
    setActiveTheme(themeKey);
    setCurrentScene(0);
    setProgress(0);
    setTransitionKey(prev => prev + 1);
  };

  // Disparo de chave de transição a cada troca de cena
  useEffect(() => {
    setTransitionKey(prev => prev + 1);
  }, [currentScene]);

  // --- Controle de Playback & Avanço de Cenas ---
  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      startAudio();
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.5;
          if (next >= totalDuration) {
            setIsPlaying(false);
            stopAudio();
            return 0;
          }

          let accumulated = 0;
          for (let i = 0; i < scenes.length; i++) {
            accumulated += scenes[i].duration;
            if (next < accumulated) {
              if (currentScene !== i) {
                setCurrentScene(i);
              }
              break;
            }
          }

          return next;
        });
      }, 500);
    } else {
      stopAudio();
    }

    return () => {
      clearInterval(interval);
      stopAudio();
    };
  }, [isPlaying, isMuted, currentScene, activeTheme]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restartVideo = () => {
    setProgress(0);
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const jumpToScene = (sceneIndex) => {
    let accumulated = 0;
    for (let i = 0; i < sceneIndex; i++) {
      accumulated += scenes[i].duration;
    }
    setProgress(accumulated);
    setCurrentScene(sceneIndex);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const activeScene = scenes[currentScene] || scenes[0];

  return (
    <div className={`rounded-3xl bg-[#ffffff] border-2 ${currentThemeData.borderClass} p-4 sm:p-7 md:p-9 shadow-xl overflow-hidden mb-12 sm:mb-16 transition-colors duration-500`}>
      
      {/* CSS Injetado com Transições Profissionais de Vídeo */}
      <style>{`
        @keyframes sceneCinematicEnter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
            filter: blur(8px);
          }
          40% { filter: blur(2px); }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }
        @keyframes kenBurnsEffect {
          0% { transform: scale(0.97) translate(-1%, -0.5%); }
          50% { transform: scale(1.04) translate(1%, 0.5%); }
          100% { transform: scale(1.01) translate(-0.5%, 1%); }
        }
        @keyframes webWipeBurst {
          0% { opacity: 0; transform: scale(0.3) rotate(-45deg); }
          25% { opacity: 0.95; transform: scale(1.2) rotate(0deg); }
          65% { opacity: 0.9; transform: scale(1.6) rotate(15deg); }
          100% { opacity: 0; transform: scale(2.4) rotate(35deg); }
        }
        @keyframes comicLightLeak {
          0% {
            opacity: 0.85;
            background: radial-gradient(circle at center, rgba(220, 38, 38, 0.7) 0%, rgba(37, 99, 235, 0.5) 45%, transparent 75%);
          }
          100% { opacity: 0; background: transparent; }
        }
        @keyframes glassShine {
          0% { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
          20% { opacity: 0.5; }
          55% { transform: translateX(250%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(250%) skewX(-20deg); opacity: 0; }
        }
        @keyframes captionSlideIn {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spideySwing {
          0%, 100% { transform: rotate(-14deg); }
          50% { transform: rotate(14deg); }
        }
        @keyframes floatingPetals {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(80px) rotate(180deg); opacity: 0; }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { transform: scale(0.6); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .animate-scene-enter { animation: sceneCinematicEnter 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-ken-burns { animation: kenBurnsEffect 7s ease-in-out infinite alternate; }
        .animate-web-wipe { animation: webWipeBurst 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-light-leak { animation: comicLightLeak 0.65s ease-out forwards; }
        .animate-glass-shine { animation: glassShine 4.5s ease-in-out infinite; }
        .animate-caption-enter { animation: captionSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards; opacity: 0; }
        .animate-spidey-swing { transform-origin: top center; animation: spideySwing 3.6s ease-in-out infinite; }
        .animate-sparkle { animation: sparkleTwinkle 2.5s ease-in-out infinite; }
        .animate-petal-1 { animation: floatingPetals 4s ease-in infinite; }
        .animate-petal-2 { animation: floatingPetals 5s ease-in 1.5s infinite; }
      `}</style>

      {/* Top Banner Informativo: Link Online + Download MP4 */}
      <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#c5a880]/20 text-[#9f825b] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[#c5a880]" />
          </div>
          <div className="text-xs sm:text-sm text-[#444444]">
            <strong className="text-[#1c1b1a] block font-bold">
              Exclusividade Printfoco: Retrospectiva Online via Link + Download em Vídeo MP4
            </strong>
            <span>Link ativo na nuvem até 5 dias pós-evento com opção de baixar o arquivo MP4 para guardar para sempre!</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsRulesModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1c1b1a] bg-[#ffffff] border border-[#c5a880] hover:bg-[#c5a880] hover:text-white transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#c5a880] group-hover:text-white" />
            <span>Regras & Como Funciona</span>
          </button>

          <button
            type="button"
            onClick={() => setDownloadModalNotice(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#1c1b1a] hover:bg-[#c5a880] transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Vídeo MP4</span>
          </button>
        </div>
      </div>

      {/* SELETOR DE TEMAS DE RETROSPECTIVA */}
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9f825b] block mb-2.5">
          Escolha um Tema para Ver a Demonstração em Vídeo:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          
          {/* 1. Homem-Aranha */}
          <button
            type="button"
            onClick={() => handleSelectTheme('spiderman')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
              activeTheme === 'spiderman'
                ? 'bg-[#dc2626] text-white border-[#dc2626] shadow-md scale-[1.02]'
                : 'bg-[#faf8f5] text-[#444] border-[#ebe6dc] hover:border-[#dc2626]'
            }`}
          >
            <span className="text-xl">🕷️</span>
            <div className="truncate">
              <strong className="text-xs block font-bold truncate">Homem-Aranha</strong>
              <span className="text-[10px] block opacity-80 truncate">Aranhaverso / Ação</span>
            </div>
          </button>

          {/* 2. Princesas */}
          <button
            type="button"
            onClick={() => handleSelectTheme('princesas')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
              activeTheme === 'princesas'
                ? 'bg-[#ec4899] text-white border-[#ec4899] shadow-md scale-[1.02]'
                : 'bg-[#faf8f5] text-[#444] border-[#ebe6dc] hover:border-[#ec4899]'
            }`}
          >
            <span className="text-xl">👑</span>
            <div className="truncate">
              <strong className="text-xs block font-bold truncate">Princesas Reais</strong>
              <span className="text-[10px] block opacity-80 truncate">Menina / 1º Aninho</span>
            </div>
          </button>

          {/* 3. Safari */}
          <button
            type="button"
            onClick={() => handleSelectTheme('safari')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
              activeTheme === 'safari'
                ? 'bg-[#16a34a] text-white border-[#16a34a] shadow-md scale-[1.02]'
                : 'bg-[#faf8f5] text-[#444] border-[#ebe6dc] hover:border-[#16a34a]'
            }`}
          >
            <span className="text-xl">🦁</span>
            <div className="truncate">
              <strong className="text-xs block font-bold truncate">Safari dos Bichinhos</strong>
              <span className="text-[10px] block opacity-80 truncate">Aventura / Selva Baby</span>
            </div>
          </button>

          {/* 4. Flores */}
          <button
            type="button"
            onClick={() => handleSelectTheme('floral')}
            className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
              activeTheme === 'floral'
                ? 'bg-[#c5a880] text-white border-[#c5a880] shadow-md scale-[1.02]'
                : 'bg-[#faf8f5] text-[#444] border-[#ebe6dc] hover:border-[#c5a880]'
            }`}
          >
            <span className="text-xl">🌸</span>
            <div className="truncate">
              <strong className="text-xs block font-bold truncate">Jardim Floral</strong>
              <span className="text-[10px] block opacity-80 truncate">Delicado / 15 Anos</span>
            </div>
          </button>

        </div>
      </div>

      {/* Video Viewport Top Header & Format Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#ebe6dc]">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1.5 border ${currentThemeData.bgHeader}`}>
            <span>{currentThemeData.icon}</span>
            <span>{currentThemeData.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a]">
            {currentThemeData.name}
          </h2>
        </div>

        {/* Format Switcher (16:9 vs 9:16) */}
        <div className="flex items-center gap-2 bg-[#faf8f5] p-1.5 rounded-2xl border border-[#ebe6dc] shrink-0 self-start md:self-auto">
          <span className="text-[11px] font-bold text-[#64748b] uppercase px-2 hidden sm:inline">
            Formato:
          </span>
          <button
            type="button"
            onClick={() => setFormat('horizontal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              format === 'horizontal'
                ? `${currentThemeData.buttonClass} shadow-md`
                : 'text-[#64748b] hover:text-[#111827]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>16:9 (Telão / TV)</span>
          </button>

          <button
            type="button"
            onClick={() => setFormat('vertical')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              format === 'vertical'
                ? `${currentThemeData.buttonClass} shadow-md`
                : 'text-[#64748b] hover:text-[#111827]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>9:16 (Stories / Reels)</span>
          </button>
        </div>
      </div>

      {/* Main Video Viewport Screen */}
      <div className="py-6 sm:py-8 flex justify-center">
        <div 
          ref={playerContainerRef}
          className={`relative bg-[#07090e] rounded-2xl sm:rounded-3xl border-4 border-[#1e293b] shadow-2xl overflow-hidden transition-all duration-500 select-none ${
            format === 'horizontal' 
              ? 'w-full max-w-[840px] aspect-video' 
              : 'w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16]'
          }`}
        >
          
          {/* Spotlight Heroico Dinâmico */}
          <div 
            className="absolute -top-12 -left-12 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none transition-colors duration-1000"
            style={{ backgroundColor: activeScene.accentColor }}
          />
          <div 
            className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none transition-colors duration-1000"
            style={{ backgroundColor: activeScene.heroColor }}
          />

          {/* Flash Óptico e Wipe de Transição Entre Cenas */}
          <div 
            key={`transition-overlay-${transitionKey}`}
            className="absolute inset-0 pointer-events-none z-35 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 animate-light-leak" />
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full max-w-[500px] text-white pointer-events-none animate-web-wipe drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
            >
              <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
              <circle cx="100" cy="100" r="60" fill="none" stroke={currentThemeData.accentColor} strokeWidth="2" opacity="0.85" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </div>

          {/* ELEMENTOS VISUAIS EXCLUSIVOS POR TEMA (AUTOMÁTICOS) */}
          
          {/* 1. Efeitos Homem-Aranha */}
          {activeTheme === 'spiderman' && (
            <>
              {/* Teias Superiores */}
              <svg viewBox="0 0 120 120" className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 text-white/50 pointer-events-none z-20">
                <line x1="0" y1="0" x2="120" y2="0" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="0" x2="0" y2="120" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0,30 Q30,30 30,0 M0,60 Q60,60 60,0 M0,90 Q90,90 90,0" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <div className="absolute top-0 right-14 sm:right-20 z-30 pointer-events-none animate-spidey-swing">
                <div className="w-[1.5px] h-12 sm:h-20 bg-white/70 mx-auto" />
                <div className="w-6 h-6 text-red-500 text-lg">🕷️</div>
              </div>
            </>
          )}

          {/* 2. Efeitos Princesas (Brilhos & Coroa) */}
          {activeTheme === 'princesas' && (
            <>
              <div className="absolute top-4 left-6 z-20 pointer-events-none text-pink-300 text-xs animate-sparkle">✨</div>
              <div className="absolute top-10 right-12 z-20 pointer-events-none text-amber-300 text-sm animate-sparkle" style={{ animationDelay: '1s' }}>⭐</div>
              <div className="absolute bottom-16 left-12 z-20 pointer-events-none text-pink-200 text-sm animate-sparkle" style={{ animationDelay: '0.5s' }}>💖</div>
              <div className="absolute top-0 right-14 sm:right-20 z-30 pointer-events-none animate-spidey-swing">
                <div className="w-[1px] h-12 sm:h-16 bg-pink-200/80 mx-auto" />
                <div className="text-xl">👑</div>
              </div>
            </>
          )}

          {/* 3. Efeitos Safari (Folhas Tropicais & Pegadas) */}
          {activeTheme === 'safari' && (
            <>
              <div className="absolute top-2 left-3 z-20 pointer-events-none text-green-400 text-2xl animate-spidey-swing">🌿</div>
              <div className="absolute top-2 right-4 z-20 pointer-events-none text-emerald-400 text-2xl animate-spidey-swing" style={{ animationDelay: '1.2s' }}>🍃</div>
              <div className="absolute top-0 right-14 sm:right-20 z-30 pointer-events-none animate-spidey-swing">
                <div className="w-[1.5px] h-12 sm:h-16 bg-amber-700/60 mx-auto" />
                <div className="text-xl">🐒</div>
              </div>
            </>
          )}

          {/* 4. Efeitos Jardim Floral (Pétalas de Rosas Flutuando) */}
          {activeTheme === 'floral' && (
            <>
              <div className="absolute top-4 left-8 z-20 pointer-events-none text-rose-300 text-sm animate-petal-1">🌸</div>
              <div className="absolute top-6 right-16 z-20 pointer-events-none text-rose-200 text-xs animate-petal-2">🌸</div>
              <div className="absolute top-0 right-14 sm:right-20 z-30 pointer-events-none animate-spidey-swing">
                <div className="w-[1px] h-12 sm:h-16 bg-rose-200/70 mx-auto" />
                <div className="text-xl">🦋</div>
              </div>
            </>
          )}

          {/* Rolo de Filme Cinematográfico Superior */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[#0a0d14] border-b border-[#1e293b] z-20 flex items-center justify-between px-2 overflow-hidden opacity-75">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2 bg-[#000000] rounded-xs border border-[#334155]" />
            ))}
          </div>

          {/* Top Scene Badge */}
          <div className="absolute top-6 left-4 z-30 flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#111827]/90 text-[#f8fafc] border border-white/20 shadow-md backdrop-blur-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentThemeData.accentColor }} />
              {activeScene.badge}
            </span>
          </div>

          {/* Marca D'água */}
          <div className="absolute top-6 right-4 z-30 opacity-85">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#000000]/80 px-2.5 py-1 rounded-full border border-white/20 text-white flex items-center gap-1">
              <span>{currentThemeData.icon}</span> Printfoco Vídeo
            </span>
          </div>

          {/* Balão Comic / Tag do Tema */}
          <div 
            key={`comic-badge-${transitionKey}`}
            className="absolute top-14 right-6 sm:top-16 sm:right-16 z-30 pointer-events-none animate-caption-enter"
          >
            <div className="bg-[#facc15] text-[#111827] font-black text-[10px] sm:text-xs tracking-wider uppercase px-2.5 py-1 rounded-lg border border-black shadow-md rotate-[-4deg]">
              <span>{activeScene.comicTag}</span>
            </div>
          </div>

          {/* --- CONTEÚDO PRINCIPAL DA CENA EM VÍDEO --- */}
          <div 
            key={`scene-container-${transitionKey}`}
            className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 relative z-20 text-center animate-scene-enter"
          >
            
            {/* CENA 1: ABERTURA */}
            {activeScene.type === 'intro' && (
              <div className="space-y-3 sm:space-y-4 max-w-lg">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-white flex items-center justify-center shadow-lg animate-pulse"
                  style={{ backgroundColor: currentThemeData.accentColor }}
                >
                  <span className="text-2xl sm:text-3xl">{currentThemeData.icon}</span>
                </div>

                <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#facc15] uppercase block drop-shadow-md">
                  Uma Produção Inesquecível
                </span>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#ffffff] tracking-tight uppercase drop-shadow-md">
                  {activeScene.headline}
                </h3>

                <div className="animate-caption-enter">
                  <p className="text-xs sm:text-sm text-[#cbd5e1] font-medium italic max-w-md mx-auto">
                    "{activeScene.caption}"
                  </p>
                </div>

                <div className="pt-2 animate-caption-enter">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#f8fafc] border border-white/20 px-3.5 py-1 rounded-full bg-[#1e293b]/90 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping" />
                    Trilha Sonora Sincronizada com o Tema
                  </span>
                </div>
              </div>
            )}

            {/* CENA 2 & 3: MOLDURAS FOTOGRÁFICAS COM TRANSIÇÃO KEN BURNS */}
            {activeScene.type === 'photo' && (
              <div className="w-full max-w-md space-y-3 sm:space-y-4">
                
                <div 
                  className="relative mx-auto bg-[#0f172a]/95 border-4 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden"
                  style={{ borderColor: currentThemeData.accentColor }}
                >
                  
                  {/* Reflexo de Vidro (Glass Shine) */}
                  <div className="absolute inset-0 pointer-events-none z-15 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />

                  {/* Cantoneiras Temáticas */}
                  <div className="absolute -top-3 -left-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>
                  <div className="absolute -top-3 -right-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>
                  <div className="absolute -bottom-3 -left-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>
                  <div className="absolute -bottom-3 -right-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>

                  {/* Tarja do Painel */}
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-black uppercase px-3 py-0.5 rounded-full border border-white tracking-widest shadow-xs z-20"
                    style={{ backgroundColor: currentThemeData.heroColor }}
                  >
                    Registro Fotográfico Especial
                  </div>

                  {/* Movimento Ken Burns na Moldura */}
                  <div className="animate-ken-burns">
                    <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-[#facc15] mx-auto mb-2 opacity-90 drop-shadow-md" />
                    
                    <strong className="text-xs sm:text-sm md:text-base text-[#ffffff] font-extrabold block mb-1">
                      {activeScene.placeholder}
                    </strong>
                    
                    <p className="text-[11px] sm:text-xs text-[#94a3b8] max-w-sm mx-auto leading-relaxed">
                      {activeScene.hint}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2 relative z-20">
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#facc15] bg-[#1e293b] px-3 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#facc15]" />
                      Efeito Ken Burns de Cinema Ativo
                    </span>
                  </div>
                </div>

                {/* Legenda com Entrada Suave */}
                <div className="animate-caption-enter">
                  <div className="bg-[#030712]/85 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/20 inline-block shadow-md">
                    <p className="text-xs sm:text-sm font-semibold text-[#f8fafc] italic">
                      "{activeScene.caption}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CENA 4: MINI-VÍDEO GRAVADO NO CELULAR */}
            {activeScene.type === 'video' && (
              <div className="w-full max-w-md space-y-3 sm:space-y-4">
                <div 
                  className="relative mx-auto bg-[#091522]/95 border-4 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden"
                  style={{ borderColor: currentThemeData.heroColor }}
                >
                  <div className="absolute inset-0 pointer-events-none z-15 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />

                  <div className="absolute -top-3 -left-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>
                  <div className="absolute -top-3 -right-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>

                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-black uppercase px-3 py-0.5 rounded-full border border-white tracking-widest shadow-xs flex items-center gap-1 z-20"
                    style={{ backgroundColor: currentThemeData.accentColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Gravação Real em Celular
                  </div>

                  <div className="animate-ken-burns">
                    <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mx-auto mb-2 text-white">
                      <Video className="w-6 h-6 animate-pulse" />
                    </div>

                    <strong className="text-xs sm:text-sm md:text-base text-[#ffffff] font-extrabold block mb-1">
                      {activeScene.placeholder}
                    </strong>

                    <p className="text-[11px] sm:text-xs text-[#94a3b8] max-w-sm mx-auto leading-relaxed">
                      {activeScene.hint}
                    </p>
                  </div>

                  <span className="mt-3 inline-block text-[9px] sm:text-[10px] font-bold text-white bg-[#0f172a] px-3 py-0.5 rounded-full border border-white/20 relative z-20">
                    🎬 Áudio Original do Celular com Trilha Emocionante
                  </span>
                </div>

                <div className="animate-caption-enter">
                  <div className="bg-[#030712]/85 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/20 inline-block shadow-md">
                    <p className="text-xs sm:text-sm font-semibold text-[#f8fafc] italic">
                      "{activeScene.caption}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CENA 5: ENCERRAMENTO & PARABÉNS */}
            {activeScene.type === 'outro' && (
              <div className="w-full max-w-md space-y-3 sm:space-y-4">
                <div 
                  className="relative mx-auto bg-[#180a0a]/95 border-4 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden"
                  style={{ borderColor: currentThemeData.accentColor }}
                >
                  <div className="absolute inset-0 pointer-events-none z-15 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />

                  <div className="absolute -top-3 -left-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>
                  <div className="absolute -top-3 -right-3 text-lg select-none pointer-events-none z-20">{currentThemeData.icon}</div>

                  <div className="animate-ken-burns">
                    <span className="text-3xl sm:text-4xl block mb-2 animate-bounce">🎂</span>
                    
                    <strong className="text-xs sm:text-sm md:text-base text-[#ffffff] font-extrabold block mb-1">
                      {activeScene.placeholder}
                    </strong>
                    
                    <p className="text-[11px] sm:text-xs text-[#cbd5e1] max-w-sm mx-auto leading-relaxed">
                      {activeScene.hint}
                    </p>
                  </div>
                </div>

                <div className="animate-caption-enter">
                  <div className="bg-[#030712]/90 backdrop-blur-xs px-4 py-2.5 rounded-xl border-2 border-[#facc15] inline-block shadow-lg">
                    <p className="text-xs sm:text-sm font-extrabold text-[#facc15] tracking-wide">
                      "{activeScene.caption}"
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Rolo de Filme Cinematográfico Inferior */}
          <div className="absolute bottom-12 left-0 right-0 h-4 bg-[#0a0d14] border-t border-[#1e293b] z-20 flex items-center justify-between px-2 overflow-hidden opacity-75">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2 bg-[#000000] rounded-xs border border-[#334155]" />
            ))}
          </div>

          {/* BARRA DE CONTROLES DO VÍDEO (PLAYER BAR) */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0f172a]/95 backdrop-blur-md border-t border-[#1e293b] px-3 sm:px-4 flex items-center justify-between z-30">
            
            {/* Play/Pause & Restart */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-full text-white flex items-center justify-center transition-colors shadow-md"
                style={{ backgroundColor: currentThemeData.accentColor }}
                title={isPlaying ? "Pausar Vídeo" : "Dar Play no Vídeo"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={restartVideo}
                className="w-8 h-8 rounded-full text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors"
                title="Reiniciar Vídeo do Início"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Time Display */}
              <span className="text-[11px] font-mono font-bold text-[#cbd5e1] ml-1">
                {formatTime(progress)} / {formatTime(totalDuration)}
              </span>
            </div>

            {/* Scrubber Progress Bar */}
            <div className="flex-1 mx-3 sm:mx-6">
              <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden cursor-pointer border border-[#334155]">
                <div 
                  className="h-full transition-all duration-300"
                  style={{ 
                    width: `${(progress / totalDuration) * 100}%`,
                    backgroundColor: currentThemeData.accentColor
                  }}
                />
              </div>
            </div>

            {/* Volume Mute */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#cbd5e1] hover:text-white transition-colors p-1"
                title={isMuted ? "Ligar Áudio da Trilha" : "Mutar Trilha"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Cenas Rápidas (Timeline de Navegação) */}
      <div className="pt-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9f825b] block mb-2 text-center md:text-left flex items-center gap-1.5">
          <span>{currentThemeData.icon}</span> Cenas do Tema Selecionado (Clique para navegar):
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {scenes.map((s, idx) => (
            <button
              key={s.id || idx}
              type="button"
              onClick={() => jumpToScene(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                currentScene === idx 
                  ? 'bg-[#1c1b1a] text-white border-[#1c1b1a] shadow-md scale-[1.02]' 
                  : 'bg-[#faf8f5] text-[#334155] border-[#ebe6dc] hover:border-[#c5a880]'
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-bold opacity-80">
                  Cena {idx + 1}
                </span>
                <span className="text-[9px] font-bold text-[#c5a880]">
                  {s.comicTag ? s.comicTag.split(' ')[0] : ''}
                </span>
              </div>
              <strong className="text-xs truncate block font-bold">
                {s.title}
              </strong>
            </button>
          ))}
        </div>
      </div>

      {/* CTA de Pedido de Retrospectiva Personalizada */}
      <div className="mt-8 pt-6 border-t border-[#ebe6dc] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <strong className="text-sm sm:text-base text-[#111827] block font-bold">
            Gostou desses modelos ou quer encomendar um tema exclusivo?
          </strong>
          <p className="text-xs text-[#64748b]">
            Entregamos seu link online para projeção na festa + arquivo original em MP4 Full HD para download permanente!
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setIsRulesModalOpen(true)}
            className="flex-1 sm:flex-none px-4 py-3 rounded-full font-bold text-xs tracking-wider uppercase border border-[#c5a880] text-[#1c1b1a] hover:bg-[#faf8f5] transition-all"
          >
            Regras de Entrega
          </button>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(`Olá! Vi os modelos de retrospectiva em vídeo (tema ${currentThemeData.name}) e gostaria de encomendar a minha.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-all shadow-md shrink-0"
          >
            <span>Pedir Minha Retrospectiva</span>
          </a>
        </div>
      </div>

      {/* Modal de Regras de Serviços */}
      <ServiceRulesModal 
        isOpen={isRulesModalOpen} 
        onClose={() => setIsRulesModalOpen(false)} 
      />

      {/* Modal Demonstrativo de Download de Vídeo MP4 */}
      {downloadModalNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-[#000000]/70 backdrop-blur-xs" 
            onClick={() => setDownloadModalNotice(false)} 
          />
          <div className="relative bg-[#ffffff] rounded-3xl border-2 border-[#c5a880] shadow-2xl p-6 sm:p-8 max-w-md w-full z-10 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-luxury text-[#1c1b1a] mb-2">
              Download em Vídeo MP4 (Full HD)
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
              Na contratação da sua retrospectiva com a Printfoco, você recebe o <strong>link online</strong> para projetar no telão da festa e também o <strong>botão de download do arquivo de vídeo em MP4</strong> para salvar no celular, computador ou pendrive e guardar de recordação para sempre!
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de encomendar uma retrospectiva com link online e arquivo de vídeo em MP4.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-white hover:bg-[#c5a880] transition-colors shadow-sm"
              >
                <span>Encomendar Retrospectiva</span>
              </a>
              <button
                type="button"
                onClick={() => setDownloadModalNotice(false)}
                className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-[#666666] hover:bg-[#faf8f5] transition-colors"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
