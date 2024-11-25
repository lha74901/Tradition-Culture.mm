document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('nav').style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            document.querySelector('nav').style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
});