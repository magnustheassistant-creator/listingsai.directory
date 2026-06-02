/* ListingsAI — Shared UI components
   - Injects: header, side panel, background mesh
   - Behavior: menu toggle, search filter, scroll-spy, fade-in
   - Add to any page with: <script src="assets/js/components.js" defer></script>
   Place inside <body> at the end so it can find the body element. */
(function () {
  'use strict';

  // Logo SVG (shared)
  const LOGO_SVG = `<svg class="logo-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="lg-${Date.now()}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#a78bfa"/><stop offset="50%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#06b6d4"/>
      </linearGradient>
      <linearGradient id="lg2-${Date.now()}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c4b5fd"/><stop offset="100%" stop-color="#67e8f9"/>
      </linearGradient>
      <filter id="glow-${Date.now()}"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <polygon points="50,12 82,30 82,70 50,88 18,70 18,30" fill="none" stroke="url(#lg-${Date.now()})" stroke-width="3" stroke-linejoin="round" filter="url(#glow-${Date.now()})"/>
    <polygon points="50,28 70,40 70,60 50,72 30,60 30,40" fill="url(#lg2-${Date.now()})" opacity="0.9"/>
    <circle cx="50" cy="50" r="4" fill="#fff"/>
  </svg>`;

  // Build header
  const HEADER = `
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo" aria-label="ListingsAI home">
        ${LOGO_SVG}
        <span class="logo-text">Listings<span class="accent">AI</span></span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="category/make-money.html" class="nav-link" data-nav="make-money">Make Money</a>
        <a href="category/save-money.html" class="nav-link" data-nav="save-money">Save Money</a>
        <a href="category/get-paid-to-start.html" class="nav-link" data-nav="get-paid-to-start">Get Paid to Start</a>
        <a href="guides/how-to-make-first-100-online-with-ai.html" class="nav-link" data-nav="guides">Guides</a>
      </nav>
      <div class="header-actions">
        <a href="#get-the-list" class="btn btn-primary btn-sm nav-cta">Get the Free List →</a>
        <button class="menu-toggle" type="button" aria-label="Open menu" data-menu-toggle>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>`;

  // Build side panel
  const SIDE_PANEL = `
  <aside class="side-panel" data-side-panel aria-label="Site navigation">
    <div class="side-panel-header">
      <a href="index.html" class="logo">
        ${LOGO_SVG}
        <span class="logo-text">Listings<span class="accent">AI</span></span>
      </a>
      <button class="side-panel-close" type="button" aria-label="Close menu" data-menu-close>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="side-panel-search">
      <input type="search" placeholder="Search articles…" data-side-panel-search aria-label="Search articles">
    </div>
    <nav class="side-panel-body" data-side-panel-body>
      <div class="side-panel-section">
        <div class="side-panel-section-title">Main</div>
        <a href="index.html" class="side-panel-link" data-side="index">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12L12 4l9 8"/><path d="M5 10v10h14V10"/></svg>
          Home
        </a>
        <a href="about.html" class="side-panel-link" data-side="about">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
          About
        </a>
        <a href="contact.html" class="side-panel-link" data-side="contact">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M4 6l8 7 8-7"/></svg>
          Contact
        </a>
        <a href="affiliate-disclosure.html" class="side-panel-link" data-side="affiliate-disclosure">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>
          Affiliate Disclosure
        </a>
      </div>

      <div class="side-panel-section">
        <div class="side-panel-section-title">Categories</div>
        <a href="category/make-money.html" class="side-panel-link" data-side="make-money">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9c0-1 1-2 3-2s3 1 3 2-1 2-3 2-3 1-3 2 1 2 3 2 3-1 3-2M12 6v2M12 16v2"/></svg>
          Make Money
          <span class="side-panel-link-badge affiliate">3</span>
        </a>
        <a href="category/save-money.html" class="side-panel-link" data-side="save-money">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7H5l3 12h8zM5 7l1-3h12l1 3"/><circle cx="12" cy="13" r="1.5"/></svg>
          Save Money
          <span class="side-panel-link-badge affiliate">1</span>
        </a>
        <a href="category/get-paid-to-start.html" class="side-panel-link" data-side="get-paid-to-start">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>
          Get Paid to Start
        </a>
      </div>

      <div class="side-panel-section">
        <div class="side-panel-section-title">Reviews</div>
        <a href="articles/clickfunnels-review.html" class="side-panel-link" data-side="clickfunnels-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2"/></svg>
          ClickFunnels
          <span class="side-panel-link-badge affiliate">AFF</span>
        </a>
        <a href="articles/im-all-in-review.html" class="side-panel-link" data-side="im-all-in-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2"/></svg>
          I'm All In
          <span class="side-panel-link-badge affiliate">AFF</span>
        </a>
        <a href="articles/systeme-review.html" class="side-panel-link" data-side="systeme-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2"/></svg>
          Systeme.io
          <span class="side-panel-link-badge affiliate">AFF</span>
        </a>
        <a href="articles/dealify-review.html" class="side-panel-link" data-side="dealify-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2"/></svg>
          Dealify
          <span class="side-panel-link-badge affiliate">AFF</span>
        </a>
        <a href="articles/moosend-review.html" class="side-panel-link" data-side="moosend-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9 12 2"/></svg>
          Moosend
          <span class="side-panel-link-badge affiliate">NEW</span>
        </a>
      </div>

      <div class="side-panel-section">
        <div class="side-panel-section-title">Guides & Articles</div>
        <a href="guides/how-to-make-first-100-online-with-ai.html" class="side-panel-link" data-side="first-100">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 8h16M8 4v16"/></svg>
          First $100 Online
        </a>
        <a href="articles/how-to-choose-email-marketing.html" class="side-panel-link" data-side="email-marketing">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M4 6l8 7 8-7"/></svg>
          How to Choose Email Marketing
        </a>
        <a href="articles/ai-tools-for-content-creators.html" class="side-panel-link" data-side="ai-tools-creators">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M5 5l3 3M2 12h4M19 5l-3 3M22 12h-4M5 19l3-3M19 19l-3-3"/><circle cx="12" cy="12" r="4"/></svg>
          AI Tools for Creators
        </a>
        <a href="articles/why-most-affiliate-sites-fail.html" class="side-panel-link" data-side="affiliate-sites-fail">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16v.5"/></svg>
          Why Most Affiliate Sites Fail
        </a>
      </div>

      <div class="side-panel-section">
        <div class="side-panel-section-title">Company</div>
        <a href="how-we-review.html" class="side-panel-link" data-side="how-we-review">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
          How We Review
        </a>
        <a href="privacy.html" class="side-panel-link" data-side="privacy">
          <svg class="side-panel-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
          Privacy Policy
        </a>
      </div>
    </nav>
  </aside>
  <div class="side-panel-backdrop" data-side-panel-backdrop></div>`;

  // Build background mesh
  const BG_MESH = `<div class="bg-mesh" aria-hidden="true"><div class="mesh-3"></div><div class="grain"></div></div>`;

  // Inject everything
  document.addEventListener('DOMContentLoaded', function () {
    // Insert bg mesh as first body child
    const bgDiv = document.createElement('div');
    bgDiv.innerHTML = BG_MESH;
    document.body.insertBefore(bgDiv.firstElementChild, document.body.firstChild);

    // Insert header at top
    const headerDiv = document.createElement('div');
    headerDiv.innerHTML = HEADER;
    document.body.insertBefore(headerDiv.firstElementChild, document.body.children[1]);

    // Insert side panel
    const panelDiv = document.createElement('div');
    panelDiv.innerHTML = SIDE_PANEL;
    document.body.appendChild(panelDiv);

    // Active state for current page
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const sideLinks = document.querySelectorAll('[data-side]');
    sideLinks.forEach(link => {
      const side = link.getAttribute('data-side');
      if ((fileName === 'index.html' && side === 'index') ||
          (fileName === side) ||
          (side && fileName.includes(side.replace('.html', '')))) {
        link.classList.add('active');
      }
    });
    document.querySelectorAll('[data-nav]').forEach(link => {
      const nav = link.getAttribute('data-nav');
      if (fileName.includes(nav)) link.classList.add('active');
    });

    // Menu toggle
    const panel = document.querySelector('[data-side-panel]');
    const backdrop = document.querySelector('[data-side-panel-backdrop]');
    const openMenu = () => { panel.classList.add('open'); backdrop.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { panel.classList.remove('open'); backdrop.classList.remove('open'); document.body.style.overflow = ''; };
    document.querySelectorAll('[data-menu-toggle]').forEach(btn => btn.addEventListener('click', openMenu));
    document.querySelectorAll('[data-menu-close]').forEach(btn => btn.addEventListener('click', closeMenu));
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) closeMenu(); });

    // Search filter
    const searchInput = document.querySelector('[data-side-panel-search]');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const q = this.value.toLowerCase().trim();
        const links = document.querySelectorAll('.side-panel-link');
        links.forEach(link => {
          const text = link.textContent.toLowerCase();
          link.style.display = (!q || text.includes(q)) ? '' : 'none';
        });
        // Hide section titles if all links in that section are hidden
        document.querySelectorAll('.side-panel-section').forEach(section => {
          const visible = section.querySelectorAll('.side-panel-link:not([style*="display: none"])');
          const title = section.querySelector('.side-panel-section-title');
          if (title) title.style.display = visible.length ? '' : 'none';
        });
      });
    }

    // Fade-in on scroll
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    }

    // Card hover spotlight (mouse position)
    document.querySelectorAll('.card-hover, .listing-card, .article-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  });
})();
