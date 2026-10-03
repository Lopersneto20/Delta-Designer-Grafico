import React, { useState, useEffect } from 'react';
import { DELTA_PATHS } from './DeltaLogoSvg';
import { PenTool, MousePointer, Circle, Type, Square, RotateCcw, ZoomIn, ZoomOut, Check, Eye } from 'lucide-react';

export const PhoneMockupSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'select' | 'pen' | 'shape' | 'type'>('pen');
  const [drawProgress, setDrawProgress] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'all' | 'fold' | 'dBody' | 'type'>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Auto trigger vector drawing animation on mount or replay
  const triggerDraw = () => {
    setIsDrawing(true);
    setDrawProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 0.04;
      if (p >= 1) {
        p = 1;
        clearInterval(interval);
        setIsDrawing(false);
      }
      setDrawProgress(p);
    }, 30);
  };

  useEffect(() => {
    triggerDraw();
  }, []);

  return (
    <section id="celular" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#050505] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f] mb-3">
            <span className="w-6 h-[1px] bg-[#8a8a8f]" />
            04 — Precisão Vetorial Mobile
            <span className="w-6 h-[1px] bg-[#8a8a8f]" />
          </div>
          <h2 className="font-brand font-medium text-4xl sm:text-6xl tracking-tight text-[#f4f4f2]">
            Cada vetor,<br /><em className="text-[#8a8a8f] not-italic">no lugar certo.</em>
          </h2>
          <p className="font-body font-light text-base text-[#8a8a8f] mt-4">
            Do esboço manual aos nós de Bézier. Nenhuma curva é aleatória: cada raio de concordância e espessura responde a critérios visuais rigorosos.
          </p>
        </div>

        {/* Workspace Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Device Controls & Interactive Tools */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-[#0e0e11] border border-white/10 rounded-2xl p-6">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f] block mb-4">
                Ferramentas de Desenho
              </span>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setActiveTool('select')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                    activeTool === 'select'
                      ? 'bg-white text-black border-white'
                      : 'bg-[#151518] text-[#8a8a8f] border-white/5 hover:border-white/20'
                  }`}
                >
                  <MousePointer className="w-4 h-4" />
                  <span className="font-brand text-[9px] tracking-wider uppercase">Seleção</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTool('pen');
                    triggerDraw();
                  }}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                    activeTool === 'pen'
                      ? 'bg-white text-black border-white'
                      : 'bg-[#151518] text-[#8a8a8f] border-white/5 hover:border-white/20'
                  }`}
                >
                  <PenTool className="w-4 h-4" />
                  <span className="font-brand text-[9px] tracking-wider uppercase">Caneta</span>
                </button>
                <button
                  onClick={() => setActiveTool('shape')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                    activeTool === 'shape'
                      ? 'bg-white text-black border-white'
                      : 'bg-[#151518] text-[#8a8a8f] border-white/5 hover:border-white/20'
                  }`}
                >
                  <Circle className="w-4 h-4" />
                  <span className="font-brand text-[9px] tracking-wider uppercase">Curvas</span>
                </button>
                <button
                  onClick={() => setActiveTool('type')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                    activeTool === 'type'
                      ? 'bg-white text-black border-white'
                      : 'bg-[#151518] text-[#8a8a8f] border-white/5 hover:border-white/20'
                  }`}
                >
                  <Type className="w-4 h-4" />
                  <span className="font-brand text-[9px] tracking-wider uppercase">Texto</span>
                </button>
              </div>

              {/* Layer switch buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f] block mb-2">
                  Camadas Ativas
                </span>
                <div
                  onClick={() => setActiveLayer('all')}
                  className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                    activeLayer === 'all'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-[#121214] border-white/5 text-[#8a8a8f] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Todas as Camadas</span>
                  </div>
                  <span className="font-brand text-[9px] text-[#8a8a8f]">MASTER</span>
                </div>
                <div
                  onClick={() => setActiveLayer('fold')}
                  className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                    activeLayer === 'fold'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-[#121214] border-white/5 text-[#8a8a8f] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Dobra Angular (Paper Fold)</span>
                  </div>
                  <span className="font-brand text-[9px] text-[#8a8a8f]">PATH 01</span>
                </div>
                <div
                  onClick={() => setActiveLayer('dBody')}
                  className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                    activeLayer === 'dBody'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-[#121214] border-white/5 text-[#8a8a8f] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Arco Contínuo "D"</span>
                  </div>
                  <span className="font-brand text-[9px] text-[#8a8a8f]">PATH 02</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={triggerDraw}
                  disabled={isDrawing}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-brand text-xs tracking-wider uppercase transition-all"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isDrawing ? 'animate-spin' : ''}`} />
                  <span>Replay Desenho Vetorial</span>
                </button>

                <div className="flex items-center gap-1 bg-[#151518] p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setZoomLevel(Math.max(75, zoomLevel - 25))}
                    className="p-1.5 hover:text-white text-[#8a8a8f]"
                    title="Diminuir zoom"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-brand text-[10px] px-1 text-white">{zoomLevel}%</span>
                  <button
                    onClick={() => setZoomLevel(Math.min(150, zoomLevel + 25))}
                    className="p-1.5 hover:text-white text-[#8a8a8f]"
                    title="Aumentar zoom"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Realistic 3D Phone Screen Container */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2 perspective-1800">
            <div
              className="relative w-[310px] sm:w-[350px] aspect-[9/19] rounded-[52px] p-3 bg-gradient-to-tr from-[#242428] via-[#0d0d0e] to-[#2a2a30] shadow-[0_50px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)_inset] transition-transform duration-700 hover:rotate-y-6"
            >
              {/* Outer button mockups */}
              <div className="absolute -left-1.5 top-28 w-1 h-8 bg-[#333] rounded-l" />
              <div className="absolute -left-1.5 top-38 w-1 h-12 bg-[#333] rounded-l" />
              <div className="absolute -left-1.5 top-52 w-1 h-12 bg-[#333] rounded-l" />
              <div className="absolute -right-1.5 top-36 w-1 h-16 bg-[#333] rounded-r" />

              {/* Internal Screen */}
              <div className="relative w-full h-full rounded-[42px] bg-[#0a0a0c] overflow-hidden flex flex-col justify-between border border-black select-none">
                {/* Dynamic Island & Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-medium text-[#aaa] z-20">
                  <span>9:41</span>
                  <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 mr-1 animate-pulse" />
                    <span className="text-[9px] text-[#888]">DELTA.ART</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <div className="w-4 h-2.5 border border-white/60 rounded-sm p-0.5 flex items-center">
                      <div className="w-2/3 h-full bg-white rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* In-app Toolbar */}
                <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between text-[10px] font-brand tracking-widest text-[#777] z-20 bg-[#0e0e11]/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-bold text-[9px]">
                      V
                    </span>
                    <span className="text-white/80">GRID: 8PX</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1 text-[9px]">
                    <Check className="w-3 h-3" /> SNAP OK
                  </span>
                </div>

                {/* Vector Canvas */}
                <div className="flex-1 m-3 rounded-2xl bg-[#f4f4f2] relative overflow-hidden flex flex-col items-center justify-center shadow-inner">
                  {/* Canvas Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000e_1px,transparent_1px),linear-gradient(to_bottom,#0000000e_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Dimension Guide Box */}
                  <div className="absolute inset-8 border border-dashed border-blue-500/40 rounded-lg pointer-events-none" />
                  <span className="absolute top-4 left-4 font-mono text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-semibold">
                    210 × 256 PT
                  </span>

                  {/* SVG Vectors with stroke draw */}
                  <div
                    className="relative transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel / 100})` }}
                  >
                    <svg viewBox="0 0 210 256" className="w-36 h-44 overflow-visible">
                      {/* Path 1: Fold */}
                      {(activeLayer === 'all' || activeLayer === 'fold') && (
                        <path
                          d={DELTA_PATHS.fold}
                          fill={drawProgress >= 0.8 ? '#222226' : 'transparent'}
                          stroke="#000000"
                          strokeWidth="2.5"
                          strokeDasharray={600}
                          strokeDashoffset={600 * (1 - drawProgress)}
                          className="transition-all duration-300"
                        />
                      )}

                      {/* Path 2: D Body */}
                      {(activeLayer === 'all' || activeLayer === 'dBody') && (
                        <path
                          d={DELTA_PATHS.dBody}
                          fill={drawProgress >= 0.95 ? '#0a0a0c' : 'transparent'}
                          stroke="#000000"
                          strokeWidth="2.5"
                          strokeDasharray={900}
                          strokeDashoffset={900 * (1 - drawProgress)}
                          className="transition-all duration-300"
                        />
                      )}
                    </svg>

                    {/* Anchor Points / Handles */}
                    {drawProgress > 0.4 && (
                      <>
                        <div className="absolute top-1 left-2 w-2 h-2 bg-blue-500 border border-white rounded-xs shadow" />
                        <div className="absolute top-1 right-2 w-2 h-2 bg-blue-500 border border-white rounded-xs shadow" />
                        <div className="absolute bottom-1 left-12 w-2 h-2 bg-blue-500 border border-white rounded-xs shadow" />
                        <div className="absolute top-24 right-0 w-2 h-2 bg-blue-500 border border-white rounded-xs shadow" />
                      </>
                    )}
                  </div>

                  <span className="absolute bottom-3 font-brand font-semibold text-xs tracking-[0.35em] text-[#0a0a0c] uppercase">
                    DELTΛ
                  </span>
                </div>

                {/* Bottom App Layers Drawer */}
                <div className="p-3.5 bg-[#121215] border-t border-white/10 text-[10px] font-body text-[#888] space-y-1.5">
                  <div className="flex items-center justify-between text-white font-medium">
                    <span>▾ Símbolo Principal</span>
                    <span className="text-[9px] font-mono text-[#8a8a8f]">VETOR (RGB)</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-[#aaa]">
                    <span>↳ Dobra Angular</span>
                    <span className="text-[9px] font-mono text-emerald-400">FECHADO</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-[#aaa]">
                    <span>↳ Arco Delta</span>
                    <span className="text-[9px] font-mono text-emerald-400">FECHADO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
