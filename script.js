
    document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");

      toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    });
// Future animations or interactions can go here
console.log("Hero section loaded!");
// Simple fade-in animation on scroll
const aboutSection = document.querySelector('.about-section');

window.addEventListener('scroll', () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionPos < screenPos) {
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
  }
});

aboutSection.style.opacity = '0';
aboutSection.style.transform = 'translateY(50px)';
aboutSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
