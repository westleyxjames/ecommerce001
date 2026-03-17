<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deal Heaven - Premium Fashion & Lifestyle</title>
  <meta name="description" content="Discover premium fashion and lifestyle products at Deal Heaven. Shop the latest trends in dresses, tops, bottoms, and accessories.">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <div class="header-top">
      <div class="container">
        Free shipping on orders over $100 | 62 Charles Street | Boston, MA 02114 | (617) 248-9910
      </div>
    </div>
    
    <div class="header-main">
      <div class="header-container">
        <a href="index.html" class="logo">DEAL HEAVEN</a>
        
        <nav>
          <ul class="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <a href="cart.html" class="cart-button">
            <svg class="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="cart-count">0</span>
          </a>
          
          <button class="mobile-menu-button" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80" alt="Fashion Collection" class="hero-image">
    <div class="hero-content">
      <h1>New Season Collection</h1>
      <p>Discover the latest trends in fashion and lifestyle. Curated pieces for the modern woman.</p>
      <a href="shop.html" class="btn btn-accent">Shop Now</a>
    </div>
  </section>

  <!-- Features -->
  <section class="section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-item">
          <svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
          </svg>
          <h3>Free Shipping</h3>
          <p>Free standard shipping on all orders over $100</p>
        </div>
        
        <div class="feature-item">
          <svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <h3>Secure Payment</h3>
          <p>100% secure payment with SSL encryption</p>
        </div>
        
        <div class="feature-item">
          <svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <h3>Easy Returns</h3>
          <p>30-day return policy for your peace of mind</p>
        </div>
        
        <div class="feature-item">
          <svg class="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <h3>24/7 Support</h3>
          <p>Dedicated customer support team ready to help</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Shop by Category -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Shop by Category</h2>
        <p>Explore our curated collections designed for every occasion</p>
      </div>
      
      <div class="category-grid">
        <a href="shop.html?category=Dresses" class="category-card">
          <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80" alt="Dresses">
          <div class="category-overlay">
            <h3>Dresses</h3>
            <p>Elegant styles for every occasion</p>
          </div>
        </a>
        
        <a href="shop.html?category=Tops" class="category-card">
          <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80" alt="Tops">
          <div class="category-overlay">
            <h3>Tops</h3>
            <p>From casual to sophisticated</p>
          </div>
        </a>
        
        <a href="shop.html?category=Jewelry" class="category-card">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" alt="Jewelry">
          <div class="category-overlay">
            <h3>Jewelry</h3>
            <p>Timeless pieces to elevate your look</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="section" style="background: var(--light-bg);">
    <div class="container">
      <div class="section-header">
        <h2>Featured Products</h2>
        <p>Hand-picked favorites from our latest collection</p>
      </div>
      
      <div class="products-grid" id="featuredProducts">
        <!-- Products will be loaded here by JavaScript -->
      </div>
      
      <div class="text-center" style="margin-top: 40px;">
        <a href="shop.html" class="btn btn-secondary">View All Products</a>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Join Our Newsletter</h2>
        <p>Subscribe to get special offers, style tips, and exclusive updates</p>
      </div>
      
      <form onsubmit="handleNewsletter(event)" style="max-width: 500px; margin: 0 auto;">
        <div style="display: flex; gap: 12px;">
          <input 
            type="email" 
            id="newsletterEmail"
            placeholder="Enter your email" 
            class="form-control" 
            required
            style="flex: 1;"
          >
          <button type="submit" class="btn btn-accent">Subscribe</button>
        </div>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Deal Heaven</h3>
          <p>Your destination for premium fashion and lifestyle products. We curate the finest pieces to help you express your unique style.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Shop</h3>
          <ul class="footer-links">
            <li><a href="shop.html?category=Dresses">Dresses</a></li>
            <li><a href="shop.html?category=Tops">Tops</a></li>
            <li><a href="shop.html?category=Bottoms">Bottoms</a></li>
            <li><a href="shop.html?category=Jackets">Jackets</a></li>
            <li><a href="shop.html?category=Jewelry">Jewelry</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Information</h3>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="shipping.html">Shipping Policy</a></li>
            <li><a href="returns.html">Returns & Exchanges</a></li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Legal</h3>
          <ul class="footer-links">
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="order-tracking.html">Track Order</a></li>
          </ul>
          <div style="margin-top: 20px; color: var(--muted); font-size: 14px;">
            <p><strong>Visit Us:</strong></p>
            <p>62 Charles Street<br>Boston, MA 02114</p>
            <p><strong>Call:</strong> (617) 248-9910</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Deal Heaven. All rights reserved.</p>
        <div class="payment-icons">
          <span style="color: var(--muted); margin-right: 12px;">We accept:</span>
          <span style="color: var(--muted);">Visa • Mastercard • American Express • PayPal • Cash on Delivery</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/products.js"></script>
  <script src="js/cart.js"></script>
  <script src="js/app.js"></script>
  
  <script>
    // Load featured products
    function loadFeaturedProducts() {
      const container = document.getElementById('featuredProducts');
      if (!container) return;
      
      // Get first 8 products
      const featured = products.slice(0, 8);
      
      container.innerHTML = featured.map((product, index) => `
        <div class="product-card" style="animation: fadeIn 0.5s ${index * 0.05}s both;">
          <a href="product.html?id=${product.id}">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
          </a>
          <div class="product-info">
            <a href="product.html?id=${product.id}">
              <h3>${product.name}</h3>
            </a>
            <p class="product-price">${formatCurrency(product.price)}</p>
            ${renderColorDots(product.colors)}
          </div>
          <button 
            class="add-to-bag" 
            onclick="cartManager.addToCart(products.find(p => p.id === '${product.id}'))"
            ${!product.inStock ? 'disabled' : ''}
          >
            ${product.inStock ? 'Add to bag' : 'Out of stock'}
          </button>
        </div>
      `).join('');
    }

    // Handle newsletter signup
    function handleNewsletter(event) {
      event.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (subscribeNewsletter(email)) {
        document.getElementById('newsletterEmail').value = '';
      }
    }

    // Load products on page load
    document.addEventListener('DOMContentLoaded', loadFeaturedProducts);
  </script>

  <style>
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</body>
</html>
