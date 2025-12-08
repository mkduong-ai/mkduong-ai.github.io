// Project detail page script
import { getProjectById } from './projects-data.js';

// Get project ID from URL
function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
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

// Initialize project detail page
async function init() {
    // Initialize sidenav
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load footer
    await loadFooter();

    // Get project ID
    const projectId = getProjectIdFromUrl();

    if (!projectId) {
        document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
        return;
    }

    // Get project data
    const project = getProjectById(projectId);

    if (!project) {
        document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
        return;
    }

    // Update page title and header
    document.getElementById('project-title').textContent = `${project.title} - Dr. Manh Khoi Duong`;
    document.getElementById('detail-title').textContent = project.title;

    // Add tags
    if (project.tags) {
        const tagsHtml = project.tags.map(tag => `<div class="chip">${tag}</div>`).join('');
        document.getElementById('detail-tags').innerHTML = tagsHtml;
    }

    // Set project image
    const imageElement = document.getElementById('detail-image');
    imageElement.src = project.image;
    imageElement.alt = project.title;

    // Add technologies
    if (project.technologies) {
        const techHtml = project.technologies.map(tech => `<div class="chip">${tech}</div>`).join('');
        document.getElementById('detail-technologies').innerHTML = techHtml;
    }

    // Load detailed content
    document.getElementById('project-content').innerHTML = project.detailedDescription;
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
