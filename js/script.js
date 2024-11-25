document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');

  // Mobile Menu Toggle
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('nav') && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');  
    }
  });

  // Smooth Scrolling
  const scrollLinks = document.querySelectorAll('.nav-links a');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    });
  });

  // Sticky Header 
  const obs = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('pinned', e.intersectionRatio < 1),
    {threshold: [1]}
  );
  obs.observe(header);

  // Lazy Loading Images
  const images = document.querySelectorAll('[data-src]');

  const imgObs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      const src = img.getAttribute('data-src');

      img.setAttribute('src', src);
      img.removeAttribute('data-src');
      observer.unobserve(entry.target);
    });
  });

  images.forEach(img => imgObs.observe(img));
});
