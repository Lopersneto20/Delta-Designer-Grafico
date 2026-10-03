import React, { useState } from 'react';
import { DeltaLogoSvg } from './DeltaLogoSvg';
import { MessageSquare, Mail, Instagram, Copy, Check, ArrowUp, ArrowRight } from 'lucide-react';

interface FooterSectionProps {
  onOpenEstimator?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenEstimator }) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '(87) 9 8812-8352';

  const copyPhone = () => {
    navigator.clipboard.writeText('5587988128352');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="final" className="relative bg-[#050505] text-[#f4f4f2] border-t border-white/10 pt-24 pb-12 px-6 sm:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Giant Final CTA */}
        <div className="text-center max-w-4xl mx-auto pb-20 border-b border-white/10">
          <div className="w-12 h-14 mx-auto mb-6 text-white">
            <DeltaLogoSvg />
          </div>

          <h2 className="font-brand font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
            VAMOS CRIAR ALGO<br />
            QUE SEJA RECONHECÍVEL.
          </h2>

          <p className="font-body font-light text-base sm:text-xl text-[#8a8a8f] max-w-xl mx-auto mt-6">
            Dê à sua empresa a autoridade visual que ela merece. Fale direto comigo e dê o primeiro passo no seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/5587988128352?text=Ol%C3%A1!%20Quero%20iniciar%20um%20projeto%20com%20a%20Delta%20Design%20Gr%C3%A1fico."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-brand font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#c9c9cf] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>INICIAR PROJETO NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 text-white font-brand text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>Simulador de Orçamento</span>
              </button>
            )}
          </div>
        </div>

        {/* Contact Links & Directory */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10 text-xs">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <DeltaLogoSvg className="w-5 h-6 fill-white" />
              <span className="font-brand font-semibold text-sm tracking-[0.3em] text-white">
                DELTΛ
              </span>
            </div>
            <p className="font-body text-[#8a8a8f] leading-relaxed">
              Design gráfico, identidade visual, motion design e pós-produção audiovisual de alto impacto.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-white block">
              CONTATO DIRETO
            </span>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c9c9cf]">
                <span>WhatsApp: {phoneNumber}</span>
                <button
                  onClick={copyPhone}
                  className="p-1 hover:text-white text-[#8a8a8f]"
                  title="Copiar número"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[#8a8a8f]">
                Atendimento: Segunda a Sábado
              </p>
            </div>
          </div>

          {/* Socials Col */}
          <div className="space-y-3">
            <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-white block">
              CONEXÕES
            </span>
            <ul className="space-y-2 text-[#8a8a8f]">
              <li>
                <a
                  href="https://wa.me/5587988128352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Oficial</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram @deltadesign</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@deltadesign.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contato@deltadesign.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
              NAVEGAÇÃO
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-brand tracking-wider text-[#8a8a8f] hover:text-white uppercase transition-colors mt-4"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#666]">
          <p>© 2026 DELTA Design Gráfico · Todos os direitos reservados.</p>
          <p>Petrolina - PE · Brasil · Atendimento Remoto Global</p>
        </div>
      </div>
    </footer>
  );
};
