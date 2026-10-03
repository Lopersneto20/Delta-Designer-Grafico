import React, { useState } from 'react';
import { DeltaLogo3D, LogoAngle } from './DeltaLogo3D';
import { Compass, Eye, Grid3X3, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { DELTA_PATHS } from './DeltaLogoSvg';

export const ConstructionSection: React.FC = () => {
  const [activeAngle, setActiveAngle] = useState<LogoAngle>('perspectiva');
  const [showBlueprintGrid, setShowBlueprintGrid] = useState(true);
  const [highlightPart, setHighlightPart] = useState<'all' | 'fold' | 'dBody'>('all');

  const angles: { id: LogoAngle; label: string; desc: string }[] = [
    { id: 'frontal', label: 'Frontal', desc: 'Simetria, pesos ópticos e proporções vetoriais puras' },
    { id: 'lateral', label: 'Lateral', desc: 'Profundidade da extrusão, chanfros e volume físico' },
    { id: 'perspectiva', label: 'Perspectiva', desc: 'Visão isométrica e dinâmica de iluminação' },
    { id: 'closeup', label: 'Close-up', desc: 'Chanfros microscópicos, acabamento e precisão de curva' },
  ];

  return (
    <section id="construcao" className="py-24 sm:py-32 px-6 sm:px-12 border-t border-white/10 relative overflow-hidden bg-[#070708]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f]">
              <span className="w-6 h-[1px] bg-[#8a8a8f]" />
              02 — A Marca & Construção
            </div>
            <h2 className="font-brand font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight mt-4 text-[#f4f4f2] leading-[1.05]">
              O design começa<br />com uma <em className="text-[#8a8a8f] not-italic">ideia.</em>
            </h2>
          </div>
          <p className="font-body font-light text-base sm:text-lg text-[#8a8a8f] max-w-md leading-relaxed">
            Toda identidade memorável nasce de uma forma simples. Na Delta, a letra D encontra a dobra do papel — a matéria-prima do design gráfico — sintetizadas em um símbolo que traduz criatividade, precisão e tecnologia.
          </p>
        </div>

        {/* 3D Blueprint Interactive Workspace */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Viewport with Blueprint HUD */}
          <div className="lg:col-span-7 bg-[#0d0d0f] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[440px] sm:min-h-[520px] flex flex-col justify-between">
            {/* HUD Top Bar */}
            <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-brand text-[10px] tracking-[0.25em] text-[#8a8a8f] uppercase">
                  VIEWPORT 3D RENDER · REAL-TIME
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowBlueprintGrid(!showBlueprintGrid)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-brand tracking-[0.15em] uppercase border transition-all ${
                    showBlueprintGrid
                      ? 'bg-white/15 text-white border-white/30'
                      : 'bg-white/5 text-[#8a8a8f] border-white/10'
                  }`}
                >
                  <Grid3X3 className="w-3 h-3" />
                  Grid 8pt
                </button>
              </div>
            </div>

            {/* Grid overlay */}
            {showBlueprintGrid && (
              <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
            )}

            {/* Blueprint Technical Lines */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-25">
              <div className="w-[320px] h-[320px] rounded-full border border-dashed border-white/40" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-white/20" />
              <div className="absolute w-full h-[1px] bg-white/20" />
              <div className="absolute h-full w-[1px] bg-white/20" />
            </div>

            {/* Center 3D Logo */}
            <div className="relative w-full h-[320px] sm:h-[400px] z-10">
              <DeltaLogo3D angle={activeAngle} allowInteraction={true} />
            </div>

            {/* HUD Bottom Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 z-20 text-[10px] font-brand tracking-[0.2em] text-[#8a8a8f] uppercase">
              <div className="flex items-center gap-4">
                <span>ÂNGULO: <b className="text-white">{activeAngle}</b></span>
                <span>BEVEL: <b className="text-white">3.5mm</b></span>
                <span>CURVA: <b className="text-white">BÉZIER</b></span>
              </div>
              <div className="text-white/60">DELTA CAD V2.4</div>
            </div>
          </div>

          {/* Interactive Controls & Geometry Analysis */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Angle Selectors */}
            <div>
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f] block mb-3">
                Selecionar Ângulo de Análise 3D
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {angles.map((ang) => (
                  <button
                    key={ang.id}
                    onClick={() => setActiveAngle(ang.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                      activeAngle === ang.id
                        ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]'
                        : 'bg-[#121214] text-[#8a8a8f] border-white/10 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-brand font-semibold text-xs tracking-[0.2em] uppercase">
                        {ang.label}
                      </span>
                      {activeAngle === ang.id && <Eye className="w-3.5 h-3.5" />}
                    </div>
                    <p className={`font-body text-[11px] mt-1 line-clamp-1 ${activeAngle === ang.id ? 'text-black/70' : 'text-[#8a8a8f]'}`}>
                      {ang.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Anatomia dos Elementos */}
            <div className="bg-[#101012] border border-white/10 rounded-2xl p-6">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f] block mb-4">
                Anatomia do Símbolo
              </span>

              <div className="space-y-4">
                {/* Dobra de papel */}
                <div
                  onMouseEnter={() => setHighlightPart('fold')}
                  onMouseLeave={() => setHighlightPart('all')}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    highlightPart === 'fold'
                      ? 'bg-white/10 border-white/40'
                      : 'bg-[#151518] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#222226] flex items-center justify-center text-white">
                      <svg viewBox="0 0 210 256" className="w-4 h-5 fill-current">
                        <path d={DELTA_PATHS.fold} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-brand font-semibold text-xs tracking-[0.2em] uppercase text-white">
                        01. A Dobra do Papel (Origami)
                      </h4>
                      <p className="font-body text-xs text-[#8a8a8f] mt-0.5">
                        Representa o suporte físico da história do design, o traço impresso e a transformação da matéria.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letra D */}
                <div
                  onMouseEnter={() => setHighlightPart('dBody')}
                  onMouseLeave={() => setHighlightPart('all')}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    highlightPart === 'dBody'
                      ? 'bg-white/10 border-white/40'
                      : 'bg-[#151518] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#222226] flex items-center justify-center text-white">
                      <svg viewBox="0 0 210 256" className="w-4 h-5 fill-current">
                        <path d={DELTA_PATHS.dBody} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-brand font-semibold text-xs tracking-[0.2em] uppercase text-white">
                        02. O Arco da Letra "D"
                      </h4>
                      <p className="font-body text-xs text-[#8a8a8f] mt-0.5">
                        A inicial de Delta desenhada com curvatura contínua, recorte diagonal e ajuste óptico de espessura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10 text-xs text-[#c9c9cf]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Proporção Áurea</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Redução 16x16px</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Versatilidade Monocromática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Compatível com Bordado/Corte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
