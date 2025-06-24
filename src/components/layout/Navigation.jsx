import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Componente Navigation - Header responsivo com glassmorphism
 * Desktop: Menu horizontal no topo
 * Mobile: Menu inferior fixo para facilitar uso com uma mão
 */
const Navigation = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para adicionar backdrop blur extra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Itens do menu
  const menuItems = [
    { id: 'home', label: 'Início', icon: Home, href: '#home' },
    { id: 'sobre', label: 'Sobre', icon: User, href: '#sobre' },
    { id: 'projetos', label: 'Projetos', icon: Briefcase, href: '#projetos' },
    { id: 'contato', label: 'Contato', icon: Mail, href: '#contato' }
  ];

  // Função para scroll suave
  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Desktop/Tablet */}
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? 'glass-card backdrop-glass' : 'bg-glass-white/50 backdrop-blur-md'}
          border-b border-white/10
        `}
      >
        <nav className="container-responsive">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo/Nome */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleScrollTo('#home')}
                className="group flex items-center space-x-3 transition-all duration-300"
              >
                {/* Avatar/Logo */}
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue p-0.5">
                    <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                      <span className="text-lg md:text-xl font-bold text-gradient">
                        FM
                      </span>
                    </div>
                  </div>
                  {/* Indicator online */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-dark-bg"></div>
                </div>
                
                {/* Nome */}
                <div className="hidden sm:block">
                  <h1 className="text-lg md:text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
                    Filippe Andrade Monteiro
                  </h1>
                  <p className="text-xs md:text-sm text-gray-400">
                    Desenvolvedor Front-End
                  </p>
                </div>
              </button>
            </div>

            {/* Menu Desktop - Hidden em mobile */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.href)}
                  className="nav-link px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  <span className="flex items-center space-x-2">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Actions Desktop */}
            <div className="flex items-center space-x-3">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="glass-card p-2 md:p-3 hover:scale-105 transition-all duration-300 group"
                aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <Moon size={20} className="text-blue-400 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Mobile Menu Toggle - Visible apenas em mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-card p-2 hover:scale-105 transition-all duration-300"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-white" />
                ) : (
                  <Menu size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Dropdown - Glassmorphism */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0 
            transform transition-all duration-300 ease-out
            ${isMobileMenuOpen 
              ? 'translate-y-0 opacity-100 visible' 
              : '-translate-y-4 opacity-0 invisible'
            }
          `}
        >
          <div className="glass-card backdrop-glass m-4 p-4 border border-white/20">
            <div className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.href)}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <item.icon size={24} className="text-primary-purple group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-white mt-2">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Fixo na parte inferior */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="glass-card backdrop-glass border-t border-white/20 rounded-t-2xl">
          <div className="flex items-center justify-around py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.href)}
                className="flex flex-col items-center p-3 transition-all duration-300 group hover:scale-105"
              >
                <div className="p-2 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                  <item.icon 
                    size={20} 
                    className="text-gray-400 group-hover:text-primary-purple transition-colors duration-300" 
                  />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 mt-1">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay para mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;