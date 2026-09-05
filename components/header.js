class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="container nav">
          <div class="brand">
            <!-- Logo -->
            <img src="images/logo.png" alt="Highridge Logo">
            <div class="brand-text">
              <strong>Highridge</strong>
              <span>Sports Academy</span>
            </div>
          </div>
          <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="gallery.html">Sports Gallery</a>
            <a href="coaches.html">Coaches</a>
            <a href="facilities.html">Facilities</a>
            <a href="contact.html">Contact</a>
          </nav>
          <div style="display: flex; gap: 16px; align-items: center;">
            <a class="btn btn-primary" href="https://www.gofundme.com/en-gb" target="_blank" rel="noopener noreferrer">Support Us</a>
            <button class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>
          </div>
        </div>
      </header>
    `;

    // Highlight the active link based on the current URL
    const currentPath = window.location.pathname;
    // Default to index.html if at root
    const page = currentPath.split('/').pop() || 'index.html'; 

    const links = this.querySelectorAll('.nav-links a');
    links.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (page === linkPage) {
        link.style.color = 'var(--color-secondary)';
      }
    });

    // Mobile menu toggle logic
    const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
    const navLinksContainer = this.querySelector('.nav-links');

    if (mobileMenuBtn && navLinksContainer) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
      });
    }
  }
}
customElements.define('site-header', SiteHeader);