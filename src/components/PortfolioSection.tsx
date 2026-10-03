import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Sparkles, Film, Palette, Layers, Video } from 'lucide-react';
import videoEditingImg from '../assets/images/video_editing_suite_1791033648721.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: 'branding' | 'video' | 'motion' | 'graphic';
  year: string;
  coverImage: string;
  client: string;
  description: string;
  deliverables: string[];
  colors: string[];
}

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'delta-brand',
      title: 'DELTA IDENTIDADE',
      category: 'Brand Identity',
      categoryTag: 'branding',
      year: '2026',
      coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000&q=80&auto=format',
      client: 'Delta Studio Design',
      description: 'Criação do ecossistema visual completo: símbolo geométrico em proporção áurea, tipografia corporativa sob medida, sistema de cores e brandbook digital.',
      deliverables: ['Identidade Visual Completa', 'Manual da Marca em PDF', 'Vetorização 100% Autoral', 'Mockups 3D'],
      colors: ['#050505', '#1A1A1C', '#C9C9CF', '#F4F4F2'],
    },
    {
      id: 'frame-video',
      title: 'FRAME CINEMA',
      category: 'Edição de Vídeo',
      categoryTag: 'video',
      year: '2026',
      coverImage: videoEditingImg,
      client: 'Frame Media Group',
      description: 'Pós-produção audiovisual cinematográfica para campanhas de moda e publicidade digital, incluindo sound design dinâmico, cortes de ritmo e color grading ACES.',
      deliverables: ['Cortes Comerciais 16:9 & 9:16', 'Color Grading ACES', 'Legendas Dinâmicas', 'Tratamento de Áudio'],
      colors: ['#0A0A0C', '#282830', '#E5E7EB'],
    },
    {
      id: 'mono-design',
      title: 'MONO EDITORIAL',
      category: 'Design Gráfico',
      categoryTag: 'graphic',
      year: '2025',
      coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&q=80&auto=format',
      client: 'Mono Architecture & Books',
      description: 'Direção gráfica editorial e sinalização de exposições contemporâneas, explorando grids assimétricos, respiros generosos e tipografia humanista.',
      deliverables: ['Catálogo Editorial 140p', 'Banners & Flyers Promocionais', 'Comunicação Visual de Espaço', 'Grid System'],
      colors: ['#121214', '#EDEDEB', '#71717A'],
    },
    {
      id: 'pulse-motion',
      title: 'PULSE KINETIC',
      category: 'Motion Design',
      categoryTag: 'motion',
      year: '2025',
      coverImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=80&auto=format',
      client: 'Pulse Sound & Beats',
      description: 'Animações gráficas e títulos cinéticos para festival de música eletrônica, com vinhetas sincronizadas em BPM real e abertura 3D com loop infinito.',
      deliverables: ['Identidade em Movimento (Logo Animado)', 'Openers & Intros de Vídeo', 'Stories & Reels Interativos', 'Loop para Telões LED'],
      colors: ['#030303', '#3B82F6', '#FFFFFF'],
    },
    {
      id: 'vortex-pack',
      title: 'VORTEX SPIRITS',
      category: 'Embalagem & 3D',
      categoryTag: 'branding',
      year: '2025',
      coverImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=1000&q=80&auto=format',
      client: 'Vortex Craft Distillery',
      description: 'Rótulo com corte a laser, relevo em serigrafia metálica e garrafa personalizada projetada para um posicionamento ultraluxo no setor de bebidas.',
      deliverables: ['Design de Rótulo e Contra-rótulo', 'Caixa Rígida de Colecionador', 'Render 3D Hi-Res', 'Ficha Técnica para Gráfica'],
      colors: ['#0B0B0E', '#D4AF37', '#1F1F24'],
    },
    {
      id: 'lumen-tech',
      title: 'LUMEN VENTURES',
      category: 'Identidade Corporativa',
      categoryTag: 'branding',
      year: '2026',
      coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&q=80&auto=format',
      client: 'Lumen Venture Capital',
      description: 'Repensando a presença de um fundo de venture capital com linhas minimalistas, pitch decks de alto impacto e materiais digitais de suporte para investidores.',
      deliverables: ['Keynote & Pitch Deck', 'Stationery Corporativa', 'Assets para LinkedIn', 'Brand Guidelines'],
      colors: ['#060608', '#F3F4F6', '#38BDF8'],
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.categoryTag === selectedCategory);

  return (
    <section id="projetos" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#050505] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-3 font-brand text-[11px] tracking-[0.4em] uppercase text-[#8a8a8f] mb-3">
              <span className="w-6 h-[1px] bg-[#8a8a8f]" />
              07 — Seleção de Trabalhos
            </div>
            <h2 className="font-brand font-medium text-4xl sm:text-6xl tracking-tight text-[#f4f4f2]">
              Projetos &<br /><em className="text-[#8a8a8f] not-italic">Resultados Reais.</em>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'branding', label: 'Identidade Visual' },
              { id: 'video', label: 'Edição de Vídeo' },
              { id: 'motion', label: 'Motion Design' },
              { id: 'graphic', label: 'Design Gráfico' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-brand tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-[#121215] text-[#8a8a8f] border border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-white/10">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-700 ease-out"
                />

                {/* Hover Quick Badge */}
                <div className="absolute top-4 left-4 font-brand text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver Detalhes →
                </div>

                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Info Bar */}
              <div className="flex items-baseline justify-between pt-4 pb-2 border-b border-white/10">
                <div>
                  <h3 className="font-brand font-semibold text-lg tracking-[0.15em] text-white group-hover:text-[#c9c9cf] transition-colors">
                    {proj.title}
                  </h3>
                  <span className="font-body text-xs text-[#8a8a8f]">
                    {proj.category}
                  </span>
                </div>
                <span className="font-brand font-medium text-xs tracking-widest text-[#8a8a8f]">
                  {proj.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox / Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0e0e11] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
              <div>
                <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                  PROJETO DETALHADO · {activeProject.category}
                </span>
                <h3 className="font-brand font-semibold text-2xl sm:text-3xl tracking-tight text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Media preview */}
              <div className="md:col-span-7 rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-black">
                <img
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Specs & Description */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-brand text-[10px] tracking-widest uppercase text-[#8a8a8f] block mb-1">
                    Cliente / Ano
                  </span>
                  <p className="font-brand font-semibold text-sm text-white">
                    {activeProject.client} ({activeProject.year})
                  </p>
                </div>

                <div>
                  <span className="font-brand text-[10px] tracking-widest uppercase text-[#8a8a8f] block mb-2">
                    Sobre o Projeto
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[#c9c9cf] leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <span className="font-brand text-[10px] tracking-widest uppercase text-[#8a8a8f] block mb-2">
                    Entregáveis Desenvolvidos
                  </span>
                  <ul className="space-y-1 text-xs text-[#8a8a8f]">
                    {activeProject.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[#c9c9cf]">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Color swatches */}
                <div>
                  <span className="font-brand text-[10px] tracking-widest uppercase text-[#8a8a8f] block mb-2">
                    Paleta de Cores
                  </span>
                  <div className="flex gap-2">
                    {activeProject.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-7 h-7 rounded-full border border-white/20 shadow"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/5587988128352?text=Ol%C3%A1!%20Adorei%20o%20projeto%20${encodeURIComponent(activeProject.title)}%20e%20quero%20um%20estilo%20parecido%20para%20minha%20marca.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-brand font-semibold text-xs tracking-wider uppercase hover:bg-[#c9c9cf] transition-all"
                  >
                    <span>Quero um Projeto Parecido</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
