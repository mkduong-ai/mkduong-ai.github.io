// Main Application Module
import { initNavigation } from './navigation.js';
import { initSmoothScroll } from './scroll.js';

// Load HTML component into target element
async function loadComponent(url, targetId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const target = document.getElementById(targetId);
        if (target) {
            target.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${url}:`, error);
    }
}

// Initialize application
async function init() {
    // Load all page components
    await Promise.all([
        loadComponent('pages/hero.html', 'hero-section'),
        loadComponent('pages/about.html', 'about-section'),
        loadComponent('pages/skills.html', 'skills-section'),
        loadComponent('pages/projects.html', 'projects-section'),
        loadComponent('pages/blog.html', 'blog-section'),
        loadComponent('pages/contact.html', 'contact-section'),
        loadComponent('pages/footer.html', 'footer-section')
    ]);

    // Initialize modules after content is loaded
    initNavigation();
    initSmoothScroll();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
