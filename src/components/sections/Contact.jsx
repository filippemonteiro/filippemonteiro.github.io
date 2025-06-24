import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import Button from "../ui/Button";

/**
 * Contact Section - Formulário de contato e informações
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (aqui você integraria com um serviço real)
    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Retornarei em breve.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "filippemonteiro@outlook.com",
      href: "mailto:filippemonteiro@outlook.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(85) 9.9642-6669",
      href: "https://wa.me/5585996426669",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Fortaleza, CE - Brasil",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/filippemonteiro",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/filippemonteiro",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5585996426669",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"></div>
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
            Vamos trabalhar <span className="text-gradient">juntos?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e desafios. Entre em
            contato para conversarmos sobre seu próximo projeto!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Informações de Contato
            </h3>

            {/* Lista de contatos - Mais limpa */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mr-3">
                      <info.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-primary-purple transition-colors duration-300 font-medium"
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Redes sociais - Mais elegantes */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Conecte-se comigo
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glass-card flex items-center justify-center rounded-xl transition-all duration-300 ${social.color} hover:scale-110 group`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <social.icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-glass w-full"
                    placeholder="Digite seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-glass w-full"
                    placeholder="Digite seu email"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-glass w-full resize-none"
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  />
                </div>

                {/* Botão de envio */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>

              {/* Call to action alternativo */}
              <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-300 text-sm mb-4">
                  Prefere um contato mais direto?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="https://wa.me/5585996426669?text=Olá,%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades"
                    icon={MessageCircle}
                    className="flex-1"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href="mailto:filippemonteiro@outlook.com"
                    icon={Mail}
                    className="flex-1"
                  >
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seção de disponibilidade */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-400 font-medium">
                Disponível para novos projetos
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Pronto para criar algo incrível juntos?
            </h3>
            <p className="text-gray-300">
              Estou buscando oportunidades como Desenvolvedor Front-End Júnior
              ou Estagiário. Se você tem um projeto interessante ou uma vaga
              aberta, adoraria conversar!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
