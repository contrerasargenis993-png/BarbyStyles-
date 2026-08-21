import React from 'react';
import { Sparkles, Phone, MessageCircle, Scissors, Heart, Award, CheckCircle } from 'lucide-react';
import { SPECIALISTS } from '../data/salonData';

interface SpecialistsProfileProps {
  onSelectSpecialist: (specialistId: 'andreina' | 'daniela') => void;
}

export const SpecialistsProfile: React.FC<SpecialistsProfileProps> = ({ onSelectSpecialist }) => {
  const specialists = [SPECIALISTS.andreina, SPECIALISTS.daniela];

  return (
    <section id="especialistas" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
              Manos Maestras
            </span>
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] mb-4">
            Nuestras <span className="italic">Especialistas</span>
          </h2>
          <p className="text-sm text-black/60">
            Cada área de belleza en Barby Styles está liderada por una profesional apasionada con técnicas certificadas y atención personalizada.
          </p>
        </div>

        {/* Specialists Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {specialists.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-editorial flex flex-col justify-between group hover:border-[#C5A489]/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Watermark Initials */}
              <div className="absolute top-4 right-8 pointer-events-none text-black/5 font-serif text-[100px] font-black leading-none select-none">
                {spec.id === 'andreina' ? 'AV' : 'DV'}
              </div>

              <div>
                {/* Top Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#E8E4DF] shadow-md border-2 border-white shrink-0">
                    <img
                      src={spec.avatar}
                      alt={spec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A489]" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A489] block mb-1">
                      {spec.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                      {spec.name}
                    </h3>
                    <p className="text-xs text-black/50 font-semibold mt-1">
                      {spec.role} • <span className="text-[#C5A489]">{spec.experience}</span>
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                  {spec.bio}
                </p>

                {/* Specialties Tags */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-3">
                    Áreas de Maestría:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {spec.specialties.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-xl bg-[#FAF9F6] border border-black/5 text-[#1A1A1A]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons & Phone */}
              <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <Phone className="w-4 h-4 text-[#C5A489]" />
                  <span className="font-semibold">{spec.displayPhone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${spec.whatsappNumber}&text=${encodeURIComponent(`¡Hola ${spec.name}! Vi su perfil en Barby Styles 2.0 y me gustaría consultar disponibilidad.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F3EFEA] hover:bg-[#C5A489] hover:text-white text-[#1A1A1A] rounded-full transition-colors"
                    title={`Contactar a ${spec.name} por WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onSelectSpecialist(spec.id)}
                    className="bg-[#1A1A1A] hover:bg-[#C5A489] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm"
                  >
                    Agendar con {spec.name.split(' ')[0]}
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
