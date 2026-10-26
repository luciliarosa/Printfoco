import React, { useState } from 'react';
import { siteConfig } from '../data/content';
import { 
  MessageCircle, Mail, Send, 
  Sparkles, CheckCircle2, Phone, Heart 
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
    <section id="contato" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f4f1e8] to-[#ffffff]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d9d6c1]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Call to Action */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7c60]">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>Vamos Conversar?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury leading-tight text-[#191919]">
            Faça Parte da Nossa Jornada de <span className="text-[#ab9a7d] italic font-normal underline decoration-[#d9d6c1] underline-offset-4">Eternizar Memórias</span>
          </h2>

          <p className="text-[#555555] text-base sm:text-lg font-normal leading-relaxed">
            Junte-se à Printfoco e deixe sua marca no mundo! Estamos prontos para criar o projeto perfeito para você.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#ffffff] border border-[#ab9a7d] hover:border-[#191919] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    WhatsApp Principal
                  </span>
                  <span className="text-lg font-bold text-[#191919] font-serif-luxury">
                    {siteConfig.contact.phone}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Conversar &rarr;
              </span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-6 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#8c7c60]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    E-mail Oficial
                  </span>
                  <span className="text-sm font-medium text-[#191919] break-all">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Enviar E-mail &rarr;
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    Instagram
                  </span>
                  <span className="text-sm font-medium text-[#191919]">
                    @{siteConfig.contact.instagram}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Seguir &rarr;
              </span>
            </a>

            {/* Facebook Card */}
            <a
              href={siteConfig.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FacebookIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    Facebook
                  </span>
                  <span className="text-sm font-medium text-[#191919]">
                    PrintFoco
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Acessar &rarr;
              </span>
            </a>

          </div>

          {/* Quick Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#ffffff] border-2 border-[#d9d6c1] p-8 shadow-md relative">
              <h3 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-2">
                Solicite uma Proposta Personalizada
              </h3>
              <p className="text-xs text-[#666666] mb-6">
                Preencha os dados abaixo para enviarmos uma mensagem direta pelo WhatsApp com tudo organizado:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Clara"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] text-sm focus:border-[#ab9a7d] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                      Serviço Desejado
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] text-sm focus:border-[#ab9a7d] outline-none"
                    >
                      <option value="Convite Virtual Interativo">Convite Virtual Interativo (Destaque)</option>
                      <option value="Convite em Vídeo Animado">Convite em Vídeo Animado</option>
                      <option value="Convite em Imagem Digital">Convite em Imagem Digital</option>
                      <option value="Retrospectiva Infantil">Retrospectiva Infantil</option>
                      <option value="Retrospectiva Adulto/Viagem">Retrospectiva Adulto / Viagem / Homenagens</option>
                      <option value="Posts para Redes Sociais (Imagens/Vídeos)">Posts para Redes Sociais (Imagens/Vídeos)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                    Data Prevista do Evento (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 15 de Outubro ou A definir"
                    value={formData.dataEvento}
                    onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] text-sm focus:border-[#ab9a7d] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                    Conte-nos sobre a ideia ou evento
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Gostaria de saber os valores para um convite interativo com tema especial..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] text-sm focus:border-[#ab9a7d] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-[#191919] text-white hover:bg-[#ab9a7d] shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-medium">
                  Sua mensagem foi gerada e redirecionada para o WhatsApp da Printfoco!
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
