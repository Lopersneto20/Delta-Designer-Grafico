import React, { useState, useEffect } from 'react';
import { DeltaLogoSvg } from './DeltaLogoSvg';
import { MessageSquare, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="DELTA Design Gráfico"
          >
            <div className="w-6 h-7 text-white transition-transform duration-500 group-hover:scale-110">
              <DeltaLogoSvg />
            </div>
            <span className="font-brand font-semibold text-base sm:text-lg tracking-[0.35em] text-[#f4f4f2]">
              DELTΛ
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-brand text-[11px] tracking-[0.25em] uppercase text-[#8a8a8f]">
            <li>
              <a
                href="#construcao"
                className="hover:text-white transition-colors duration-300 py-1"
              >
                Marca
              </a>
            </li>
            <li>
              <a
                href="#processo"
                className="hover:text-white transition-colors duration-300 py-1"
              >
                Processo
              </a>
            </li>
            <li>
              <a
                href="#aplicacoes"
                className="hover:text-white transition-colors duration-300 py-1"
              >
                Aplicações
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-white transition-colors duration-300 py-1"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-white transition-colors duration-300 py-1"
              >
                Sobre
              </a>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-brand text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
              >
                <Sparkles className="w-3 h-3 text-[#c9c9cf]" />
                <span>Simulador</span>
              </button>
            )}
            <a
              href="https://wa.me/5587988128352?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20Delta%20Design%20Gr%C3%A1fico."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-brand font-semibold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#c9c9cf] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col justify-between pb-12 border-b border-white/10 animate-in fade-in duration-300">
          <ul className="flex flex-col gap-6 font-brand text-sm tracking-[0.3em] uppercase text-[#c9c9cf]">
            <li>
              <a
                href="#construcao"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                01 / Marca
              </a>
            </li>
            <li>
              <a
                href="#processo"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                02 / Processo
              </a>
            </li>
            <li>
              <a
                href="#celular"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                03 / Construção Vetorial
              </a>
            </li>
            <li>
              <a
                href="#aplicacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                04 / Aplicações & Mockups
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                05 / Projetos
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white block py-2 border-b border-white/5"
              >
                06 / Sobre & Serviços
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-6">
            {onOpenEstimator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-brand text-xs tracking-[0.2em] uppercase"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simular Orçamento</span>
              </button>
            )}
            <a
              href="https://wa.me/5587988128352?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20Delta."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-brand font-semibold text-xs tracking-[0.2em] uppercase shadow-lg"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
