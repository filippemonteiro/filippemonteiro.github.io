import React from "react";
import "./index.css"; // Nossos estilos customizados com Glassmorphism

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Container principal com glassmorphism */}
      <div className="relative">
        {/* Background decorativo com efeito glass */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos decorativos para depth */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Header temporário para teste */}
        <header className="relative z-10 p-6">
          <div className="glass-card max-w-4xl mx-auto p-6">
            <h1 className="text-gradient text-4xl font-bold">
              Filippe Andrade Monteiro
            </h1>
            <p className="text-gray-300 mt-2">
              Desenvolvedor Front-End em transição para full-stack
            </p>
          </div>
        </header>

        {/* Main content area */}
        <main className="relative z-10 container-responsive py-12">
          {/* Seção de teste do glassmorphism */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card de teste 1 */}
            <div className="glass-card p-6 animate-entrance">
              <h3 className="text-xl font-semibold mb-3 text-white">
                🎨 Design System
              </h3>
              <p className="text-gray-300 text-sm">
                Glassmorphism funcionando com backdrop blur e transparência.
              </p>
            </div>

            {/* Card de teste 2 */}
            <div className="glass-card p-6 animate-entrance animate-delay-200">
              <h3 className="text-xl font-semibold mb-3 text-white">
                ⚡ Performance
              </h3>
              <p className="text-gray-300 text-sm">
                Otimizado para mobile com blur reduzido em telas pequenas.
              </p>
            </div>

            {/* Card de teste 3 */}
            <div className="glass-card p-6 animate-entrance animate-delay-300">
              <h3 className="text-xl font-semibold mb-3 text-white">
                ♿ Acessibilidade
              </h3>
              <p className="text-gray-300 text-sm">
                Respeita prefers-reduced-motion e contraste alto.
              </p>
            </div>
          </section>

          {/* Seção de botões para testar interações */}
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Teste dos Componentes
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary">Botão Primário</button>

              <button className="btn-secondary">Botão Secundário</button>
            </div>

            {/* Input de teste */}
            <div className="max-w-md mx-auto mt-6">
              <input
                type="text"
                placeholder="Teste o input glassmorphism..."
                className="input-glass w-full"
              />
            </div>
          </section>
        </main>

        {/* Footer temporário */}
        <footer className="relative z-10 text-center py-8 text-gray-400">
          <p>✨ Portfolio com Glassmorphism em desenvolvimento</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
