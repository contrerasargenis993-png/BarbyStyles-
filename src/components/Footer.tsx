import React from 'react';
import { Sparkles, MapPin, Clock, Phone, Heart, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { SALON_INFO, SPECIALISTS } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
  onToggleAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenConcierge,
  onToggleAdmin
}) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative Brand Watermark */}
      <div className="absolute -bottom-10 right-0 pointer-events-none text-white/5 font-serif font-black text-[180px] leading-none select-none">
        BARBY
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif tracking-widest font-black uppercase text-white">
                Barby Styles
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#C5A489] uppercase font-bold">
                Premium Beauty Studio 2.0
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Transformando la experiencia de belleza en San Carlos, Cojedes. Alta peluquería, salud capilar y estética de uñas con estándares de calidad y lujo editorial.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SALON_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A489] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A489] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConcierge}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#C5A489] text-[10px] uppercase font-bold tracking-wider text-white transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-[#C5A489]" />
                <span>Test Beauty Concierge</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A489]">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#promociones" className="hover:text-white transition-colors">Promociones</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Carta de Servicios</a></li>
              <li><a href="#transformaciones" className="hover:text-white transition-colors">Antes y Después</a></li>
              <li><a href="#especialistas" className="hover:text-white transition-colors">Especialistas</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería Lookbook</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Lines & Specialists (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A489]">
              Especialistas
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="font-serif font-bold text-white block">Andreina Vargas</span>
                <span className="text-[10px] text-white/50 block">Peluquería, Cirugías & Cejas</span>
                <a href="tel:04129670497" className="text-[#C5A489] text-[11px] hover:underline">0412-9670497</a>
              </div>

              <div>
                <span className="font-serif font-bold text-white block">Daniela Vargas</span>
                <span className="text-[10px] text-white/50 block">Luna's Nayls / DaniStudios</span>
                <a href="https://wa.me/573237864879" target="_blank" rel="noopener noreferrer" className="text-[#C5A489] text-[11px] hover:underline">+57 323 7864879</a>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A489]">
              Sede San Carlos
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A489] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}, San Carlos, Cojedes.</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C5A489] shrink-0 mt-0.5" />
                <span>{SALON_INFO.hours}</span>
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 bg-[#C5A489] hover:bg-white hover:text-[#1A1A1A] text-[#1A1A1A] font-bold text-[10px] uppercase tracking-widest rounded-full transition-all mt-2"
            >
              Reservar Cita Ahora
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Barby Styles 2.0. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleAdmin}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Acceso Especialistas</span>
            </button>
            <span>•</span>
            <span>Diseño Editorial Alta Gama</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
