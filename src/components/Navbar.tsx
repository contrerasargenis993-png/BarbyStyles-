import React, { useState } from 'react';
import { Menu, X, Calendar, Sparkles, User, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, specialistId?: 'andreina' | 'daniela') => void;
  onOpenConcierge: () => void;
  onToggleAdmin: () => void;
  isAdminOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenConcierge,
  onToggleAdmin,
  isAdminOpen
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Promociones', href: '#promociones' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Transformaciones', href: '#transformaciones' },
    { label: 'Especialistas', href: '#especialistas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex flex-col group">
          <span className="text-2xl sm:text-3xl font-serif tracking-widest font-black uppercase text-[#1A1A1A] group-hover:text-[#C5A489] transition-colors">
            Barby Styles
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#C5A489] uppercase font-bold -mt-1">
            Premium Studio 2.0
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C5A489] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A489] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Beauty Concierge Quiz Trigger */}
          <button
            onClick={onOpenConcierge}
            className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A] border border-black/10 rounded-full hover:border-[#C5A489] hover:text-[#C5A489] hover:bg-[#F3EFEA]/50 transition-all"
            title="Asesor de belleza virtual"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A489]" />
            <span>Beauty Concierge</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#1A1A1A] text-white px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#C5A489] transition-all shadow-sm flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservar Cita</span>
          </button>

          {/* Admin Panel Toggle */}
          <button
            onClick={onToggleAdmin}
            className={`p-2.5 rounded-full border transition-all ${
              isAdminOpen 
                ? 'bg-[#C5A489] text-white border-[#C5A489]' 
                : 'border-black/10 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
            title="Panel de Especialistas / Admin"
            aria-label="Panel de Especialistas"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#1A1A1A] text-white px-3.5 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full"
          >
            Reservar
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#1A1A1A] hover:text-[#C5A489] focus:outline-none"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF9F6] border-b border-black/10 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-3 text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#F3EFEA] hover:text-[#C5A489] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="w-full py-3 bg-[#F3EFEA] text-[#1A1A1A] text-[11px] font-bold tracking-[0.2em] uppercase rounded-full flex items-center justify-center gap-2 border border-black/5"
            >
              <Sparkles className="w-4 h-4 text-[#C5A489]" />
              <span>Test Asesor de Belleza</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita por WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onToggleAdmin();
              }}
              className="w-full py-2.5 text-[10px] font-bold tracking-widest uppercase text-black/50 hover:text-black flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdminOpen ? 'Cerrar Panel de Gestión' : 'Acceso Especialistas (Andreina & Daniela)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
