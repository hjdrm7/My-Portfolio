// ================================================================
// PORTFOLIO SCRIPT - script.js
// Handles: active nav link detection, smooth interactions
// ================================================================


// ----------------------------------------------------------------
// 1. AUTO-SET ACTIVE NAV LINK
//    Automatically highlights the correct nav link based on
//    which page the user is currently on.
// ----------------------------------------------------------------
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function(link) {
    // Get the filename from the link's href (e.g., "about.html")
    const linkPage = link.getAttribute('href');

    // Get the current page filename from the browser's address bar
    const currentPage = window.location.pathname.split('/').pop();

    // Remove any existing active class first
    link.classList.remove('active');

    // If the link matches the current page, mark it as active
    if (linkPage === currentPage) {
        link.classList.add('active');
    }

    // Special case: if we're at the root (no filename), highlight Home
    if (currentPage === '' && linkPage === 'index.html') {
        link.classList.add('active');
    }
});


// ----------------------------------------------------------------
// 2. FADE-IN ANIMATION ON SCROLL
//    Adds a "visible" class to elements as they scroll into view,
//    creating a smooth fade-in entrance effect.
// ----------------------------------------------------------------

// Select all cards and blocks that should animate in
const animatedElements = document.querySelectorAll(
    '.project-card, .about-block, .skill-tag, .hero-text, .hero-image-wrapper'
);

// Set initial hidden state via JavaScript
animatedElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Create an IntersectionObserver to detect when elements enter the viewport
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Element is visible: fade it in
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing this element once it has animated
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1  // Trigger when 10% of the element is visible
});

// Attach the observer to each element, with a staggered delay
animatedElements.forEach(function(el, index) {
    // Add a slight delay for each element so they stagger in one by one
    el.style.transitionDelay = (index * 0.07) + 's';
    observer.observe(el);
});


// ----------------------------------------------------------------
// 3. SKILL TAG CLICK INTERACTION (Landing Page)
//    Clicking a skill tag highlights it temporarily.
// ----------------------------------------------------------------
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(function(tag) {
    tag.addEventListener('click', function() {
        // Toggle a CSS class that visually highlights the tag
        tag.classList.toggle('skill-tag--selected');
    });
});


// ----------------------------------------------------------------
// 4. PROJECT CARD KEYBOARD ACCESSIBILITY
//    Allows keyboard users to press Enter on a project card
//    to follow the "View Project" link inside it.
// ----------------------------------------------------------------
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function(card) {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Find the primary button link inside this card and click it
            const link = card.querySelector('.btn-primary');
            if (link) {
                link.click();
            }
        }
    });
});