import { renderMarkdownWithMarked } from './markdown-renderer.js';

// Blog posts data configuration
const blogPosts = [
    {
        id: 'fairness-agnostic-optimization',
        title: 'Fairness-Agnostic Optimization: Debiasing Datasets with Genetic Algorithms',
        date: '2026-09-03',
        excerpt: 'How treating dataset debiasing as a combinatorial subset selection problem allows genetic algorithms to optimize any black-box fairness metric without gradients.',
        tags: ['Fair ML', 'Genetic Algorithms', 'Optimization', 'Responsible AI'],
        markdownFile: 'blog/fairness-agnostic-optimization.md'
    }
];

// Sort blog posts by date (newest first)
function sortBlogPostsByDate() {
    return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Carousel state
let currentPage = 0;
const postsPerPage = 2; // Adjust based on layout (2 col)

// Generate blog posts HTML for listing page
export function generateBlogPostsHTML({ page = 0, all = false } = {}) {
    const isPagesDir = window.location.pathname.includes('/pages/');
    const linkPrefix = isPagesDir ? '' : 'pages/';

    const sortedPosts = sortBlogPostsByDate();
    let items;

    if (all) {
        items = sortedPosts;
    } else {
        const start = page * postsPerPage;
        const end = start + postsPerPage;
        items = sortedPosts.slice(start, end);
    }

    return items.map(post => `
        <div class="col s12 ${items.length === 1 ? 'm10 offset-m1 l8 offset-l2' : 'm6'}">
            <div class="card blog-card hoverable">
                <div class="card-content">
                    <span class="card-title">${post.title}</span>
                    <p class="grey-text">${formatDate(post.date)}</p>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    ${post.tags ? `
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<div class="chip">${tag}</div>`).join('\n                        ')}
                    </div>
                    ` : ''}
                </div>
                <div class="card-action">
                    <a href="${linkPrefix}blog-post.html?id=${post.id}" class="blue-text text-darken-2 font-weight-500">Read Article &rarr;</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}

// Get total number of pages
export function getTotalPages() {
    return Math.ceil(blogPosts.length / postsPerPage);
}

// Initialize blog carousel navigation
export function initBlogCarousel() {
    const blogList = document.getElementById('blog-list');
    const prevBtn = document.getElementById('blog-prev');
    const nextBtn = document.getElementById('blog-next');
    const navContainer = document.querySelector('.blog-carousel-nav');

    // Populate display
    if (blogList) {
        blogList.innerHTML = generateBlogPostsHTML({ page: 0 });
    }

    // Hide navigation if not enough posts
    if (blogPosts.length <= postsPerPage) {
        if (navContainer) {
            navContainer.style.display = 'none';
        }
        return;
    }

    // Show navigation
    if (navContainer) {
        navContainer.style.display = 'flex';
    }

    // Update display
    function updateDisplay() {
        if (blogList) {
            blogList.innerHTML = generateBlogPostsHTML({ page: currentPage });
        }

        // Update button states
        if (prevBtn) {
            prevBtn.disabled = currentPage === 0;
            prevBtn.classList.toggle('disabled', currentPage === 0);
        }

        if (nextBtn) {
            nextBtn.disabled = currentPage >= getTotalPages() - 1;
            nextBtn.classList.toggle('disabled', currentPage >= getTotalPages() - 1);
        }
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updateDisplay();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < getTotalPages() - 1) {
                currentPage++;
                updateDisplay();
            }
        });
    }

    // Initial display
    updateDisplay();
}

// Get blog post by ID
export function getBlogPostById(id) {
    return blogPosts.find(post => post.id === id);
}

// Load and render markdown content
export async function loadBlogContent(markdownFile) {
    try {
        const isPagesDir = window.location.pathname.includes('/pages/');
        const prefix = isPagesDir ? '../' : '';
        const response = await fetch(prefix + markdownFile);
        const markdown = await response.text();
        return await renderMarkdownWithMarked(markdown);
    } catch (error) {
        console.error('Error loading blog content:', error);
        return '<p>Error loading blog post content.</p>';
    }
}
