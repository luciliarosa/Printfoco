import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { 
  Camera, Sparkles, Menu, X, ChevronDown, 
  Film, Image, Heart, Target, Share2, Smartphone 
} from 'lucide-react';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Mobile submenu accordions
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const isServicesActive = () => {
    return (
      location.pathname.startsWith('/convites') ||
      location.pathname.startsWith('/retrospectivas') ||
      location.pathname.startsWith('/posts-redes-sociais')
    );
  };

  const isAboutActive = () => {
    return (
      location.pathname.startsWith('/sobre') ||
      location.pathname.startsWith('/missao')
    );
  };

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

          {/* Desktop Navigation: Apenas Inicio, Sobre Nós, Serviços, Contato */}
          <nav className="hidden lg:flex items-center gap-6">
            
            {/* 1. Início */}
            <Link
              to="/"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1.5 px-2.5 rounded-lg ${
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
                className={`text-xs tracking-wider uppercase font-semibold transition-all py-1.5 px-2.5 rounded-lg flex items-center gap-1.5 ${
                  isAboutActive()
                    ? 'text-[#191919] border-b-2 border-[#ab9a7d]'
                    : 'text-[#444444] hover:text-[#191919]'
                }`}
              >
                <span>{t.nav.about}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#8c7c60] transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
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

            {/* 3. Serviços Dropdown (3 Tipos Especializados) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`text-xs tracking-wider uppercase font-semibold transition-all py-1.5 px-3 rounded-full flex items-center gap-1.5 ${
                  isServicesActive()
                    ? 'bg-[#ab9a7d]/20 text-[#191919] border border-[#ab9a7d]'
                    : 'text-[#444444] hover:text-[#191919] bg-[#ffffff] border border-[#d9d6c1]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
                <span>{t.nav.services}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#8c7c60] transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-84 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#ffffff] border border-[#d9d6c1] rounded-2xl shadow-xl p-2.5 space-y-2">
                    
                    {/* 1. Convite Virtual (Imagem, Vídeos ou Interativo) */}
                    <div className="p-2.5 rounded-xl bg-[#f4f1e8]/50 border border-[#d9d6c1] hover:border-[#ab9a7d] transition-all">
                      <Link
                        to="/convites"
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#ffffff] border border-[#d9d6c1] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Smartphone className="w-4 h-4 text-[#8c7c60]" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#191919] group-hover:text-[#ab9a7d] transition-colors">
                            {t.nav.virtualInviteGroup}
                          </span>
                          <span className="text-[10px] text-[#666666] leading-tight block mt-0.5">
                            Interativo web com RSVP/GPS, vídeos animados e imagem digital.
                          </span>
                        </div>
                      </Link>

                      {/* Sub-atalhos para os 3 formatos */}
                      <div className="grid grid-cols-3 gap-1.5 mt-2 pt-2 border-t border-[#d9d6c1]/60 text-[10px]">
                        <Link
                          to="/convites/interativo"
                          className="px-1.5 py-1 rounded bg-[#ffffff] border border-[#d9d6c1] text-center font-bold text-[#191919] hover:border-[#ab9a7d] transition-colors"
                        >
                          Interativo ★
                        </Link>
                        <Link
                          to="/convites/video"
                          className="px-1.5 py-1 rounded bg-[#ffffff] border border-[#d9d6c1] text-center font-medium text-[#444444] hover:border-[#ab9a7d] transition-colors"
                        >
                          Vídeos
                        </Link>
                        <Link
                          to="/convites/imagem"
                          className="px-1.5 py-1 rounded bg-[#ffffff] border border-[#d9d6c1] text-center font-medium text-[#444444] hover:border-[#ab9a7d] transition-colors"
                        >
                          Imagem
                        </Link>
                      </div>
                    </div>

                    {/* 2. Retrospectivas */}
                    <Link
                      to="/retrospectivas"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f4f1e8] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ffffff] border border-[#d9d6c1] flex items-center justify-center shrink-0 shadow-xs">
                        <Film className="w-4 h-4 text-[#ab9a7d]" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[#191919] group-hover:text-[#ab9a7d] transition-colors">
                          {t.nav.retrospectives}
                        </span>
                        <span className="text-[10px] text-[#666666] block">
                          {t.nav.retrospectivesSub}
                        </span>
                      </div>
                    </Link>

                    {/* 3. Design de Conteúdo para Redes Sociais */}
                    <Link
                      to="/posts-redes-sociais"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f4f1e8] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ffffff] border border-[#d9d6c1] flex items-center justify-center shrink-0 shadow-xs">
                        <Share2 className="w-4 h-4 text-[#ab9a7d]" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[#191919] group-hover:text-[#ab9a7d] transition-colors">
                          {t.nav.socialMedia}
                        </span>
                        <span className="text-[10px] text-[#666666] block">
                          {t.nav.socialMediaSub}
                        </span>
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* 4. Contato */}
            <Link
              to="/contato"
              className={`text-xs tracking-wider uppercase font-semibold transition-all py-1.5 px-2.5 rounded-lg ${
                isActive('/contato') ? 'text-[#191919] border-b-2 border-[#ab9a7d]' : 'text-[#444444] hover:text-[#191919]'
              }`}
            >
              {t.nav.contact}
            </Link>

          </nav>

          {/* Right Tools: Apenas Seletor de Idioma (Botão WhatsApp no topo removido conforme solicitado) */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageToggle />
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

      {/* Mobile Menu Dropdown: Apenas Inicio, Sobre Nós, Serviços, Contato */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-b border-[#d9d6c1] px-5 py-6 shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            
            {/* 1. Início */}
            <Link
              to="/"
              className={`py-2 px-3 rounded-xl text-sm font-semibold ${
                isActive('/') ? 'bg-[#f4f1e8] text-[#191919] font-bold' : 'text-[#333333]'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* 2. Sobre Nós Accordion */}
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

            {/* 3. Serviços Accordion com os 3 Tipos */}
            <div className="border border-[#ab9a7d] rounded-xl overflow-hidden bg-[#f4f1e8]/30">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full py-2.5 px-3 flex items-center justify-between text-sm font-bold text-[#191919] bg-[#f4f1e8]"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ab9a7d]" />
                  <span>{t.nav.services}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="bg-[#ffffff] p-2.5 space-y-2">
                  
                  {/* Tipo 1: Convite Virtual */}
                  <div className="p-2 rounded-lg bg-[#f4f1e8]/50 border border-[#d9d6c1]/70">
                    <Link
                      to="/convites"
                      className="block text-xs font-bold text-[#191919] mb-1"
                    >
                      {t.nav.virtualInviteGroup}
                    </Link>
                    <div className="flex flex-col gap-1 pl-2 text-[11px] text-[#555555]">
                      <Link to="/convites/interativo" className="hover:text-[#191919] font-semibold text-[#8c7c60]">
                        ★ {t.nav.interactiveInvite}
                      </Link>
                      <Link to="/convites/video" className="hover:text-[#191919]">
                        • {t.nav.videoInvite}
                      </Link>
                      <Link to="/convites/imagem" className="hover:text-[#191919]">
                        • {t.nav.imageInvite}
                      </Link>
                    </div>
                  </div>

                  {/* Tipo 2: Retrospectivas */}
                  <Link
                    to="/retrospectivas"
                    className="block py-2 px-3 rounded-lg text-xs font-bold text-[#191919] hover:bg-[#f4f1e8]"
                  >
                    {t.nav.retrospectives}
                  </Link>

                  {/* Tipo 3: Design de Conteúdo para Redes Sociais */}
                  <Link
                    to="/posts-redes-sociais"
                    className="block py-2 px-3 rounded-lg text-xs font-bold text-[#191919] hover:bg-[#f4f1e8]"
                  >
                    {t.nav.socialMedia}
                  </Link>

                </div>
              )}
            </div>

            {/* 4. Contato */}
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

          </nav>
        </div>
      )}
    </header>
  );
}
