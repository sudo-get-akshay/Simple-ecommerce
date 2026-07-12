// Simple Cart Page Controller
import { getCart, updateCartQty, removeFromCart } from './app.js?v=3';

export function initCartPage() {
  const cartGrid = document.getElementById('cart-items-panel');
  if (!cartGrid) return; // Not on the cart page
  
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items-panel');
  const summaryContainer = document.getElementById('cart-summary-panel');
  
  if (!container || !summaryContainer) return;
  
  const cart = getCart();
  
  // Empty State Check
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg class="cart-empty-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h2 style="font-family: var(--font-title); font-size: 1.5rem; font-weight: 500;">Your cart is empty</h2>
        <p style="color: var(--text-secondary); max-width: 300px;">Looks like you haven't added any products to your cart yet.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 10px;">Start Shopping</a>
      </div>
    `;
    summaryContainer.innerHTML = `
      <div class="cart-summary-card" style="opacity: 0.6; pointer-events: none;">
        <h2 class="summary-title">Summary</h2>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>₹0.00</span>
        </div>
        <div class="summary-row">
          <span>Delivery</span>
          <span>₹0.00</span>
        </div>
        <div class="summary-row summary-row--total">
          <span>Total</span>
          <span>₹0.00</span>
        </div>
        <button class="btn btn-primary" disabled>Checkout</button>
      </div>
    `;
    return;
  }
  
  // 1. Render items list
  let itemsHTML = `
    <div class="cart-table-header" role="row">
      <span role="columnheader">Product</span>
      <span role="columnheader">Price</span>
      <span role="columnheader">Quantity</span>
      <span role="columnheader">Total</span>
    </div>
  `;
  
  itemsHTML += cart.map(item => `
    <div class="cart-row" data-id="${item.id}" role="row">
      <div class="cart-item-info">
        <div class="cart-item-img-wrap">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <span class="cart-item-name">${item.name}</span>
          <button class="cart-item-remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">Remove</button>
        </div>
      </div>
      
      <div class="cart-item-price" data-label="Price">₹${item.price.toLocaleString('en-IN')}</div>
      
      <div class="cart-item-quantity" data-label="Quantity">
        <div class="quantity-selector">
          <button class="qty-btn dec-qty" data-id="${item.id}">−</button>
          <input type="text" class="qty-input" value="${item.qty}" readonly aria-label="Quantity for ${item.name}">
          <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
        </div>
      </div>
      
      <div class="cart-item-subtotal" data-label="Total">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
    </div>
  `).join('');
  
  container.innerHTML = itemsHTML;
  
  // 2. Calculate and render pricing totals summary
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal > 5000 ? 0 : 150; // Free delivery for orders over ₹5,000
  const grandTotal = subtotal + deliveryFee;
  
  summaryContainer.innerHTML = `
    <div class="cart-summary-card">
      <h2 class="summary-title">Summary</h2>
      <div class="summary-row">
        <span>Subtotal</span>
        <span>₹${subtotal.toLocaleString('en-IN')}</span>
      </div>
      <div class="summary-row">
        <span>Delivery</span>
        <span>${deliveryFee === 0 ? 'Free' : `₹${deliveryFee.toLocaleString('en-IN')}`}</span>
      </div>
      ${deliveryFee > 0 ? `
        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: -12px; margin-bottom: 12px; text-align: right;">
          Free delivery on orders above ₹5,000.00
        </div>
      ` : ''}
      <div class="summary-row summary-row--total">
        <span>Total</span>
        <span>₹${grandTotal.toLocaleString('en-IN')}</span>
      </div>
      <a href="checkout.html" class="btn btn-primary">Proceed to Checkout</a>
    </div>
  `;
  
  // Bind actions
  bindCartEvents();
}

function bindCartEvents() {
  const container = document.getElementById('cart-items-panel');
  if (!container) return;
  
  // Quantity buttons trigger
  container.querySelectorAll('.dec-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cart = getCart();
      const item = cart.find(item => item.id === id);
      if (item && item.qty > 1) {
        updateCartQty(id, item.qty - 1);
        renderCart();
      }
    });
  });
  
  container.querySelectorAll('.inc-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cart = getCart();
      const item = cart.find(item => item.id === id);
      if (item && item.qty < 99) {
        updateCartQty(id, item.qty + 1);
        renderCart();
      }
    });
  });
  
  // Remove button trigger
  container.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeFromCart(id);
      renderCart();
    });
  });
}

// Auto-run if cart items panel exists
document.addEventListener('DOMContentLoaded', () => {
  initCartPage();
});
