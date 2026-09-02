/* KAI EDITIONS — main.js
   אינטראקטיביות בסיסית לעמוד הבית. תהליך ההזמנה (Flow) יתווסף בהמשך. */

// שנה בפוטר
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ — סגירת פריטים אחרים בפתיחת אחד (accordion)
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach((other) => { if (other !== item) other.open = false; });
    }
  });
});

// שמירת הקו שנבחר מכרטיסי הקולקציות (יעבור ל-Flow בהמשך)
document.querySelectorAll('.line-card').forEach((card) => {
  card.addEventListener('click', () => {
    const line = card.getAttribute('data-line');
    try { sessionStorage.setItem('kai.line', line); } catch (e) {}
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
