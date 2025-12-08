// Project detail page script
import { getProjectById, loadProjectContent } from './projects-data.js';

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
    console.log('Project ID from URL:', projectId);

    if (!projectId) {
        console.error('No project ID found in URL');
        document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
        return;
    }

    // Get project data
    const project = getProjectById(projectId);
    console.log('Retrieved project data:', project);

    if (!project) {
        document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
        return;
    }

    // Update page title and header
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

    // Load and render markdown content
    document.getElementById('project-content').innerHTML = '<p>Loading project details...</p>';
    const content = await loadProjectContent(project.markdownFile);
    document.getElementById('project-content').innerHTML = content;
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
