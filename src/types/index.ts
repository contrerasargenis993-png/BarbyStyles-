export type SpecialistId = 'andreina' | 'daniela';

export type ServiceCategory = 'all' | 'hair' | 'keratin' | 'color' | 'nails' | 'brows' | 'promos';

export interface HairLengthOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  specialistId: SpecialistId;
  specialistName: string;
  category: ServiceCategory;
  price: number | 'consultar' | 'segun_largo';
  priceDisplay: string;
  originalPrice?: string;
  durationMinutes: number;
  description: string;
  highlights: string[];
  badge?: string;
  image: string;
  isPopular?: boolean;
  lengthOptions?: HairLengthOption[];
}

export interface Specialist {
  id: SpecialistId;
  name: string;
  role: string;
  subtitle: string;
  phone: string;
  whatsappNumber: string; // international format without + or spaces
  displayPhone: string;
  bio: string;
  experience: string;
  specialties: string[];
  avatar: string;
  bannerImage: string;
}

export interface Appointment {
  id: string;
  createdAt: string;
  clientName: string;
  clientPhone: string;
  specialistId: SpecialistId;
  specialistName: string;
  serviceId: string;
  serviceName: string;
  priceDisplay: string;
  hairLengthSelected?: string;
  date: string;
  time: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  serviceName: string;
  specialistName: string;
  comment: string;
  verified: boolean;
  likes: number;
}

export interface TransformationItem {
  id: string;
  title: string;
  specialist: string;
  category: 'hair' | 'nails';
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: 'hair' | 'nails' | 'both';
  options: {
    label: string;
    description: string;
    recommendedServiceId: string;
  }[];
}
