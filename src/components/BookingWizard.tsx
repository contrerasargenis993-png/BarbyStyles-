import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Scissors, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, SPECIALISTS } from '../data/salonData';
import { SpecialistId, ServiceItem, Appointment } from '../types';

interface BookingWizardProps {
  initialServiceId?: string;
  initialSpecialistId?: SpecialistId;
  onBookingSuccess: (appointment: Appointment) => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialServiceId,
  initialSpecialistId,
  onBookingSuccess
}) => {
  // State
  const [selectedSpecialist, setSelectedSpecialist] = useState<SpecialistId>(initialSpecialistId || 'andreina');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || 'cirugia_capilar');
  const [selectedHairLength, setSelectedHairLength] = useState<string>('Medio ($20)');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  // Sync if initial props change
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
      const srv = SERVICES_DATA.find(s => s.id === initialServiceId);
      if (srv) {
        setSelectedSpecialist(srv.specialistId);
      }
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialSpecialistId) {
      setSelectedSpecialist(initialSpecialistId);
      // Auto-select first service of this specialist if current service is incompatible
      const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId);
      if (!currentService || currentService.specialistId !== initialSpecialistId) {
        const firstSrv = SERVICES_DATA.find(s => s.specialistId === initialSpecialistId);
        if (firstSrv) setSelectedServiceId(firstSrv.id);
      }
    }
  }, [initialSpecialistId]);

  // Current specialist & service objects
  const specialist = SPECIALISTS[selectedSpecialist];
  const availableServices = SERVICES_DATA.filter(s => s.specialistId === selectedSpecialist);
  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || availableServices[0];

  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM', 
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM', '05:00 PM'
  ];

  // Dynamic price calculation
  const getCalculatedPrice = () => {
    if (!selectedService) return '$0';
    if (selectedService.id === 'cirugia_capilar') {
      return selectedHairLength.includes('$') ? selectedHairLength.split('(')[1].replace(')', '') : '$20';
    }
    return selectedService.priceDisplay;
  };

  const handleSpecialistChange = (specId: SpecialistId) => {
    setSelectedSpecialist(specId);
    const firstCompatible = SERVICES_DATA.find(s => s.specialistId === specId);
    if (firstCompatible) {
      setSelectedServiceId(firstCompatible.id);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    setIsSubmitting(true);

    const extraDetail = selectedService.id === 'cirugia_capilar'
      ? `\n💇‍♀️ *Largo de cabello:* ${selectedHairLength}`
      : '';

    const priceText = getCalculatedPrice();

    // Create Appointment Record
    const newAppointment: Appointment = {
      id: `APT-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      specialistId: selectedSpecialist,
      specialistName: specialist.name,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      priceDisplay: priceText,
      hairLengthSelected: selectedService.id === 'cirugia_capilar' ? selectedHairLength : undefined,
      date: selectedDate,
      time: selectedTime,
      notes: clientNotes.trim() || undefined,
      status: 'pending'
    };

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A489', '#1A1A1A', '#FAF9F6', '#D4C4B5']
    });

    onBookingSuccess(newAppointment);

    // Prepare WhatsApp URL
    const messageText = 
      `¡Hola *${specialist.name}*! 🌸\n` +
      `Quiero agendar una cita en *Barby Styles 2.0*:\n\n` +
      `📌 *Detalles de la Cita:*\n` +
      `• *Cliente:* ${clientName.trim()}\n` +
      `• *Teléfono:* ${clientPhone.trim()}\n` +
      `• *Servicio:* ${selectedService.name} (${priceText})${extraDetail}\n` +
      `• *Fecha:* ${selectedDate}\n` +
      `• *Hora:* ${selectedTime}\n` +
      (clientNotes.trim() ? `• *Notas adicionales:* ${clientNotes.trim()}\n\n` : `\n`) +
      `¿Tienes disponibilidad para confirmar mi cupo? ✨`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${specialist.whatsappNumber}&text=${encodeURIComponent(messageText)}`;

    setIsSuccessModalOpen(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="reservar" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C5A489] font-bold">
              Experiencia & Cita VIP
            </span>
            <div className="h-[1px] w-8 bg-[#C5A489]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A] mb-4">
            Agendar <span className="italic">Cita Directa</span>
          </h2>
          <p className="text-sm text-black/60">
            Selecciona tu especialista, personaliza tu servicio y confirma de forma inmediata vía WhatsApp con la atención directa de nuestras expertas.
          </p>
        </div>

        {/* Form & Summary Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-editorial">
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              
              {/* Step 1: Specialist Choice */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-3">
                  1. Selecciona la Especialidad y Profesional *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Andreina Vargas */}
                  <div
                    onClick={() => handleSpecialistChange('andreina')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      selectedSpecialist === 'andreina'
                        ? 'border-[#1A1A1A] bg-[#F3EFEA]'
                        : 'border-black/10 hover:border-black/30 bg-white'
                    }`}
                  >
                    <img
                      src={SPECIALISTS.andreina.avatar}
                      alt="Andreina Vargas"
                      className="w-12 h-12 rounded-full object-cover border border-black/10 shrink-0"
                    />
                    <div>
                      <span className="font-serif font-bold text-sm text-[#1A1A1A] block">
                        Andreina Vargas
                      </span>
                      <span className="text-[10px] text-[#C5A489] font-bold uppercase tracking-wider block">
                        Peluquería, Cirugías & Cejas
                      </span>
                      <span className="text-[10px] text-black/50">Tel: 0412-9670497</span>
                    </div>
                  </div>

                  {/* Daniela Vargas */}
                  <div
                    onClick={() => handleSpecialistChange('daniela')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      selectedSpecialist === 'daniela'
                        ? 'border-[#1A1A1A] bg-[#F3EFEA]'
                        : 'border-black/10 hover:border-black/30 bg-white'
                    }`}
                  >
                    <img
                      src={SPECIALISTS.daniela.avatar}
                      alt="Daniela Vargas"
                      className="w-12 h-12 rounded-full object-cover border border-black/10 shrink-0"
                    />
                    <div>
                      <span className="font-serif font-bold text-sm text-[#1A1A1A] block">
                        Daniela Vargas
                      </span>
                      <span className="text-[10px] text-[#C5A489] font-bold uppercase tracking-wider block">
                        Luna's Nayls / DaniStudios
                      </span>
                      <span className="text-[10px] text-black/50">Tel: +57 323 7864879</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 2: Specific Service Select */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-3">
                  2. Tratamiento o Servicio Deseado *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3.5 text-xs text-[#1A1A1A] font-semibold outline-none transition-colors"
                >
                  {availableServices.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} — ({srv.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Step 2.5: Cirugía Capilar Hair Length Picker */}
              {selectedService?.id === 'cirugia_capilar' && (
                <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-black/10 animate-in fade-in duration-300">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A489] mb-3">
                    Largo de Cabello para Cirugía Capilar:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {[
                      { id: 'muy_corto', name: 'Muy Corto', price: '$13', val: 'Muy Corto ($13)' },
                      { id: 'hombros', name: 'Hombros', price: '$15', val: 'Hombros ($15)' },
                      { id: 'medio', name: 'Medio', price: '$20', val: 'Medio ($20)' },
                      { id: 'largo', name: 'Largo', price: '$25', val: 'Largo ($25)' },
                      { id: 'extralargo', name: 'Extralargo', price: '$30', val: 'Extralargo ($30)' }
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedHairLength(opt.val)}
                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                          selectedHairLength === opt.val
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-white text-[#1A1A1A] border-black/10 hover:border-black/30'
                        }`}
                      >
                        <span className="text-xs font-bold block">{opt.name}</span>
                        <span className={`text-[11px] font-serif font-black ${selectedHairLength === opt.val ? 'text-[#C5A489]' : 'text-[#1A1A1A]'}`}>
                          {opt.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date and Time Slot */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-3">
                  3. Selecciona Fecha & Horario Preferido *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-[10px] text-black/50 font-bold uppercase tracking-wider block mb-1">
                      Fecha de Reserva
                    </span>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3 text-xs text-[#1A1A1A] outline-none"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] text-black/50 font-bold uppercase tracking-wider block mb-1">
                      Hora
                    </span>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3 text-xs text-[#1A1A1A] outline-none"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Client Info */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-3">
                  4. Tus Datos Personales *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-[10px] text-black/50 font-bold uppercase tracking-wider block mb-1">
                      Nombre Completo *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Mariana Colmenares"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3 text-xs text-[#1A1A1A] outline-none"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] text-black/50 font-bold uppercase tracking-wider block mb-1">
                      Teléfono WhatsApp *
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 0412-1234567"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3 text-xs text-[#1A1A1A] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-black/50 font-bold uppercase tracking-wider block mb-1">
                    Notas adicionales o preferencia de diseño (Opcional)
                  </span>
                  <input
                    type="text"
                    placeholder="Ej. Cabello teñido previamente / Diseño almond nude..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-black/10 focus:border-[#1A1A1A] rounded-2xl px-4 py-3 text-xs text-[#1A1A1A] outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A489] group-hover:text-white" />
                <span>
                  {isSubmitting ? 'Preparando mensaje...' : 'Confirmar Reserva vía WhatsApp'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

          {/* Luxury Live Summary Box */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-editorial sticky top-28 space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                Resumen de Cita
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A489] bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-black/5">
                En Directo
              </span>
            </div>

            {/* Specialist preview */}
            <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-black/5">
              <img
                src={specialist.avatar}
                alt={specialist.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="text-[9px] uppercase font-bold text-black/40 block">
                  Profesional Asignada
                </span>
                <span className="font-serif font-bold text-sm text-[#1A1A1A] block">
                  {specialist.name}
                </span>
                <span className="text-[10px] text-black/60">{specialist.displayPhone}</span>
              </div>
            </div>

            {/* Service & Details */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-black/60">Servicio:</span>
                <span className="font-bold text-[#1A1A1A] text-right max-w-[180px]">
                  {selectedService?.name}
                </span>
              </div>

              {selectedService?.id === 'cirugia_capilar' && (
                <div className="flex justify-between py-1 border-b border-black/5">
                  <span className="text-black/60">Largo Seleccionado:</span>
                  <span className="font-bold text-[#C5A489]">{selectedHairLength}</span>
                </div>
              )}

              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-black/60">Fecha & Hora:</span>
                <span className="font-bold text-[#1A1A1A]">
                  {selectedDate} • {selectedTime}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-black/5">
                <span className="text-black/60">Tiempo Estimado:</span>
                <span className="font-bold text-[#1A1A1A]">
                  {selectedService?.durationMinutes} minutos
                </span>
              </div>
            </div>

            {/* Total Price Box */}
            <div className="bg-[#1A1A1A] text-white p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A489] font-bold block">
                  Total Estimado
                </span>
                <span className="text-2xl font-serif font-bold">
                  {getCalculatedPrice()}
                </span>
              </div>
              <Sparkles className="w-6 h-6 text-[#C5A489]" />
            </div>

            <p className="text-[10px] text-black/50 text-center leading-relaxed">
              Pago presencial en el salón mediante Pago Móvil, Divisas en Efectivo o Transferencia.
            </p>
          </div>

        </div>

      </div>

      {/* Success Modal Confirmation */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl border border-black/10 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#F3EFEA] text-[#C5A489] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">
              ¡Cita Registrada!
            </h3>
            <p className="text-xs text-black/70 mb-6 leading-relaxed">
              Te estamos redirigiendo a WhatsApp con <strong>{specialist.name}</strong> con todos los detalles de tu solicitud listos para enviar.
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest rounded-full"
            >
              Listo, Continuar
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
