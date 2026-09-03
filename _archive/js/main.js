/* KAI EDITIONS — main.js
   אינטראקטיביות בסיסית לעמוד הבית. תהליך ההזמנה (Flow) יתווסף בהמשך. */

// שנה בפוטר
document.getElementById('year').textContent = new Date().getFullYear();

// תפריט מובייל
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

// שמירת הקו שנבחר (יעבור ל-Flow בהמשך)
document.querySelectorAll('.line-card').forEach((card) => {
  card.addEventListener('click', () => {
    try { sessionStorage.setItem('kai.line', card.getAttribute('data-line')); } catch (e) {}
  });
});

// גלילה חלקה עם קיזוז ל-header הדביק
const headerH = () => document.querySelector('.site-header')?.offsetHeight || 0;
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - headerH() - 12;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
