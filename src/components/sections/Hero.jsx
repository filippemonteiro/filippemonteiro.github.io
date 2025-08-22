import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageCircle, Eye } from 'lucide-react';
import Button from '../ui/Button';


const Hero = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      <motion.div 
        className="relative z-10 container-responsive text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">
              Filippe Andrade
            </span>
            <span className="block text-gradient">
              Monteiro
            </span>
          </h1>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Desenvolvedor Front-End
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Apaixonado por criar aplicações web inovadoras e 
            centradas no usuário. Experiência em React, JavaScript 
            e ferramentas modernas de desenvolvimento.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Skills Modernas
            </h3>
            <p className="text-gray-400 text-sm">
              React.js, JavaScript ES6+, Tailwind CSS e ferramentas modernas
            </p>
          </div>
          <div className="glass-card p-6 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Foco no Usuário
            </h3>
            <p className="text-gray-400 text-sm">
              Interfaces acessíveis, responsivas e centradas na experiência
            </p>
          </div>
          <div className="glass-card p-6 text-left">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Projetos Reais
            </h3>
            <p className="text-gray-400 text-sm">
              E-commerce, plataformas web e soluções completas desenvolvidas
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
            icon={Eye}
            iconPosition="right"
          >
            Ver projetos
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="https://wa.me/5585996426669?text=Olá,%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades"
            icon={MessageCircle}
            iconPosition="right"
          >
            Vamos conversar
          </Button>

          {/* <Button
            variant="ghost"
            size="lg"
            href="/cv-filippe-monteiro.pdf"
            icon={Download}
          >
            Baixar CV
          </Button> */}
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            Deslize para ver os projetos
          </p>
          <motion.button
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;