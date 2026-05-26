const cards      = document.querySelectorAll('.post-card');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Gestionar clases activas en los botones
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const f = btn.dataset.filter;
    let visible = 0;
    
    // 2. Filtrar las tarjetas de los posts
    cards.forEach(c => {
      // Convertimos las categorías del post en un array (ej: "networking python" -> ['networking', 'python'])
      const categoryStr = c.dataset.category ? c.dataset.category.trim() : '';
      const categories = categoryStr ? categoryStr.split(/\s+/) : [];
      
      // El post se muestra si el filtro es 'all' O si sus categorías incluyen el filtro activo
      const show = f === 'all' || categories.includes(f);
      
      c.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    
    // 3. Gestionar el estado vacío
    if (emptyState) {
      emptyState.style.display = visible === 0 ? 'block' : 'none';
    }
  });
});