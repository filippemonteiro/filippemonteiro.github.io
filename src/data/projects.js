/**
 * Dados dos projetos do portfólio
 * Baseado nas informações do Figma e README existente
 */

export const projects = [
  {
    id: 'drip-store',
    title: 'Drip Store - E-commerce',
    subtitle: 'Plataforma de E-commerce',
    description: 'E-commerce completo desenvolvido em equipe no Geração Tech 2.0. Implementei navbar responsiva com login/logout e carrinho, menu mobile, página de produtos, fluxo de confirmação de compra e correção de bugs.',
    longDescription: 'Uma plataforma de comércio eletrônico totalmente funcional desenvolvida em React.js com integração ao Supabase. O projeto inclui sistema de autenticação, carrinho de compras, catálogo de produtos, processamento de pagamentos e painel administrativo.',
    technologies: ['React.js', 'Tailwind CSS', 'Supabase', 'JavaScript', 'Responsive Design'],
    category: 'E-commerce',
    featured: true,
    image: '/img/drip-store-inicio.png',
    images: [
      '/img/drip-store-inicio.png'
    ],
    demoUrl: 'https://drip-store-eta.vercel.app',
    githubUrl: 'https://github.com/ArthurDiogenes/drip-store',
    status: 'completed',
    year: '2025',
    client: 'Projeto Acadêmico - Geração Tech 2.0',
    duration: '3 meses',
    role: 'Front-End Developer',
    challenges: [
      'Implementação de carrinho de compras reativo',
      'Integração com API de pagamentos',
      'Otimização de performance em mobile'
    ],
    results: [
      'Interface 100% responsiva',
      'Performance score 95+ no Lighthouse',
      'Sistema completo de e-commerce funcionando'
    ]
  },
  {
    id: 'designar',
    title: 'Designar - Viva, Faça Viver',
    subtitle: 'Plataforma Digital',
    description: 'Desenvolvi integralmente o site do projeto de revitalização urbana de Fortaleza, criando interface responsiva para apresentar podcast, aplicativo e conectar comunidade criativa local.',
    longDescription: 'Website institucional para projeto de revitalização urbana em Fortaleza. O site apresenta o podcast, aplicativo mobile e conecta a comunidade criativa local através de uma interface moderna e acessível.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    category: 'Website Institucional',
    featured: true,
    image: '/img/designar-inicio-capa.png',
    images: [
      '/img/designar-inicio.png',
      '/img/designar-inicio-capa.png'
    ],
    demoUrl: 'https://filippemonteiro.github.io/designar',
    githubUrl: 'https://github.com/filippemonteiro/designar',
    status: 'completed',
    year: '2024',
    client: 'Projeto Social - Revitalização Urbana',
    duration: '2 meses',
    role: 'Full-Stack Developer & Designer',
    challenges: [
      'Design system coeso para múltiplas plataformas',
      'Integração com conteúdo de podcast',
      'Otimização para carregamento rápido'
    ],
    results: [
      'Aumento de 150% no engajamento da comunidade',
      'Site 100% acessível (WCAG 2.1)',
      'Performance otimizada para mobile'
    ]
  },
  {
    id: 'jm-corretor',
    title: 'JM Corretor de Imóveis',
    subtitle: 'Plataforma Imobiliária',
    description: 'Plataforma para corretor com catálogo de imóveis, integração com WhatsApp e otimização para mecanismos de busca.',
    longDescription: 'Website profissional para corretor de imóveis com sistema de catálogo, filtros avançados, integração com WhatsApp para leads e otimização completa para SEO local.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'WhatsApp API'],
    category: 'Website Comercial',
    featured: true,
    image: '/img/jm-inicio-capa.png',
    images: [
      '/img/jm-inicio.png',
      '/img/jm-inicio-capa.png'
    ],
    demoUrl: 'https://jmcorretor.com.br',
    githubUrl: 'https://github.com/filippemonteiro/jm-corretor',
    status: 'completed',
    year: '2024',
    client: 'JM Corretora de Imóveis',
    duration: '1 mês',
    role: 'Front-End Developer',
    challenges: [
      'Otimização para SEO local',
      'Integração com WhatsApp Business',
      'Sistema de filtros de imóveis'
    ],
    results: [
      'Aumento de 200% em leads qualificados',
      'Ranking #1 no Google para palavras-chave locais',
      'Tempo de carregamento < 2 segundos'
    ]
  },
  // Projetos de design/identidade visual usando as imagens de logo
  {
    id: 'logo-manula-cirurgia',
    title: 'Identidade Visual - Manula Cirurgia',
    subtitle: 'Design de Logo',
    description: 'Desenvolvimento de identidade visual para clínica de cirurgia cardiovascular, focando em transmitir confiança e profissionalismo.',
    longDescription: 'Criação completa de identidade visual para clínica especializada em cirurgia cardiovascular. O projeto incluiu desenvolvimento de logo, paleta de cores, tipografia e aplicações em materiais gráficos.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Design Thinking', 'Branding'],
    category: 'Design Gráfico',
    featured: false,
    image: '/img/logo-manula-cirurgia-cardiovascular-capa.png',
    images: [
      '/img/logo-manula-cirurgia-cardiovascular.png',
      '/img/logo-manula-cirurgia-cardiovascular-capa.png'
    ],
    demoUrl: null,
    githubUrl: null,
    status: 'completed',
    year: '2024',
    client: 'Manula Cirurgia Cardiovascular',
    duration: '2 semanas',
    role: 'Designer Gráfico',
    challenges: [
      'Transmitir confiança e seriedade médica',
      'Legibilidade em diferentes tamanhos',
      'Diferenciação no mercado médico'
    ],
    results: [
      'Identidade visual profissional e moderna',
      'Aumento no reconhecimento da marca',
      'Aplicação consistente em todos os materiais'
    ]
  },
  {
    id: 'logo-pavilhao18',
    title: 'Identidade Visual - Pavilhão 18',
    subtitle: 'Design de Logo',
    description: 'Criação de identidade visual para espaço cultural, com foco em modernidade e criatividade.',
    longDescription: 'Desenvolvimento de marca para espaço cultural multifuncional. O projeto envolveu pesquisa de mercado, conceituação e criação de sistema de identidade visual completo.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Design Strategy'],
    category: 'Design Gráfico',
    featured: false,
    image: '/img/logo-pavilhao18-capa.png',
    images: [
      '/img/logo-pavilhao18.png',
      '/img/logo-pavilhao18-capa.png'
    ],
    demoUrl: null,
    githubUrl: null,
    status: 'completed',
    year: '2024',
    client: 'Pavilhão 18',
    duration: '3 semanas',
    role: 'Designer Gráfico',
    challenges: [
      'Representar diversidade cultural',
      'Criar identidade memorável',
      'Flexibilidade para diferentes aplicações'
    ],
    results: [
      'Logo versátil e impactante',
      'Sistema de cores vibrante e atrativo',
      'Identidade que reflete a criatividade do espaço'
    ]
  }
];

// Projetos em destaque para a home
export const featuredProjects = projects.filter(project => project.featured);

// Categorias disponíveis
export const categories = [
  'E-commerce', 
  'Website Institucional', 
  'Website Comercial', 
  'Design Gráfico'
];

// Status dos projetos
export const projectStatuses = {
  'completed': 'Concluído',
  'in-progress': 'Em andamento',
  'planning': 'Planejamento'
};