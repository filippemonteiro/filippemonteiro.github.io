// JavaScript Principal - Portfolio Filippe Monteiro

// Inicialização do AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const header = document.getElementById('header');
const main = document.getElementById('main');

menuToggle.addEventListener('click', function() {
    header.classList.toggle('mobile-open');
    
    // Alterna o ícone
    const icon = this.querySelector('i');
    if (header.classList.contains('mobile-open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fecha o menu ao clicar em um link (mobile)
const navLinks = header.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            header.classList.remove('mobile-open');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Função para copiar telefone
function copiarTelefone() {
    const telefone = '85996426669'; // Sem formatação para facilitar
    const telefoneFormatado = '(85) 9.9642-6669';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(telefone).then(() => {
            mostrarNotificacao('Telefone copiado: ' + telefoneFormatado, 'success');
        }).catch(() => {
            copiarTextoFallback(telefone, telefoneFormatado);
        });
    } else {
        copiarTextoFallback(telefone, telefoneFormatado);
    }
}

// Fallback para browsers mais antigos
function copiarTextoFallback(texto, textoFormatado) {
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        mostrarNotificacao('Telefone copiado: ' + textoFormatado, 'success');
    } catch (err) {
        mostrarNotificacao('Erro ao copiar. Telefone: ' + textoFormatado, 'error');
    }
    
    document.body.removeChild(textArea);
}

// Sistema de notificações melhorado
function mostrarNotificacao(mensagem, tipo = 'info') {
    // Remove notificação existente
    const notificacaoExistente = document.querySelector('.notificacao');
    if (notificacaoExistente) {
        notificacaoExistente.remove();
    }
    
    // Define cores baseadas no tipo
    const cores = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    };
    
    // Cria nova notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao fixed bottom-4 right-4 ${cores[tipo]} text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-fade-in max-w-sm`;
    
    // Ícone
    const icones = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    
    notificacao.innerHTML = `
        <i class="fas ${icones[tipo]} text-xl"></i>
        <span>${mensagem}</span>
    `;
    
    document.body.appendChild(notificacao);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notificacao.classList.add('animate-fade-out');
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading melhorado para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Adiciona classes de animação ao Tailwind
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fade-out {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(10px);
        }
    }
    
    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }
    
    .animate-fade-out {
        animation: fade-out 0.3s ease-out;
    }
    
    img.loaded {
        animation: fade-in 0.5s ease-out;
    }
`;
document.head.appendChild(style);

// Melhoria de acessibilidade - navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Formulário de contato (para implementação futura)
function enviarFormulario(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando EmailJS ou uma API própria
    
    mostrarNotificacao('Mensagem enviada com sucesso!', 'success');
}

// Analytics - Rastrear cliques em links importantes
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        // Aqui você pode adicionar Google Analytics ou outro sistema de tracking
        console.log('Link externo clicado:', this.href);
    });
});

// Detecta quando o usuário está saindo da página
let exitIntentShown = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        // Aqui você pode mostrar um modal ou mensagem
        console.log('Usuário tentando sair da página');
    }
});

// Performance: Preload de imagens críticas
const preloadImages = [
    'img/avatar.jpg',
    'img/portfolio/drip-store.png'
];

preloadImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// Adiciona year atual no footer automaticamente
const yearElement = document.querySelector('footer p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}