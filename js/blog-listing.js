// Blog listing page script
import { generateBlogPostsHTML } from './blog-data.js';

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('../home/footer.html');
        const html = await response.text();
        document.getElementById('footer-section').innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize blog listing page
async function init() {
    // Initialize sidenav
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load footer
    await loadFooter();

    // Populate blog list
    const blogList = document.getElementById('blog-list');
    if (blogList) {
        blogList.innerHTML = generateBlogPostsHTML({ all: true });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
