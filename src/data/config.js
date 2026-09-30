export const siteConfig = {
  brand: {
    name: 'NovaMédica',
    slogan: 'ATENCIÓN INTEGRAL · MADRID, ES',
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipo Médico', href: '#equipo' },
    { label: 'Instalaciones', href: '#instalaciones' },
    { label: 'Contacto', href: '#contacto' }
  ],
  hero: {
    content: {
      heading: 'Tu salud en manos de especialistas de primer nivel.',
      description: 'Ofrecemos atención médica preventiva y especializada con equipos de última generación y un enfoque humano centrado en tu bienestar en el corazón de Madrid.',
      actions: [
        { label: 'Agendar Cita', primary: true, href: '#contacto' },
        { label: 'Portal del Paciente', primary: false, href: '#portal' }
      ],
      metrics: [
        { value: '25+', label: 'Especialidades' },
        { value: '15k+', label: 'Pacientes' },
        { value: '24/7', label: 'Urgencias' }
      ],
      image: {
        url: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=85&w=1200',
        alt: 'Equipo médico de NovaMédica',
        caption: 'Centro Médico Salamanca · Madrid'
      }
    }
  },
  specialties: {
    eyebrow: 'NUESTRAS ESPECIALIDADES',
    heading: 'Atención médica integral y multidisciplinaria',
    description: 'Cubrimos todas las áreas de la salud con especialistas certificados para brindarte un diagnóstico preciso y tratamiento oportuno.',
    items: [
      { icon: 'Activity', title: 'Cardiología Avanzada', description: 'Evaluación cardiovascular integral, ecocardiogramas y pruebas de esfuerzo con monitoreo continuo.' },
      { icon: 'Brain', title: 'Neurología Clínica', description: 'Diagnóstico y tratamiento de trastornos del sistema nervioso central y periférico.' },
      { icon: 'Microscope', title: 'Laboratorio Clínico', description: 'Análisis de muestras con equipos automatizados para resultados precisos en tiempo récord.' },
      { icon: 'Stethoscope', title: 'Medicina General', description: 'Atención primaria, chequeos preventivos y derivación oportuna a subespecialidades.' }
    ]
  },

  team: {
    eyebrow: 'NUESTRO EQUIPO',
    heading: 'Especialistas a tu disposición',
    description: 'Conoce al equipo de profesionales altamente capacitados que velarán por tu bienestar en cada paso de tu tratamiento.',
    members: [
      {
        name: 'Dra. Elena Villalobos',
        role: 'Directora Médica · Cardióloga',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=85&w=800',
      },
      {
        name: 'Dr. Roberto Méndez',
        role: 'Jefe de Neurología',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=85&w=800',
      },
      {
        name: 'Dra. Sofía Carter',
        role: 'Médico Internista',
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=85&w=800',
      }
    ]
  },
  facilities: {
    eyebrow: 'NUESTRAS INSTALACIONES',
    heading: 'Espacios diseñados para tu confort',
    description: 'Contamos con consultorios modernos, quirófanos equipados con tecnología de punta y áreas de recuperación pensadas para tu máxima tranquilidad.',
    images: [
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=85&w=800', alt: 'Recepción y sala de espera moderna' },
      { url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=85&w=800', alt: 'Quirófano equipado con tecnología' },
      { url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=85&w=800', alt: 'Pasillos y salas de recuperación' },
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=85&w=800', alt: 'Laboratorio de análisis clínicos' }
    ]
  },

  contactSection: {
    eyebrow: 'AGENDA TU CITA',
    heading: 'Estamos aquí para cuidar de ti',
    description: 'Comunícate con nosotros para programar tu visita o resolver cualquier duda médica. Nuestro equipo de atención al paciente está disponible 24/7.',
    details: [
      { icon: 'MapPin', title: 'Ubicación', value: 'Calle de Velázquez 50, 28001 Madrid, España' },
      { icon: 'Phone', title: 'Línea de Atención', value: '+34 91 555 0198' },
      { icon: 'Mail', title: 'Correo Electrónico', value: 'citas@novamedica.com' },
      { icon: 'Clock', title: 'Horario', value: 'Urgencias 24/7 · Consultas 8am - 8pm' }
    ],
    form: {
      title: 'Solicitar Información',
      submitLabel: 'Enviar Mensaje'
    }
  },
  contact: {
    socialLinks: [
      { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
    ]
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados.',
    developerText: 'Desarrollado por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com',
    legalLinks: [
      { label: 'Política de Privacidad HIPAA', href: '/privacidad' },
      { label: 'Términos de Servicio', href: '/terminos' },
    ]
  },
  accessibility: {
    navigationLabel: 'Navegación principal',
  }
};