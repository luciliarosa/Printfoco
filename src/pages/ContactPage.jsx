import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { 
  MessageCircle, Mail, Sparkles 
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
    <div className="pt-28 pb-24 bg-[#f4f1e8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8c7c60] mb-8 font-medium">
          <Link to="/" className="hover:text-[#191919]">{t.nav.home}</Link>
          <span>/</span>
          <span className="text-[#191919] font-bold">{t.contactPage.breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ab9a7d] bg-[#ffffff] text-xs font-semibold uppercase tracking-wider text-[#8c7c60]">
            <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
            <span>{t.contactPage.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#191919]">
            {t.contactPage.title}
          </h1>
          <p className="text-lg text-[#555555] leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Canais Diretos (SEM MOSTRAR NÚMERO DE TELEFONE EM TEXTO) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#ffffff] border-2 border-[#ab9a7d] hover:border-[#191919] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    Canal Principal
                  </span>
                  <span className="text-base font-bold text-[#191919] font-serif-luxury">
                    {t.contactPage.channelWhatsApp}
                  </span>
                  <span className="text-[11px] text-[#666666] block">{t.contactPage.channelWhatsAppSub}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Iniciar &rarr;
              </span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-6 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#8c7c60]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    {t.contactPage.channelEmail}
                  </span>
                  <span className="text-sm font-medium text-[#191919] break-all">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                Escrever &rarr;
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    {t.contactPage.channelInstagram}
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
              className="p-6 rounded-3xl bg-[#ffffff] border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all hover:bg-[#f4f1e8] group flex items-center justify-between shadow-sm block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FacebookIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8c7c60] font-bold block">
                    {t.contactPage.channelFacebook}
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

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#ffffff] border-2 border-[#d9d6c1] p-8 shadow-md">
              <h2 className="text-2xl font-bold font-serif-luxury text-[#191919] mb-2">
                {t.contactPage.formTitle}
              </h2>
              <p className="text-xs text-[#666666] mb-6">
                {t.contactPage.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                      {t.contactPage.fieldName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactPage.namePlaceholder}
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] text-sm focus:border-[#ab9a7d] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                      {t.contactPage.fieldService}
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] text-sm focus:border-[#ab9a7d] outline-none"
                    >
                      <option value="Convite Virtual Interativo">Convite Virtual Interativo</option>
                      <option value="Convite em Vídeo Animado">Convite em Vídeo Animado</option>
                      <option value="Convite em Imagem Digital">Convite em Imagem Digital</option>
                      <option value="Retrospectiva Infantil">Retrospectiva Infantil</option>
                      <option value="Retrospectiva Adulto/Viagem">Retrospectiva Adulto / Viagem / Homenagens</option>
                      <option value="Posts para Redes Sociais">Posts para Redes Sociais</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                    {t.contactPage.fieldDate}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contactPage.datePlaceholder}
                    value={formData.dataEvento}
                    onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4f1e8] border border-[#d9d6c1] text-[#191919] placeholder-[#888888] text-sm focus:border-[#ab9a7d] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8c7c60] mb-1 font-bold">
                    {t.contactPage.fieldMessage}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.contactPage.messagePlaceholder}
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
                  <span>{t.contactPage.btnSubmit}</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-medium">
                  {t.contactPage.successNotice}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
