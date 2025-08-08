document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle menu
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu on link click
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      toggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Scroll Animation
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // SEO: Add alt to images without it
  document.querySelectorAll("img:not([alt])").forEach(img => {
    img.setAttribute("alt", "Portfolio image of Sandeep");
  });
});
