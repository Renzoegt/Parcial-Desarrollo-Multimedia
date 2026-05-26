const cards      = document.querySelectorAll('.post-card');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    let visible = 0;
    cards.forEach(c => {
      const show = f === 'all' || c.dataset.category === f;
      c.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    emptyState.style.display = visible === 0 ? 'block' : 'none';
  });
});