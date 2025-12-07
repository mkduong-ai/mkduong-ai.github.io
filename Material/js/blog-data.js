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

// Generate blog posts HTML for listing page
export function generateBlogPostsHTML() {
    const sortedPosts = sortBlogPostsByDate();

    return sortedPosts.map(post => `
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
                    <a href="blog-post.html?id=${post.id}" class="blue-text">Read More</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}

// Get blog post by ID
export function getBlogPostById(id) {
    return blogPosts.find(post => post.id === id);
}

// Load and render markdown content
export async function loadBlogContent(markdownFile) {
    try {
        const response = await fetch(markdownFile);
        const markdown = await response.text();
        return renderMarkdown(markdown);
    } catch (error) {
        console.error('Error loading blog content:', error);
        return '<p>Error loading blog post content.</p>';
    }
}

// Simple markdown renderer (basic support)
function renderMarkdown(markdown) {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.match(/^<[h|ul|pre]/)) {
            return `<p>${para}</p>`;
        }
        return para;
    }).join('\n');

    return html;
}
