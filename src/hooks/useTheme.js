import { useState, useEffect } from 'react';

/**
 * Hook customizado para gerenciar tema dark/light
 * Salva preferência no localStorage e detecta preferência do sistema
 */
export const useTheme = () => {
  // Detecta preferência inicial do sistema ou localStorage
  const getInitialTheme = () => {
    // Verifica se há tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Se não, usa preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Aplicar tema ao document root
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove classe anterior
    root.classList.remove('light', 'dark');
    
    // Adiciona nova classe
    root.classList.add(theme);
    
    // Salva no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Função para alternar tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Função para definir tema específico
  const setSpecificTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: theme === 'dark'
  };
};