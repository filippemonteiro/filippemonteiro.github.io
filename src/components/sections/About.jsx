import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react";

/**
 * About Section - Seção sobre com skills e experiência
 */
const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      color: "from-primary-purple to-primary-blue",
      items: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Design",
      icon: Palette,
      color: "from-primary-blue to-purple-500",
      items: [
        "UI/UX Design",
        "Figma",
        "Adobe Creative Suite",
        "Design Systems",
        "Prototipagem",
      ],
    },
    {
      category: "Ferramentas",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      items: [
        "Git/GitHub",
        "Vite",
        "Node.js",
        "Supabase",
        "Vercel",
        "API REST",
      ],
    },
  ];

  const stats = [
    { number: "3+", label: "Projetos Concluídos", icon: Award },
    { number: "2", label: "Anos de Experiência", icon: Users },
    { number: "∞", label: "Cafés Consumidos", icon: Coffee },
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sou entusiasta de desenvolvimento front-end, com sólida base em
            Design Gráfico. Atualmente concluindo o curso intensivo{" "}
            <strong className="text-white">
              Geração Tech 2.0 (Full Stack)
            </strong>{" "}
            e cursando{" "}
            <strong className="text-white">
              Análise e Desenvolvimento de Sistemas
            </strong>{" "}
            na Gran Faculdade.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Ícone e título */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center mr-4`}
                >
                  <skillGroup.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Lista de skills */}
              <div className="space-y-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * itemIndex }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Interessado em trabalhar comigo? Vamos conversar!
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Entre em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
