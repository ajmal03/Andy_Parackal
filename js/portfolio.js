  // Portfolio Filtering
  document.querySelectorAll('.portfolio-filters li').forEach(filter => {
    filter.addEventListener('click', function () {
      // Activate the selected filter
      document.querySelector('.filter-active').classList.remove('filter-active');
      this.classList.add('filter-active');

      // Filter portfolio items
      const filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.display = (filterValue === '*' || item.classList.contains(filterValue.substring(1))) ? 'block' : 'none';
      });
    });
  });

  // Portfolio View Toggle
  document.querySelectorAll('.view-toggle').forEach(button => {
    button.addEventListener('click', function () {
      const view = this.getAttribute('data-view');
      const container = document.querySelector('.portfolio-container');
      container.className = `row portfolio-container ${view}-view`;
    });
  });