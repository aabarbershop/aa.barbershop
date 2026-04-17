// Inicializar librería de animación AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Menú desplegable para móviles
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Alternar ícono de hamburguesa
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar el menú móvil al hacer click en un enlace
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Efecto de transparencia en el fondo de la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
