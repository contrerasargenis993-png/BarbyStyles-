import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, ChevronDown, ChevronUp, Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { SALON_INFO, FAQS } from '../data/salonData';

export const LocationContact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
              Visítanos en San Carlos
            </span>
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] mb-4">
            Ubicación & <span className="italic">Atención Exclusiva</span>
          </h2>
          <p className="text-sm text-black/60">
            Un espacio cálido, climatizado y diseñado para tu relajación y transformación total.
          </p>
        </div>

        {/* Location & Map Visual Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Cards: Contact & Details */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm flex items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-[#F3EFEA] text-[#C5A489] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Dirección del Salón
                </span>
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-1">
                  {SALON_INFO.address}
                </h3>
                <p className="text-xs text-black/60">
                  {SALON_INFO.city}, {SALON_INFO.state}, {SALON_INFO.country}.
                </p>
                <a
                  href={SALON_INFO.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A489] hover:underline mt-3"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm flex items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-[#F3EFEA] text-[#C5A489] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Horarios de Atención
                </span>
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-1">
                  {SALON_INFO.hours}
                </h3>
                <p className="text-xs text-black/60">
                  Atención preferencial previa reserva para evitar esperas y garantizar tu confort.
                </p>
              </div>
            </div>

            {/* Phone Lines Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm flex items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-[#F3EFEA] text-[#C5A489] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Líneas de Contacto Directo
                </span>
                <div className="space-y-1.5 mt-2">
                  <div className="text-xs flex items-center gap-2">
                    <span className="font-bold text-[#1A1A1A]">💇‍♀️ Andreina Vargas (Peluquería):</span>
                    <a href="tel:04129670497" className="text-[#C5A489] font-bold hover:underline">0412-9670497</a>
                  </div>
                  <div className="text-xs flex items-center gap-2">
                    <span className="font-bold text-[#1A1A1A]">💅 Daniela Vargas (Uñas):</span>
                    <a href="https://wa.me/573237864879" target="_blank" rel="noopener noreferrer" className="text-[#C5A489] font-bold hover:underline">+57 323 7864879</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Map & Navigation Interactive Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-black/10 shadow-editorial flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A489_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-700">
                    Estudio Abierto
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">
                  San Carlos • Cojedes
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mb-2">
                  ¿Cómo llegar a Barby Styles?
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  Estamos ubicados en el sector <strong>El Chuchango</strong>, Calle Figueredo, Casa #16-40. Fácil acceso desde las principales vías de la ciudad de San Carlos.
                </p>
              </div>

              {/* Visual Landmark Badge Grid */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="p-3 bg-[#FAF9F6] rounded-2xl border border-black/5">
                  <span className="text-[9px] uppercase font-bold text-black/40 block">Punto de referencia</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">Sector El Chuchango</span>
                </div>
                <div className="p-3 bg-[#FAF9F6] rounded-2xl border border-black/5">
                  <span className="text-[9px] uppercase font-bold text-black/40 block">Zona de fácil</span>
                  <span className="text-xs font-bold text-[#1A1A1A]">Estacionamiento Cómodo</span>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="relative z-10 pt-6 border-t border-black/5 flex flex-col sm:flex-row gap-3">
              <a
                href={SALON_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold uppercase tracking-widest text-center rounded-full transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Ruta en Google Maps</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=584129670497&text=Hola%20Andreina,%20%C2%BFme%20podr%C3%ADas%20compartir%20la%20ubicaci%C3%B3n%20exacta%20en%20tiempo%20real%20por%20favor?"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 bg-[#F3EFEA] hover:bg-[#C5A489] hover:text-white text-[#1A1A1A] text-xs font-bold uppercase tracking-widest text-center rounded-full transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir GPS</span>
              </a>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A489] block mb-1">
              Preguntas Frecuentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Todo lo que necesitas saber
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#C5A489] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-black/40 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-black/70 leading-relaxed border-t border-black/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
