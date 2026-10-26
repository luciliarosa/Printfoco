import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { Camera, Mail, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t border-[#d9d6c1] pt-16 pb-8 text-[#555555] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#d9d6c1]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#ab9a7d] flex items-center justify-center bg-[#f4f1e8]">
                <Camera className="w-4 h-4 text-[#8c7c60]" />
              </div>
              <span className="font-brand tracking-widest text-xl font-bold text-[#191919]">
                PRINT<span className="text-[#ab9a7d]">FOCO</span>
              </span>
            </Link>
            
            <p className="text-xs leading-relaxed max-w-sm text-[#555555]">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center text-[#191919] hover:bg-[#ab9a7d] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f4f1e8] border border-[#d9d6c1] flex items-center justify-center text-[#191919] hover:bg-[#ab9a7d] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Sem "Projetos") */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[#191919] font-bold uppercase tracking-wider text-xs font-serif-luxury">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#191919] transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/sobre" className="hover:text-[#191919] transition-colors">{t.nav.ourHistory}</Link></li>
              <li><Link to="/missao-visao-valores" className="hover:text-[#191919] transition-colors">{t.nav.missionVisionValues}</Link></li>
              <li><Link to="/convites/interativo" className="hover:text-[#ab9a7d] font-bold text-[#191919] transition-colors">{t.nav.interactiveInvite}</Link></li>
              <li><Link to="/convites" className="hover:text-[#191919] transition-colors">{t.nav.allFormats}</Link></li>
              <li><Link to="/retrospectivas" className="hover:text-[#191919] transition-colors">{t.nav.retrospectives}</Link></li>
              <li><Link to="/posts-redes-sociais" className="hover:text-[#191919] transition-colors">{t.nav.socialMedia}</Link></li>
              <li><Link to="/contato" className="hover:text-[#191919] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Details (Sem expor o número em texto) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[#191919] font-bold uppercase tracking-wider text-xs font-serif-luxury">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">{t.footer.whatsappLabel}</span>
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8c7c60] hover:text-[#191919] font-semibold underline"
                >
                  {t.footer.whatsappText}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">{t.footer.emailLabel}</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#555555] hover:text-[#191919] underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">Instagram:</span>
                <span className="text-[#555555]">@{siteConfig.contact.instagram}</span>
              </p>
              <div className="pt-2">
                <Link
                  to="/politica-de-privacidade"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#8c7c60] hover:text-[#191919] underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  <span>{t.nav.privacy}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#666666]">
          <p>© {currentYear} Printfoco. {t.footer.rights}</p>
          <p className="text-[#8c7c60]">
            {t.footer.tagline}
          </p>
        </div>

      </div>
    </footer>
  );
}
