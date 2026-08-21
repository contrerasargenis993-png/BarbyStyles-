import React, { useState } from 'react';
import { MessageCircle, X, Scissors, Heart, Sparkles } from 'lucide-react';
import { SPECIALISTS } from '../data/salonData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Options Menu */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl p-5 shadow-2xl border border-black/10 w-72 sm:w-80 animate-in slide-in-from-bottom-5 duration-300 space-y-3">
          <div className="flex items-center justify-between border-b border-black/5 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#1A1A1A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A489]" />
              <span>Chatea con Barby Styles</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black/40 hover:text-black p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-black/60 leading-relaxed">
            Selecciona la profesional de tu preferencia para recibir atención inmediata en WhatsApp:
          </p>

          <div className="space-y-2">
            {/* Andreina Vargas */}
            <a
              href={`https://api.whatsapp.com/send?phone=${SPECIALISTS.andreina.whatsappNumber}&text=${encodeURIComponent('¡Hola Andreina! Me gustaría consultar sobre citas para Peluquería / Cirugía Capilar / Cejas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-[#FAF9F6] hover:bg-[#F3EFEA] border border-black/5 rounded-2xl transition-all group"
            >
              <img
                src={SPECIALISTS.andreina.avatar}
                alt="Andreina Vargas"
                className="w-10 h-10 rounded-full object-cover border border-black/10"
              />
              <div className="flex-1">
                <span className="text-xs font-bold text-[#1A1A1A] block group-hover:text-[#C5A489] transition-colors">
                  Andreina Vargas
                </span>
                <span className="text-[10px] text-black/50 block">Peluquería, Cirugías & Cejas</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </a>

            {/* Daniela Vargas */}
            <a
              href={`https://api.whatsapp.com/send?phone=${SPECIALISTS.daniela.whatsappNumber}&text=${encodeURIComponent('¡Hola Daniela! Me gustaría consultar sobre citas para Sistemas de Uñas / Mega Combo / Pedicura.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-[#FAF9F6] hover:bg-[#F3EFEA] border border-black/5 rounded-2xl transition-all group"
            >
              <img
                src={SPECIALISTS.daniela.avatar}
                alt="Daniela Vargas"
                className="w-10 h-10 rounded-full object-cover border border-black/10"
              />
              <div className="flex-1">
                <span className="text-xs font-bold text-[#1A1A1A] block group-hover:text-[#C5A489] transition-colors">
                  Daniela Vargas
                </span>
                <span className="text-[10px] text-black/50 block">Luna's Nayls / DaniStudios</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#1A1A1A] hover:bg-[#C5A489] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 border-2 border-white group relative"
        aria-label="Abrir opciones de WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[#C5A489] group-hover:text-white transition-colors" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></span>
      </button>

    </div>
  );
};
