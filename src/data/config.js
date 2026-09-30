export const siteConfig = {
  brand: {
    name: 'CoreCRM',
    slogan: 'GESTIÓN DE CLIENTES · TODO EN UN SOLO LUGAR'
  },
  accessibility: {
    navigationLabel: 'Navegación principal'
  },
  navigation: [
    { href: '#features', label: 'Características' },
    { href: '#architecture', label: 'Cómo funciona' },
    { href: '#api', label: 'Integraciones' }
  ],
  
  hero: {
    content: {
      badge: '🚧 MUY PRONTO · APÚNTATE PARA PROBARLO',
      heading: 'Organiza tus clientes y tu equipo desde un solo lugar.',
      description: 'Estamos creando una forma más sencilla de llevar el seguimiento de tus clientes, conversaciones y tareas. Apúntate para conocer CoreCRM y probarlo antes del lanzamiento.',
      primaryButton: { label: 'Quiero probar CoreCRM', href: '#waitlist' },
      secondaryButton: { label: 'Conocer el proyecto', href: 'https://github.com' },
      image: {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200',
        alt: 'Panel de trabajo con gráficos y datos de clientes',
        caption: 'CoreCRM: clientes, conversaciones y tareas en un solo lugar'
      },
      stats: [
        { value: '1', label: 'LUGAR PARA ORGANIZARTE', suffix: '' },
        { value: 'Más', label: 'TIEMPO PARA TUS CLIENTES', suffix: '' },
        { value: 'Menos', label: 'TAREAS REPETIDAS', suffix: '' }
      ]
    }
  },

  features: {
    eyebrow: 'HECHO PARA TU DÍA A DÍA',
    heading: 'Todo tu equipo, en la misma página',
    description: 'Organiza clientes, conversaciones y tareas para que cada seguimiento sea claro y nada importante se quede atrás.',
    items: [
      { icon: 'Database', title: 'Toda la información a mano', description: 'Encuentra los datos y el historial de cada cliente sin rebuscar entre distintas herramientas.' },
      { icon: 'Zap', title: 'Seguimiento sencillo', description: 'Ten claros los próximos pasos y mantén cada conversación en movimiento.' },
      { icon: 'ShieldCheck', title: 'Tu equipo, con claridad', description: 'Comparte la información adecuada y mantén el trabajo organizado en un solo espacio.' }
    ]
  },

  waitlist: {
    eyebrow: 'EARLY ACCESS',
    heading: 'Sé de los primeros en probar CoreCRM',
    description: 'Únete a nuestra lista de espera para la v1.0.0-beta. Te notificaremos en cuanto abramos los primeros cupos para desarrolladores.',
    inputPlaceholder: 'tu@empresa.com',
    buttonLabel: 'Solicitar acceso',
    disclaimer: 'Cero spam. Solo te escribiremos cuando el entorno esté listo.'
  },

  contact: {
    socialLinks: [
      { name: 'GitHub', icon: 'Github', href: 'https://github.com/luisjcm' },
      { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' }
    ]
  },

  footer: {
    legalLinks: [
      { label: 'Guía de uso', href: '#' },
      { label: 'Licencia del proyecto', href: '#' }
    ],
    copyrightLabel: 'Proyecto para organizar clientes y equipos.',
    developerText: 'Mantenido por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com'
  }
};