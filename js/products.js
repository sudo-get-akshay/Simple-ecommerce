// Simple Catalog Page Controller
import { products } from './data.js';
import { addToCart } from './app.js';

let activeCategory = 'all';
let searchQuery = '';
let activeSort = 'featured';

export function initCatalog() {
  const productsContainer = document.getElementById('catalog-products-grid');
  if (!productsContainer) return; // Not on the catalog page
  
  // Set category from URL query param if present
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    activeCategory = catParam;
  }
  
  // Setup elements
  const searchInput = document.querySelector('.search-input');
  const sortSelect = document.querySelector('.sort-select');
  const categoryFilters = document.querySelectorAll('.category-filter-btn');
  
  // Bind category filters
  categoryFilters.forEach(btn => {
    const category = btn.getAttribute('data-category');
    if (category === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      categoryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = category;
      renderCatalog();
    });
  });
  
  // Bind search box
  if (searchInput) {
    // Check if there was a URL search param
    const searchParam = urlParams.get('search');
    if (searchParam) {
      searchInput.value = searchParam;
      searchQuery = searchParam.toLowerCase();
    }
    
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderCatalog();
    });
  }
  
  // Bind sort selector
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderCatalog();
    });
  }
  
  // Initialize grid
  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById('catalog-products-grid');
  const countEl = document.querySelector('.results-count');
  if (!grid) return;
  
  // 1. Filter products
  let filtered = [...products];
  
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  
  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery) || 
      p.shortDescription.toLowerCase().includes(searchQuery)
    );
  }
  
  // 2. Sort products
  if (activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  
  // Update count indicator
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} products`;
  }
  
  if (filtered.length === 0) {
    grid.style.display = 'block';
    grid.innerHTML = `
      <div style="text-align: center; padding: 60px 0; color: var(--text-secondary);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">No products found</p>
        <p style="font-size: 0.9rem;">Try broadening your keywords or removing filters.</p>
      </div>
    `;
    return;
  }
  
  // Reset grid display
  grid.style.display = 'grid';
  
  // 3. Construct elements
  grid.innerHTML = filtered.map(product => {
    const badgeHTML = product.tag ? `<span class="product-badge">${product.tag}</span>` : '';
    return `
      <article class="product-card" data-id="${product.id}">
        ${badgeHTML}
        <div class="product-img-wrap">
          <img class="product-thumbnail" src="${product.images[0]}" alt="${product.name}" loading="lazy">
          <div class="product-quick-add" data-id="${product.id}">Quick Add</div>
        </div>
        <div class="product-details">
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <div class="product-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>${product.rating}</span>
            </div>
          </div>
          <a href="product-details.html?id=${product.id}" class="product-name-link">${product.name}</a>
          <div class="product-bottom">
            <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
            <a href="product-details.html?id=${product.id}" class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.75rem;">View</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  // Attach Quick Add click handlers
  const quickAddBtns = grid.querySelectorAll('.product-quick-add');
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(product, 1);
      }
    });
  });
}

// Auto-run if catalog page
document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
});
