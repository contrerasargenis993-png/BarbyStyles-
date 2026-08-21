import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, MessageSquarePlus, X, Heart, ShieldCheck } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: Omit<ReviewItem, 'id' | 'likes' | 'verified' | 'date'>) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedReviewIds, setLikedReviewIds] = useState<Set<string>>(new Set());

  // New review form state
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [specialistName, setSpecialistName] = useState('Andreina Vargas');
  const [serviceName, setServiceName] = useState('Cirugía Capilar Termoactiva');
  const [comment, setComment] = useState('');

  const toggleLike = (id: string) => {
    setLikedReviewIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    onAddReview({
      author: authorName.trim(),
      rating,
      specialistName,
      serviceName,
      comment: comment.trim(),
    });

    setIsModalOpen(false);
    setAuthorName('');
    setComment('');
  };

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-[#C5A489]"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A489] font-bold">
                Opiniones Reales de Clientas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A1A1A]">
              Testimonios <span className="italic">& Experiencias</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-black/10 shadow-sm">
              <div className="flex text-[#C5A489]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif font-bold text-sm text-[#1A1A1A]">4.9 / 5.0</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1A1A1A] hover:bg-[#C5A489] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all shadow-sm flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Dejar Reseña</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => {
            const isLiked = likedReviewIds.has(rev.id);
            const currentLikes = rev.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Author & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif font-bold text-base text-[#1A1A1A]">
                          {rev.author}
                        </h3>
                        {rev.verified && (
                          <span className="flex items-center gap-0.5 text-[9px] uppercase font-bold text-[#C5A489] bg-[#FAF9F6] px-2 py-0.5 rounded-full border border-black/5">
                            <ShieldCheck className="w-3 h-3" />
                            <span>Verificada</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-black/40 font-medium">{rev.date}</span>
                    </div>

                    <div className="flex text-[#C5A489]">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block bg-[#F3EFEA] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-black/70 mb-4">
                    {rev.serviceName} • Por {rev.specialistName}
                  </div>

                  {/* Comment Text */}
                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Bottom Helpful button */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] text-black/40 font-medium">
                    Servicio realizado en San Carlos
                  </span>

                  <button
                    onClick={() => toggleLike(rev.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                      isLiked
                        ? 'bg-[#C5A489]/15 text-[#C5A489]'
                        : 'bg-black/5 text-black/60 hover:bg-black/10'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{currentLikes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Review Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-black/40 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-1">
              Tu Experiencia en Barby Styles
            </h3>
            <p className="text-xs text-black/60 mb-6">
              Nos ayuda a seguir mejorando y brindar el mejor servicio a nuestras clientas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-black/60 mb-1">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Valeria Rivas"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-4 py-2.5 text-xs text-[#1A1A1A] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/60 mb-1">
                    Especialista *
                  </label>
                  <select
                    value={specialistName}
                    onChange={(e) => setSpecialistName(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-3 py-2.5 text-xs text-[#1A1A1A] outline-none"
                  >
                    <option value="Andreina Vargas">Andreina Vargas (Cabello/Cejas)</option>
                    <option value="Daniela Vargas">Daniela Vargas (Uñas/Pedi)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-black/60 mb-1">
                    Calificación *
                  </label>
                  <div className="flex gap-1 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-[#C5A489]"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= rating ? 'fill-[#C5A489]' : 'text-black/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-black/60 mb-1">
                  Servicio Realizado *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Cirugía Capilar / Mega Promo $20"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl px-4 py-2.5 text-xs text-[#1A1A1A] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-black/60 mb-1">
                  Tu Testimonio *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Cuéntanos cómo quedó tu cabello o uñas y cómo fue la atención..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-black/10 rounded-xl p-3 text-xs text-[#1A1A1A] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#C5A489] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md mt-2"
              >
                Publicar Reseña Verificada
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
