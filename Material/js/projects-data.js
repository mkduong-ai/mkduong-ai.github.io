import { renderMarkdownWithMarked } from './markdown-renderer.js';

// Projects data configuration
const projects = [
    {
        id: 'object-detection',
        title: 'Real-time Object Detection',
        description: 'Developed a YOLO-based object detection system achieving 95% accuracy with real-time processing capabilities.',
        markdownFile: 'projects/object-detection.md',
        image: 'https://via.placeholder.com/400x200/2196F3/ffffff?text=Computer+Vision',
        tags: ['Computer Vision', 'YOLO', 'Real-time Processing'],
        technologies: ['Python', 'PyTorch', 'OpenCV', 'CUDA', 'Docker']
    },
    {
        id: 'sentiment-analysis',
        title: 'Sentiment Analysis API',
        description: 'Built a BERT-based sentiment analysis service processing 10K+ requests daily with 92% accuracy.',
        markdownFile: 'projects/sentiment-analysis.md',
        image: 'https://via.placeholder.com/400x200/FF9800/ffffff?text=NLP',
        tags: ['NLP', 'BERT', 'API Development'],
        technologies: ['Python', 'BERT', 'FastAPI', 'Redis', 'Kubernetes']
    },
    {
        id: 'recommendation-engine',
        title: 'Recommendation Engine',
        description: 'Created a collaborative filtering system that increased user engagement by 35% for an e-commerce platform.',
        markdownFile: 'projects/recommendation-engine.md',
        image: 'https://via.placeholder.com/400x200/4CAF50/ffffff?text=Recommendation',
        tags: ['Recommendation Systems', 'Collaborative Filtering', 'E-commerce'],
        technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Elasticsearch', 'AWS']
    },
    {
        id: 'portfolio-analyzer',
        title: 'AI-Powered Portfolio Analyzer',
        description: 'Developed an intelligent portfolio analysis tool using machine learning to provide personalized investment insights and risk assessments.',
        markdownFile: 'projects/portfolio-analyzer.md',
        image: 'https://via.placeholder.com/400x200/9C27B0/ffffff?text=Portfolio+AI',
        tags: ['Machine Learning', 'Finance', 'Data Analysis'],
        technologies: ['Python', 'Scikit-learn', 'React', 'D3.js', 'PostgreSQL']
    }
];

// Current page for carousel
let currentPage = 0;
const projectsPerPage = 3;

// Generate projects HTML for current page
export function generateProjectsHTML(page = 0) {
    const start = page * projectsPerPage;
    const end = start + projectsPerPage;
    const visibleProjects = projects.slice(start, end);

    return visibleProjects.map(project => `
        <div class="col s12 m6 l4">
            <div class="card project-card">
                <div class="card-image">
                    <img src="${project.image}" alt="${project.title}">
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
                    <a href="../pages/project-detail.html?id=${project.id}" class="blue-text">View Details</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}

// Generate HTML for ALL projects (no pagination)
export function generateAllProjectsHTML() {
    return projects.map(project => `
        <div class="col s12 m6 l4">
            <div class="card project-card">
                <div class="card-image">
                    <img src="${project.image}" alt="${project.title}">
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
                    <a href="../pages/project-detail.html?id=${project.id}" class="blue-text">View Details</a>
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
            projectsList.innerHTML = generateProjectsHTML(currentPage);
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
        const response = await fetch('../' + markdownFile);
        const markdown = await response.text();
        return await renderMarkdownWithMarked(markdown);
    } catch (error) {
        console.error('Error loading project content:', error);
        return '<p>Error loading project content.</p>';
    }
}
