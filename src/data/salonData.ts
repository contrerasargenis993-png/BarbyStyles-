import { Specialist, ServiceItem, TransformationItem, ReviewItem, QuizQuestion } from '../types';

export const SPECIALISTS: Record<'andreina' | 'daniela', Specialist> = {
  andreina: {
    id: 'andreina',
    name: 'Andreina Vargas',
    role: 'Peluquera Estilista & Visagista',
    subtitle: 'Especialista en Cirugía Capilar, Balayage & Diseño de Mirada',
    phone: '0412-9670497',
    whatsappNumber: '584129670497',
    displayPhone: '0412-9670497 (+58)',
    bio: 'Con más de 8 años de trayectoria perfeccionando la salud capilar, cortes de alta definición y visagismo de cejas. Su técnica exclusiva en Cirugía Capilar devuelve el brillo cristalino y la suavidad sin maltratar las fibras.',
    experience: '8+ Años de Experiencia',
    specialties: ['Cirugía Capilar Termoactiva', 'Cortes de Autor', 'Colorimetría Avanzada', 'Visagismo de Cejas'],
    avatar: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
    bannerImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
  },
  daniela: {
    id: 'daniela',
    name: 'Daniela Vargas',
    role: 'Nail Artist & Estilista de Uñas',
    subtitle: "Fundadora de Luna's Nayls / DaniStudios",
    phone: '+57 323 7864879',
    whatsappNumber: '573237864879',
    displayPhone: '+57 323 7864879',
    bio: 'Especialista certificada en sistemas de extensión ultraligera (Jelly Tips, Polygel, Builder Gel) y pedicura estética spa. Su enfoque combina la durabilidad con el arte y la protección de la uña natural.',
    experience: '6+ Años de Experiencia',
    specialties: ['Sistemas Jelly Tips', 'Polygel & Dual System', 'Kapping Estructural', 'Pedicure Spa Semipermanente'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bannerImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  // PELUQUERIA - ANDREINA VARGAS
  {
    id: 'cirugia_capilar',
    name: 'Cirugía Capilar Termoactiva',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'keratin',
    price: 'segun_largo',
    priceDisplay: 'Desde $13 hasta $30',
    originalPrice: '$35',
    durationMinutes: 120,
    description: 'Tratamiento reconstructor intensivo que sella la cutícula, elimina el frizz al 100% y aporta un brillo espejo duradero. Precio adaptado al largo exacto de tu cabello.',
    highlights: [
      'Elimina el frizz y volumen excesivo',
      'Aporte intensivo de keratina y aminoácidos',
      'Duración de 3 a 5 meses',
      'Incluye lavado neutro y sellado térmico profesional'
    ],
    badge: 'Especialidad',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    lengthOptions: [
      { id: 'muy_corto', name: 'Muy Corto (Pixie / Arriba de hombros)', price: 13, description: 'Hasta 15 cm de largo' },
      { id: 'hombros', name: 'Hombros (Media Melena)', price: 15, description: 'Llega exactamente a la clavícula' },
      { id: 'medio', name: 'Medio (Bajo omóplatos)', price: 20, description: 'A la altura de los omóplatos' },
      { id: 'largo', name: 'Largo (Cintura)', price: 25, description: 'Llega a media espalda o cintura' },
      { id: 'extralargo', name: 'Extralargo (Bajo cintura)', price: 30, description: 'Supera la línea de la cintura' }
    ]
  },
  {
    id: 'corte_profesional',
    name: 'Corte de Cabello Profesional & Visagismo',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'hair',
    price: 8,
    priceDisplay: '$8',
    durationMinutes: 45,
    description: 'Diseño de corte personalizado según la morfología de tu rostro, textura capilar y estilo de vida (en capas, bob, mariposa, despuntado saludable).',
    highlights: [
      'Diagnóstico de visagismo previo',
      'Técnica en seco y húmedo para caída perfecta',
      'Sellado de puntas abiertas'
    ],
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'secado_planchado',
    name: 'Secado & Planchado Sedoso',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'hair',
    price: 5,
    priceDisplay: 'Desde $5',
    durationMinutes: 40,
    description: 'Brushing profesional y planchado térmico con protectores de calor de alta gama para un acabado liviano, suave y libre de humedad.',
    highlights: [
      'Blindaje térmico anti-frizz',
      'Acabado liso supremo o con ondas sutiles',
      'Aroma sellador perfumado'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'colorimetria',
    name: 'Colorimetría de Alta Costura (Balayage, Mechas, Tintes)',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'color',
    price: 'consultar',
    priceDisplay: 'A Consultar (Evaluación)',
    durationMinutes: 180,
    description: 'Transformaciones de color vanguardistas: Balayage tridimensional, Babylights, Corrección de color, Morena Iluminada y cobertura de canas con matices brillantes.',
    highlights: [
      'Prueba de mecha y diagnóstico de elasticidad',
      'Decoloración con Plex protector',
      'Matización con tonalizadores premium'
    ],
    badge: 'Editorial',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
  },
  {
    id: 'hidratacion_profunda',
    name: 'Hidratación Capilar Profunda con Ampolla',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'hair',
    price: 10,
    priceDisplay: '$10',
    durationMinutes: 50,
    description: 'Cóctel vitamínico intensivo con ácido hialurónico, colágeno y aceites orgánicos para reponer la humectación en cabellos secos o procesados.',
    highlights: [
      'Terapia de vapor caliente / gorro térmico',
      'Recuperación inmediata de elasticidad',
      'Masaje capilar relajante estimulante'
    ],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cejas_diseno_pigmentacion',
    name: 'Diseño + Depilación + Pigmentación de Cejas',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'brows',
    price: 5,
    priceDisplay: '$5',
    durationMinutes: 35,
    description: 'Mapeo facial milimétrico para unas cejas simétricas y armoniosas. Depilación limpia y sombreado semipermanente con henna / tinte vegetal.',
    highlights: [
      'Mapeo con hilo según tus facciones',
      'Depilación con cera hipoalergénica o pinza',
      'Pigmentación con duración de 7 a 15 días'
    ],
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'depilacion_bozo',
    name: 'Depilación Facial de Bozo',
    specialistId: 'andreina',
    specialistName: 'Andreina Vargas',
    category: 'brows',
    price: 3.5,
    priceDisplay: '$3.50',
    durationMinutes: 15,
    description: 'Depilación rápida, suave y limpia de la zona del labio superior con cera especial para pieles sensibles y loción calmante.',
    highlights: [
      'Cera especial elástica',
      'No irrita ni mancha la piel',
      'Aplicación de gel descongestivo'
    ],
    image: 'https://images.unsplash.com/photo-1512290900672-1f41961ee48c?auto=format&fit=crop&q=80&w=800',
  },

  // UÑAS - DANIELA VARGAS (LUNA'S NAYLS / DANISTUDIOS)
  {
    id: 'nail_mega_promo',
    name: 'MEGA PROMO DaniStudios: Mani + Kapping + Pedi Semipermanente',
    specialistId: 'daniela',
    specialistName: 'Daniela Vargas',
    category: 'promos',
    price: 20,
    priceDisplay: '$20',
    originalPrice: '$28',
    durationMinutes: 90,
    description: 'El combo consentido todo-en-uno: Manicura combinada con Kapping en gel para blindar y reforzar tus uñas naturales + Pedicura spa completa con esmaltado semipermanente de máxima duración.',
    highlights: [
      'Manicura rusa / combinada profunda',
      'Kapping reforzado con nivelación perfecta',
      'Pedicura spa con exfoliación y retiro de cutículas',
      'Esmaltado semipermanente en manos y pies (más de 80 tonos)'
    ],
    badge: 'Super Oferta',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
  },
  {
    id: 'jelly_tips',
    name: 'Sistema Esculpido Jelly Tips (Full Set)',
    specialistId: 'daniela',
    specialistName: 'Daniela Vargas',
    category: 'nails',
    price: 12,
    priceDisplay: '$12',
    durationMinutes: 60,
    description: 'El sistema más ligero y flexible del mercado. Tips 100% de gel adheridos con base curada en lámpara UV/LED. No daña la uña natural y luce ultra natural.',
    highlights: [
      'Cero olores molestos y sin limado agresivo',
      'Largo y forma personalizada (Almond, Coffin, Square)',
      'Duración garantizada de 3 a 4 semanas',
      'Esmaltado semipermanente incluido'
    ],
    badge: 'Tendencia',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
  },
  {
    id: 'dual_polygel_builder',
    name: 'Sistema Dual, Polygel o Builder Gel',
    specialistId: 'daniela',
    specialistName: 'Daniela Vargas',
    category: 'nails',
    price: 15,
    priceDisplay: '$15',
    originalPrice: '$18',
    durationMinutes: 75,
    description: 'Extensiones de alta resistencia combinando la firmeza del acrílico con la flexibilidad del gel. Ideal para uñas mordidas o para quienes buscan máxima durabilidad.',
    highlights: [
      'Estructura resistente a impactos diarios',
      'Acabado translúcido o cover nude elegante',
      'Diseño francés o nail art minimalista incluido',
      'Garantía de adherencia'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
];

export const BEFORE_AFTER_DATA: TransformationItem[] = [
  {
    id: 'trans-1',
    title: 'Cirugía Capilar & Restauración de Brillo',
    specialist: 'Andreina Vargas',
    category: 'hair',
    beforeImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    description: 'Cabello opaco con frizz rebelde transformado en una melena sedosa con efecto espejo e hidratación total.',
    duration: '2 horas de sesión',
    tags: ['Cero Frizz', 'Brillo Espejo', 'Salud Capilar']
  },
  {
    id: 'trans-2',
    title: 'Sistema Jelly Tips Nude Glaze',
    specialist: 'Daniela Vargas',
    category: 'nails',
    beforeImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    description: 'Uñas cortas y frágiles transformadas con tips de gel ultraligeros en forma almond con efecto glazed donut.',
    duration: '1 hora de sesión',
    tags: ['Jelly Tips', 'Almond Shape', 'Ultra Ligero']
  },
  {
    id: 'trans-3',
    title: 'Corte Visagista & Balayage Golden Caramel',
    specialist: 'Andreina Vargas',
    category: 'hair',
    beforeImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    description: 'Corte mariposa en capas para aportar volumen y mechas caramelo que enmarcan e iluminan el rostro.',
    duration: '3.5 horas de sesión',
    tags: ['Balayage', 'Visagismo', 'Volumen']
  },
  {
    id: 'trans-4',
    title: 'Kapping Gel & Manicura Rusa Impecable',
    specialist: 'Daniela Vargas',
    category: 'nails',
    beforeImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Blindaje de uña natural con Kapping nivelado y esmaltado francés micro-lineal de larga duración.',
    duration: '1.2 horas de sesión',
    tags: ['Kapping', 'Nivelación', 'Manicura Rusa']
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariana Colmenares',
    rating: 5,
    date: 'Hace 3 días',
    serviceName: 'Cirugía Capilar Termoactiva',
    specialistName: 'Andreina Vargas',
    comment: '¡El cambio en mi cabello fue impresionante! Andreina tiene unas manos mágicas. Tenía el pelo muy quemado por la plancha y me quedó lacio como de comercial, brillante y suave. 1000% recomendada en San Carlos.',
    verified: true,
    likes: 18,
  },
  {
    id: 'rev-2',
    author: 'Valeria Rivas',
    rating: 5,
    date: 'Hace 1 semana',
    serviceName: 'MEGA PROMO DaniStudios ($20)',
    specialistName: 'Daniela Vargas',
    comment: 'Aproveché la mega promo de $20 con Daniela y salí enamorada de mis manos y pies. El kapping me dejó las uñas súper duras y el esmaltado intacto después de dos semanas. La atención es de reina.',
    verified: true,
    likes: 24,
  },
  {
    id: 'rev-3',
    author: 'Karla Gómez',
    rating: 5,
    date: 'Hace 2 semanas',
    serviceName: 'Diseño + Pigmentación de Cejas',
    specialistName: 'Andreina Vargas',
    comment: 'Nunca nadie me había diseñado las cejas con tanta precisión. El visagismo fue perfecto para la forma de mis ojos. Sin dolor y con un color muy natural.',
    verified: true,
    likes: 12,
  },
  {
    id: 'rev-4',
    author: 'Sofia Mendoza',
    rating: 5,
    date: 'Hace 3 semanas',
    serviceName: 'Sistema Jelly Tips',
    specialistName: 'Daniela Vargas',
    comment: 'Los Jelly Tips se sienten como tus propias uñas, nada pesados y super resistentes. Daniela es muy meticulosa y perfeccionista. El ambiente del salón es hermoso y relajante.',
    verified: true,
    likes: 15,
  }
];

export const REVIEWS_DATA = INITIAL_REVIEWS;

export const SAMPLE_APPOINTMENTS = [
  {
    id: 'APT-10492',
    createdAt: new Date().toISOString(),
    clientName: 'Mariana Colmenares',
    clientPhone: '0412-9670497',
    specialistId: 'andreina' as const,
    specialistName: 'Andreina Vargas',
    serviceId: 'cirugia_capilar',
    serviceName: 'Cirugía Capilar Termoactiva',
    priceDisplay: '$20',
    hairLengthSelected: 'Medio ($20)',
    date: '2026-08-25',
    time: '10:00 AM',
    notes: 'Cabello seco con frizz rebelde',
    status: 'confirmed' as const
  },
  {
    id: 'APT-10493',
    createdAt: new Date().toISOString(),
    clientName: 'Valeria Rivas',
    clientPhone: '0414-5551234',
    specialistId: 'daniela' as const,
    specialistName: 'Daniela Vargas',
    serviceId: 'nail_mega_promo',
    serviceName: 'MEGA COMBO Semipermanente',
    priceDisplay: '$20',
    date: '2026-08-25',
    time: '02:30 PM',
    notes: 'Tono rojo vino y francesa',
    status: 'pending' as const
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuál es tu principal objetivo para esta visita?',
    category: 'both',
    options: [
      {
        label: 'Eliminar frizz y reparar mi cabello',
        description: 'Busco un alisado sedoso, nutrición y brillo extremo sin esfuerzo diario.',
        recommendedServiceId: 'cirugia_capilar'
      },
      {
        label: 'Uñas perfectas y duraderas',
        description: 'Quiero lucir manos impecables con largo o blindaje resistente.',
        recommendedServiceId: 'jelly_tips'
      },
      {
        label: 'Combo completo de consentimiento',
        description: 'Deseo renovar manos y pies con la mejor relación calidad-precio.',
        recommendedServiceId: 'nail_mega_promo'
      },
      {
        label: 'Transformar el corte y enmarcar la mirada',
        description: 'Quiero un nuevo look de cabello junto con diseño de cejas simétricas.',
        recommendedServiceId: 'corte_profesional'
      }
    ]
  },
  {
    id: 2,
    question: '¿Qué tipo de textura o condición tiene tu cabello?',
    category: 'hair',
    options: [
      {
        label: 'Con mucho frizz, ondulado o rebelde',
        description: 'Tardo mucho tiempo secándolo y se infla con el clima.',
        recommendedServiceId: 'cirugia_capilar'
      },
      {
        label: 'Opaco, reseco o con falta de vida',
        description: 'Necesita nutrición profunda y sellado de cutícula urgente.',
        recommendedServiceId: 'hidratacion_profunda'
      },
      {
        label: 'Sano pero sin forma ni movimiento',
        description: 'Busco un corte moderno que aporte ligereza y volumen.',
        recommendedServiceId: 'corte_profesional'
      }
    ]
  },
  {
    id: 3,
    question: '¿Cuánto tiempo deseas que dure el resultado de tus uñas?',
    category: 'nails',
    options: [
      {
        label: '3 a 4 semanas sin desprenderse',
        description: 'Extensiones de gel o tips livianos de última tendencia.',
        recommendedServiceId: 'jelly_tips'
      },
      {
        label: 'Manos y pies impecables al mejor precio',
        description: 'El paquete estrella con manicura, kapping y pedicura spa.',
        recommendedServiceId: 'nail_mega_promo'
      },
      {
        label: 'Máxima resistencia para trabajo pesado',
        description: 'Polygel o Dual System con refuerzo acrílico-gel.',
        recommendedServiceId: 'dual_polygel_builder'
      }
    ]
  }
];

export const SALON_INFO = {
  name: 'Barby Styles 2.0',
  concept: 'Peluquería, Estilismo & Nail Studio',
  tagline: 'Tu belleza merece su propio momento.',
  address: 'Sector El Chuchango, calle Figueredo, casa #16-40',
  city: 'San Carlos',
  state: 'Cojedes',
  country: 'Venezuela',
  hours: 'Lunes a Sábado: 8:00 AM – 6:00 PM',
  googleMapsQuery: 'https://maps.google.com/?q=El+Chuchango+calle+Figueredo+San+Carlos+Cojedes+Venezuela',
  instagram: 'https://instagram.com/barby.styles',
  tiktok: 'https://tiktok.com/@barby.styles',
  social: {
    instagram: 'https://instagram.com/barby.styles',
    facebook: 'https://facebook.com/barby.styles',
    tiktok: 'https://tiktok.com/@barby.styles'
  },
  stats: [
    { label: 'Clientas Satisfechas', value: '+1,450' },
    { label: 'Calificación Promedio', value: '4.9 ★' },
    { label: 'Años de Experiencia', value: '8+ Años' },
    { label: 'Especialistas Certificadas', value: '2 Expertas' }
  ],
  features: [
    {
      title: 'Atención 100% Personalizada',
      description: 'Sin prisas ni esperas interminables. Cada turno está reservado exclusivamente para ti.'
    },
    {
      title: 'Productos de Grado Profesional',
      description: 'Fórmulas termoactivas, geles hipoalergénicos y pigmentos de alta fijación.'
    },
    {
      title: 'Protocolos de Esterilización Rigurosos',
      description: 'Herramientas esterilizadas en autoclave y kits desechables para tu total tranquilidad.'
    },
    {
      title: 'Ambiente Climatizado & Exclusivo',
      description: 'Música relajante, café de cortesía y el confort que mereces mientras te consientes.'
    }
  ]
};

export const FAQS = [
  {
    question: '¿Cómo funciona la reserva por WhatsApp?',
    answer: 'Al completar el formulario interactivo en nuestra web, el sistema prepara un mensaje detallado con tu nombre, servicio, fecha y hora. Serás redirigida automáticamente al chat directo de la especialista correspondiente (Andreina para cabello/cejas o Daniela para uñas) para confirmar tu cupo al instante.'
  },
  {
    question: '¿Cuánto dura el efecto de la Cirugía Capilar?',
    answer: 'Tiene una duración promedio de 3 a 5 meses dependiendo de tu rutina de lavado y uso de shampoo sin sal/sulfatos. Aporta brillo espejo, elimina el frizz y reduce el tiempo de peinado diario en un 90%.'
  },
  {
    question: '¿Qué incluye la MEGA PROMO de DaniStudios por $20?',
    answer: 'Incluye Manicura combinada + Kapping estructurado en gel para proteger y endurecer tu uña natural + Pedicura spa profunda + Esmaltado semipermanente en manos y pies con color a elección.'
  },
  {
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos Pago Móvil (Bancos Nacionales de Venezuela), Divisas en Efectivo (Dólares / Pesos), Transferencias bancarias y transferencias en Colombia (Nequi / Bancolombia para servicios de DaniStudios).'
  },
  {
    question: '¿Debo abonar una seña para apartar mi cita?',
    answer: 'Para garantizar la exclusividad de tu turno, se recomienda la confirmación vía WhatsApp con al menos 24 horas de antelación.'
  }
];
