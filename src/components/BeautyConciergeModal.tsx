import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS, SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';

interface BeautyConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedService: (serviceId: string, specialistId?: 'andreina' | 'daniela') => void;
}

export const BeautyConciergeModal: React.FC<BeautyConciergeModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedService
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [recommendedService, setRecommendedService] = useState<ServiceItem | null>(null);

  if (!isOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (recommendedId: string) => {
    const updatedAnswers = [...selectedAnswers, recommendedId];
    setSelectedAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine best recommendation based on final answers
      const matchId = updatedAnswers[updatedAnswers.length - 1] || 'cirugia_capilar';
      const found = SERVICES_DATA.find(s => s.id === matchId) || SERVICES_DATA[0];
      setRecommendedService(found);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setRecommendedService(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-black/10 flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF9F6] border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C5A489] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#C5A489] block">
                Asesor de Belleza Virtual
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                Beauty Concierge Test
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/60 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Steps */}
        {!recommendedService ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Step Counter */}
            <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-black/40">
              <span>Pregunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentStep ? 'w-6 bg-[#C5A489]' : idx < currentStep ? 'w-3 bg-[#1A1A1A]' : 'w-3 bg-black/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question title */}
            <h4 className="text-xl font-serif font-bold text-[#1A1A1A] leading-snug">
              {currentQuestion.question}
            </h4>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.recommendedServiceId)}
                  className="w-full text-left p-4 rounded-2xl border border-black/10 hover:border-[#1A1A1A] hover:bg-[#FAF9F6] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="pr-4">
                    <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#C5A489] transition-colors block mb-1">
                      {option.label}
                    </span>
                    <p className="text-[11px] text-black/60 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* Recommended Result Screen */
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFEA] text-[#C5A489] text-[10px] font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Diagnóstico Personalizado</span>
            </div>

            <h4 className="text-2xl font-serif font-bold text-[#1A1A1A]">
              Tu Experiencia Ideal es:
            </h4>

            {/* Service Box */}
            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-black/10 text-left shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={recommendedService.image}
                  alt={recommendedService.name}
                  className="w-16 h-16 rounded-xl object-cover border border-black/10"
                />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#C5A489] font-bold block">
                    Por {recommendedService.specialistName}
                  </span>
                  <h5 className="font-serif font-bold text-base text-[#1A1A1A]">
                    {recommendedService.name}
                  </h5>
                  <span className="text-sm font-serif font-black text-[#1A1A1A]">
                    {recommendedService.priceDisplay}
                  </span>
                </div>
              </div>
              <p className="text-xs text-black/70 leading-relaxed">
                {recommendedService.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectRecommendedService(recommendedService.id, recommendedService.specialistId);
                  onClose();
                }}
                className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Agendar Tratamiento Recomendado</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-[10px] font-bold uppercase tracking-widest text-black/50 hover:text-black flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Repetir Diagnóstico</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
