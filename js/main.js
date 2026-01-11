// Main Application Module
import { initNavigation } from './navigation.js';
import { initSmoothScroll } from './scroll.js';
import { generateExperienceHTML } from './experience-data.js';
import { generateProjectsHTML, initProjectCarousel } from './projects-data.js';
import { generateBlogPostsHTML, initBlogCarousel } from './blog-data.js';

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
        loadComponent('home/hero.html', 'hero-section'),
        loadComponent('home/about.html', 'about-section'),
        loadComponent('home/experience.html', 'experience-section'),
        loadComponent('home/projects.html', 'projects-section'),
        loadComponent('home/blog.html', 'blog-section'),
        loadComponent('home/contact.html', 'contact-section'),
        loadComponent('home/footer.html', 'footer-section')
    ]);

    // Populate experience section with data
    const experienceList = document.getElementById('experience-list');
    if (experienceList) {
        experienceList.innerHTML = generateExperienceHTML();
    }

    // Populate projects section with data
    const projectsList = document.getElementById('projects-list');
    if (projectsList) {
        projectsList.innerHTML = generateProjectsHTML();
    }

    // Initialize project carousel navigation
    initProjectCarousel();

    // Initialize blog carousel (handles data population and navigation)
    initBlogCarousel();

    // Initialize modules after content is loaded
    initNavigation();
    initSmoothScroll();

    // Initialize collapsible for work experience
    const collapsibleElems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleElems);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
