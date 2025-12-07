// Experience data configuration
const experiences = [
    {
        title: 'Senior Machine Learning Researcher',
        company: 'Advanced AI Research Lab',
        period: 'Jan 2022 - Present',
        responsibilities: [
            'Led a team of 5 researchers in developing novel deep learning architectures for computer vision tasks, achieving state-of-the-art results on ImageNet benchmark',
            'Published 8 papers in top-tier conferences (NeurIPS, ICML, CVPR) with over 500 citations',
            'Designed and implemented a scalable training pipeline using PyTorch and Ray, reducing training time by 60%',
            'Collaborated with industry partners to deploy research prototypes into production environments serving 1M+ users',
            'Mentored 3 PhD students and 2 postdoctoral researchers on advanced machine learning techniques'
        ],
        keywords: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Ray', 'Research', 'Team Leadership', 'Python']
    },
    {
        title: 'Machine Learning Engineer',
        company: 'Tech Innovation Corp',
        period: 'Jun 2019 - Dec 2021',
        responsibilities: [
            'Developed and deployed production-ready NLP models for sentiment analysis and text classification, processing 100K+ documents daily',
            'Built end-to-end ML pipelines using TensorFlow, Docker, and Kubernetes on AWS infrastructure',
            'Implemented A/B testing framework to evaluate model performance, resulting in 25% improvement in user engagement',
            'Optimized inference latency from 500ms to 50ms through model quantization and efficient serving strategies',
            'Conducted workshops and training sessions on ML best practices for engineering teams'
        ],
        keywords: ['TensorFlow', 'NLP', 'Docker', 'Kubernetes', 'AWS', 'MLOps', 'Python', 'A/B Testing']
    },
    {
        title: 'Research Scientist Intern',
        company: 'Global AI Institute',
        period: 'Jun 2018 - Aug 2018',
        responsibilities: [
            'Researched novel attention mechanisms for transformer-based language models',
            'Implemented and evaluated multiple model architectures using PyTorch on large-scale text corpora',
            'Contributed to open-source ML frameworks with 200+ GitHub stars',
            'Presented research findings at internal seminars and contributed to 2 workshop papers',
            'Collaborated with cross-functional teams including data engineers and product managers'
        ],
        keywords: ['PyTorch', 'Transformers', 'NLP', 'Research', 'Python', 'Open Source']
    },
    {
        title: 'Data Science Intern',
        company: 'Analytics Solutions Inc',
        period: 'May 2017 - Aug 2017',
        responsibilities: [
            'Developed predictive models for customer churn using scikit-learn and XGBoost, achieving 85% accuracy',
            'Created interactive dashboards using Tableau and Python for business stakeholders',
            'Performed exploratory data analysis on large datasets (10M+ records) using SQL and pandas',
            'Automated data preprocessing workflows, reducing manual effort by 40 hours per week',
            'Presented insights and recommendations to senior management team'
        ],
        keywords: ['Scikit-learn', 'XGBoost', 'SQL', 'Pandas', 'Tableau', 'Python', 'Data Analysis']
    }
];

// Generate experience HTML
export function generateExperienceHTML() {
    return experiences.map((exp, index) => `
        <li>
            <div class="collapsible-header">
                <i class="material-icons">work</i>
                <div class="experience-header-content">
                    <strong>${exp.title}</strong>
                    <span class="experience-company">${exp.company}</span>
                    <span class="experience-date grey-text">${exp.period}</span>
                    <div class="experience-keywords">
                        ${exp.keywords.map(keyword => `<div class="chip">${keyword}</div>`).join('\n                        ')}
                    </div>
                </div>
            </div>
            <div class="collapsible-body">
                <ul class="browser-default">
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('\n                    ')}
                </ul>
            </div>
        </li>
    `).join('\n\n');
}
