// Simple Product Details Controller
import { products } from './data.js?v=2';
import { addToCart } from './app.js?v=2';

export function initProductDetails() {
  const container = document.getElementById('product-details-container');
  if (!container) return; // Not on the details page
  
  // Get product ID from URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  const product = products.find(p => p.id === productId);
  
  // If product not found, render a friendly error message and redirect link
  if (!product) {
    container.innerHTML = `
      <div style="text-align: center; padding: 100px 0; max-width: 500px; margin: 0 auto;">
        <h1 style="font-family: var(--font-title); font-size: 2rem; margin-bottom: 16px;">Product Not Found</h1>
        <p style="color: var(--text-secondary); margin-bottom: 32px;">The product you are looking for does not exist or has been removed from our catalog.</p>
        <a href="products.html" class="btn btn-primary">Back to Catalog</a>
      </div>
    `;
    return;
  }
  
  // Populate Title, Metadata and SEO Headings
  document.title = `${product.name} — Simple`;
  
  // Render details layout
  renderDetails(product, container);
  setupGalleryInteractions();
  setupQuantitySelector(product);
  setupTabInteractions();
}

function renderDetails(product, container) {
  // Construct reviews markup
  const reviewsHTML = product.reviews.length > 0 
    ? product.reviews.map(r => `
        <div class="review-item">
          <div class="review-meta">
            <span class="review-user">${r.user}</span>
            <span class="review-date">${r.date}</span>
          </div>
          <div style="display: flex; gap: 4px; color: var(--accent-light); margin-bottom: 8px;">
            ${Array.from({ length: 5 }, (_, i) => `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="${i < r.rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            `).join('')}
          </div>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">${r.text}</p>
        </div>
      `).join('')
    : `<p style="color: var(--text-secondary); padding: 20px 0;">No reviews yet. Be the first to leave one!</p>`;
    
  // Construct specs markup
  const specsHTML = Object.entries(product.specs).map(([label, val]) => `
    <tr>
      <td class="specs-label">${label}</td>
      <td>${val}</td>
    </tr>
  `).join('');

  // Primary page structure HTML inject
  container.innerHTML = `
    <div class="product-details-grid">
      <!-- Media Left Column -->
      <div class="details-gallery">
        <div class="main-image-wrap">
          <img id="main-product-image" class="main-image" src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="thumbnail-row">
          ${product.images.map((img, index) => `
            <button class="thumbnail-btn ${index === 0 ? 'active' : ''}" data-src="${img}" aria-label="View product image ${index + 1}">
              <img class="thumbnail-img" src="${img}" alt="${product.name} angle ${index + 1}" loading="lazy">
            </button>
          `).join('')}
        </div>
      </div>
      
      <!-- Content Right Column -->
      <div class="details-info">
        <span class="details-tag">${product.tag || product.category}</span>
        <h1 class="details-title">${product.name}</h1>
        
        <div class="details-rating-row">
          <div style="display: flex; gap: 4px; color: var(--accent-light);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span style="font-weight: 600; font-size: 0.95rem;">${product.rating}</span>
          </div>
          <span class="details-reviews-count">(${product.reviewsCount} verified reviews)</span>
        </div>
        
        <div class="details-price">₹${product.price.toLocaleString('en-IN')}</div>
        
        <p class="details-desc">${product.shortDescription}</p>
        
        <!-- Cart Addition Interface -->
        <div class="details-purchase">
          <div class="quantity-selector">
            <button class="qty-btn" id="qty-dec" aria-label="Decrease quantity">−</button>
            <input type="text" class="qty-input" id="qty-val" value="1" readonly>
            <button class="qty-btn" id="qty-inc" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn btn-primary" id="add-to-cart-action">Add to Cart</button>
        </div>
        
        <!-- Tabbed Information Panels -->
        <div style="width: 100%;">
          <div class="tabs-nav" role="tablist">
            <button class="tab-trigger active" data-tab="desc" role="tab" aria-selected="true">Overview</button>
            <button class="tab-trigger" data-tab="specs" role="tab" aria-selected="false">Specifications</button>
            <button class="tab-trigger" data-tab="reviews" role="tab" aria-selected="false">Reviews (${product.reviews.length})</button>
          </div>
          
          <div class="tab-content">
            <div class="tab-pane active" id="tab-desc" role="tabpanel">
              <p style="color: var(--text-secondary); white-space: pre-line;">${product.description}</p>
            </div>
            
            <div class="tab-pane" id="tab-specs" role="tabpanel">
              <table class="specs-table">
                <tbody>
                  ${specsHTML}
                </tbody>
              </table>
            </div>
            
            <div class="tab-pane" id="tab-reviews" role="tabpanel">
              <div class="reviews-list">
                ${reviewsHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupGalleryInteractions() {
  const mainImage = document.getElementById('main-product-image');
  const thumbs = document.querySelectorAll('.thumbnail-btn');
  
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const src = btn.getAttribute('data-src');
      
      // Smooth fade transition on src change
      mainImage.style.opacity = '0.3';
      setTimeout(() => {
        mainImage.src = src;
        mainImage.style.opacity = '1';
      }, 150);
    });
  });
}

function setupQuantitySelector(product) {
  const btnDec = document.getElementById('qty-dec');
  const btnInc = document.getElementById('qty-inc');
  const qtyInput = document.getElementById('qty-val');
  const addBtn = document.getElementById('add-to-cart-action');
  
  if (!qtyInput || !addBtn) return;
  
  btnDec.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) {
      qtyInput.value = val - 1;
    }
  });
  
  btnInc.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val < 99) {
      qtyInput.value = val + 1;
    }
  });
  
  addBtn.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(product, qty);
  });
}

function setupTabInteractions() {
  const triggers = document.querySelectorAll('.tab-trigger');
  const panes = document.querySelectorAll('.tab-pane');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const tabId = trigger.getAttribute('data-tab');
      
      // Update triggers states
      triggers.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      trigger.classList.add('active');
      trigger.setAttribute('aria-selected', 'true');
      
      // Toggle panes
      panes.forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// Auto-run if details container exists
document.addEventListener('DOMContentLoaded', () => {
  initProductDetails();
});
