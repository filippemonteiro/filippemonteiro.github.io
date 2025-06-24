import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Zap, 
  GraduationCap, 
  MapPin, 
  Calendar,
  Award,
  Target,
  Heart,
  ArrowRight
} from "lucide-react";

/**
 * About Section - Redesenhada com foco em storytelling e personal branding
 */
const About = () => {
  // Jornada profissional timeline
  const journey = [
    {
      icon: GraduationCap,
      title: "Bacharel em Design",
      subtitle: "Base em UX/UI e Design Thinking",
      description: "Formação sólida em design visual, experiência do usuário e metodologias criativas",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Geração Tech 2.0 - Concluído",
      subtitle: "Desenvolvimento Full Stack",
      description: "React.js, Node.js, JavaScript ES6+ e metodologias ágeis em programa intensivo",
      color: "from-primary-purple to-primary-blue"
    },
    {
      icon: Target,
      title: "ADS em Andamento", 
      subtitle: "Análise e Desenvolvimento de Sistemas",
      description: "Consolidando conhecimentos técnicos e arquitetura de software",
      color: "from-primary-blue to-teal-500"
    }
  ];

  // Skills organizadas por nível de expertise
  const skillsData = [
    {
      category: "Frontend",
      icon: Code,
      expertise: "Avançado",
      color: "from-primary-purple to-primary-blue",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript ES6+", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      category: "Design",
      icon: Palette,
      expertise: "Especialista",
      color: "from-primary-blue to-purple-500",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Design Systems", level: 80 },
        { name: "Prototipagem", level: 85 }
      ]
    },
    {
      category: "Ferramentas",
      icon: Zap,
      expertise: "Intermediário",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 75 },
        { name: "Node.js", level: 60 },
        { name: "Supabase", level: 70 },
        { name: "Vercel", level: 80 },
        { name: "API REST", level: 65 }
      ]
    }
  ];

  // Valores pessoais/profissionais
  const values = [
    {
      icon: Heart,
      title: "Código Limpo",
      description: "Desenvolvimento com boas práticas, legibilidade e manutenibilidade"
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Otimização constante para experiências rápidas e eficientes"
    },
    {
      icon: Target,
      title: "Foco no Usuário",
      description: "Cada decisão técnica pensada na experiência e acessibilidade final"
    }
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-purple/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-blue/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Seção principal: Foto + Apresentação */}
        <motion.div
          className="grid lg:grid-cols-5 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Foto com liquid glass bubble */}
          <div className="lg:col-span-2">
            <motion.div 
              className="relative max-w-sm mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Liquid Glass Bubble Container */}
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-primary-blue/20 to-purple-500/20 rounded-full blur-xl scale-110"></div>
                
                {/* Main bubble with liquid glass effect */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-primary-purple/10 to-primary-blue/10 rounded-full"></div>
                  </div>
                  
                  {/* Foto */}
                  <img 
                    src="/img/avatar.jpg" 
                    alt="Filippe Monteiro - Desenvolvedor Front-End"
                    className="absolute inset-4 w-72 h-72 object-cover rounded-full shadow-xl"
                  />
                  
                  {/* Floating particles */}
                  <div className="absolute top-6 right-12 w-3 h-3 bg-primary-purple/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 left-8 w-2 h-2 bg-primary-blue/40 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-20 left-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Badge de status - reposicionado e isolado do hover */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-6 py-3 border border-green-400/30 pointer-events-none">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">
                      Disponível para novos projetos
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* História e apresentação */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Olá! Sou o Filippe 👋
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Desenvolvedor Front-End</strong> com formação em Design, 
                  especializado em criar interfaces modernas e funcionais. Combino conhecimento técnico 
                  sólido com olhar estético apurado para desenvolver experiências digitais que realmente 
                  conectam com os usuários.
                </p>
                
                <p>
                  Recentemente <strong className="text-primary-purple">concluí o Geração Tech 2.0</strong>, 
                  programa intensivo de desenvolvimento Full Stack, onde aprofundei meus conhecimentos 
                  em <strong className="text-white">React.js, JavaScript ES6+ e Node.js</strong>. 
                  Atualmente cursando <strong className="text-white">Análise e Desenvolvimento de Sistemas</strong> para consolidar minha transição para a área tech.
                </p>

                <p>
                  Meu diferencial está na <strong className="text-white">visão híbrida</strong>: 
                  entendo profundamente UX/UI através da minha formação em Design e materializo 
                  essas soluções com código limpo, semântico e performático. Busco sempre o equilíbrio 
                  perfeito entre <strong className="text-primary-blue">beleza visual e funcionalidade técnica</strong>.
                </p>
              </div>
            </motion.div>

            {/* Valores pessoais */}
            <motion.div
              className="grid md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <value.icon size={20} className="text-primary-purple mx-auto mb-2" />
                  <h4 className="text-white font-medium text-sm mb-1">{value.title}</h4>
                  <p className="text-gray-400 text-xs">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Jornada Acadêmica/Profissional */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center">
            <GraduationCap size={24} className="mr-3 text-primary-purple" />
            Minha Jornada
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Ícone */}
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon size={20} className="text-white" />
                </div>

                {/* Conteúdo */}
                <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-primary-purple text-sm font-medium mb-2">{step.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Indicador de progresso */}
                {index < journey.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills com Progress Bars */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Header do card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center mr-3`}>
                    <skillGroup.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                    <span className="text-xs text-gray-400">{skillGroup.expertise}</span>
                  </div>
                </div>
              </div>

              {/* Skills clean e minimalistas */}
              <div className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Pronto para criar algo incrível juntos?
            </h3>
            <p className="text-gray-300 mb-6">
              Estou sempre aberto a novos desafios e oportunidades de crescimento. 
              Que tal conversarmos sobre seu próximo projeto?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary inline-flex items-center"
            >
              Vamos conversar
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;