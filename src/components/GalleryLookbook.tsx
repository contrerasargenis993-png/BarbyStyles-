import React, { useState } from 'react';
import { Eye, Sparkles, X, ChevronRight } from 'lucide-react';

interface GalleryLookbookProps {
  onSelectLookService: (serviceId: string, specialistId?: 'andreina' | 'daniela') => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'nails' | 'brows';
  specialist: string;
  specialistId: 'andreina' | 'daniela';
  serviceId: string;
  image: string;
  tags: string[];
}

export const GalleryLookbook: React.FC<GalleryLookbookProps> = ({ onSelectLookService }) => {
  const [filter, setFilter] = useState<'all' | 'hair' | 'nails' | 'brows'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'look-1',
      title: 'Cirugía Capilar Brillo Espejo',
      category: 'hair',
      specialist: 'Andreina Vargas',
      specialistId: 'andreina',
      serviceId: 'cirugia_capilar',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      tags: ['Cero Frizz', 'Liso Natural', 'Nutrición']
    },
    {
      id: 'look-2',
      title: 'Jelly Tips Almond Glazed',
      category: 'nails',
      specialist: 'Daniela Vargas',
      specialistId: 'daniela',
      serviceId: 'jelly_tips',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
      tags: ['Jelly Tips', 'Glazed Effect', 'Almond']
    },
    {
      id: 'look-3',
      title: 'Balayage Caramelo Tridimensional',
      category: 'hair',
      specialist: 'Andreina Vargas',
      specialistId: 'andreina',
      serviceId: 'colorimetria',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
      tags: ['Balayage', 'Iluminación', 'Plex']
    },
    {
      id: 'look-4',
      title: 'Kapping Gel & Manicura Rusa',
      category: 'nails',
      specialist: 'Daniela Vargas',
      specialistId: 'daniela',
      serviceId: 'nail_mega_promo',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
      tags: ['Kapping', 'Nivelación', 'Mega Promo']
    },
    {
      id: 'look-5',
      title: 'Diseño de Cejas & Visagismo',
      category: 'brows',
      specialist: 'Andreina Vargas',
      specialistId: 'andreina',
      serviceId: 'cejas_diseno_pigmentacion',
      image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&q=80&w=800',
      tags: ['Visagismo', 'Pigmentación', 'Simetría']
    },
    {
      id: 'look-6',
      title: 'Corte Mariposa & Secado Sedoso',
      category: 'hair',
      specialist: 'Andreina Vargas',
      specialistId: 'andreina',
      serviceId: 'corte_profesional',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
      tags: ['Corte Capas', 'Movimiento', 'Volumen']
    }
  ];

  const filteredItems = galleryItems.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#F3EFEA]/40 border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-[#C5A489]"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A489] font-bold">
                Inspiración Editorial
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A]">
              Galería de <span className="italic">Estilo & Arte</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'Todos los Looks' },
              { id: 'hair', label: 'Cabello & Color' },
              { id: 'nails', label: 'Nails & Gel' },
              { id: 'brows', label: 'Cejas & Rostro' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                  filter === tab.id
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white text-black/60 hover:text-black border border-black/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer bg-[#E8E4DF] border border-black/10 shadow-sm hover:shadow-editorial transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top hover indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#C5A489] block mb-1">
                  {item.specialist}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 opacity-80">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-white/90">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Action Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-black/10 flex flex-col">
            
            <div className="relative h-72 w-full bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A489] block mb-1">
                  Look Creado por {activeModalItem.specialist}
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                  {activeModalItem.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeModalItem.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] uppercase font-bold px-2.5 py-1 rounded bg-[#FAF9F6] border border-black/5 text-black/70">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const itm = activeModalItem;
                  setActiveModalItem(null);
                  onSelectLookService(itm.serviceId, itm.specialistId);
                }}
                className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Pedir este look en mi cita</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
