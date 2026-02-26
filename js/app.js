// Main App JavaScript

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-menu');
  const button = document.querySelector('.mobile-menu-button');
  
  if (nav) {
    nav.classList.toggle('show');
    button.classList.toggle('active');
  }
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}

// Format currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Render stars
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += `<svg class="star filled" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else {
      html += `<svg class="star" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    }
  }
  return html;
}

// Render color dots
function renderColorDots(colors, limit = 4) {
  if (!colors || colors.length === 0) return '';
  
  let html = '<div class="color-variants">';
  colors.slice(0, limit).forEach(color => {
    html += `<div class="color-dot" style="background-color: ${color}" title="${color}"></div>`;
  });
  
  if (colors.length > limit) {
    html += `<span class="text-muted" style="font-size: 12px;">+${colors.length - limit}</span>`;
  }
  html += '</div>';
  
  return html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Update cart count
  if (typeof cartManager !== 'undefined') {
    cartManager.updateCartUI();
  }
  
  // Add event listeners
  const mobileMenuBtn = document.querySelector('.mobile-menu-button');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
});

// Search functionality (basic)
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      // Implement search logic here
    });
  }
}

// Smooth scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation
function validatePhone(phone) {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(phone);
}

// Generate order number
function generateOrderNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `DH${timestamp}${random}`;
}

// Save order
function saveOrder(orderData) {
  const orders = JSON.parse(localStorage.getItem('dealheaven-orders') || '[]');
  orders.push(orderData);
  localStorage.setItem('dealheaven-orders', JSON.stringify(orders));
}

// Get order by number
function getOrderByNumber(orderNumber) {
  const orders = JSON.parse(localStorage.getItem('dealheaven-orders') || '[]');
  return orders.find(order => order.orderNumber === orderNumber);
}

// Newsletter signup
function subscribeNewsletter(email) {
  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  
  // Save to localStorage (in real app, send to server)
  const subscribers = JSON.parse(localStorage.getItem('dealheaven-subscribers') || '[]');
  if (subscribers.includes(email)) {
    alert('You are already subscribed!');
    return false;
  }
  
  subscribers.push(email);
  localStorage.setItem('dealheaven-subscribers', JSON.stringify(subscribers));
  alert('Thank you for subscribing!');
  return true;
}
