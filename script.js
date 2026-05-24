// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });
});

// Active nav link on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...navLinks]
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0];
  for (const s of sections) {
    if (s.offsetTop <= y) current = s;
  }
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current?.id);
  });
};
window.addEventListener('scroll', setActive, { passive: true });

// Testimonials prev/next dots (visual only)
const tDots = document.querySelectorAll('.testimonials .dot');
document.querySelector('.t-prev')?.addEventListener('click', () => cycle(-1));
document.querySelector('.t-next')?.addEventListener('click', () => cycle(1));
function cycle(dir){
  const active = [...tDots].findIndex(d => d.classList.contains('active'));
  const next = (active + dir + tDots.length) % tDots.length;
  tDots.forEach(d => d.classList.remove('active'));
  tDots[next]?.classList.add('active');
}
