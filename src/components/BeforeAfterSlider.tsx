import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ChevronRight, Clock, UserCheck } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/salonData';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_DATA[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformaciones" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
              Resultados Visibles
            </span>
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] mb-4">
            Transformaciones <span className="italic">Antes & Después</span>
          </h2>
          <p className="text-sm text-black/60">
            Desliza el cursor o tu dedo sobre la imagen para apreciar la diferencia real en salud capilar y perfeccionamiento en uñas.
          </p>
        </div>

        {/* Transformation Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                activeItemIndex === idx
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-white text-black/60 hover:text-black border border-black/5'
              }`}
            >
              {item.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-editorial">
          
          {/* Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#E8E4DF] shadow-inner"
            >
              {/* After Image (Full background) */}
              <img
                src={activeItem.afterImage}
                alt={`Después - ${activeItem.title}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full pointer-events-none z-10">
                Después
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={`Antes - ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-black/10 shadow-sm pointer-events-none z-10">
                  Antes
                </div>
              </div>

              {/* Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-white text-[#1A1A1A] shadow-xl flex items-center justify-center border border-black/10">
                  <MoveHorizontal className="w-4 h-4 text-[#C5A489]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3 text-[11px] text-black/50 font-medium">
              <span>← Arrastra para comparar el Antes</span>
              <span>Arrastra para ver el Después →</span>
            </div>
          </div>

          {/* Right Info Breakdown */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#C5A489] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Caso Real de Éxito</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] leading-tight mb-3">
                {activeItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                {activeItem.description}
              </p>

              {/* Specialist & Duration Badges */}
              <div className="space-y-3 pb-6 border-b border-black/10">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-7 h-7 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#C5A489]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-black/40 uppercase font-bold block">Especialista</span>
                    <span className="font-bold text-[#1A1A1A]">{activeItem.specialist}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="w-7 h-7 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#C5A489]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-black/40 uppercase font-bold block">Tiempo de Tratamiento</span>
                    <span className="font-bold text-[#1A1A1A]">{activeItem.duration}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {activeItem.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#F3EFEA] text-black/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Quiero este resultado</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
