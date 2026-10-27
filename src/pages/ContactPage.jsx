import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { 
  MessageCircle, Mail, Sparkles, Send, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/BrandIcons';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    servico: 'Convite Virtual Interativo',
    dataEvento: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Printfoco! Meu nome é ${formData.nome}. Gostaria de um orçamento para ${formData.servico}${formData.dataEvento ? ` na data prevista: ${formData.dataEvento}` : ''}. ${formData.mensagem ? `Detalhes: ${formData.mensagem}` : ''}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-[#faf8f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9f825b] mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-[#1c1b1a]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#1c1b1a] font-bold">{t.contactPage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#9f825b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.contactPage.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-luxury text-[#1c1b1a]">
            {t.contactPage.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Canais Diretos (SEM MOSTRAR NÚMERO DE TELEFONE EM TEXTO) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border-2 border-[#c5a880] hover:border-[#1c1b1a] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    Canal Principal
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#1c1b1a] font-serif-luxury block">
                    {t.contactPage.channelWhatsApp}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#666666] block">{t.contactPage.channelWhatsAppSub}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0">
                Iniciar &rarr;
              </span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#9f825b]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    {t.contactPage.channelEmail}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1c1b1a] truncate block">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                Escrever &rarr;
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    {t.contactPage.channelInstagram}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1c1b1a]">
                    @{siteConfig.contact.instagram}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0">
                Seguir &rarr;
              </span>
            </a>

            {/* Facebook Card */}
            <a
              href={siteConfig.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border border-[#ebe6dc] hover:border-[#c5a880] transition-all hover:bg-[#faf8f5] group flex items-center justify-between shadow-xs block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9f825b] font-bold block">
                    {t.contactPage.channelFacebook}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1c1b1a]">
                    Printfoco
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1c1b1a] group-hover:translate-x-1 transition-transform shrink-0">
                Acessar &rarr;
              </span>
            </a>

          </div>

          {/* Formulário Interativo com WhatsApp */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#ebe6dc] p-5 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-[#1c1b1a] mb-2">
              {t.contactPage.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mb-6">
              {t.contactPage.formSubtitle}
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">Mensagem Direcionada com Sucesso!</h4>
                <p className="text-xs text-emerald-700">
                  {t.contactPage.successNotice}
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
                    {t.contactPage.fieldName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contactPage.namePlaceholder}
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                      {t.contactPage.fieldService}
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
                      {t.contactPage.fieldDate}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contactPage.datePlaceholder}
                      value={formData.dataEvento}
                      onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1c1b1a] uppercase tracking-wider mb-1.5">
                    {t.contactPage.fieldMessage}
                  </label>
                  <textarea
                    rows="3"
                    placeholder={t.contactPage.messagePlaceholder}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full text-xs px-3.5 py-3 rounded-xl border border-[#ebe6dc] bg-[#faf8f5] focus:outline-hidden focus:border-[#c5a880] focus:bg-[#ffffff] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-full font-bold text-xs tracking-wider uppercase bg-[#1c1b1a] text-[#faf8f5] hover:bg-[#c5a880] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group text-center"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>{t.contactPage.btnSubmit}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
