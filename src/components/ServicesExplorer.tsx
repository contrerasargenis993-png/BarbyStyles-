import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Clock, Check, ChevronRight, Info, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesExplorerProps {
  onSelectService: (serviceId: string, specialistId?: 'andreina' | 'daniela') => void;
}

export const ServicesExplorer: React.FC<ServicesExplorerProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'hair', label: 'Peluquería & Corte' },
    { id: 'keratin', label: 'Cirugía Capilar' },
    { id: 'color', label: 'Color & Balayage' },
    { id: 'nails', label: 'Uñas & Manicura' },
    { id: 'brows', label: 'Cejas & Depilación' },
    { id: 'promos', label: 'Mega Promos' }
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' ||
        service.category === activeCategory ||
        (activeCategory === 'hair' && service.category === 'keratin');

      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.specialistName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F3EFEA]/60 border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
              Menú Completo de Estilo
            </span>
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] mb-4">
            Nuestros <span className="italic">Servicios</span> & Tratamientos
          </h2>
          <p className="text-sm text-black/60">
            Cada procedimiento está realizado con productos de alta gama y técnicas personalizadas para garantizar la salud de tu cabello y uñas.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white text-black/60 hover:text-black border border-black/5 hover:border-black/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio..."
              className="w-full bg-white border border-black/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A489] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-sm hover:shadow-editorial hover:border-[#C5A489]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Header */}
              <div className="relative h-48 w-full overflow-hidden bg-[#E8E4DF]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge if available */}
                {service.badge && (
                  <div className="absolute top-3 left-3 bg-[#FAF9F6] text-[#1A1A1A] px-3 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-sm border border-black/5">
                    {service.badge}
                  </div>
                )}

                {/* Specialist indicator */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[10px] font-bold tracking-wider uppercase">
                  <span>Por {service.specialistName}</span>
                  <div className="flex items-center gap-1 opacity-90">
                    <Clock className="w-3 h-3" />
                    <span>{service.durationMinutes} min</span>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#C5A489] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-black/60 line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Cirugía capilar lengths preview badge */}
                  {service.lengthOptions && (
                    <div className="mb-4 bg-[#FAF9F6] p-3 rounded-xl border border-black/5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-black/50 block mb-1.5">
                        Opciones de largo:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.lengthOptions.map((len) => (
                          <span
                            key={len.id}
                            className="text-[10px] font-bold px-2 py-0.5 bg-white border border-black/10 rounded text-black/80"
                          >
                            {len.name.split('(')[0]}: <strong className="text-[#1A1A1A]">${len.price}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-serif font-black text-[#1A1A1A]">
                      {service.priceDisplay}
                    </span>
                    <button
                      onClick={() => setSelectedServiceDetail(service)}
                      className="text-[10px] text-[#C5A489] font-bold tracking-wider uppercase text-left hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Info className="w-3 h-3" />
                      <span>Ver detalles</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id, service.specialistId)}
                    className="bg-[#1A1A1A] hover:bg-[#C5A489] text-white px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-1 shadow-sm"
                  >
                    <span>Reservar</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/10">
            <p className="text-sm text-black/60 mb-2">No se encontraron servicios con el criterio especificado.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#C5A489] font-bold tracking-widest uppercase underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-black/10 flex flex-col max-h-[90vh]">
            
            {/* Modal Image Header */}
            <div className="relative h-48 w-full bg-[#E8E4DF]">
              <img
                src={selectedServiceDetail.image}
                alt={selectedServiceDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A489] block mb-1">
                  Especialista: {selectedServiceDetail.specialistName}
                </span>
                <h3 className="text-xl font-serif font-bold text-white leading-tight">
                  {selectedServiceDetail.name}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-black/40 mb-2">
                  Descripción del Tratamiento
                </h4>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  {selectedServiceDetail.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-black/40 mb-3">
                  Beneficios y Pasos Clave
                </h4>
                <ul className="space-y-2">
                  {selectedServiceDetail.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-black/80">
                      <Check className="w-3.5 h-3.5 text-[#C5A489] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Length breakdown for Cirugía capilar */}
              {selectedServiceDetail.lengthOptions && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-black/40 mb-3">
                    Escala de Precios según el Largo
                  </h4>
                  <div className="space-y-2">
                    {selectedServiceDetail.lengthOptions.map((opt) => (
                      <div key={opt.id} className="flex justify-between items-center p-2.5 bg-[#FAF9F6] rounded-xl border border-black/5 text-xs">
                        <div>
                          <span className="font-bold text-[#1A1A1A] block">{opt.name}</span>
                          <span className="text-[10px] text-black/50">{opt.description}</span>
                        </div>
                        <span className="font-serif font-bold text-base text-[#1A1A1A]">${opt.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-[#FAF9F6] border-t border-black/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-black/40 font-bold block">Inversión</span>
                <span className="text-2xl font-serif font-bold text-[#1A1A1A]">{selectedServiceDetail.priceDisplay}</span>
              </div>
              <button
                onClick={() => {
                  const s = selectedServiceDetail;
                  setSelectedServiceDetail(null);
                  onSelectService(s.id, s.specialistId);
                }}
                className="bg-[#1A1A1A] hover:bg-[#C5A489] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md"
              >
                Agendar este servicio
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
