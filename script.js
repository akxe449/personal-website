document.addEventListener("pointermove", e => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
});

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".nav-center a")];

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px"});

sections.forEach(s => io.observe(s));
