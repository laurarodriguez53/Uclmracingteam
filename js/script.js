const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function updateCountdown(target, ids) {
  const diff = target - Date.now();
  if (diff <= 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById(ids.d).textContent = d;
  document.getElementById(ids.h).textContent = h;
  document.getElementById(ids.m).textContent = m;
  document.getElementById(ids.s).textContent = s;
}

const PT = new Date("2026-07-19").getTime();
const ES = new Date("2026-08-01").getTime();

setInterval(() => {
  updateCountdown(PT, {d:"daysPT",h:"hoursPT",m:"minPT",s:"secPT"});
  updateCountdown(ES, {d:"daysES",h:"hoursES",m:"minES",s:"secES"});
}, 1000);