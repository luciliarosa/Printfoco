import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import BrandLogo from './BrandLogo';
import { Mail, ShieldCheck, Clock, MessageCircle, Sparkles, Film, Share2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t border-[#ebe6dc] pt-16 pb-8 text-[#555555] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 colunas perfeitamente organizadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#ebe6dc]">
          
          {/* Coluna 1: Marca & Identidade (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex">
              <BrandLogo size="md" />
            </Link>
            
            <p className="text-xs leading-relaxed text-[#555555] max-w-sm">
              {t.footer.desc}
            </p>

            {/* Redes Sociais */}
            <div className="pt-1">
              <span className="text-[11px] font-bold text-[#1c1b1a] block mb-2 uppercase tracking-wider">
                Canais Oficiais
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#faf8f5] border border-[#ebe6dc] text-[#1c1b1a] hover:bg-[#c5a880] hover:text-white transition-all text-[11px] font-semibold"
                  aria-label="Instagram da Printfoco"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@{siteConfig.contact.instagram}</span>
                </a>
                <a
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#faf8f5] border border-[#ebe6dc] flex items-center justify-center text-[#1c1b1a] hover:bg-[#c5a880] hover:text-white transition-all"
                  aria-label="Facebook da Printfoco"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Institucional (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#1c1b1a] font-bold uppercase tracking-wider text-xs pb-1.5 border-b border-[#c5a880]/40 inline-block font-serif-luxury">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 pt-1">
              <li>
                <Link to="/" className="text-[#555555] hover:text-[#1c1b1a] hover:translate-x-0.5 inline-block transition-all">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-[#555555] hover:text-[#1c1b1a] hover:translate-x-0.5 inline-block transition-all">
                  {t.nav.ourHistory}
                </Link>
              </li>
              <li>
                <Link to="/missao-visao-valores" className="text-[#555555] hover:text-[#1c1b1a] hover:translate-x-0.5 inline-block transition-all">
                  {t.nav.missionVisionValues}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-[#555555] hover:text-[#1c1b1a] hover:translate-x-0.5 inline-block transition-all font-semibold">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-[#9f825b] hover:text-[#1c1b1a] hover:translate-x-0.5 inline-block transition-all text-[11px]">
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Nossos Serviços (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#1c1b1a] font-bold uppercase tracking-wider text-xs pb-1.5 border-b border-[#c5a880]/40 inline-block font-serif-luxury">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 pt-1">
              
              {/* 1. Convite Virtual com formatos */}
              <li className="space-y-1">
                <Link 
                  to="/convites" 
                  className="font-bold text-[#1c1b1a] hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Convites Virtuais</span>
                </Link>
                <div className="pl-5 flex flex-col gap-1 text-[11px] text-[#666666]">
                  <Link to="/convites/interativo" className="hover:text-[#1c1b1a] font-semibold text-[#9e3a4b]">
                    ★ Convite Interativo Web
                  </Link>
                  <Link to="/convites/video" className="hover:text-[#1c1b1a]">
                    • Convite em Vídeo Animado
                  </Link>
                  <Link to="/convites/imagem" className="hover:text-[#1c1b1a]">
                    • Convite em Imagem Digital
                  </Link>
                </div>
              </li>

              {/* 2. Retrospectivas */}
              <li>
                <Link 
                  to="/retrospectivas" 
                  className="font-bold text-[#1c1b1a] hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Film className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Retrospectivas</span>
                </Link>
                <span className="text-[11px] text-[#666666] block pl-5">
                  Edição com trilha sonora e fotos
                </span>
              </li>

              {/* 3. Design de Conteúdo para Redes Sociais */}
              <li>
                <Link 
                  to="/posts-redes-sociais" 
                  className="font-bold text-[#1c1b1a] hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Design para Redes Sociais</span>
                </Link>
                <span className="text-[11px] text-[#666666] block pl-5">
                  Posts, reels, stories e carrosséis
                </span>
              </li>

            </ul>
          </div>

          {/* Coluna 4: Atendimento & Segurança (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#1c1b1a] font-bold uppercase tracking-wider text-xs pb-1.5 border-b border-[#c5a880]/40 inline-block font-serif-luxury">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 pt-1">
              
              {/* WhatsApp Seguro (sem expor o telefone em texto plano) */}
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#faf8f5] hover:bg-[#c5a880]/15 border border-[#ebe6dc] transition-all group"
                title="Iniciar conversa no WhatsApp"
              >
                <div className="w-7 h-7 rounded-full bg-[#1c1b1a] text-white flex items-center justify-center shrink-0 group-hover:bg-[#c5a880] transition-colors">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="block font-bold text-[#1c1b1a] text-[11px]">
                    {t.footer.whatsappText}
                  </span>
                  <span className="text-[10px] text-[#9f825b]">
                    Atendimento rápido e personalizado
                  </span>
                </div>
              </a>

              {/* E-mail */}
              <div className="flex items-start gap-2 text-xs">
                <Mail className="w-4 h-4 text-[#9f825b] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[#1c1b1a]">{t.footer.emailLabel}</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#555555] hover:text-[#1c1b1a] underline text-[11px]">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-2 text-xs">
                <Clock className="w-4 h-4 text-[#9f825b] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[#1c1b1a]">{t.footer.hoursLabel}</span>
                  <span className="text-[#666666] text-[11px]">{t.footer.hoursText}</span>
                </div>
              </div>

              {/* LGPD & Segurança */}
              <div className="pt-2 border-t border-[#ebe6dc]">
                <Link
                  to="/politica-de-privacidade"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#9f825b] hover:text-[#1c1b1a] transition-colors font-medium"
                >
                  <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                  <span>Proteção de Dados & LGPD</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Direitos autorais e Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#666666]">
          <p>© {currentYear} Printfoco. {t.footer.rights}</p>
          <p className="text-[#9f825b] font-medium">
            {t.footer.tagline}
          </p>
        </div>

      </div>
    </footer>
  );
}
