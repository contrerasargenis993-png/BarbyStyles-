import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  User, 
  Phone, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Filter, 
  DollarSign, 
  Sparkles, 
  MessageCircle,
  X,
  TrendingUp,
  Scissors
} from 'lucide-react';
import { Appointment, ReviewItem, SpecialistId } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  reviews: ReviewItem[];
  onUpdateAppointmentStatus: (id: string, newStatus: Appointment['status']) => void;
  onDeleteReview: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  appointments,
  reviews,
  onUpdateAppointmentStatus,
  onDeleteReview
}) => {
  const [selectedSpecialistFilter, setSelectedSpecialistFilter] = useState<'all' | SpecialistId>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | Appointment['status']>('all');
  const [activeTab, setActiveTab] = useState<'appointments' | 'reviews' | 'metrics'>('appointments');

  if (!isOpen) return null;

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSpec = selectedSpecialistFilter === 'all' || apt.specialistId === selectedSpecialistFilter;
    const matchesStatus = selectedStatusFilter === 'all' || apt.status === selectedStatusFilter;
    return matchesSpec && matchesStatus;
  });

  const totalEstimatedRevenue = appointments.reduce((acc, apt) => {
    const num = parseFloat(apt.priceDisplay.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? acc : acc + num;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF9F6] rounded-3xl max-w-5xl w-full h-[90vh] overflow-hidden shadow-2xl border border-black/10 flex flex-col">
        
        {/* Dashboard Header */}
        <div className="p-6 bg-white border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1A1A1A] text-[#C5A489] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5A489]">
                  Panel de Gestión
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">
                  En Vivo
                </span>
              </div>
              <h2 className="font-serif font-bold text-xl text-[#1A1A1A]">
                Barby Styles 2.0 • Especialistas
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tabs */}
            <div className="hidden sm:flex bg-[#FAF9F6] p-1 rounded-2xl border border-black/5">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'appointments'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Citas ({appointments.length})
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'reviews'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Reseñas ({reviews.length})
              </button>

              <button
                onClick={() => setActiveTab('metrics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'metrics'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                Métricas
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-black/60 hover:text-black transition-colors"
              title="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Header Filters (for Appointments) */}
        {activeTab === 'appointments' && (
          <div className="px-6 py-4 bg-white border-b border-black/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#C5A489]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                Filtrar por Especialista:
              </span>
              <div className="flex gap-1.5">
                {[
                  { id: 'all', label: 'Todas' },
                  { id: 'andreina', label: 'Andreina (Cabello)' },
                  { id: 'daniela', label: 'Daniela (Uñas)' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedSpecialistFilter(f.id as any)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                      selectedSpecialistFilter === f.id
                        ? 'bg-[#C5A489] text-white'
                        : 'bg-[#FAF9F6] text-black/60 hover:text-black border border-black/5'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                Estado:
              </span>
              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value as any)}
                className="bg-[#FAF9F6] border border-black/10 rounded-xl px-3 py-1 text-xs text-[#1A1A1A] font-semibold outline-none"
              >
                <option value="all">Todos los Estados</option>
                <option value="pending">Pendientes</option>
                <option value="confirmed">Confirmadas</option>
                <option value="completed">Completadas</option>
                <option value="cancelled">Canceladas</option>
              </select>
            </div>
          </div>
        )}

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {/* APPOINTMENTS TAB */}
          {activeTab === 'appointments' && (
            <div className="space-y-4">
              {filteredAppointments.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-black/10">
                  <Calendar className="w-10 h-10 text-black/20 mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">No hay citas registradas</h4>
                  <p className="text-xs text-black/50 mt-1">
                    Las reservas realizadas a través del formulario aparecerán automáticamente aquí.
                  </p>
                </div>
              ) : (
                filteredAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    {/* Left: Client & Service Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-black/40 bg-[#FAF9F6] px-2 py-0.5 rounded">
                          {apt.id}
                        </span>
                        <span
                          className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                            apt.status === 'confirmed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : apt.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : apt.status === 'cancelled'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {apt.status === 'pending' ? 'Pendiente' : apt.status === 'confirmed' ? 'Confirmada' : apt.status === 'completed' ? 'Completada' : 'Cancelada'}
                        </span>
                        <span className="text-[10px] text-black/40 font-medium">
                          {new Date(apt.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        {apt.clientName}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-black/70">
                        <span className="flex items-center gap-1">
                          <Scissors className="w-3.5 h-3.5 text-[#C5A489]" />
                          <strong>{apt.serviceName}</strong> ({apt.priceDisplay})
                        </span>
                        {apt.hairLengthSelected && (
                          <span className="text-[#C5A489] font-semibold">
                            Largo: {apt.hairLengthSelected}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-black/50">
                          <User className="w-3.5 h-3.5" />
                          Atiende: {apt.specialistName}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-black/60 pt-1">
                        <span className="flex items-center gap-1 font-semibold text-[#1A1A1A]">
                          <Calendar className="w-3.5 h-3.5 text-[#C5A489]" />
                          {apt.date} • {apt.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          {apt.clientPhone}
                        </span>
                      </div>

                      {apt.notes && (
                        <p className="text-xs text-black/50 italic bg-[#FAF9F6] p-2.5 rounded-xl border border-black/5">
                          Nota: "{apt.notes}"
                        </p>
                      )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-wrap lg:flex-col items-end gap-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-black/5">
                      <a
                        href={`https://api.whatsapp.com/send?phone=${apt.clientPhone.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(`¡Hola ${apt.clientName}! Te escribo de Barby Styles para confirmar tu cita de ${apt.serviceName} para el ${apt.date} a las ${apt.time}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat con Clienta</span>
                      </a>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onUpdateAppointmentStatus(apt.id, 'confirmed')}
                          className="px-3 py-1.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold rounded-xl transition-all"
                        >
                          Confirmar
                        </button>
                        <button
                          onClick={() => onUpdateAppointmentStatus(apt.id, 'completed')}
                          className="px-3 py-1.5 bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 text-xs font-bold rounded-xl transition-all"
                        >
                          Completada
                        </button>
                        <button
                          onClick={() => onUpdateAppointmentStatus(apt.id, 'cancelled')}
                          className="px-3 py-1.5 bg-red-50 text-red-800 hover:bg-red-100 border border-red-200 text-xs font-bold rounded-xl transition-all"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif font-bold text-base text-[#1A1A1A]">{rev.author}</h4>
                      <span className="text-[10px] text-black/40">• {rev.date}</span>
                    </div>
                    <p className="text-xs text-[#C5A489] font-bold uppercase tracking-wider mb-2">
                      {rev.serviceName} (Atendió {rev.specialistName})
                    </p>
                    <p className="text-xs sm:text-sm text-black/75 italic">"{rev.comment}"</p>
                  </div>

                  <button
                    onClick={() => onDeleteReview(rev.id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                    title="Eliminar reseña"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* METRICS TAB */}
          {activeTab === 'metrics' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Total de Solicitudes
                </span>
                <span className="text-3xl font-serif font-bold text-[#1A1A1A]">
                  {appointments.length} Citas
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Valor Estimado de Agenda
                </span>
                <span className="text-3xl font-serif font-bold text-[#C5A489]">
                  ${totalEstimatedRevenue.toFixed(2)}
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-black/40 block mb-1">
                  Calificación Promedio
                </span>
                <span className="text-3xl font-serif font-bold text-[#1A1A1A]">
                  4.9 ★ (100% Satisfacción)
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
