import React from 'react';
import { Tag, Sparkles, Check, ArrowUpRight, Clock, Star } from 'lucide-react';

interface PromotionsShowcaseProps {
  onSelectService: (serviceId: string, specialistId?: 'andreina' | 'daniela') => void;
}

export const PromotionsShowcase: React.FC<PromotionsShowcaseProps> = ({ onSelectService }) => {
  const promotions = [
    {
      id: 'nail_mega_promo',
      specialistId: 'daniela' as const,
      brand: 'DaniStudios • Uñas & Pedi',
      specialist: 'Daniela Vargas',
      title: 'MEGA COMBO Semipermanente',
      subtitle: 'Manicure Rusa + Kapping Gel + Pedicure Spa',
      price: '$20',
      regularPrice: '$28',
      savingText: 'Ahorras $8',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
      badge: 'El Más Solicitado',
      accentColor: '#C5A489',
      features: [
        'Manicura combinada con exfoliación profunda',
        'Kapping en gel nivelado (refuerzo anti-quiebre)',
        'Pedicura spa completa con esmaltado semipermanente',
        'Más de 80 colores de alta duración a elegir'
      ],
      duration: '90 minutos'
    },
    {
      id: 'cirugia_capilar',
      specialistId: 'andreina' as const,
      brand: 'Barby Styles • Peluquería',
      specialist: 'Andreina Vargas',
      title: 'Cirugía Capilar Termoactiva',
      subtitle: 'Restauración intensiva & Alisado Espejo por Largo',
      price: '$13 – $30',
      regularPrice: '$35+',
      savingText: 'Hasta 30% OFF',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      badge: 'Tratamiento Estrella',
      accentColor: '#1A1A1A',
      features: [
        'Elimina el 100% del frizz y encrespamiento',
        'Efecto liso natural con movimiento y brillo',
        'Muy corto: $13 • Hombros: $15 • Medio: $20',
        'Largo: $25 • Extralargo: $30'
      ],
      duration: '2 - 3 horas'
    },
    {
      id: 'jelly_tips',
      specialistId: 'daniela' as const,
      brand: "Luna's Nayls • Nail Studio",
      specialist: 'Daniela Vargas',
      title: 'Sistema Esculpido Jelly Tips',
      subtitle: 'Uñas ultraligeras, flexibles y listas en tiempo récord',
      price: '$12',
      regularPrice: '$16',
      savingText: 'Tarifa Especial',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
      badge: 'Tendencia Global',
      accentColor: '#C5A489',
      features: [
        '100% de gel suave sin limado agresivo',
        'Cero dolor y sin olores fuertes de monómero',
        'Forma a tu gusto: Almendra, Coffin, Cuadrada',
        'Incluye esmaltado en gel semipermanente'
      ],
      duration: '60 minutos'
    }
  ];

  return (
    <section id="promociones" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-[#C5A489]"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A489] font-bold">
                Ofertas & Experiencias Reales
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A]">
              Promociones <span className="italic">Exclusivas</span>
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md">
            Paquetes integrales diseñados para consentirte con los mejores precios del mercado y resultados de máxima duración.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-editorial flex flex-col group hover:-translate-y-1.5 transition-all duration-300 relative"
            >
              {/* Top Image Banner */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-[#E8E4DF]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-black/5 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#C5A489]" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#1A1A1A]">
                    {promo.badge}
                  </span>
                </div>

                {/* Savings Pill */}
                <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
                  {promo.savingText}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A489] block mb-1">
                    {promo.brand}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif italic leading-snug">
                    {promo.title}
                  </h3>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-xs text-black/70 mb-5 leading-relaxed">
                    {promo.subtitle}
                  </p>

                  <div className="flex items-center gap-2 mb-5 text-[11px] text-black/60 font-medium pb-4 border-b border-black/5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A489]" />
                    <span>Duración estimada: {promo.duration}</span>
                    <span className="mx-1">•</span>
                    <span>Por {promo.specialist}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {promo.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-black/80">
                        <span className="w-4 h-4 rounded-full bg-[#F3EFEA] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#C5A489]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-serif font-black text-[#1A1A1A]">
                        {promo.price}
                      </span>
                      {promo.regularPrice && (
                        <span className="text-xs text-black/40 line-through">
                          {promo.regularPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-black/40 font-bold">
                      Precio de Promoción
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(promo.id, promo.specialistId)}
                    className="bg-[#1A1A1A] hover:bg-[#C5A489] text-white px-5 py-3 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all flex items-center gap-1.5 shadow-sm group/btn"
                  >
                    <span>Agendar</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
