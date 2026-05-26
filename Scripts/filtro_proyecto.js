const cards      = document.querySelectorAll('.project-card');
const countEl    = document.getElementById('count-display');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

function updateCount() {
  const n = [...cards].filter(c => !c.classList.contains('hidden')).length;
  countEl.textContent = n + ' proyecto' + (n !== 1 ? 's' : '');
  
  if (emptyState) {
    emptyState.style.display = n === 0 ? 'block' : 'none';
  }
}

// Inicializar contador al cargar
updateCount();

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Alternar clase activa en los botones (CORREGIDO)
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); 
    
    const filter = btn.dataset.filter;
    
    // 2. Filtrar las tarjetas
    cards.forEach(card => {
      // .trim() elimina espacios vacíos al inicio/final; .split(/\s+/) divide por uno o más espacios
      const categoryStr = card.dataset.category ? card.dataset.category.trim() : '';
      const categories = categoryStr ? categoryStr.split(/\s+/) : [];
      
      // Condición de visibilidad
      const shouldHide = filter !== 'all' && !categories.includes(filter);
      
      card.classList.toggle('hidden', shouldHide);
    });
    
    // 3. Actualizar el contador
    updateCount();
  });
});