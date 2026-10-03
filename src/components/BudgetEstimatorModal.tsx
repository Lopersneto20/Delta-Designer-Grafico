import React, { useState } from 'react';
import { X, Send, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { DeltaLogoSvg } from './DeltaLogoSvg';

interface BudgetEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BudgetEstimatorModal: React.FC<BudgetEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Identidade Visual']);
  const [urgency, setUrgency] = useState<string>('Padrão (10-15 dias)');
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const availableServices = [
    { id: 'Identidade Visual', label: 'Identidade Visual Completa', desc: 'Logo, paleta, tipografia, manual e aplicações' },
    { id: 'Edição de Vídeos / Reels', label: 'Pacote de Vídeos / Reels', desc: 'Edição dinâmica, legendas magnéticas, color grading' },
    { id: 'Motion Design', label: 'Motion Design & Logo Animado', desc: 'Animações 2D/3D, vinhetas e identidade em movimento' },
    { id: 'Design Gráfico para Redes', label: 'Design Gráfico & Social Media', desc: 'Posts estratégicos, carrosséis e banners' },
    { id: 'Embalagem & 3D', label: 'Embalagens & Rótulos 3D', desc: 'Arquivos para gráfica e renders em alta resolução' },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceList = selectedServices.join(', ');
    const text = `Olá Delta Design Gráfico! 👋%0A%0A` +
      `Gostaria de solicitar uma proposta para meu projeto:%0A` +
      `👤 *Nome:* ${encodeURIComponent(clientName || 'Cliente')}%0A` +
      `🏢 *Empresa/Marca:* ${encodeURIComponent(businessName || 'Não informada')}%0A` +
      `🛠️ *Serviços de interesse:* ${encodeURIComponent(serviceList)}%0A` +
      `⏱️ *Prazo desejado:* ${encodeURIComponent(urgency)}%0A` +
      (notes ? `📝 *Observações:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0AVi o site e adorei os trabalhos da Delta! Podemos conversar?`;

    const url = `https://wa.me/5587988128352?text=${text}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0d0d10] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <DeltaLogoSvg className="w-6 h-7 fill-white" />
            <div>
              <span className="font-brand text-[10px] tracking-[0.3em] uppercase text-[#8a8a8f]">
                ORÇAMENTO DIRETO
              </span>
              <h3 className="font-brand font-semibold text-xl sm:text-2xl text-white">
                Simulador de Projeto
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-6">
          {/* Services Selector */}
          <div>
            <label className="font-brand text-[11px] tracking-wider uppercase text-[#c9c9cf] block mb-3">
              1. Selecione os serviços que você precisa:
            </label>
            <div className="space-y-2">
              {availableServices.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-[#141418] border-white/10 text-[#8a8a8f] hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="font-brand font-semibold text-xs tracking-wider uppercase block">
                        {srv.label}
                      </span>
                      <span className={`text-[11px] font-body ${isSelected ? 'text-black/70' : 'text-[#777]'}`}>
                        {srv.desc}
                      </span>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      isSelected ? 'bg-black text-white border-black' : 'border-white/20'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline / Urgency */}
          <div>
            <label className="font-brand text-[11px] tracking-wider uppercase text-[#c9c9cf] block mb-2">
              2. Prazo ou data limite:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Padrão (10-15 dias)', 'Rápido (5-7 dias)', 'Urgente (< 5 dias)'].map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setUrgency(p)}
                  className={`p-2.5 rounded-xl border text-center font-brand text-[10px] tracking-wider uppercase transition-all ${
                    urgency === p
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-[#141418] border-white/10 text-[#8a8a8f] hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Client Info inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-brand text-[10px] tracking-wider uppercase text-[#8a8a8f] block mb-1.5">
                Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Ex: Carlos Silva"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="font-brand text-[10px] tracking-wider uppercase text-[#8a8a8f] block mb-1.5">
                Nome da Empresa / Projeto:
              </label>
              <input
                type="text"
                placeholder="Ex: Delta Modas"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white"
              />
            </div>
          </div>

          <div>
            <label className="font-brand text-[10px] tracking-wider uppercase text-[#8a8a8f] block mb-1.5">
              Observações ou Detalhes adicionais (opcional):
            </label>
            <textarea
              rows={2}
              placeholder="Fale um pouco sobre o que você imagina ou seu público-alvo..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-white hover:bg-[#c9c9cf] text-black font-brand font-semibold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-3 transition-all shadow-xl"
            >
              <Send className="w-4 h-4" />
              <span>Enviar no WhatsApp com 1 Clique</span>
            </button>
            <p className="font-body text-[11px] text-center text-[#777] mt-3">
              Você será direcionado diretamente ao WhatsApp oficial da Delta Design Gráfico: (87) 9 8812-8352.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
