/**
 * Dados dos projetos do portfólio
 * Baseado nas informações do Figma e README existente
 */

export const projects = [
  {
    id: "drip-store",
    title: "Drip Store - E-commerce",
    subtitle: "Plataforma de E-commerce",
    description:
      "E-commerce completo desenvolvido em equipe no Geração Tech 2.0. Implementei navbar responsiva com login/logout e carrinho, menu mobile, página de produtos, fluxo de confirmação de compra e correção de bugs.",
    longDescription:
      "Uma plataforma de comércio eletrônico totalmente funcional desenvolvida em React.js com integração ao Supabase. O projeto inclui sistema de autenticação, carrinho de compras, catálogo de produtos, processamento de pagamentos e painel administrativo.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "JavaScript",
      "Responsive Design",
    ],
    category: "E-commerce",
    featured: true,
    image: "/images/drip-store-preview.jpg",
    images: [
      "/images/drip-store-1.jpg",
      "/images/drip-store-2.jpg",
      "/images/drip-store-3.jpg",
    ],
    demoUrl: "https://drip-store-eta.vercel.app",
    githubUrl: "https://github.com/ArthurDiogenes/drip-store",
    status: "completed",
    year: "2025",
    client: "Projeto Acadêmico - Geração Tech 2.0",
    duration: "3 meses",
    role: "Front-End Developer",
    challenges: [
      "Implementação de carrinho de compras reativo",
      "Integração com API de pagamentos",
      "Otimização de performance em mobile",
    ],
    results: [
      "Interface 100% responsiva",
      "Performance score 95+ no Lighthouse",
      "Sistema completo de e-commerce funcionando",
    ],
  },
  {
    id: "designar",
    title: "Designar - Viva, Faça Viver",
    subtitle: "Plataforma Digital",
    description:
      "Desenvolvi integralmente o site do projeto de revitalização urbana de Fortaleza, criando interface responsiva para apresentar podcast, aplicativo e conectar comunidade criativa local.",
    longDescription:
      "Website institucional para projeto de revitalização urbana em Fortaleza. O site apresenta o podcast, aplicativo mobile e conecta a comunidade criativa local através de uma interface moderna e acessível.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
    ],
    category: "Website Institucional",
    featured: true,
    image: "/images/designar-preview.jpg",
    images: ["/images/designar-1.jpg", "/images/designar-2.jpg"],
    demoUrl: "https://filippemonteiro.github.io/designar",
    githubUrl: "https://github.com/filippemonteiro/designar",
    status: "completed",
    year: "2024",
    client: "Projeto Social - Revitalização Urbana",
    duration: "2 meses",
    role: "Full-Stack Developer & Designer",
    challenges: [
      "Design system coeso para múltiplas plataformas",
      "Integração com conteúdo de podcast",
      "Otimização para carregamento rápido",
    ],
    results: [
      "Aumento de 150% no engajamento da comunidade",
      "Site 100% acessível (WCAG 2.1)",
      "Performance otimizada para mobile",
    ],
  },
  {
    id: "jm-corretor",
    title: "JM Corretor de Imóveis",
    subtitle: "Plataforma Imobiliária",
    description:
      "Plataforma para corretor com catálogo de imóveis, integração com WhatsApp e otimização para mecanismos de busca.",
    longDescription:
      "Website profissional para corretor de imóveis com sistema de catálogo, filtros avançados, integração com WhatsApp para leads e otimização completa para SEO local.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO", "WhatsApp API"],
    category: "Website Comercial",
    featured: true,
    image: "/images/jm-corretor-preview.jpg",
    images: ["/images/jm-corretor-1.jpg", "/images/jm-corretor-2.jpg"],
    demoUrl: "https://jmcorretor.com.br",
    githubUrl: "https://github.com/filippemonteiro/jm-corretor",
    status: "completed",
    year: "2024",
    client: "JM Corretora de Imóveis",
    duration: "1 mês",
    role: "Front-End Developer",
    challenges: [
      "Otimização para SEO local",
      "Integração com WhatsApp Business",
      "Sistema de filtros de imóveis",
    ],
    results: [
      "Aumento de 200% em leads qualificados",
      "Ranking #1 no Google para palavras-chave locais",
      "Tempo de carregamento < 2 segundos",
    ],
  },
  {
    id: "portfolio-glassmorphism",
    title: "Portfolio Pessoal",
    subtitle: "Site do Portfólio",
    description:
      "Site de portfólio pessoal com design moderno usando Glassmorphism, React.js e animações fluidas.",
    longDescription:
      "Portfólio pessoal desenvolvido com as mais modernas tecnologias front-end. Implementa design system glassmorphism, animações micro-interativas e performance otimizada.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Glassmorphism",
    ],
    category: "Portfolio",
    featured: false,
    image: "/images/portfolio-preview.jpg",
    images: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg"],
    demoUrl: "https://filippemonteiro.github.io",
    githubUrl: "https://github.com/filippemonteiro/filippemonteiro.github.io",
    status: "in-progress",
    year: "2025",
    client: "Projeto Pessoal",
    duration: "Em andamento",
    role: "Designer & Developer",
    challenges: [
      "Performance com efeitos glassmorphism",
      "Animações suaves em mobile",
      "Sistema de tema dark/light",
    ],
    results: [
      "Design system moderno e reutilizável",
      "Performance otimizada para mobile",
      "Experiência de usuário premium",
    ],
  },
];

// Projetos em destaque para a home
export const featuredProjects = projects.filter((project) => project.featured);

// Categorias disponíveis
export const categories = [
  ...new Set(projects.map((project) => project.category)),
];

// Status dos projetos
export const projectStatuses = {
  completed: "Concluído",
  "in-progress": "Em andamento",
  planning: "Planejamento",
};
