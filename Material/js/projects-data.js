// Projects data configuration
const projects = [
    {
        title: 'Real-time Object Detection',
        description: 'Developed a YOLO-based object detection system achieving 95% accuracy with real-time processing capabilities.',
        image: 'https://via.placeholder.com/400x200/2196F3/ffffff?text=Computer+Vision',
        link: '#',
        tags: ['Computer Vision', 'YOLO', 'Real-time Processing']
    },
    {
        title: 'Sentiment Analysis API',
        description: 'Built a BERT-based sentiment analysis service processing 10K+ requests daily with 92% accuracy.',
        image: 'https://via.placeholder.com/400x200/FF9800/ffffff?text=NLP',
        link: '#',
        tags: ['NLP', 'BERT', 'API Development']
    },
    {
        title: 'Recommendation Engine',
        description: 'Created a collaborative filtering system that increased user engagement by 35% for an e-commerce platform.',
        image: 'https://via.placeholder.com/400x200/4CAF50/ffffff?text=Recommendation',
        link: '#',
        tags: ['Recommendation Systems', 'Collaborative Filtering', 'E-commerce']
    }
];

// Generate projects HTML
export function generateProjectsHTML() {
    return projects.map(project => `
        <div class="col s12 m6 l4">
            <div class="card project-card">
                <div class="card-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="card-content">
                    <span class="card-title">${project.title}</span>
                    <p>${project.description}</p>
                    ${project.tags ? `
                    <div class="project-tags">
                        ${project.tags.map(tag => `<div class="chip">${tag}</div>`).join('\n                        ')}
                    </div>
                    ` : ''}
                </div>
                <div class="card-action">
                    <a href="${project.link}" class="blue-text">View Details</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}
