// Projects data configuration
const projects = [
    {
        id: 'object-detection',
        title: 'Real-time Object Detection',
        description: 'Developed a YOLO-based object detection system achieving 95% accuracy with real-time processing capabilities.',
        detailedDescription: `
            <h2>Project Overview</h2>
            <p>Developed a state-of-the-art real-time object detection system using YOLO (You Only Look Once) architecture, achieving 95% accuracy while maintaining processing speeds of 30+ FPS on standard hardware.</p>
            
            <h2>Key Technologies</h2>
            <ul>
                <li>YOLOv5 architecture with custom modifications</li>
                <li>PyTorch for model training and inference</li>
                <li>OpenCV for video processing and visualization</li>
                <li>CUDA for GPU acceleration</li>
                <li>Docker for deployment containerization</li>
            </ul>
            
            <h2>Challenges & Solutions</h2>
            <p><strong>Challenge:</strong> Balancing accuracy with real-time performance requirements.</p>
            <p><strong>Solution:</strong> Implemented model quantization and pruning techniques, reducing model size by 40% while maintaining accuracy within 2% of the original model.</p>
            
            <p><strong>Challenge:</strong> Handling varying lighting conditions and occlusions.</p>
            <p><strong>Solution:</strong> Augmented training data with synthetic lighting variations and implemented multi-scale detection to improve robustness.</p>
            
            <h2>Outcomes</h2>
            <ul>
                <li>Deployed in production serving 1M+ daily detections</li>
                <li>Reduced false positive rate by 60% compared to previous system</li>
                <li>Processing latency under 33ms per frame</li>
                <li>Successfully integrated with existing surveillance infrastructure</li>
            </ul>
        `,
        image: 'https://via.placeholder.com/400x200/2196F3/ffffff?text=Computer+Vision',
        tags: ['Computer Vision', 'YOLO', 'Real-time Processing'],
        technologies: ['Python', 'PyTorch', 'OpenCV', 'CUDA', 'Docker']
    },
    {
        id: 'sentiment-analysis',
        title: 'Sentiment Analysis API',
        description: 'Built a BERT-based sentiment analysis service processing 10K+ requests daily with 92% accuracy.',
        detailedDescription: `
            <h2>Project Overview</h2>
            <p>Designed and deployed a production-grade sentiment analysis API using BERT transformers, processing over 10,000 requests daily with 92% accuracy across multiple domains including social media, customer reviews, and support tickets.</p>
            
            <h2>Key Technologies</h2>
            <ul>
                <li>BERT (Bidirectional Encoder Representations from Transformers)</li>
                <li>FastAPI for high-performance API endpoints</li>
                <li>Redis for caching and rate limiting</li>
                <li>PostgreSQL for analytics storage</li>
                <li>Kubernetes for orchestration and auto-scaling</li>
            </ul>
            
            <h2>Challenges & Solutions</h2>
            <p><strong>Challenge:</strong> Meeting sub-second response time requirements under high load.</p>
            <p><strong>Solution:</strong> Implemented intelligent caching strategy with Redis, achieving 70% cache hit rate and reducing average response time to 150ms.</p>
            
            <p><strong>Challenge:</strong> Handling domain-specific language and slang.</p>
            <p><strong>Solution:</strong> Fine-tuned BERT on domain-specific datasets and implemented continuous learning pipeline to adapt to emerging language patterns.</p>
            
            <h2>Outcomes</h2>
            <ul>
                <li>Processing 10K+ requests daily with 99.9% uptime</li>
                <li>92% accuracy across diverse text domains</li>
                <li>Average response time of 150ms (p95: 300ms)</li>
                <li>Enabled real-time customer feedback analysis for 3 major clients</li>
            </ul>
        `,
        image: 'https://via.placeholder.com/400x200/FF9800/ffffff?text=NLP',
        tags: ['NLP', 'BERT', 'API Development'],
        technologies: ['Python', 'BERT', 'FastAPI', 'Redis', 'Kubernetes']
    },
    {
        id: 'recommendation-engine',
        title: 'Recommendation Engine',
        description: 'Created a collaborative filtering system that increased user engagement by 35% for an e-commerce platform.',
        detailedDescription: `
            <h2>Project Overview</h2>
            <p>Built a sophisticated recommendation engine using collaborative filtering and matrix factorization techniques, resulting in a 35% increase in user engagement and 22% boost in conversion rates for a major e-commerce platform.</p>
            
            <h2>Key Technologies</h2>
            <ul>
                <li>Matrix Factorization (SVD, ALS)</li>
                <li>Apache Spark for distributed computing</li>
                <li>TensorFlow for deep learning models</li>
                <li>Elasticsearch for real-time search and filtering</li>
                <li>AWS infrastructure (EMR, S3, Lambda)</li>
            </ul>
            
            <h2>Challenges & Solutions</h2>
            <p><strong>Challenge:</strong> Cold start problem for new users and items.</p>
            <p><strong>Solution:</strong> Developed hybrid approach combining collaborative filtering with content-based features, achieving 80% accuracy for new users within first 5 interactions.</p>
            
            <p><strong>Challenge:</strong> Scaling to millions of users and products.</p>
            <p><strong>Solution:</strong> Implemented distributed training with Apache Spark and incremental model updates, reducing training time from 12 hours to 45 minutes.</p>
            
            <h2>Outcomes</h2>
            <ul>
                <li>35% increase in user engagement metrics</li>
                <li>22% improvement in conversion rates</li>
                <li>Serving 5M+ personalized recommendations daily</li>
                <li>Reduced customer churn by 18%</li>
            </ul>
        `,
        image: 'https://via.placeholder.com/400x200/4CAF50/ffffff?text=Recommendation',
        tags: ['Recommendation Systems', 'Collaborative Filtering', 'E-commerce'],
        technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Elasticsearch', 'AWS']
    },
    {
        id: 'portfolio-analyzer',
        title: 'AI-Powered Portfolio Analyzer',
        description: 'Developed an intelligent portfolio analysis tool using machine learning to provide personalized investment insights and risk assessments.',
        detailedDescription: `
            <h2>Project Overview</h2>
            <p>Created an AI-powered portfolio analysis platform that leverages machine learning algorithms to provide personalized investment insights, risk assessments, and optimization recommendations. The system analyzes historical data, market trends, and user preferences to deliver actionable investment strategies.</p>
            
            <h2>Key Technologies</h2>
            <ul>
                <li>Scikit-learn for portfolio optimization algorithms</li>
                <li>Prophet for time series forecasting</li>
                <li>React for interactive dashboard</li>
                <li>D3.js for advanced data visualizations</li>
                <li>PostgreSQL with TimescaleDB for time-series data</li>
            </ul>
            
            <h2>Challenges & Solutions</h2>
            <p><strong>Challenge:</strong> Accurately predicting market volatility and risk metrics.</p>
            <p><strong>Solution:</strong> Implemented ensemble methods combining GARCH models, Monte Carlo simulations, and machine learning predictions, improving risk forecast accuracy by 40%.</p>
            
            <p><strong>Challenge:</strong> Providing real-time portfolio rebalancing recommendations.</p>
            <p><strong>Solution:</strong> Developed efficient optimization algorithms using modern portfolio theory with custom constraints, executing in under 2 seconds for portfolios with 100+ assets.</p>
            
            <h2>Outcomes</h2>
            <ul>
                <li>Analyzed 500+ portfolios with combined value of $50M+</li>
                <li>Average portfolio optimization improved Sharpe ratio by 0.3</li>
                <li>Reduced portfolio risk by 15% while maintaining target returns</li>
                <li>User satisfaction score of 4.7/5.0</li>
            </ul>
        `,
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
                    <a href="project-detail.html?id=${project.id}" class="blue-text">View Details</a>
                </div>
            </div>
        </div>
    `).join('\n\n');
}

// Get project by ID
export function getProjectById(id) {
    return projects.find(project => project.id === id);
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
