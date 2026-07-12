// Simple E-commerce Application Orchestrator
import { CONFIG } from './config.js?v=3';

// ==========================================================================
// Theme Management
// ==========================================================================
export function initTheme() {
  const savedTheme = localStorage.getItem('simple_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Wire up theme toggles
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(toggle => {
    updateThemeIcon(toggle, savedTheme);
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('simple_theme', newTheme);
      
      // Update all icons
      document.querySelectorAll('.theme-toggle').forEach(t => updateThemeIcon(t, newTheme));
    });
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'dark') {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// ==========================================================================
// Cart Operations (localStorage Synchronized)
// ==========================================================================
export function getCart() {
  try {
    return JSON.parse(localStorage.getItem('simple_cart')) || [];
  } catch (e) {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem('simple_cart', JSON.stringify(cart));
  updateCartBadges();
}

export function addToCart(product, qty = 1) {
  let cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      qty: qty
    });
  }
  
  saveCart(cart);
  showToast(`${product.name} added to cart.`);
}

export function updateCartQty(productId, qty) {
  let cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].qty = Math.max(1, parseInt(qty) || 1);
    saveCart(cart);
  }
}

export function removeFromCart(productId) {
  let cart = getCart();
  const filteredCart = cart.filter(item => item.id !== productId);
  saveCart(filteredCart);
  showToast("Item removed from cart.");
}

export function clearCart() {
  localStorage.removeItem('simple_cart');
  updateCartBadges();
}

export function updateCartBadges() {
  const cart = getCart();
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = totalItems > 0 ? totalItems : '';
  });
}

// Toast Notifications
export function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    });
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  Object.assign(toast.style, {
    backgroundColor: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    padding: '16px 24px',
    borderRadius: 'var(--radius-sm)',
    boxShadow: 'var(--card-shadow)',
    fontFamily: 'var(--font-title)',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transform: 'translateY(50px)',
    opacity: '0',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease'
  });
  
  const circle = type === 'success' ? '#4CAF50' : '#CF6679';
  toast.innerHTML = `
    <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${circle}"></span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Trigger entry animation
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 10);
  
  // Exit animation and remove
  setTimeout(() => {
    toast.style.transform = 'translateY(-20px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// ==========================================================================
// Clerk Google Authentication Integration
// ==========================================================================
let clerkInstance = null;

export async function initClerk() {
  if (window.Clerk) {
    clerkInstance = window.Clerk;
    if (!clerkInstance.loaded) {
      await clerkInstance.load();
    }
    setupClerkProfile();
    return clerkInstance;
  }
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.clerk.io/clerk.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-clerk-publishable-key', CONFIG.CLERK_PUBLISHABLE_KEY);
    
    script.onload = async () => {
      clerkInstance = window.Clerk;
      try {
        await clerkInstance.load();
        setupClerkProfile();
        resolve(clerkInstance);
      } catch (err) {
        reject(err);
      }
    };
    
    script.onerror = () => reject(new Error("Clerk SDK failed to load."));
    document.head.appendChild(script);
  });
}

function setupClerkProfile() {
  const profileContainer = document.getElementById('user-button-container');
  if (!profileContainer) return;
  
  if (clerkInstance.user) {
    // User is logged in, mount profile user button
    profileContainer.innerHTML = ''; // Clear fallback buttons
    clerkInstance.mountUserButton(profileContainer, {
      afterSignOutUrl: window.location.origin + window.location.pathname
    });
  } else {
    // User is logged out, render minimalist sign-in link
    profileContainer.innerHTML = `
      <a href="checkout.html" class="nav-link" style="font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; border: 1px solid var(--border-color); padding: 6px 16px; border-radius: var(--radius-sm)">
        Login
      </a>
    `;
  }
}

export function getClerkUser() {
  return clerkInstance ? clerkInstance.user : null;
}

// ==========================================================================
// Layout / Header Scripts
// ==========================================================================
export function initHeader() {
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });
  }
  
  // Mobile menu setup
  const menuBtn = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  
  if (menuBtn && overlay && mobileMenu) {
    const toggleMenu = (show) => {
      mobileMenu.classList.toggle('active', show);
      overlay.classList.toggle('active', show);
      document.body.style.overflow = show ? 'hidden' : '';
    };
    
    menuBtn.addEventListener('click', () => toggleMenu(true));
    overlay.addEventListener('click', () => toggleMenu(false));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  }
}

// Render dynamic disclaimer
export function initDisclaimer() {
  const main = document.body;
  if (!document.querySelector('.disclaimer-banner')) {
    const banner = document.createElement('div');
    banner.className = 'disclaimer-banner';
    banner.innerHTML = `
      <div class="disclaimer-text">
        <strong>Educational UI Clone:</strong> This website is a demonstration build for training purposes under the TAP Academy Frontend Assignment. It is not affiliated with any brand. All transactions are simulated.
      </div>
    `;
    main.insertBefore(banner, main.firstChild);
  }
}

// Setup common page features
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  initDisclaimer();
  updateCartBadges();
  
  // Safely initialize clerk (fails gracefully if off-line)
  initClerk().catch(err => {
    console.warn("Clerk failed to load. Authentication functions will work in demo/mock mode.", err);
  });
});
