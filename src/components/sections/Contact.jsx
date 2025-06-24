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
  Copy,
  CheckCircle,
} from "lucide-react";
import Button from "../ui/Button";

/**
 * Contact Section - Design otimizado com melhor UX/UI
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

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

  // Função para copiar texto
  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  // Informações de contato otimizadas
  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "filippemonteiro@outlook.com",
      action: () => window.open("mailto:filippemonteiro@outlook.com"),
      copyValue: "filippemonteiro@outlook.com",
      primary: true,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(85) 9.9642-6669",
      action: () =>
        window.open(
          "https://wa.me/5585996426669?text=Olá,%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades"
        ),
      copyValue: "+5585996426669",
      primary: true,
    },
    {
      id: "location",
      icon: MapPin,
      label: "Localização",
      value: "Fortaleza, CE - Brasil",
      action: null,
      copyValue: null,
      primary: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/filippemonteiro",
      username: "@filippemonteiro",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/filippemonteiro",
      username: "/in/filippemonteiro",
    },
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background decorativo minimalista */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-purple/3 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vamos trabalhar <span className="text-gradient">juntos?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e desafios. Entre em
            contato para conversarmos!
          </p>
        </motion.div>

        {/* Layout otimizado - Single Column em mobile, Two columns em desktop */}
        <div className="max-w-5xl mx-auto">
          {/* Métodos de contato principais - Cards horizontais */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactMethods
              .filter((method) => method.primary)
              .map((method, index) => (
                <motion.div
                  key={method.id}
                  className="glass-card p-6 group cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={method.action}
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-xl flex items-center justify-center">
                        <method.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wide">
                          {method.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-primary-purple transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    {/* Botão de copiar */}
                    {method.copyValue && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(method.copyValue, method.id);
                        }}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        {copiedItem === method.id ? (
                          <CheckCircle size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400" />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Grid principal - Formulário + Info adicional */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulário - 2/3 da largura */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Send size={20} className="mr-3 text-primary-purple" />
                  Envie uma mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome e Email em linha no desktop */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2 text-sm font-medium"
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-glass w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2 text-sm font-medium"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-glass w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2 text-sm font-medium"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="input-glass w-full resize-none"
                      placeholder="Conte-me sobre sua ideia, projeto ou oportunidade..."
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
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar - Info adicional + Redes sociais */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Localização */}
              <div className="glass-card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin size={18} className="text-primary-purple" />
                  <span className="text-white font-medium">Localização</span>
                </div>
                <p className="text-gray-300 text-sm">Fortaleza, CE - Brasil</p>
                <p className="text-gray-400 text-xs mt-2">
                  Disponível para trabalho remoto
                </p>
              </div>

              {/* Redes sociais */}
              <div className="glass-card p-6">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary-purple rounded-full mr-3"></span>
                  Conecte-se comigo
                </h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <social.icon
                        size={18}
                        className="text-gray-400 group-hover:text-primary-purple transition-colors"
                      />
                      <div>
                        <p className="text-white text-sm font-medium">
                          {social.label}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {social.username}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Status de disponibilidade */}
              <div className="glass-card p-6 bg-gradient-to-br from-green-500/10 to-primary-purple/10 border-green-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">
                    Disponível para novos projetos
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Buscando oportunidades como Desenvolvedor Front-End Júnior ou
                  Estagiário
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
