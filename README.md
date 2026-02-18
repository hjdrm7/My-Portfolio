# Portfolio Website — Setup Guide

## File Structure

```
portfolio/
│
├── index.html          ← Home page (hero, about, projects, contact)
├── about.html          ← About page (bio, skills, hobbies, motto)
├── project1.html       ← Project 1 detail page
├── project2.html       ← Project 2 detail page
├── project3.html       ← Project 3 detail page
│
├── style.css           ← All styles (shared across all pages)
├── main.js             ← All JavaScript (shared across all pages)
│
└── images/             ← Put ALL your images in this folder
    ├── hero-photo.jpg
    ├── about-photo.jpg
    ├── project1-thumb.jpg
    ├── project1-hero.jpg
    ├── project1-full.jpg
    ├── project1-detail1.jpg
    ├── project1-detail2.jpg
    ├── project2-thumb.jpg  ... (same pattern for 2 and 3)
    └── project3-thumb.jpg
```

---

## How to Customize

### Replace Your Name
Search for `Your Name` across all files and replace with your real name.

### Replace Images
1. Create an `images/` folder next to the HTML files.
2. Add your photos with the exact filenames listed above, OR update the `src` attributes in the HTML.

### Replace Text Content
Every replaceable section has a comment like:
```html
<!-- Replace project title here -->
```
Just search for `Replace` in any file to find all the spots.

### Update the "Explore Me" Button
In `index.html`, find:
```html
<a href="https://your-external-website.com" ...>Explore Me</a>
```
Replace the URL with your external site.

### Set Up the Contact Form
In `main.js`, find the form submission block (Section 4) and replace with your Formspree or Netlify Forms endpoint.

---

## Color Palette

| Name        | Hex       | Usage               |
|-------------|-----------|---------------------|
| Cream       | `#EFECE3` | Page background     |
| Blue Light  | `#8FABD4` | Accents, tags       |
| Blue Dark   | `#4A70A9` | Primary buttons     |
| Black       | `#000000` | Text, About section |

---

## Fonts Used
- **Cormorant Garamond** — Display / Headings (loaded from Google Fonts)
- **DM Sans** — Body text (loaded from Google Fonts)

Both load automatically — no installation needed.