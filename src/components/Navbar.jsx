import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { 
  Camera, Sparkles, MessageCircle, Menu, X, ChevronDown, 
  Smartphone, Film, Image, Heart, Target 
} from 'lucide-react';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [invitesDropdownOpen, setInvitesDropdownOpen] = useState(false);

  // Mobile submenu accordions
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInvitesOpen, setMobileInvitesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setInvitesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md border-b border-[#d9d6c1] py-3 shadow-md'
          : 'bg-[#f4f1e8]/90 backdrop-blur-sm py-4 border-b border-[#d9d6c1]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#ab9a7d] flex items-center justify-center bg-[#ffffff] group-hover:border-[#191919] transition-colors shadow-sm">
              <Camera className="w-5 h-5 text-[#ab9a7d] group-hover:text-[#191919] group-hover:rotate-6 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-brand tracking-widest text-xl sm:text-2xl font-bold text-[#191919]">
                PRINT<span className="text-[#ab9a7d]">FOCO</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c7c60] -mt-1 font-semibold">
                Memórias & Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Submenus (Sem "Projetos") */}
          <nav className="hidden lg:flex items-center gap-5">
            
            {/* 1. Início */}
            <Link
              to="/"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2 rounded-lg ${
                isActive('/') ? 'text-[#191919] border-b-2 border-[#ab9a7d]' : 'text-[#444444] hover:text-[#191919]'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* 2. Sobre Nós Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2 rounded-lg flex items-center gap-1 ${
                  location.pathname.startsWith('/sobre') || location.pathname.startsWith('/missao')
                    ? 'text-[#191919] border-b-2 border-[#ab9a7d]'
                    : 'text-[#444444] hover:text-[#191919]'
                }`}
              >
                <span>{t.nav.about}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8c7c60]" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#ffffff] border border-[#d9d6c1] rounded-2xl shadow-xl p-2 space-y-1">
                    <Link
                      to="/sobre"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#f4f1e8] transition-colors text-xs font-semibold text-[#191919]"
                    >
                      <Heart className="w-4 h-4 text-[#ab9a7d]" />
                      <div>
                        <span className="block">{t.nav.ourHistory}</span>
                        <span className="text-[10px] text-[#666666] font-normal">{t.nav.ourHistorySub}</span>
                      </div>
                    </Link>
                    <Link
                      to="/missao-visao-valores"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#f4f1e8] transition-colors text-xs font-semibold text-[#191919]"
                    >
                      <Target className="w-4 h-4 text-[#ab9a7d]" />
                      <div>
                        <span className="block">{t.nav.missionVisionValues}</span>
                        <span className="text-[10px] text-[#666666] font-normal">{t.nav.missionVisionValuesSub}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Convites Virtuais Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setInvitesDropdownOpen(true)}
              onMouseLeave={() => setInvitesDropdownOpen(false)}
            >
              <button
                className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2.5 rounded-full flex items-center gap-1.5 ${
                  location.pathname.startsWith('/convites')
                    ? 'bg-[#ab9a7d]/20 text-[#191919] border border-[#ab9a7d]'
                    : 'text-[#444444] hover:text-[#191919] bg-[#ffffff] border border-[#d9d6c1]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
                <span>{t.nav.invites}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8c7c60]" />
              </button>

              {invitesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#ffffff] border border-[#d9d6c1] rounded-2xl shadow-xl p-2 space-y-1">
                    <Link
                      to="/convites/interativo"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#f4f1e8]/60 hover:bg-[#f4f1e8] transition-colors text-xs font-bold text-[#191919] border border-[#d9d6c1]"
                    >
                      <Smartphone className="w-4 h-4 text-[#8c7c60]" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span>{t.nav.interactiveInvite}</span>
                          <span className="text-[9px] bg-[#191919] text-white px-1.5 py-0.5 rounded-full font-bold">
                            {t.nav.interactiveInviteBadge}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#666666] font-normal">{t.nav.interactiveInviteSub}</span>
                      </div>
                    </Link>
                    <Link
                      to="/convites/video"
                      className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f4f1e8] transition-colors text-xs font-semibold text-[#191919]"
                    >
                      <Film className="w-4 h-4 text-[#ab9a7d]" />
                      <div>
                        <span>{t.nav.videoInvite}</span>
                        <span className="text-[10px] text-[#666666] block font-normal">{t.nav.videoInviteSub}</span>
                      </div>
                    </Link>
                    <Link
                      to="/convites/imagem"
                      className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f4f1e8] transition-colors text-xs font-semibold text-[#191919]"
                    >
                      <Image className="w-4 h-4 text-[#ab9a7d]" />
                      <div>
                        <span>{t.nav.imageInvite}</span>
                        <span className="text-[10px] text-[#666666] block font-normal">{t.nav.imageInviteSub}</span>
                      </div>
                    </Link>
                    <div className="pt-1 border-t border-[#d9d6c1]">
                      <Link
                        to="/convites"
                        className="block text-center text-[11px] font-bold text-[#8c7c60] hover:text-[#191919] py-1"
                      >
                        {t.nav.allFormats} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Retrospectivas */}
            <Link
              to="/retrospectivas"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2 rounded-lg ${
                isActive('/retrospectivas') ? 'text-[#191919] border-b-2 border-[#ab9a7d]' : 'text-[#444444] hover:text-[#191919]'
              }`}
            >
              {t.nav.retrospectives}
            </Link>

            {/* 5. Posts para Redes */}
            <Link
              to="/posts-redes-sociais"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2 rounded-lg ${
                isActive('/posts-redes-sociais') ? 'text-[#191919] border-b-2 border-[#ab9a7d]' : 'text-[#444444] hover:text-[#191919]'
              }`}
            >
              {t.nav.socialMedia}
            </Link>

            {/* 6. Contato */}
            <Link
              to="/contato"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 px-2 rounded-lg ${
                isActive('/contato') ? 'text-[#191919] border-b-2 border-[#ab9a7d]' : 'text-[#444444] hover:text-[#191919]'
              }`}
            >
              {t.nav.contact}
            </Link>

          </nav>

          {/* Right Tools: Language Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageToggle />

            {/* WhatsApp CTA (sem número em texto) */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#191919] text-[#f4f1e8] hover:bg-[#ab9a7d] hover:text-white transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.nav.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#191919] hover:bg-[#d9d6c1]/40 transition-colors"
              aria-label={t.nav.openMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown com Submenus (Sem "Projetos") */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-b border-[#d9d6c1] px-5 py-6 shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            
            <Link
              to="/"
              className={`py-2 px-3 rounded-xl text-sm font-semibold ${
                isActive('/') ? 'bg-[#f4f1e8] text-[#191919] font-bold' : 'text-[#333333]'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Mobile Sobre Accordion */}
            <div className="border border-[#d9d6c1]/60 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full py-2.5 px-3 flex items-center justify-between text-sm font-semibold text-[#191919] bg-[#f4f1e8]/50"
              >
                <span>{t.nav.about}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="bg-[#ffffff] p-2 space-y-1">
                  <Link
                    to="/sobre"
                    className="block py-2 px-3 rounded-lg text-xs font-medium text-[#444444] hover:bg-[#f4f1e8]"
                  >
                    • {t.nav.ourHistory}
                  </Link>
                  <Link
                    to="/missao-visao-valores"
                    className="block py-2 px-3 rounded-lg text-xs font-medium text-[#444444] hover:bg-[#f4f1e8]"
                  >
                    • {t.nav.missionVisionValues}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Convites Accordion */}
            <div className="border border-[#ab9a7d] rounded-xl overflow-hidden bg-[#f4f1e8]/30">
              <button
                onClick={() => setMobileInvitesOpen(!mobileInvitesOpen)}
                className="w-full py-2.5 px-3 flex items-center justify-between text-sm font-bold text-[#191919] bg-[#f4f1e8]"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  <span>{t.nav.invites}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileInvitesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileInvitesOpen && (
                <div className="bg-[#ffffff] p-2 space-y-1">
                  <Link
                    to="/convites/interativo"
                    className="block py-2 px-3 rounded-lg text-xs font-bold text-[#191919] bg-[#f4f1e8]/60"
                  >
                    ★ {t.nav.interactiveInvite}
                  </Link>
                  <Link
                    to="/convites/video"
                    className="block py-2 px-3 rounded-lg text-xs font-medium text-[#444444] hover:bg-[#f4f1e8]"
                  >
                    • {t.nav.videoInvite}
                  </Link>
                  <Link
                    to="/convites/imagem"
                    className="block py-2 px-3 rounded-lg text-xs font-medium text-[#444444] hover:bg-[#f4f1e8]"
                  >
                    • {t.nav.imageInvite}
                  </Link>
                  <Link
                    to="/convites"
                    className="block py-1.5 px-3 text-[11px] font-bold text-[#8c7c60]"
                  >
                    {t.nav.allFormats}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/retrospectivas"
              className={`py-2 px-3 rounded-xl text-sm font-semibold ${
                isActive('/retrospectivas') ? 'bg-[#f4f1e8] text-[#191919] font-bold' : 'text-[#333333]'
              }`}
            >
              {t.nav.retrospectives}
            </Link>

            <Link
              to="/posts-redes-sociais"
              className={`py-2 px-3 rounded-xl text-sm font-semibold ${
                isActive('/posts-redes-sociais') ? 'bg-[#f4f1e8] text-[#191919] font-bold' : 'text-[#333333]'
              }`}
            >
              {t.nav.socialMedia}
            </Link>

            <Link
              to="/contato"
              className={`py-2 px-3 rounded-xl text-sm font-semibold ${
                isActive('/contato') ? 'bg-[#f4f1e8] text-[#191919] font-bold' : 'text-[#333333]'
              }`}
            >
              {t.nav.contact}
            </Link>

            <Link
              to="/politica-de-privacidade"
              className="py-1 px-3 text-xs text-[#8c7c60] hover:text-[#191919]"
            >
              {t.nav.privacy}
            </Link>

            <div className="pt-3 border-t border-[#d9d6c1] mt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191919] text-white shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.nav.ctaWhatsApp}</span>
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
