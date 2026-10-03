/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DeltaLogoSvg } from './components/DeltaLogoSvg';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConstructionSection } from './components/ConstructionSection';
import { ProcessSection } from './components/ProcessSection';
import { PhoneMockupSection } from './components/PhoneMockupSection';
import { StudioSection } from './components/StudioSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { BudgetEstimatorModal } from './components/BudgetEstimatorModal';
import { CustomCursor } from './components/CustomCursor';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  useEffect(() => {
    // Graceful loader dismissal - guarantees NO black screen freeze!
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const scrollToConstruction = () => {
    const el = document.getElementById('construcao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f2] selection:bg-[#f4f4f2] selection:text-[#050505] relative">
      {/* Intro Loader with safe fade-out */}
      {loading && (
        <div className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center transition-opacity duration-500">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <DeltaLogoSvg className="w-12 h-14 text-white fill-none stroke-current" variant="stroke" />
            <span className="font-brand font-semibold text-xs tracking-[0.4em] text-[#8a8a8f] uppercase">
              DELTΛ
            </span>
          </div>
        </div>
      )}

      {/* Custom Physics Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onExplore={scrollToConstruction} />
        <ConstructionSection />
        <ProcessSection />
        <PhoneMockupSection />
        <StudioSection />
        <ApplicationsSection />
        <PortfolioSection />
        <AboutSection />
      </main>

      {/* Footer & Final Call-to-Action */}
      <FooterSection onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Interactive Project Estimator Modal */}
      <BudgetEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* Floating Fast WhatsApp Action Button */}
      <a
        href="https://wa.me/5587988128352?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Delta%20Design%20Gr%C3%A1fico%20e%20gostaria%20de%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-white text-black font-brand font-semibold text-[11px] tracking-wider uppercase shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:bg-[#c9c9cf] hover:scale-105 transition-all duration-300 group"
        aria-label="Conversar no WhatsApp"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </a>
    </div>
  );
}
