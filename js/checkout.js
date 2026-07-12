// Simple Checkout Page Controller
import { getCart, clearCart, initClerk, showToast } from './app.js';

let clerkInstance = null;

export async function initCheckoutPage() {
  const checkoutContainer = document.getElementById('checkout-page-container');
  if (!checkoutContainer) return; // Not on the checkout page
  
  // 1. Verify Cart holds items
  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  
  renderCheckoutSummary(cart);
  
  // 2. Load and verify Clerk authentication
  try {
    clerkInstance = await initClerk();
    if (clerkInstance.user) {
      showCheckoutForm();
    } else {
      showAuthOverlay();
    }
  } catch (err) {
    console.error("Clerk initialization failed:", err);
    // Graceful fallback for local development or connection failures
    showMockAuthOverlay();
  }
  
  // Bind order form submission
  const checkoutForm = document.getElementById('billing-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleOrderSubmit);
  }
}

function renderCheckoutSummary(cart) {
  const summaryList = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const deliveryEl = document.getElementById('checkout-delivery');
  const totalEl = document.getElementById('checkout-total');
  
  if (!summaryList) return;
  
  // List items
  summaryList.innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <span class="checkout-summary-name">${item.name} <span style="font-size: 0.8rem; color: var(--text-secondary);">x${item.qty}</span></span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');
  
  // Calculate pricing
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = subtotal > 150 ? 0 : 15;
  const total = subtotal + delivery;
  
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function showCheckoutForm() {
  document.getElementById('auth-guard-container').style.display = 'none';
  document.getElementById('checkout-form-container').style.display = 'grid';
  
  // Auto-fill user email/name from Clerk if available
  if (clerkInstance && clerkInstance.user) {
    const emailField = document.getElementById('checkout-email');
    const nameField = document.getElementById('checkout-name');
    
    if (emailField) emailField.value = clerkInstance.user.primaryEmailAddress?.emailAddress || '';
    if (nameField) nameField.value = clerkInstance.user.fullName || '';
  }
}

function showAuthOverlay() {
  document.getElementById('checkout-form-container').style.display = 'none';
  document.getElementById('auth-guard-container').style.display = 'flex';
  
  const mountNode = document.getElementById('clerk-signin-mount');
  if (mountNode && clerkInstance) {
    mountNode.innerHTML = ''; // Clear fallback message
    clerkInstance.mountSignIn(mountNode, {
      afterSignInUrl: window.location.href,
      afterSignUpUrl: window.location.href
    });
  }
}

function showMockAuthOverlay() {
  document.getElementById('checkout-form-container').style.display = 'none';
  document.getElementById('auth-guard-container').style.display = 'flex';
  
  const mountNode = document.getElementById('clerk-signin-mount');
  if (mountNode) {
    mountNode.innerHTML = `
      <div style="background-color: var(--bg-tertiary); border: 1px solid var(--border-color); padding: 32px; border-radius: var(--radius-md); max-width: 400px; width: 100%; box-shadow: var(--card-shadow);">
        <p style="font-weight: 600; margin-bottom: 16px;">Offline Demo Sign-In Fallback</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 24px;">Clerk API was unreachable. Press bypass to authenticate using simulated credentials for testing.</p>
        <button id="mock-login-bypass" class="btn btn-primary" style="width: 100%;">Bypass Authentication</button>
      </div>
    `;
    
    document.getElementById('mock-login-bypass').addEventListener('click', () => {
      // Mock log in
      showToast("Signed in as demo user.");
      showCheckoutForm();
      // Add fake billing info
      const emailField = document.getElementById('checkout-email');
      const nameField = document.getElementById('checkout-name');
      if (emailField) emailField.value = 'demo.user@example.com';
      if (nameField) nameField.value = 'Demo User';
    });
  }
}

function handleOrderSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const email = document.getElementById('checkout-email').value;
  const name = document.getElementById('checkout-name').value;
  const address = document.getElementById('checkout-address').value;
  const city = document.getElementById('checkout-city').value;
  const zip = document.getElementById('checkout-zip').value;
  
  if (!email || !name || !address || !city || !zip) {
    showToast("Please fill in all billing details.", "error");
    return;
  }
  
  // Calculate pricing
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = subtotal > 150 ? 0 : 15;
  const total = subtotal + delivery;
  
  // 1. Generate Order ID Reference
  const orderRef = 'SMP-' + Math.floor(100000 + Math.random() * 900000);
  
  // 2. Cache final summary in sessionStorage for the success confirmation page
  const receipt = {
    orderRef: orderRef,
    email: email,
    name: name,
    total: total,
    itemCount: cart.reduce((sum, item) => sum + item.qty, 0)
  };
  sessionStorage.setItem('simple_last_receipt', JSON.stringify(receipt));
  
  // 3. Clear shopping cart state
  clearCart();
  
  // 4. Redirect to confirmation screen
  window.location.href = 'order-success.html';
}

// Auto-run if page is ready
document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
});
