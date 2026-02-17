/* ============================================================
   script.js — Portfolio JavaScript
   Jude Arom F. Dominguez

   SECTIONS:
   1.  DATA  ← Edit your projects and social links here
   2.  Build Nav Links
   3.  Build Project Cards
   4.  Build Footer Social Icons
   5.  Navbar Scroll Effect
   6.  Hamburger Mobile Menu
   7.  Profile Photo Fallback
   8.  Scroll Reveal (IntersectionObserver)
   9.  Scroll Spy (Active Nav Highlight)
   10. Contact Form Validation
============================================================ */


/* ============================================================
   1. DATA — EDIT YOUR CONTENT HERE

   navLinks    → navigation menu items
   projects    → project cards (add/remove freely)
   socialLinks → footer social icon links
============================================================ */

/* ── Navigation Links ──────────────────────────────────────
   label : text shown in the nav bar
   href  : anchor ID to scroll to (must match a section id)
──────────────────────────────────────────────────────────── */
var navLinks = [
    { label: "About",    href: "#about"    },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  }
];


/* ── Projects ───────────────────────────────────────────────
   title : project name shown as the card heading
   desc  : short description paragraph
   link  : URL to the live project or repo (use "#" as placeholder)
   image : path to a screenshot file — see the IMAGE NOTE below
   emoji : shown as placeholder when image is empty

   IMAGE NOTE:
   Set "image" to the path of your screenshot file.
   Example:  image: "images/project1.png"
   The file must be inside your project folder.
   Leave image as "" to show the emoji placeholder instead.
──────────────────────────────────────────────────────────── */
var projects = [
    {
        title : "Mission Log Website",
        desc  : "A multi-page semantic HTML website. Covers headers, tables, nested lists, and navigation between pages.",
        link  : "#",
        /* ─ INSERT your screenshot path here ─
           Example: image: "images/mission-log.png"   */
        image : "",
        emoji : "🚀"
    },
    {
        title : "Personal Profile Card",
        desc  : "A responsive profile card with an About page, social icons, and custom CSS styling built from scratch.",
        link  : "#",
        /* ─ INSERT your screenshot path here ─
           Example: image: "images/profile-card.png"  */
        image : "",
        emoji : "🎨"
    },
    {
        title : "Dynamic To-Do List",
        desc  : "A JavaScript task manager with add, complete, and delete features using DOM manipulation.",
        link  : "#",
        /* ─ INSERT your screenshot path here ─
           Example: image: "images/todo-list.png"     */
        image : "",
        emoji : "📝"
    }
];


/* ── Social Links ───────────────────────────────────────────
   label : used as aria-label for accessibility
   href  : your profile URL or mailto link
   icon  : path to your icon image file — see the ICON NOTE below

   ICON NOTE:
   Set "icon" to the file path of your icon image.
   Example:  icon: "images/instagram-icon.png"
   Download free icons from https://icons8.com or https://flaticon.com
   Save them in an "images/" subfolder inside your project folder.
──────────────────────────────────────────────────────────── */
var socialLinks = [
    {
        label : "Instagram",
        href  : "#",
        /* ─ INSERT your Instagram icon path here ─
           Example: icon: "images/instagram-icon.png"  */
        icon  : "images/instagram-icon.png"
    },
    {
        label : "LinkedIn",
        href  : "https://www.linkedin.com/in/yourprofile",
        /* ─ INSERT your LinkedIn icon path here ─
           Example: icon: "images/linkedin-icon.png"   */
        icon  : "images/linkedin-icon.png"
    },
    {
        label : "Email",
        href  : "mailto:your@email.com",
        /* ─ INSERT your email icon path here ─
           Example: icon: "images/email-icon.png"      */
        icon  : "images/email-icon.png"
    }
];


/* ============================================================
   2. BUILD NAV LINKS
   Loops through navLinks and creates <li><a> for the desktop
   nav (#nav-links) and plain <a> for the mobile menu.
============================================================ */
var navLinksEl  = document.getElementById("nav-links");
var mobileMenuEl = document.getElementById("mobile-menu");

for (var i = 0; i < navLinks.length; i++) {

    // Desktop link
    var li = document.createElement("li");
    var a  = document.createElement("a");
    a.href        = navLinks[i].href;
    a.textContent = navLinks[i].label;
    li.appendChild(a);
    navLinksEl.appendChild(li);

    // Mobile link — also closes the menu when clicked
    var mobileA = document.createElement("a");
    mobileA.href        = navLinks[i].href;
    mobileA.textContent = navLinks[i].label;
    mobileA.addEventListener("click", closeMobileMenu);
    mobileMenuEl.appendChild(mobileA);
}


/* ============================================================
   3. BUILD PROJECT CARDS
   Loops through the projects array and creates a card for each.
   Odd-indexed cards get class "flip" (image on the left)
   to alternate layout like the reference design.
============================================================ */
var projectsList = document.getElementById("projects-list");

for (var j = 0; j < projects.length; j++) {

    var project = projects[j];

    // Outer card wrapper
    var card = document.createElement("div");
    card.className = "project-card fade-in";

    // Alternate: flip every other card (0 = normal, 1 = flipped, 2 = normal...)
    if (j % 2 !== 0) {
        card.className = "project-card flip fade-in";
    }

    // ── Text column ──
    var cardText = document.createElement("div");
    cardText.className = "card-text";

    var cardTitle = document.createElement("h3");
    cardTitle.textContent = project.title;

    var cardDesc = document.createElement("p");
    cardDesc.textContent = project.desc;

    var cardLink = document.createElement("a");
    cardLink.href        = project.link;
    cardLink.className   = "btn btn-sm";
    cardLink.textContent = "View Project";

    cardText.appendChild(cardTitle);
    cardText.appendChild(cardDesc);
    cardText.appendChild(cardLink);

    // ── Image column ──
    var cardImage = document.createElement("div");
    cardImage.className = "card-image";

    if (project.image !== "") {

        /* ============================================
           PROJECT SCREENSHOT <img> TAG
           src comes from the "image" property above.
           To show a screenshot, update that property.
        ============================================ */
        var img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title + " screenshot";
        cardImage.appendChild(img);

    } else {

        // No image set — show emoji placeholder instead
        var placeholder = document.createElement("div");
        placeholder.className   = "img-placeholder";
        placeholder.textContent = project.emoji;
        cardImage.appendChild(placeholder);
    }

    // Assemble the card: text + image
    card.appendChild(cardText);
    card.appendChild(cardImage);
    projectsList.appendChild(card);
}


/* ============================================================
   4. BUILD FOOTER SOCIAL ICONS
   Loops through socialLinks and creates an <a> with <img>
   for each entry, appended into #footer-socials.
============================================================ */
var footerSocials = document.getElementById("footer-socials");

for (var k = 0; k < socialLinks.length; k++) {

    var social = socialLinks[k];

    var socialAnchor = document.createElement("a");
    socialAnchor.href      = social.href;
    socialAnchor.className = "social-icon";
    socialAnchor.setAttribute("aria-label", social.label);

    // Open external URLs in a new tab
    if (social.href !== "#" && social.href.indexOf("mailto:") === -1) {
        socialAnchor.target = "_blank";
    }

    /* ============================================
       SOCIAL ICON <img> TAG
       src comes from the "icon" property above.
       Update that property with your icon file path.
       Example:  icon: "images/instagram-icon.png"
    ============================================ */
    var iconImg = document.createElement("img");
    iconImg.src = social.icon;
    iconImg.alt = social.label + " icon";

    socialAnchor.appendChild(iconImg);
    footerSocials.appendChild(socialAnchor);
}


/* ============================================================
   5. NAVBAR SCROLL EFFECT
   Adds class "scrolled" when the user scrolls past 60px.
   This triggers the solid navy background defined in CSS.
============================================================ */
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ============================================================
   6. HAMBURGER MOBILE MENU
   Clicking the hamburger toggles the mobile dropdown open/closed.
   The three bars animate into an "X" shape when open.
============================================================ */
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
    mobileMenuEl.classList.toggle("open");

    var spans  = hamburger.querySelectorAll("span");
    var isOpen = mobileMenuEl.classList.contains("open");

    if (isOpen) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity   = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "";
        spans[1].style.opacity   = "";
        spans[2].style.transform = "";
    }
});

// Closes the mobile menu and resets the hamburger icon
function closeMobileMenu() {
    mobileMenuEl.classList.remove("open");
    var spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "";
    spans[1].style.opacity   = "";
    spans[2].style.transform = "";
}


/* ============================================================
   7. PROFILE PHOTO FALLBACK
   If the <img id="profile-photo"> loads successfully,
   the #photo-fallback div is hidden.
   If the image fails, the fallback initials stay visible.
============================================================ */
var profilePhoto  = document.getElementById("profile-photo");
var photoFallback = document.getElementById("photo-fallback");

profilePhoto.addEventListener("load", function () {
    // Photo loaded — hide the fallback
    photoFallback.style.display = "none";
});

profilePhoto.addEventListener("error", function () {
    // Photo missing — hide broken img, show initials
    profilePhoto.style.display  = "none";
    photoFallback.style.display = "flex";
});


/* ============================================================
   8. SCROLL REVEAL
   Uses IntersectionObserver to watch .fade-in elements.
   Adds class "visible" when element is 15% in the viewport,
   which triggers the CSS fade + slide-up transition.
============================================================ */
var fadeElements = document.querySelectorAll(".fade-in");

var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target); // stop watching once revealed
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(function (el) {
    revealObserver.observe(el);
});


/* ============================================================
   9. SCROLL SPY — ACTIVE NAV LINK
   Watches which section is currently in the viewport and
   highlights the matching nav link in amber.
============================================================ */
var sections   = document.querySelectorAll("section[id]");
var navAnchors = document.querySelectorAll("#nav-links a");

function updateActiveNav() {
    var currentId = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentId = section.getAttribute("id");
        }
    });

    navAnchors.forEach(function (anchor) {
        anchor.style.color = "";  // reset all
        if (anchor.getAttribute("href") === "#" + currentId) {
            anchor.style.color = "var(--amber)";  // highlight active
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav(); // run once on page load


/* ============================================================
   10. CONTACT FORM VALIDATION
   Checks each field before submit.
   Displays error messages under each invalid field.

   To connect to a real backend, replace the success block
   with a fetch() POST request to your server or email API.
============================================================ */
var contactForm  = document.getElementById("contact-form");
var inputName    = document.getElementById("input-name");
var inputEmail   = document.getElementById("input-email");
var inputMessage = document.getElementById("input-message");
var errorName    = document.getElementById("error-name");
var errorEmail   = document.getElementById("error-email");
var errorMessage = document.getElementById("error-message");
var formSuccess  = document.getElementById("form-success");

// Returns true if the email string has a valid format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Clears all error messages
function clearErrors() {
    errorName.textContent    = "";
    errorEmail.textContent   = "";
    errorMessage.textContent = "";
}

// Validates all fields — returns true if everything is OK
function validateForm() {
    var valid = true;
    clearErrors();

    if (inputName.value.trim() === "") {
        errorName.textContent = "Please enter your name.";
        valid = false;
    }

    if (inputEmail.value.trim() === "") {
        errorEmail.textContent = "Please enter your email.";
        valid = false;
    } else if (!isValidEmail(inputEmail.value.trim())) {
        errorEmail.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (inputMessage.value.trim() === "") {
        errorMessage.textContent = "Please write a message.";
        valid = false;
    }

    return valid;
}

// Form submit handler
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    if (!validateForm()) {
        return; // stop here if any field is invalid
    }

    /* ── SUCCESS BLOCK ────────────────────────────────────────
       Replace this with a real fetch() call when ready.

       Example:
       fetch("https://your-api.com/contact", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
               name:    inputName.value,
               email:   inputEmail.value,
               message: inputMessage.value
           })
       });
    ─────────────────────────────────────────────────────────── */
    formSuccess.style.display = "block";
    contactForm.reset();

    // Auto-hide success message after 5 seconds
    setTimeout(function () {
        formSuccess.style.display = "none";
    }, 5000);
});