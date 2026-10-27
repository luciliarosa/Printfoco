import React, { useState } from 'react';
import { siteConfig } from '../data/content';
import { 
  MessageCircle, Mail, Send, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    servico: 'Convite Virtual Interativo',
    dataEvento: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Printfoco! Meu nome é ${formData.nome}. Gostaria de um orçamento para ${formData.servico}${formData.dataEvento ? ` na data: ${formData.dataEvento}` : ''}. ${formData.mensagem ? `Detalhes: ${formData.mensagem}` : ''}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#faf8f5] to-[#ffffff]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ebe6dc]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Call to Action */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#9f825b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Vamos Conversar?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury leading-tight text-[#1c1b1a]">
            Faça Parte da Nossa Jornada de <span className="text-[#c5a880] italic font-normal underline decoration-[#ebe6dc] underline-offset-4">Eternizar Memórias</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Estamos prontos para criar o projeto perfeito para você ou para a sua marca.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* WhatsApp Card (número seguro sem expor em texto) */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#c5a880] hover:border-[#1c1b1a] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    WhatsApp Direto
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1c1b1a] font-serif-luxury">
                    {siteConfig.contact.displayPhone}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0">
                Conversar &rarr;
              </span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-4 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#9f825b]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    E-mail Oficial
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1c1b1a] truncate block">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                Enviar &rarr;
              </span>
            </a>

            {/* Redes Sociais */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#9f825b] font-bold block">
                Siga nossas produções diárias:
              </span>
              <div className="flex gap-3">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center gap-2 text-xs font-bold text-[#1c1b1a] hover:bg-[#c5a880] hover:text-white transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-[#ffffff] border border-[#ebe6dc] flex items-center justify-center gap-2 text-xs font-bold text-[#1c1b1a] hover:bg-[#c5a880] hover:text-white transition-all shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Interactive Form */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#ebe6dc] p-5 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2">
              Solicitar Orçamento Online
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mb-6">
              Preencha com os dados do seu evento para direcionarmos diretamente ao WhatsApp com a proposta estruturada.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">Mensagem Direcionada com Sucesso!</h4>
                <p className="text-xs text-emerald-700">
                  Sua solicitação foi enviada para o WhatsApp da Printfoco. Caso não tenha aberto automaticamente, clique no botão abaixo:
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(`Olá Printfoco! Sou ${formData.nome} e gostaria de orçamento para ${formData.servico}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir WhatsApp Novamente</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Luciana Mendes"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                      Serviço Desejado:
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all text-[#1c1b1a]"
                    >
                      <option value="Convite Virtual Interativo">Convite Virtual Interativo Web</option>
                      <option value="Convite em Vídeo Animado">Convite em Vídeo Animado</option>
                      <option value="Convite em Imagem Digital">Convite em Imagem Digital</option>
                      <option value="Retrospectiva Emocionante">Retrospectiva com Fotos & Música</option>
                      <option value="Posts para Redes Sociais">Posts & Vídeos para Redes Sociais</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                      Data do Evento (Opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 22 de Outubro ou A definir"
                      value={formData.dataEvento}
                      onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                    Detalhes do seu Projeto ou Festa:
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Conte sobre o tema da festa, estilo visual desejado ou quantidade de fotos..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Solicitação pelo WhatsApp</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
