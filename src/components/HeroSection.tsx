import React, { useState } from 'react';
import { DeltaLogo3D } from './DeltaLogo3D';
import { ArrowDown, Move3d, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [explodedView, setExplodedView] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Meta Vertical Bar (Desktop) */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-3 font-brand text-[10px] tracking-[0.4em] text-[#8a8a8f] uppercase -rotate-90 origin-left">
        <span className="w-8 h-[1px] bg-[#8a8a8f]/40" />
        BRANDING · DESIGN · MOTION — EST. 2026
      </div>

      {/* Main Grid: 3D interactive Logo on Left/Center, Giant Typography on Right */}
      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 py-6">
        {/* 3D WebGL Canvas Card */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[460px] lg:min-h-[560px]">
          {/* Orbit Badges */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <span className="absolute top-[12%] left-[8%] font-brand text-[9px] tracking-[0.35em] text-[#8a8a8f] border border-white/10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md animate-pulse">
              PALETA DE COR
            </span>
            <span className="absolute bottom-[22%] left-[4%] font-brand text-[9px] tracking-[0.35em] text-[#8a8a8f] border border-white/10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
              TIPOGRAFIA SANS
            </span>
            <span className="absolute top-[18%] right-[10%] font-brand text-[9px] tracking-[0.35em] text-[#8a8a8f] border border-white/10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
              GRID 8PT
            </span>
            <span className="absolute bottom-[16%] right-[6%] font-brand text-[9px] tracking-[0.35em] text-[#8a8a8f] border border-white/10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
              VETOR DE PRECISÃO
            </span>
          </div>

          <div className="w-full h-[360px] sm:h-[460px] lg:h-[540px] relative flex items-center justify-center">
            {/* Soft backlight for the white 3D sculpture */}
            <div className="absolute w-72 h-72 bg-white/[0.06] rounded-full blur-[80px] pointer-events-none" />
            <DeltaLogo3D theme="white" angle="perspectiva" exploded={explodedView} allowInteraction={true} />
          </div>

          {/* Interactive controls under 3D model */}
          <div className="flex items-center gap-3 mt-2 z-20">
            <span className="flex items-center gap-1.5 text-[10px] font-brand tracking-[0.2em] text-[#8a8a8f] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <Move3d className="w-3 h-3 text-white" />
              Arraste para girar em 3D
            </span>
            <button
              onClick={() => setExplodedView(!explodedView)}
              className={`flex items-center gap-1.5 text-[10px] font-brand tracking-[0.2em] uppercase px-3 py-1 rounded-full border transition-all duration-300 ${
                explodedView
                  ? 'bg-white text-black border-white font-semibold'
                  : 'bg-white/5 text-[#c9c9cf] border-white/10 hover:border-white/30'
              }`}
            >
              <Layers className="w-3 h-3" />
              {explodedView ? 'Unir Formas' : 'Vista Explodida'}
            </button>
          </div>
        </div>

        {/* Hero Title & Words */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-brand tracking-[0.3em] uppercase text-[#8a8a8f] mb-4">
            <Sparkles className="w-3 h-3 text-white" />
            <span>Estúdio Criativo Premium</span>
          </div>

          <h1 className="font-brand font-semibold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.88] tracking-tight text-[#f4f4f2]">
            DELTΛ
          </h1>

          <span className="font-brand font-medium text-sm sm:text-xl lg:text-2xl tracking-[0.55em] text-[#c9c9cf] mt-4 sm:mt-6">
            DESIGN GRÁFICO
          </span>

          <p className="font-body font-light text-base sm:text-lg lg:text-xl text-[#8a8a8f] max-w-lg mt-6 leading-relaxed">
            Identidades que transformam ideias em marcas reconhecíveis. Estratégia visual, motion design e direção criativa para elevar seu negócio ao próximo nível.
          </p>

          {/* Quick stats pills */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 py-6 border-y border-white/10 w-full max-w-lg">
            <div>
              <span className="font-brand font-bold text-xl sm:text-2xl text-white">100%</span>
              <p className="font-body text-xs text-[#8a8a8f] mt-0.5">Vetor Autoral</p>
            </div>
            <div>
              <span className="font-brand font-bold text-xl sm:text-2xl text-white">+8 Anos</span>
              <p className="font-body text-xs text-[#8a8a8f] mt-0.5">Direção Criativa</p>
            </div>
            <div>
              <span className="font-brand font-bold text-xl sm:text-2xl text-white">4K / UHD</span>
              <p className="font-body text-xs text-[#8a8a8f] mt-0.5">Motion & Vídeo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 z-10">
        <div className="flex items-center gap-3 text-xs text-[#8a8a8f]">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>Branding estratégico com foco em valor percebido e posicionamento de mercado.</span>
        </div>

        <button
          onClick={onExplore}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/25 hover:border-white text-xs font-brand tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <span>Explorar Projeto</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
