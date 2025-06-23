/* ───────── Smooth-scroll highlighting (simple) ───────── */
const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach(link => link.addEventListener("click", () => {
  // close mobile menu later if you add one
}));

/* ───────── Reveal-on-scroll ───────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ───────── Year in footer ───────── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ───────── Auto light/dark with manual override ───────── */
const rootEl = document.body;
const button = document.getElementById("theme-toggle");
const stored = localStorage.getItem("theme");
setTheme(stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

function setTheme(mode) {
  rootEl.classList.remove("light", "dark");
  rootEl.classList.add(mode);
  localStorage.setItem("theme", mode);
}
button.addEventListener("click", () =>
  setTheme(rootEl.classList.contains("dark") ? "light" : "dark")
);
