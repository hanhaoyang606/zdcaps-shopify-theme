class CartDrawer {
  constructor() {
    this.drawer = document.querySelector('.cart-drawer');
    this.openBtns = document.querySelectorAll('.js-open-cart');
    this.closeBtn = document.querySelector('.js-close-cart');
    this.init();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.open();
    }));
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    
    // Ajax cart logic would go here
    document.addEventListener('click', (e) => {
      if (this.drawer.classList.contains('active') && !this.drawer.contains(e.target) && !e.target.classList.contains('js-open-cart')) {
        this.close();
      }
    });
  }

  open() { this.drawer.classList.add('active'); }
  close() { this.drawer.classList.remove('active'); }
}

document.addEventListener('DOMContentLoaded', () => {
  new CartDrawer();
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});