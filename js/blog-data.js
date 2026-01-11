import { renderMarkdownWithMarked } from './markdown-renderer.js';

// Blog posts data configuration
const blogPosts = [
    {
        id: 'fine-tuning-llms',
        title: 'Fine-tuning LLMs for Domain-specific Tasks',
        date: '2024-03-15',
        excerpt: 'Exploring techniques for adapting large language models to specialized domains with limited data...',
        tags: ['LLMs', 'Fine-tuning', 'NLP'],
        markdownFile: 'blog/fine-tuning-llms.md'
    },
    {
        id: 'ml-deployment',
        title: 'ML Model Deployment Best Practices',
        date: '2024-02-28',
        excerpt: 'A comprehensive guide to deploying machine learning models in production environments...',
        tags: ['MLOps', 'Deployment', 'Production'],
        markdownFile: 'blog/ml-deployment.md'
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
        <div class="col s12 m6">
            <div class="card blog-card">
                <div class="card-content">
                    <span class="card-title">${post.title}</span>
                    <p class="grey-text">${formatDate(post.date)}</p>
                    <p>${post.excerpt}</p>
                    ${post.tags ? `
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<div class="chip">${tag}</div>`).join('\n                        ')}
                    </div>
                    ` : ''}
                </div>
                <div class="card-action">
                    <a href="../pages/blog-post.html?id=${post.id}" class="blue-text">Read More</a>
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

    // Hide navigation if not enough posts
    if (blogPosts.length <= postsPerPage) {
        if (navContainer) {
            navContainer.style.display = 'none';
        }
        // Still render the posts
        if (blogList) {
            blogList.innerHTML = generateBlogPostsHTML({ page: 0 });
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
        const response = await fetch('../' + markdownFile);
        const markdown = await response.text();
        return await renderMarkdownWithMarked(markdown);
    } catch (error) {
        console.error('Error loading blog content:', error);
        return '<p>Error loading blog post content.</p>';
    }
}
