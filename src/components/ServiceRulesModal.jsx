import React, { useEffect } from 'react';
import { 
  X, Globe, Clock, Download, Camera, Music, ShieldCheck, 
  Wifi, Smartphone, Laptop, MessageCircle, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/content';

export default function ServiceRulesModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const rules = [
    {
      icon: Globe,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      title: "1. Entrega 100% Online via Link Exclusivo",
      desc: "Tanto os Convites Interativos quanto os Vídeos de Retrospectiva são entregues por meio de um link web seguro e personalizado (URL exclusiva da Printfoco).",
      details: [
        "Acesso direto pelo navegador do celular, tablet, computador ou Smart TV sem precisar instalar nenhum aplicativo.",
        "Requisito Técnico: Como tudo é hospedado na nuvem, os convidados e anfitriões precisam de conexão com a Internet (Wi-Fi ou 4G/5G) para abrir o link."
      ]
    },
    {
      icon: Clock,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      title: "2. Prazo de Disponibilidade Online (Até 5 Dias Pós-Evento)",
      desc: "O link online do convite e da retrospectiva fica ativo durante todo o período pré-evento e permanece no ar por até 5 (cinco) dias corridos após a data do evento.",
      details: [
        "Esse prazo garante que parentes distantes, amigos e convidados que não puderam ir possam rever as fotos, vídeos e mensagens logo após a comemoração.",
        "Após o 5º dia pós-evento, o link é desativado para garantir total privacidade e segurança das fotos da família."
      ]
    },
    {
      icon: Download,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: "3. Download Vitalício em Vídeo MP4 (Retrospectivas)",
      desc: "Para as Retrospectivas em Vídeo, além do link online para projeção na festa, disponibilizamos a opção de baixar o arquivo original do vídeo em MP4 (Full HD).",
      details: [
        "Você pode fazer o download do arquivo de vídeo direto no celular ou computador durante o período em que o link estiver ativo.",
        "Assim, você guarda a retrospectiva no seu pendrive, disco rígido ou nuvem pessoal para sempre, com máxima qualidade!"
      ]
    },
    {
      icon: Camera,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      title: "4. Como Enviar suas Fotos e Vídeos",
      desc: "O processo de envio das suas memórias é prático, rápido e flexível:",
      details: [
        "Envio direto pelo WhatsApp ou através de uma pasta compartilhada no Google Drive.",
        "Aceitamos fotos antigas escaneadas, fotos digitais tiradas no celular e mini-vídeos gravados tanto na vertical quanto na horizontal.",
        "Nossa equipe organiza a ordem cronológica e trata o enquadramento de cada imagem."
      ]
    },
    {
      icon: Music,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      title: "5. Trilha Sonora Personalizada & Prévia",
      desc: "Você escolhe as músicas especiais que marcaram a sua história para emocionar os convidados.",
      details: [
        "Enviamos uma prévia completa antes do evento para você conferir as fotos, textos e efeitos com tranquilidade.",
        "Ajustes de legendas ou ordem podem ser solicitados dentro do prazo acordado."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#000000]/70 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-3xl border-2 border-[#c5a880] shadow-2xl p-5 sm:p-7 md:p-9 z-10 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#faf8f5] border border-[#ebe6dc] text-[#666666] hover:text-[#1c1b1a] hover:bg-[#ebe6dc] flex items-center justify-center transition-colors shadow-xs"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf8f5] border border-[#c5a880] text-[11px] font-bold uppercase tracking-wider text-[#9f825b] mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Transparência & Qualidade Printfoco</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-[#1c1b1a]">
            Como Funciona & Regras de Acesso
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-1.5 leading-relaxed">
            Entenda como entregamos seus Convites Interativos e Retrospectivas em Vídeo, os prazos de disponibilidade online e as opções de download permanente.
          </p>
        </div>

        {/* Warning Banner - Necessidade de Internet */}
        <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#c5a880]/20 text-[#9f825b] shrink-0 mt-0.5">
            <Wifi className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            <strong className="text-[#1c1b1a] block font-bold mb-0.5">
              Aviso Importante sobre Acesso:
            </strong>
            Como todos os projetos são disponibilizados através de links web interativos, é indispensável que os convidados e anfitriões tenham <strong>conexão com a internet</strong> ativa para visualizar os conteúdos.
          </div>
        </div>

        {/* Rules Cards List */}
        <div className="space-y-4 mb-8">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-colors shadow-xs"
              >
                <div className="flex items-start gap-3.5 mb-2">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 ${rule.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1c1b1a]">
                      {rule.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] mt-0.5 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>

                <div className="pl-12 sm:pl-14 space-y-1.5 pt-1">
                  {rule.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#555555]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#ebe6dc] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#777777] text-center sm:text-left">
            Dúvidas sobre o seu evento? Converse diretamente com nossa equipe.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-[#555555] bg-[#faf8f5] hover:bg-[#ebe6dc] border border-[#ebe6dc] transition-colors"
            >
              Entendi e Fechar
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre as regras e prazos dos serviços da Printfoco.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#1c1b1a] hover:bg-[#c5a880] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
