import React, { useState } from 'react';
import { DeltaLogoSvg, DELTA_PATHS } from './DeltaLogoSvg';
import { Monitor, Tablet, Palette, Sparkles, Sliders } from 'lucide-react';

export const StudioSection: React.FC = () => {
  const [accentColor, setAccentColor] = useState<string>('#f4f4f2');
  const [accentName, setAccentName] = useState<string>('Pure Titanium');

  const swatches = [
    { name: 'Pure Titanium', color: '#f4f4f2', textClass: 'text-[#f4f4f2]' },
    { name: 'Obsidian Black', color: '#16161a', textClass: 'text-[#16161a]' },
    { name: 'Hyper Blue', color: '#3b82f6', textClass: 'text-[#3b82f6]' },
    { name: 'Acid Lime', color: '#84cc16', textClass: 'text-[#84cc16]' },
    { name: 'Warm Amber', color: '#f59e0b', textClass: 'text-[#f59e0b]' },
  ];

  return (
    <section id="estudio" className="py-24 sm:py-32 px-6 sm:px-12 bg-gradient-to-b from-[#050505] via-[#09090b] to-[#050505] relative overflow-hidden border-t border-white/10">
      {/* Studio Ambient Lamp Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-white/[0.08] to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f] mb-3">
              <span className="w-6 h-[1px] bg-[#8a8a8f]" />
              05 — O Estúdio Criativo
            </div>
            <h2 className="font-brand font-medium text-4xl sm:text-6xl tracking-tight text-[#f4f4f2]">
              Onde a marca<br /><em className="text-[#8a8a8f] not-italic">ganha forma e vida.</em>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body font-light text-base text-[#8a8a8f] leading-relaxed">
              Estratégia, direção de arte e precisão digital unidas em um ecossistema de trabalho calibrado para produzir peças com acabamento impecável.
            </p>

            {/* Live brand palette switcher */}
            <div className="mt-6 p-4 rounded-xl bg-[#121215] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-white" />
                <span className="font-brand text-[11px] tracking-wider text-[#8a8a8f] uppercase">
                  Cor de Aplicação: <strong className="text-white">{accentName}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                {swatches.map((sw) => (
                  <button
                    key={sw.name}
                    onClick={() => {
                      setAccentColor(sw.color);
                      setAccentName(sw.name);
                    }}
                    style={{ backgroundColor: sw.color }}
                    className={`w-6 h-6 rounded-full border transition-all ${
                      accentColor === sw.color
                        ? 'scale-125 border-white ring-2 ring-white/30'
                        : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                    title={sw.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Perspective Studio Desk Setup */}
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#141418] to-[#0a0a0c] border border-white/10 p-6 sm:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden perspective-1400">
          {/* Desk Lamp light ray */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

          {/* Desktop Monitor Screen */}
          <div className="relative mx-auto max-w-2xl bg-[#09090b] rounded-2xl p-4 sm:p-6 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-brand tracking-widest text-[#8a8a8f]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-white">DELTA_WORKSPACE.AI (3840×2160 60FPS)</span>
              </div>
              <span>RGB / 16-BIT</span>
            </div>

            {/* Monitor Canvas */}
            <div className="grid grid-cols-12 gap-3 mt-4">
              {/* Left Toolbox */}
              <div className="col-span-1 hidden sm:flex flex-col items-center gap-2 py-2 bg-[#121215] rounded-lg border border-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 transition-colors" />
                ))}
              </div>

              {/* Main Artwork Preview on Monitor */}
              <div className="col-span-12 sm:col-span-8 bg-[#18181b] rounded-xl p-8 flex flex-col items-center justify-center min-h-[240px] border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                <div
                  className="transition-colors duration-500"
                  style={{ color: accentColor }}
                >
                  <DeltaLogoSvg className="w-24 h-28 fill-current drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]" />
                </div>

                <div className="mt-4 text-center">
                  <span className="font-brand font-semibold text-lg tracking-[0.35em] text-white">
                    DELTΛ
                  </span>
                  <p className="font-brand text-[9px] tracking-[0.4em] text-[#8a8a8f] mt-1">
                    DESIGN GRÁFICO & MOTION
                  </p>
                </div>
              </div>

              {/* Right Properties Panel */}
              <div className="col-span-12 sm:col-span-3 bg-[#121215] rounded-xl p-4 border border-white/5 flex flex-col justify-between text-[10px] text-[#8a8a8f] space-y-3">
                <div className="space-y-2">
                  <span className="font-brand text-white font-medium tracking-wider">INSPETOR</span>
                  <div className="h-1.5 bg-white/10 rounded w-full" />
                  <div className="h-1.5 bg-white/10 rounded w-3/4" />
                  <div className="h-1.5 bg-white/10 rounded w-1/2" />
                </div>

                <div className="space-y-2">
                  <span className="font-brand text-[9px] text-[#aaa]">SWATCHES ATIVAS</span>
                  <div className="flex gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-white" />
                    <span className="w-4 h-4 rounded-full bg-black border border-white/30" />
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[9px] text-emerald-400">
                  EXPORT READY (.SVG, .AI, .MP4)
                </div>
              </div>
            </div>
          </div>

          {/* Desk Peripherals (Keyboard, Drawing Tablet, Sketchbook, Cards) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 items-end">
            {/* Drawing Tablet */}
            <div className="bg-[#121215] border border-white/10 rounded-xl p-4 flex flex-col justify-between h-32 hover:border-white/30 transition-all">
              <div className="flex items-center justify-between text-xs text-[#8a8a8f]">
                <Tablet className="w-4 h-4 text-white" />
                <span className="font-mono text-[9px]">8192 NÍVEIS</span>
              </div>
              <div className="border border-dashed border-white/20 rounded-lg h-16 flex items-center justify-center">
                <span className="font-brand text-[9px] text-[#666] tracking-wider">ÁREA ATIVA PEN</span>
              </div>
            </div>

            {/* Sketchbook with Logo draft */}
            <div className="bg-[#e7e5de] text-black rounded-lg p-3.5 h-32 shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-brand font-bold text-[8px] tracking-widest text-[#555]">MOLESKINE #01</span>
                <span className="font-mono text-[8px] text-[#777]">P. 42</span>
              </div>
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 210 256" className="w-10 h-12 fill-none stroke-black stroke-[2] opacity-75">
                  <path d={DELTA_PATHS.fold} strokeDasharray="4 2" />
                  <path d={DELTA_PATHS.dBody} />
                </svg>
              </div>
              <span className="font-brand text-[7px] text-[#444] text-center tracking-widest">
                GEOMETRIA APROVADA
              </span>
            </div>

            {/* Business Cards Stack */}
            <div className="relative h-32 flex items-center justify-center">
              {/* Back card */}
              <div className="absolute w-36 h-20 bg-[#141416] border border-white/10 rounded-lg -rotate-6 shadow-md" />
              {/* Front card */}
              <div className="relative w-36 h-20 bg-white text-black rounded-lg p-3 shadow-xl rotate-3 flex flex-col justify-between">
                <div className="flex items-center gap-1.5">
                  <DeltaLogoSvg className="w-3.5 h-4 fill-black" />
                  <span className="font-brand font-bold text-[9px] tracking-widest">DELTΛ</span>
                </div>
                <div className="text-[7px] font-body text-[#444] leading-tight">
                  <p className="font-semibold text-black">DESIGN GRÁFICO</p>
                  <p>(87) 9 8812-8352</p>
                </div>
              </div>
            </div>

            {/* Keyboard & Hardware Spec */}
            <div className="bg-[#121215] border border-white/10 rounded-xl p-4 flex flex-col justify-between h-32">
              <div className="flex items-center justify-between text-xs text-[#8a8a8f]">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="font-brand text-[9px] uppercase tracking-wider">HARDWARE</span>
              </div>
              <div className="space-y-1 text-[10px] text-[#8a8a8f]">
                <p>• Apple M3 Max Studio</p>
                <p>• Calibração DCI-P3 99%</p>
                <p>• DaVinci Resolve & After Effects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
