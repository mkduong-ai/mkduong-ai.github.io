// Blog detail page script
import { getBlogPostById, loadBlogContent } from './blog-data.js';

// Get blog post ID from URL
function getBlogIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('pages/footer.html');
        const html = await response.text();
        document.getElementById('footer-section').innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize blog detail page
async function init() {
    // Initialize sidenav
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load footer
    await loadFooter();

    // Get blog post ID
    const blogId = getBlogIdFromUrl();

    if (!blogId) {
        document.getElementById('blog-content').innerHTML = '<p>Blog post not found.</p>';
        return;
    }

    // Get blog post data
    const post = getBlogPostById(blogId);

    if (!post) {
        document.getElementById('blog-content').innerHTML = '<p>Blog post not found.</p>';
        return;
    }

    // Update page title and header
    document.getElementById('blog-title').textContent = `${post.title} - Dr. Duong`;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.date);

    // Add tags
    if (post.tags) {
        const tagsHtml = post.tags.map(tag => `<div class="chip">${tag}</div>`).join('');
        document.getElementById('post-tags').innerHTML = tagsHtml;
    }

    // Load and render markdown content
    const content = await loadBlogContent(post.markdownFile);
    document.getElementById('blog-content').innerHTML = content;
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
