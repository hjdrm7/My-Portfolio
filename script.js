/* ============================================================
   PORTFOLIO — main.js
   Handles: nav scroll, mobile menu, scroll reveal,
            tab switching, skill bar animation, contact form
   ============================================================ */

/* ----------------------------------------------------------------
   1. NAVBAR — add .scrolled class on scroll
   ---------------------------------------------------------------- */
const navbar = document.getElementById('navbar');
if (navbar) {
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
}

/* ----------------------------------------------------------------
   2. MOBILE MENU — hamburger toggle
   ---------------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });
}

/* ----------------------------------------------------------------
   3. SCROLL REVEAL — fade-up elements with class .reveal
   ---------------------------------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ----------------------------------------------------------------
   5. ABOUT TABS — switch tab panes
   ---------------------------------------------------------------- */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');

        // Update buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update panes
        tabPanes.forEach(pane => {
            pane.classList.toggle('active', pane.id === 'tab-' + target);
        });
    });
});

/* ----------------------------------------------------------------
   6. ACTIVE NAV LINK — highlight current section in nav
   ---------------------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links .nav-link');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.45 });

sections.forEach(s => sectionObserver.observe(s));

/* ----------------------------------------------------------------
   7. CONTACT FORM — show success message on submit
      Replace the body of this handler with your backend/Formspree
   ---------------------------------------------------------------- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        /* ---- Replace below with your form submission endpoint ----
           Example (Formspree):
           fetch('https://formspree.io/f/YOUR_FORM_ID', {
             method: 'POST',
             body: new FormData(contactForm),
             headers: { 'Accept': 'application/json' }
           }).then(r => { if (r.ok) showSuccess(); });
        ----------------------------------------------------------- */

        if (formSuccess) formSuccess.style.display = 'block';
        contactForm.reset();
    });
}