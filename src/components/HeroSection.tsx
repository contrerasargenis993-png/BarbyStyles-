import React from 'react';
import { ArrowDown, Sparkles, Star, ChevronRight, Award, ShieldCheck, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenConcierge,
  onExploreServices
}) => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-8 pb-16 lg:py-24 bg-[#FAF9F6] border-b border-black/5">
      {/* Decorative luxury architectural background shape */}
      <div className="absolute top-12 right-12 lg:right-48 w-[350px] sm:w-[480px] h-[550px] sm:h-[650px] bg-[#F3EFEA] rounded-t-full -z-0 pointer-events-none opacity-80" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8E4DF]/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      {/* Side Collection Label */}
      <div className="hidden 2xl:flex absolute left-8 top-1/2 -rotate-90 origin-left items-center gap-4 z-10">
        <span className="text-[9px] uppercase tracking-[0.5em] text-black/30 font-black">
          HAUTE BEAUTÉ • EDITION 2026
        </span>
        <div className="h-[1px] w-12 bg-black/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bold Typography & Emotional Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Excellence Tagline */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-10 sm:w-14 bg-[#C5A489]"></div>
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
                The Excellence of Beauty
              </span>
            </div>

            {/* Main Headline with Serif Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-serif leading-[0.95] tracking-tight font-light mb-6 sm:mb-8 text-[#1A1A1A]">
              <span className="italic font-normal">Tu belleza merece</span> <br />
              <span className="font-bold not-italic text-[#1A1A1A]">su propio momento.</span>
            </h1>

            {/* Subtext with strict typography constraint */}
            <p className="text-sm sm:text-base text-black/70 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal">
              Redefinimos el cuidado personal mediante técnicas de vanguardia y atención personalizada en San Carlos. Peluquería y salud capilar por <strong className="text-[#1A1A1A] font-semibold">Andreina Vargas</strong> y arte en uñas de alta durabilidad por <strong className="text-[#1A1A1A] font-semibold">Daniela Vargas</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center mb-10">
              <button
                onClick={onOpenBooking}
                className="bg-[#1A1A1A] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#C5A489] transition-all shadow-md hover:shadow-xl hover:scale-[1.02] flex items-center gap-2 group"
              >
                <span>Agendar Cita Exclusiva</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="border-b-2 border-[#1A1A1A] pb-1 text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-[#C5A489] hover:border-[#C5A489] transition-all flex items-center gap-2"
              >
                <span>Descubrir Servicios</span>
              </button>

              <button
                onClick={onExploreServices}
                className="w-11 h-11 rounded-full border border-black/10 hover:border-[#C5A489] flex items-center justify-center text-[#1A1A1A] hover:text-[#C5A489] hover:bg-white transition-all shadow-sm"
                aria-label="Desplazar a servicios"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges & Metrics Bar */}
            <div className="pt-6 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {SALON_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-serif font-black text-[#1A1A1A]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-black/50 font-bold mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Image Mockup & Beauty Concierge Widget */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Main Editorial Card */}
            <div className="w-[320px] sm:w-[380px] h-[450px] sm:h-[520px] bg-[#E8E4DF] relative overflow-hidden rounded-2xl shadow-editorial group border border-black/5">
              
              {/* Background High-Fashion Photo */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                alt="Alta peluquería y estilismo Barby Styles"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Monogram Brand Watermark */}
              <div className="absolute top-4 right-6 pointer-events-none">
                <span className="text-[52px] font-serif font-black text-white/15">BS</span>
              </div>

              {/* Featured Look Tag */}
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A489] animate-pulse"></span>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-80 font-bold">Look Destacado</p>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-normal mb-1">
                  Cirugía Capilar Espejo
                </h3>
                <p className="text-xs text-white/75 line-clamp-2 font-light">
                  Liso sedoso, cero frizz y nutrición termoactiva por Andreina Vargas.
                </p>
              </div>

              {/* Top Quality Badge */}
              <div className="absolute top-6 left-6 bg-[#FAF9F6]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 flex items-center gap-1.5 shadow-sm">
                <Star className="w-3 h-3 text-[#C5A489] fill-[#C5A489]" />
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#1A1A1A]">
                  4.9 / 5.0 Rating
                </span>
              </div>
            </div>

            {/* Floating Interactive Widget: Beauty Concierge */}
            <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-white p-5 sm:p-6 shadow-2xl w-[260px] sm:w-[290px] border border-black/10 rounded-2xl z-20 backdrop-blur-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-widest text-[#C5A489] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C5A489]" />
                  <span>Beauty Concierge</span>
                </p>
                <span className="text-[9px] bg-[#F3EFEA] text-black/60 px-2 py-0.5 rounded-full font-bold uppercase">
                  Gratis
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-3 leading-snug">
                ¿No sabes qué servicio elegir para tu cabello o uñas?
              </h4>
              <button
                onClick={onOpenConcierge}
                className="w-full py-2.5 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-widest uppercase text-center rounded-xl hover:bg-[#C5A489] transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Realizar Test de Estilo</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
