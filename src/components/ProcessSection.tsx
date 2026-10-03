import React, { useState } from 'react';
import { DeltaLogoSvg, DELTA_PATHS } from './DeltaLogoSvg';
import { Lightbulb, PenTool, LayoutGrid, Palette, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'CONCEITO',
      subtitle: 'Origem & Síntese',
      desc: 'Letra D (Delta) + papel dobrado (design gráfico) = identidade única com alto recall.',
      icon: Lightbulb,
      renderVisual: () => (
        <div className="flex items-center justify-center gap-2 font-brand text-lg text-[#8a8a8f]">
          <span className="font-bold text-3xl sm:text-4xl text-white">D</span>
          <span className="text-xl">+</span>
          <svg viewBox="0 0 40 52" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-10 text-white">
            <path d="M6 4 L26 4 L34 12 L34 48 L6 48 Z" />
            <path d="M26 4 L26 12 L34 12" />
            <path d="M2 10 L2 52 L28 52" strokeDasharray="3 3" />
          </svg>
          <span className="text-xl">=</span>
          <DeltaLogoSvg className="w-8 h-10 text-white fill-current" />
        </div>
      ),
    },
    {
      num: '02',
      title: 'ESBOÇO',
      subtitle: 'Ideação & Rascunho',
      desc: 'Exploração livre em cadernos e tablet, eliminando excessos até atingir a essência.',
      icon: PenTool,
      renderVisual: () => (
        <div className="relative w-24 h-28 flex items-center justify-center">
          <svg viewBox="0 0 210 256" fill="none" stroke="#8a8a8f" strokeWidth="2.5" strokeDasharray="8 6" className="w-full h-full animate-pulse">
            <path d={DELTA_PATHS.fold} />
            <path d={DELTA_PATHS.dBody} />
          </svg>
          <span className="absolute bottom-1 right-0 font-brand text-[9px] text-[#8a8a8f] bg-black/70 px-1.5 py-0.5 rounded border border-white/10">
            DRAFT_04
          </span>
        </div>
      ),
    },
    {
      num: '03',
      title: 'CONSTRUÇÃO',
      subtitle: 'Grid & Matemática',
      desc: 'Geometria euclidiana, círculos tangenciais, ângulos precisos a 45° e balanceamento de peso óptico.',
      icon: LayoutGrid,
      renderVisual: () => (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg viewBox="-30 -30 270 316" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-full h-full text-white">
            <circle cx="105" cy="128" r="95" stroke="#3f3f46" strokeDasharray="4 4" />
            <circle cx="105" cy="128" r="130" stroke="#27272a" />
            <line x1="-30" y1="128" x2="240" y2="128" stroke="#3f3f46" />
            <line x1="60" y1="-30" x2="60" y2="286" stroke="#3f3f46" />
            <path d={DELTA_PATHS.fold} stroke="#ffffff" strokeWidth="2" />
            <path d={DELTA_PATHS.dBody} stroke="#ffffff" strokeWidth="2" />
          </svg>
        </div>
      ),
    },
    {
      num: '04',
      title: 'IDENTIDADE',
      subtitle: 'Sistema Visual',
      desc: 'Definição de tipografia corporativa, contrastes de paleta monocromática e manual da marca.',
      icon: Palette,
      renderVisual: () => (
        <div className="flex flex-col items-center gap-2">
          <DeltaLogoSvg className="w-12 h-14 text-white fill-current drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]" />
          <div className="flex gap-1.5 mt-2">
            <span className="w-4 h-4 rounded-full bg-white shadow" title="#FFFFFF" />
            <span className="w-4 h-4 rounded-full bg-[#1a1a1c] border border-white/20" title="#1A1A1C" />
            <span className="w-4 h-4 rounded-full bg-[#050505] border border-white/30" title="#050505" />
            <span className="w-4 h-4 rounded-full bg-[#c9c9cf]" title="#C9C9CF" />
          </div>
        </div>
      ),
    },
    {
      num: '05',
      title: 'APLICAÇÃO',
      subtitle: 'Ponto de Contato',
      desc: 'Desdobramento em papelaria, feeds, vídeos em movimento, sinalização e embalagens físicas.',
      icon: Layers,
      renderVisual: () => (
        <div className="relative w-28 h-20 bg-[#f4f4f2] text-black rounded-lg p-2.5 shadow-2xl flex flex-col justify-between -rotate-6 transform hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center justify-between">
            <DeltaLogoSvg className="w-4 h-5 fill-black" />
            <span className="font-brand font-bold text-[7px] tracking-[0.25em]">DELTA CORP</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-black/20 rounded w-full" />
            <div className="h-1 bg-black/20 rounded w-2/3" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="processo" className="py-24 sm:py-32 px-6 sm:px-12 bg-gradient-to-b from-[#050505] via-[#0c0c0e] to-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16">
          <div>
            <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f]">
              <span className="w-6 h-[1px] bg-[#8a8a8f]" />
              03 — Metodologia de Criação
            </div>
            <h2 className="font-brand font-medium text-4xl sm:text-6xl tracking-tight mt-4 text-[#f4f4f2]">
              Do conceito<br /><em className="text-[#8a8a8f] not-italic">à identidade sólida.</em>
            </h2>
          </div>
          <p className="font-body font-light text-base sm:text-lg text-[#8a8a8f] max-w-md leading-relaxed">
            Cinco etapas estruturadas que garantem que seu projeto não seja apenas visualmente impressionante, mas estrategicamente durável e funcional.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 perspective-1400">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 min-h-[380px] border transform-style-3d ${
                  isHovered
                    ? 'bg-gradient-to-b from-[#18181c] to-[#0e0e10] border-white/30 -translate-y-2 shadow-[0_25px_50px_rgba(0,0,0,0.8)]'
                    : 'bg-gradient-to-b from-[#121214] to-[#09090a] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-brand font-bold text-xs tracking-[0.3em] text-[#8a8a8f] group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#8a8a8f] group-hover:text-white group-hover:bg-white/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Central Visual Graphic */}
                <div className="py-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {step.renderVisual()}
                </div>

                {/* Text Content */}
                <div className="border-t border-white/10 pt-4">
                  <span className="font-brand text-[9px] tracking-[0.25em] uppercase text-[#8a8a8f] block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-brand font-semibold text-base tracking-[0.2em] text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-xs text-[#8a8a8f] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
