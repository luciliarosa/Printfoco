import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionVisionValuesPage from './pages/MissionVisionValuesPage';
import InvitesOverviewPage from './pages/InvitesOverviewPage';
import InteractiveInvitePage from './pages/InteractiveInvitePage';
import VideoInvitePage from './pages/VideoInvitePage';
import ImageInvitePage from './pages/ImageInvitePage';
import RetrospectivesPage from './pages/RetrospectivesPage';
import SocialMediaPage from './pages/SocialMediaPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#faf8f5] text-[#1c1b1a] relative flex flex-col justify-between selection:bg-[#c5a880] selection:text-white">
          
          {/* Top Navbar with Submenus & Language Switcher */}
          <Navbar />

          {/* Dynamic Route Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/missao-visao-valores" element={<MissionVisionValuesPage />} />
              
              {/* Convites Virtuais Sub-pages */}
              <Route path="/convites" element={<InvitesOverviewPage />} />
              <Route path="/convites/interativo" element={<InteractiveInvitePage />} />
              <Route path="/convites/video" element={<VideoInvitePage />} />
              <Route path="/convites/imagem" element={<ImageInvitePage />} />
              
              {/* Retrospectivas & Social Media */}
              <Route path="/retrospectivas" element={<RetrospectivesPage />} />
              <Route path="/posts-redes-sociais" element={<SocialMediaPage />} />
              
              {/* Contact & Privacy */}
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp CTA */}
          <WhatsAppFloatingButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
