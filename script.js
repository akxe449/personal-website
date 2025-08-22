// Dark/Light Mode Toggle
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// Smooth active link switching
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  this.reset();
});
