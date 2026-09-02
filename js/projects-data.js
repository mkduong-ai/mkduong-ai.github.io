import { renderMarkdownWithMarked } from './markdown-renderer.js';

// Projects data configuration
const projects = [
    {
        id: 'rapp',
        title: 'RAPP: Responsible Academic Performance Prediction',
        description: 'A multi-year BMBF-funded Responsible AI system delivering Fair ML bias mitigation, Explainable AI (xAI) rule induction, and human-in-the-loop decision support tools for academic performance, including dropout prediction.',
        markdownFile: 'projects/rapp.md',
        image: 'img/rapp-banner.svg',
        tags: ['Responsible AI', 'Fair ML', 'Explainable AI (xAI)', 'MLOps', 'Decision Support'],
        technologies: ['Python', 'PyTorch', 'Scikit-learn', 'SQL', 'Pareto Optimization', 'Docker', 'GDPR Compliance']
    }
];

// Current page for carousel
let currentPage = 0;
const projectsPerPage = 3;

// Unified function for paginated OR full project rendering
export function generateProjectsHTML({ page = 0, all = false } = {}) {
    const isPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isPagesDir ? '../' : '';
    const detailPrefix = isPagesDir ? '' : 'pages/';

    let items;

    if (all) {
        // return ALL projects
        items = projects;
    } else {
        // return ONLY projects for the selected page
        const start = page * projectsPerPage;
        const end = start + projectsPerPage;
        items = projects.slice(start, end);
    }

    return items.map(project => `
        <div class="col s12 ${items.length === 1 ? 'm10 offset-m1 l8 offset-l2' : 'm6 l4'}">
            <div class="card project-card hoverable">
                <div class="card-image">
                    <img src="${basePath}${project.image}" alt="${project.title}">
                </div>
                <div class="card-content">
                    <span class="card-title">${project.title}</span>
                    <p class="project-description">${project.description}</p>
                    ${project.tags ? `
                    <div class="project-tags">
                        ${project.tags.map(tag => `<div class="chip">${tag}</div>`).join('\n                        ')}
                    </div>
                    ` : ''}
                </div>
                <div class="card-action">
                    <a href="${detailPrefix}project-detail.html?id=${project.id}" class="blue-text text-darken-2 font-weight-500">View Project Details &rarr;</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}

// Get project by ID
export function getProjectById(id) {
    console.log('Getting project by ID:', id);
    const project = projects.find(project => project.id === id);
    console.log('Found project:', project);
    return project;
}

// Get total number of pages
export function getTotalPages() {
    return Math.ceil(projects.length / projectsPerPage);
}

// Initialize carousel navigation
export function initProjectCarousel() {
    const projectsList = document.getElementById('projects-list');
    const prevBtn = document.getElementById('projects-prev');
    const nextBtn = document.getElementById('projects-next');
    const navContainer = document.querySelector('.projects-carousel-nav');

    // Populate display
    if (projectsList) {
        projectsList.innerHTML = generateProjectsHTML({ page: currentPage });
    }

    // Hide navigation if 3 or fewer projects
    if (projects.length <= projectsPerPage) {
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
        if (projectsList) {
            projectsList.innerHTML = generateProjectsHTML({ page: currentPage });
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

// Load and render markdown content
export async function loadProjectContent(markdownFile) {
    try {
        const isPagesDir = window.location.pathname.includes('/pages/');
        const prefix = isPagesDir ? '../' : '';
        const response = await fetch(prefix + markdownFile);
        const markdown = await response.text();
        return await renderMarkdownWithMarked(markdown);
    } catch (error) {
        console.error('Error loading project content:', error);
        return '<p>Error loading project content.</p>';
    }
}
