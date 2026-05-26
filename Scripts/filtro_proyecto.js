const cards      = document.querySelectorAll('.project-card');
const countEl    = document.getElementById('count-display');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

function updateCount() {
  const n = [...cards].filter(c => !c.classList.contains('hidden')).length;
  countEl.textContent = n + ' proyecto' + (n !== 1 ? 's' : '');
  emptyState.style.display = n === 0 ? 'block' : 'none';
}

updateCount();

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f));
    updateCount();
  });
});