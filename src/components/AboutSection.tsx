import React from 'react';
import { Video, Palette, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    { num: '01', title: 'IDENTIDADE', desc: 'Sua essência traduzida em forma.' },
    { num: '02', title: 'CRIATIVIDADE', desc: 'Soluções fora do padrão genérico.' },
    { num: '03', title: 'PRECISÃO', desc: 'Grids milimétricos e acabamento cirúrgico.' },
    { num: '04', title: 'TECNOLOGIA', desc: 'Workflows modernos com 3D e render 4K.' },
    { num: '05', title: 'DESIGN', desc: 'Estética com função e retorno comercial.' },
  ];

  const services = [
    {
      icon: Video,
      title: 'EDIÇÃO DE VÍDEO',
      desc: 'Reels, Shorts, TikTok, YouTube, vídeos comerciais, cortes dinâmicos, legendas magnéticas, sound design e color grading cinematográfico.',
      tags: ['Reels & TikTok', 'Vídeos Institucionais', 'Color Grading', 'Sound Design'],
    },
    {
      icon: Palette,
      title: 'DESIGN GRÁFICO',
      desc: 'Posts e carrosséis para feeds de alta conversão, stories, banners para web, flyers, outdoors e embalagens impressas com precisão CMYK.',
      tags: ['Posts & Carrosséis', 'Banners Digitais', 'Papelaria', 'Outdoors & Impressos'],
    },
    {
      icon: Layers,
      title: 'IDENTIDADE VISUAL',
      desc: 'Criação do logo autoral, manual de identidade, paleta de cores contrastante, tipografia corporativa e desdobramento para todos os pontos de contato.',
      tags: ['Logo & Símbolo', 'Manual da Marca', 'Guia Tipográfico', 'Pattern & Texturas'],
    },
    {
      icon: Sparkles,
      title: 'MOTION DESIGN',
      desc: 'Animações de logotipo em 2D e 3D, vinhetas para canais e eventos, transições de marca e elementos animados que prendem a atenção do espectador.',
      tags: ['Logo Animado', 'Vinhetas para YouTube', 'Lower Thirds', 'Loops para Telão'],
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 px-6 sm:px-12 bg-gradient-to-b from-[#050505] via-[#09090c] to-[#050505] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f] mb-6">
          <span className="w-6 h-[1px] bg-[#8a8a8f]" />
          08 — Manifesto & Especialidades
        </div>

        {/* Big Editorial Quote */}
        <div className="border-b border-white/10 pb-16">
          <h2 className="font-brand font-medium text-4xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#f4f4f2]">
            DESIGN NÃO É<br />
            APENAS ESTÉTICA.
          </h2>
          <p className="font-body font-light text-2xl sm:text-4xl text-[#8a8a8f] mt-8 max-w-3xl leading-relaxed">
            É estratégia, percepção de alto valor e identidade duradoura.
          </p>
        </div>

        {/* 5 Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-white/10 py-12 gap-6">
          {pillars.map((pil) => (
            <div key={pil.num} className="group cursor-default">
              <span className="font-brand font-medium text-xs tracking-widest text-[#555] block mb-2 group-hover:text-white transition-colors">
                {pil.num}
              </span>
              <h3 className="font-brand font-bold text-sm tracking-[0.25em] text-[#c9c9cf] uppercase group-hover:text-white transition-colors">
                {pil.title}
              </h3>
              <p className="font-body text-xs text-[#8a8a8f] mt-1.5 leading-relaxed">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="pt-16">
          <div className="mb-10">
            <span className="font-brand text-[11px] tracking-[0.3em] uppercase text-[#8a8a8f] block mb-2">
              O QUE CRIAMOS PARA VOCÊ
            </span>
            <h3 className="font-brand font-semibold text-2xl sm:text-3xl text-white">
              Serviços de Alto Padrão
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e0e11] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-brand font-semibold text-sm tracking-[0.2em] text-white uppercase mb-3">
                      {srv.title}
                    </h4>

                    <p className="font-body font-light text-xs text-[#8a8a8f] leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-white/5">
                    {srv.tags.map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-[#c9c9cf]">
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
