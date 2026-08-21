import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PromotionsShowcase } from './components/PromotionsShowcase';
import { ServicesExplorer } from './components/ServicesExplorer';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SpecialistsProfile } from './components/SpecialistsProfile';
import { GalleryLookbook } from './components/GalleryLookbook';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { BookingWizard } from './components/BookingWizard';
import { BeautyConciergeModal } from './components/BeautyConciergeModal';
import { AdminDashboard } from './components/AdminDashboard';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';

import { REVIEWS_DATA, SAMPLE_APPOINTMENTS } from './data/salonData';
import { Appointment, ReviewItem, SpecialistId } from './types';

export default function App() {
  // Global booking pre-selection state
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>('cirugia_capilar');
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<SpecialistId | undefined>('andreina');

  // Modals & Panels
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Persistent appointments in state
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('barby_styles_appointments');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading appointments from localStorage', e);
    }
    return SAMPLE_APPOINTMENTS;
  });

  // Persistent reviews in state
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('barby_styles_reviews');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading reviews from localStorage', e);
    }
    return REVIEWS_DATA;
  });

  // Sync appointments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('barby_styles_appointments', JSON.stringify(appointments));
    } catch (e) {
      console.error('Error saving appointments to localStorage', e);
    }
  }, [appointments]);

  // Sync reviews to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('barby_styles_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Error saving reviews to localStorage', e);
    }
  }, [reviews]);

  // Handler to scroll and pre-select service/specialist in Booking Wizard
  const handleOpenBooking = (serviceId?: string, specialistId?: SpecialistId) => {
    if (serviceId) setSelectedServiceId(serviceId);
    if (specialistId) setSelectedSpecialistId(specialistId);

    const bookingSection = document.getElementById('reservar');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler when a user selects a service from Explorer or Promo
  const handleSelectService = (serviceId: string, specialistId?: SpecialistId) => {
    setSelectedServiceId(serviceId);
    if (specialistId) setSelectedSpecialistId(specialistId);
    handleOpenBooking(serviceId, specialistId);
  };

  // Handler when user selects a specialist
  const handleSelectSpecialist = (specialistId: SpecialistId) => {
    setSelectedSpecialistId(specialistId);
    handleOpenBooking(undefined, specialistId);
  };

  // Handler when user successfully creates a booking
  const handleBookingSuccess = (newAppointment: Appointment) => {
    setAppointments(prev => [newAppointment, ...prev]);
  };

  // Handler to add a review
  const handleAddReview = (newReviewData: Omit<ReviewItem, 'id' | 'likes' | 'verified' | 'date'>) => {
    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      date: 'Reciente',
      likes: 1,
      verified: true,
      ...newReviewData
    };
    setReviews(prev => [newReview, ...prev]);
  };

  // Handler to update appointment status in Admin Dashboard
  const handleUpdateAppointmentStatus = (id: string, newStatus: Appointment['status']) => {
    setAppointments(prev =>
      prev.map(apt => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  // Handler to delete review in Admin Dashboard
  const handleDeleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const handleExploreServices = () => {
    const section = document.getElementById('servicios');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A489]/30 selection:text-[#1A1A1A] flex flex-col">
      
      {/* Top Sticky Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)}
        isAdminOpen={isAdminOpen}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenConcierge={() => setIsConciergeOpen(true)}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Promotions Showcase */}
        <PromotionsShowcase
          onSelectService={handleSelectService}
        />

        {/* 3. Services Explorer & Detailed Menu */}
        <ServicesExplorer
          onSelectService={handleSelectService}
        />

        {/* 4. Interactive Before & After Slider */}
        <BeforeAfterSlider
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Specialists Profiles (Andreina & Daniela) */}
        <SpecialistsProfile
          onSelectSpecialist={handleSelectSpecialist}
        />

        {/* 6. High-Fashion Editorial Lookbook */}
        <GalleryLookbook
          onSelectLookService={handleSelectService}
        />

        {/* 7. Reviews & Verified Testimonials */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* 8. Interactive Booking Wizard (WhatsApp + Local Tracker) */}
        <BookingWizard
          initialServiceId={selectedServiceId}
          initialSpecialistId={selectedSpecialistId}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* 9. Location, Virtual Map & FAQ */}
        <LocationContact />

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloatingButton />

      {/* Beauty Concierge Diagnostic Quiz Modal */}
      <BeautyConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        onSelectRecommendedService={(srvId, specId) => {
          setIsConciergeOpen(false);
          handleSelectService(srvId, specId);
        }}
      />

      {/* Specialist & Admin Management Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        appointments={appointments}
        reviews={reviews}
        onUpdateAppointmentStatus={handleUpdateAppointmentStatus}
        onDeleteReview={handleDeleteReview}
      />

    </div>
  );
}
