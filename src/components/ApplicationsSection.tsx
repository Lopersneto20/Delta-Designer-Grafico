import React, { useState } from 'react';
import { DeltaLogoSvg } from './DeltaLogoSvg';
import { Layers, ArrowRight, Instagram, Sparkles, Smartphone, Laptop, Shirt, Package, FileText } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [boxRotated, setBoxRotated] = useState(false);

  return (
    <section id="aplicacoes" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#050505] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f] mb-3">
              <span className="w-6 h-[1px] bg-[#8a8a8f]" />
              06 — Identidade Aplicada
            </div>
            <h2 className="font-brand font-medium text-4xl sm:text-6xl tracking-tight text-[#f4f4f2]">
              Uma marca forte.<br /><em className="text-[#8a8a8f] not-italic">Todos os pontos de contato.</em>
            </h2>
          </div>
          <p className="font-body font-light text-base text-[#8a8a8f] max-w-md leading-relaxed">
            Uma identidade visual só tem valor quando funciona na prática. Da impressão tipográfica de luxo às telas digitais de alta densidade.
          </p>
        </div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1. Cartão de Visita Interativo (Span 8) */}
          <div className="lg:col-span-8 bg-[#0c0c0e] border border-white/10 rounded-2xl p-8 relative min-h-[340px] flex flex-col justify-between overflow-hidden group">
            <div className="flex items-center justify-between z-10">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                PAPELARIA EXECUTIVA
              </span>
              <button
                onClick={() => setCardFlipped(!cardFlipped)}
                className="text-[10px] font-brand tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                {cardFlipped ? 'Ver Frente' : 'Girar Cartão (3D)'}
              </button>
            </div>

            {/* 3D Card Stage */}
            <div className="flex-1 flex items-center justify-center py-6 perspective-1000">
              <div
                onClick={() => setCardFlipped(!cardFlipped)}
                className={`relative w-72 sm:w-80 h-44 sm:h-48 rounded-xl cursor-pointer transition-transform duration-700 transform-style-3d shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
                  cardFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side: Clean White / Minimal */}
                <div className="absolute inset-0 bg-[#f4f4f2] text-black rounded-xl p-6 flex flex-col justify-between backface-hidden border border-black/10">
                  <div className="flex items-center gap-3">
                    <DeltaLogoSvg className="w-8 h-9 fill-black" />
                    <div className="border-l border-black/20 pl-3">
                      <span className="font-brand font-bold text-sm tracking-[0.3em] block">DELTΛ</span>
                      <span className="font-brand text-[8px] tracking-[0.4em] text-[#555] block">
                        DESIGN GRÁFICO
                      </span>
                    </div>
                  </div>
                  <div className="text-[9px] font-body space-y-0.5 text-[#333]">
                    <p className="font-semibold text-black">DIREÇÃO DE ARTE & IDENTIDADE</p>
                    <p>contato@deltadesign.com · (87) 9 8812-8352</p>
                    <p className="text-[8px] text-[#777]">PETROLINA - PE / ATENDIMENTO GLOBAL</p>
                  </div>
                </div>

                {/* Back Side: Dark Titanium & Hot Stamping */}
                <div className="absolute inset-0 bg-[#0d0d10] text-white rounded-xl p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden border border-white/15 shadow-2xl">
                  <DeltaLogoSvg className="w-16 h-18 text-white fill-current drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                  <span className="font-brand font-semibold text-xs tracking-[0.4em] mt-3 text-[#c9c9cf]">
                    DELTΛ
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-brand tracking-widest text-[#8a8a8f] pt-4 border-t border-white/5">
              <span>ALGODÃO 600G/M² · HOT STAMPING</span>
              <span>CARTÃO DE VISITA DUPLEX</span>
            </div>
          </div>

          {/* 2. Papel Timbrado & Letterhead (Span 4) */}
          <div className="lg:col-span-4 bg-[#e8e8e5] text-black border border-white/10 rounded-2xl p-6 relative min-h-[340px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#666]">
                DOCUMENTO OFICIAL
              </span>
              <FileText className="w-4 h-4 text-[#444]" />
            </div>

            {/* Letterhead Mockup Preview */}
            <div className="my-auto mx-auto w-48 bg-white p-5 rounded-lg shadow-lg border border-black/5 -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <DeltaLogoSvg className="w-5 h-6 fill-black" />
                <span className="font-brand font-bold text-[8px] tracking-widest">DELTΛ</span>
              </div>
              <div className="space-y-1.5 mt-4">
                <div className="h-1.5 bg-black/10 rounded w-full" />
                <div className="h-1.5 bg-black/10 rounded w-5/6" />
                <div className="h-1.5 bg-black/10 rounded w-4/6" />
                <div className="h-1.5 bg-black/10 rounded w-full mt-3" />
                <div className="h-1.5 bg-black/10 rounded w-3/4" />
              </div>
            </div>

            <div className="text-[10px] font-brand tracking-widest text-[#666] pt-4 border-t border-black/10">
              PAPEL TIMBRADO CORPORATIVO
            </div>
          </div>

          {/* 3. Embalagem 3D Caixa Premium (Span 4) */}
          <div className="lg:col-span-4 bg-[#0d0d10] border border-white/10 rounded-2xl p-6 relative min-h-[320px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                PACKAGING LUXURY
              </span>
              <Package className="w-4 h-4 text-white" />
            </div>

            {/* 3D Box Mockup */}
            <div
              onClick={() => setBoxRotated(!boxRotated)}
              className="my-auto mx-auto flex items-center justify-center cursor-pointer py-4"
            >
              <div
                className={`relative w-28 h-28 bg-[#18181c] border border-white/20 rounded-xl shadow-2xl flex flex-col items-center justify-center transition-all duration-500 ${
                  boxRotated ? 'rotate-12 scale-110 border-white/40' : '-rotate-6'
                }`}
              >
                <div className="absolute -top-3 w-16 h-3 bg-[#24242a] border border-white/10 rounded-t-sm" />
                <DeltaLogoSvg className="w-10 h-12 fill-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)]" />
                <span className="font-brand text-[8px] tracking-[0.3em] text-[#c9c9cf] mt-2">DELTΛ</span>
              </div>
            </div>

            <div className="text-[10px] font-brand tracking-widest text-[#8a8a8f] pt-4 border-t border-white/5">
              CAIXA RÍGIDA COM VERNIZ LOCALIZADO
            </div>
          </div>

          {/* 4. Notebook Tela Corporativa (Span 4) */}
          <div className="lg:col-span-4 bg-[#0d0d10] border border-white/10 rounded-2xl p-6 relative min-h-[320px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                INTERFACE DIGITAL
              </span>
              <Laptop className="w-4 h-4 text-white" />
            </div>

            {/* Laptop Mockup */}
            <div className="my-auto mx-auto w-56 flex flex-col items-center">
              <div className="w-48 h-28 bg-[#050505] rounded-t-lg border border-white/20 p-2 flex flex-col items-center justify-center shadow-2xl">
                <DeltaLogoSvg className="w-8 h-9 fill-white" />
                <span className="font-brand font-semibold text-[8px] tracking-widest text-white mt-1">
                  DELTΛ CLOUD PORTAL
                </span>
              </div>
              <div className="w-56 h-2.5 bg-gradient-to-r from-[#222] via-[#444] to-[#222] rounded-b-md shadow-md" />
            </div>

            <div className="text-[10px] font-brand tracking-widest text-[#8a8a8f] pt-4 border-t border-white/5">
              UI DESIGN & DASHBOARD CORPORATIVO
            </div>
          </div>

          {/* 5. Camiseta Streetwear / Merch (Span 4) */}
          <div className="lg:col-span-4 bg-[#e8e8e5] text-black border border-white/10 rounded-2xl p-6 relative min-h-[320px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#666]">
                VESTUÁRIO & MERCH
              </span>
              <Shirt className="w-4 h-4 text-[#444]" />
            </div>

            {/* T-Shirt Silhouette */}
            <div className="my-auto mx-auto w-36 h-36 bg-[#161619] rounded-2xl flex flex-col items-center justify-center shadow-xl p-4 text-white relative">
              <div className="w-10 h-3 border-b-2 border-white/30 rounded-b-full absolute top-2" />
              <DeltaLogoSvg className="w-8 h-10 fill-white" />
              <span className="font-brand font-bold text-[8px] tracking-[0.3em] mt-1.5">DELTΛ</span>
            </div>

            <div className="text-[10px] font-brand tracking-widest text-[#666] pt-4 border-t border-black/10">
              ALGODÃO PIMA COM SILK SCREEN HD
            </div>
          </div>

          {/* 6. Fachada Luminosa Premium (Span 8) */}
          <div className="lg:col-span-8 bg-gradient-to-r from-[#141418] via-[#0d0d0f] to-[#141418] border border-white/10 rounded-2xl p-8 relative min-h-[320px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                SINALIZAÇÃO ARQUITETÔNICA
              </span>
              <span className="text-[10px] font-brand text-emerald-400">LED BACKLIGHT ATIVO</span>
            </div>

            {/* Luminous Storefront Facade */}
            <div className="my-auto mx-auto w-full max-w-lg bg-[#0a0a0c] rounded-xl border border-white/15 p-8 flex items-center justify-center gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]" />
              <DeltaLogoSvg className="w-14 h-16 fill-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]" />
              <div className="border-l border-white/20 pl-6">
                <span className="font-brand font-bold text-2xl tracking-[0.35em] text-white block">
                  DELTΛ
                </span>
                <span className="font-brand text-[10px] tracking-[0.5em] text-[#8a8a8f] block mt-0.5">
                  ESTÚDIO DE DESIGN
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-brand tracking-widest text-[#8a8a8f] pt-4 border-t border-white/5">
              <span>LETRA-CAIXA EM AÇO ESCOVADO & LED 4000K</span>
              <span>FACHADA CORPORATIVA</span>
            </div>
          </div>

          {/* 7. Perfil Social / Feed Coeso (Span 4) */}
          <div className="lg:col-span-4 bg-[#e8e8e5] text-black border border-white/10 rounded-2xl p-6 relative min-h-[320px] flex flex-col justify-between overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#666]">
                PRESENÇA DIGITAL
              </span>
              <Instagram className="w-4 h-4 text-[#444]" />
            </div>

            {/* Social Profile Card */}
            <div className="my-auto mx-auto w-48 bg-white p-4 rounded-xl shadow-lg border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <DeltaLogoSvg className="w-4 h-5 fill-white" />
                </div>
                <div>
                  <h5 className="font-brand font-bold text-[10px] tracking-wider text-black">deltadesign</h5>
                  <p className="font-body text-[8px] text-[#777]">Branding & Motion</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mt-3">
                <div className="aspect-square bg-black rounded-xs" />
                <div className="aspect-square bg-[#333] rounded-xs" />
                <div className="aspect-square bg-black rounded-xs" />
                <div className="aspect-square bg-[#d9d9d6] rounded-xs" />
                <div className="aspect-square bg-black rounded-xs" />
                <div className="aspect-square bg-[#333] rounded-xs" />
              </div>
            </div>

            <div className="text-[10px] font-brand tracking-widest text-[#666] pt-4 border-t border-black/10">
              GRID ESTRATÉGICO PARA REDES SOCIAIS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
