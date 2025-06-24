import React from "react";
import { motion } from "framer-motion";

/**
 * Componente Button reutilizável com variantes glassmorphism
 * Suporta diferentes variantes, tamanhos e estados
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  ...props
}) => {
  // Variantes de estilo
  const variants = {
    primary: "btn-primary hover:shadow-lg hover:shadow-primary-purple/25",
    secondary: "btn-secondary",
    glass: "glass-card hover:bg-white/20 text-white border border-white/20",
    outline:
      "border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white bg-transparent",
    ghost: "hover:bg-white/10 text-gray-300 hover:text-white",
  };

  // Tamanhos
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  // Classes base
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-primary-purple/50
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-105 active:scale-95
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  // Animações com Framer Motion
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  // Conteúdo do botão
  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon
          size={size === "sm" ? 16 : size === "lg" || size === "xl" ? 24 : 20}
        />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon
          size={size === "sm" ? 16 : size === "lg" || size === "xl" ? 24 : 20}
        />
      )}
    </>
  );

  // Se for um link
  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  // Botão normal
  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
