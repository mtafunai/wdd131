* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: #222;
    background-color: #f4f1ea;
    line-height: 1.6;
}

img,
video {
    max-width: 100%;
}

img {
    display: block;
}

a {
    color: inherit;
}

/* HEADER */

.site-header {
    background-color: #174a5b;
    color: #ffffff;
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.logo {
    color: #ffffff;
    text-decoration: none;
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    font-weight: 700;
}

.menu-button {
    border: 0;
    background: transparent;
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
}

.site-nav {
    display: none;
    width: 100%;
    flex-direction: column;
    background-color: #103746;
    margin-top: 1rem;
}

.site-nav.open {
    display: flex;
}

.site-nav a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    padding: 0.9rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    font-weight: 600;
}

.site-nav a:hover,
.site-nav a.active {
    background-color: #236b7d;
}

/* HERO VIDEO */

.hero {
    position: relative;
    min-height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    isolation: isolate;
    background-color: #174a5b;
}

.hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        rgba(0, 0, 0, 0.35),
        rgba(0, 0, 0, 0.50)
    );
    z-index: -1;
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 850px;
    padding: 4rem 1.5rem;
    text-align: center;
    color: #ffffff;
}

.hero-content h1 {
    margin: 0.5rem 0 1rem;
    color: #ffffff;
    font-family: "Playfair Display", serif;
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    line-height: 1.1;
}

.hero-content p:not(.eyebrow) {
    max-width: 700px;
    margin: 0 auto 1.5rem;
    color: #ffffff;
    font-size: 1.1rem;
}

.eyebrow {
    margin: 0 0 0.5rem;
    color: #d6a84f;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

/* BUTTONS */

.button {
    display: inline-block;
    padding: 0.8rem 1.4rem;
    border-radius: 0.35rem;
    text-decoration: none;
    font-weight: 700;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.button:hover {
    transform: translateY(-2px);
}

.button-primary {
    background-color: #d6a84f;
    color: #172b32;
}

.button-primary:hover {
    opacity: 0.9;
}

.button-secondary {
    background-color: #174a5b;
    color: #ffffff;
}

.button-secondary:hover {
    background-color: #236b7d;
}

/* SECTIONS */

.section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
}

.section-heading {
    max-width: 750px;
    margin: 0 auto 2rem;
    text-align: center;
}

.section-heading h2 {
    margin: 0.25rem 0 0.75rem;
    color: #174a5b;
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 5vw, 3rem);
}

.section-heading p:last-child {
    margin-bottom: 0;
}

/* CARDS */

.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.card {
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0.6rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.destination-card img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.card-content {
    padding: 1.25rem;
}

.card-content h3 {
    margin: 0.3rem 0 0.6rem;
    color: #174a5b;
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
}

.card-label {
    margin: 0;
    color: #55717a;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.text-link {
    display: inline-block;
    margin-top: 0.5rem;
    color: #174a5b;
    font-weight: 700;
    text-decoration: none;
}

.text-link:hover {
    text-decoration: underline;
}

.center-content {
    margin-top: 2rem;
    text-align: center;
}

/* ACTIVITIES */

.section-green {
    max-width: none;
    background-color: #dfe9e3;
}

.activity-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.activity-card {
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 0.6rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.activity-icon {
    display: block;
    margin-bottom: 0.75rem;
    font-size: 2.5rem;
}

.activity-card h3 {
    margin: 0 0 0.5rem;
    color: #174a5b;
    font-family: "Playfair Display", serif;
}

/* CALLOUT */

.callout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.callout h2 {
    margin: 0.25rem 0 0.75rem;
    color: #174a5b;
    font-family: "Playfair Display", serif;
    font-size: 2.2rem;
}

/* FOOTER */

.site-footer {
    background-color: #103746;
    color: #ffffff;
}

.footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
}

.footer-logo {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: 1.4rem;
    font-weight: 700;
}

.footer-links {
    margin: 1rem 0;
}

.footer-links a {
    color: #ffffff;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

/* TABLET */

@media (min-width: 600px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .activity-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-content {
        padding: 5rem 2rem;
    }
}

/* DESKTOP */

@media (min-width: 800px) {
    .header-inner {
        flex-wrap: nowrap;
    }

    .menu-button {
        display: none;
    }

    .site-nav {
        display: flex;
        width: auto;
        flex-direction: row;
        background-color: transparent;
        margin-top: 0;
    }

    .site-nav a {
        border-top: 0;
        padding: 0.5rem 0.8rem;
        border-radius: 0.25rem;
    }

    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .activity-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .hero {
        min-height: 78vh;
    }
}

/* MOBILE */

@media (max-width: 599px) {
    .hero {
        min-height: 75vh;
    }

    .hero-content {
        padding: 3rem 1rem;
    }

    .hero-content h1 {
        font-size: 3rem;
    }

    .hero-content p:not(.eyebrow) {
        font-size: 1rem;
    }

    .callout {
        flex-direction: column;
        align-items: flex-start;
    }
}

/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    .hero-video {
        display: none;
    }

    .hero {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.5)
        );
    }

    .button {
        transition: none;
    }
}


const styleTag = document.createElement("style");
styleTag.textContent = projectStyles;
document.head.appendChild(styleTag);
