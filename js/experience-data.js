// Experience data configuration
const experiences = [
    {
        title: 'University Lecturer / PostDoc Researcher',
        company: 'Heinrich Heine University Düsseldorf, Germany',
        link: 'https://dbs.cs.uni-duesseldorf.de/mitarbeiter.php?id=duong',
        period: 'Apr 2025 - Present',
        responsibilities: [
            'Introducing and lecturing a new course <i>Fairness in Machine Learning (Fair ML)</i> for the AI & Data Science master study program',
            'Creating new slides and exercises from scratch for <i>Fair ML</i>: AI Act, Fairness Criteria, Fairness Metrics, Optimization, Bias Mitigation Methods, Fair Ranking, Bayesian Statistics, Social Choice Theory',
            'Conducting research in the field of algorithmic fairness in machine learning',
            'Publishing research papers in international conferences',
            'Writing grant proposals to fund research projects',
            'Teaching <i>Natural Language Processing</i>: Part-of-Speech Tagging, Named Entity Recognition, Text Classification, Sentiment Analysis, Machine Translation, Text Summarization, Word Embeddings, Text Generation',
            'Teaching <i>Knowledge Discovery in Databases</i>: Clustering, DBSCAN, K-Means++, Hierarchical Clustering, Outlier Detection, Naive Bayes, Decision Trees, Nearest Neighbors, SVM, Association Rule Mining, Subspace Clustering, Efficient Indexing'
        ],
        keywords: ['Fair ML', 'Natural Language Processing', 'Research', 'Teaching', 'Python', 'NumPy', 'CVXPY', 'PyTorch']
    },
    {
        title: 'Co-Founder',
        company: 'Denki Health GbR, Bochum, Germany',
        link: 'https://www.denkihealth.de/',
        period: 'Dec 2025 - Mar 2026',
        responsibilities: [
            'Developing business plan for fundraising',
            'Consulting where and how to use AI for the company to improve user experience',
            'Pitching the company to potential investors'
        ],
        keywords: ['Fundraising', 'Business Plan', 'Consulting', 'AI', 'Healthcare']
    },
    {
        title: 'External Machine Learning Consultant',
        company: 'Dive connected GmbH, Wuppertal, Germany',
        link: 'https://www.divesquared.com/',
        period: 'Dec 2024 - Oct 2025',
        responsibilities: [
            'Cooperation with Dive connected GmbH to develop a fair job matching platform using machine learning',
            'Participated in the <a href="https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Artikel/Innovation/igp.html" target="_blank">BMWE Innovation Program (2025)</a> to receive funding for the project',
            'Co-wrote the business plan, including objectives, methodology, and expected impact',
            'Supported the strategic planning and financial justification for the proposed project',
            'Ensured compliance with application criteria',
            'Developed and published a novel algorithm for fair ranking in <a href="https://link.springer.com/chapter/10.1007/978-3-032-02215-8_18" target="_blank">Big Data Analytics and Knowledge Discovery (2025)</a>',
        ],
        keywords: ['Business Plan', 'Strategic Planning', 'BMWE Innovation Program', 'Algorithmic Fairness', 'Machine Learning']
    },
    {
        title: 'PhD Candidate / Teaching Assistant (TA)',
        company: 'Heinrich Heine University Düsseldorf, Germany',
        link: 'https://dbs.cs.uni-duesseldorf.de/mitarbeiter.php?id=duong',
        period: 'Apr 2024 - Apr 2025',
        responsibilities: [
            'Conducting research in algorithmic fairness, operational research, optimization, heuristics, uncertainty modeling, and machine learning',
            'TA for <i>Databases: Advanced Topics</i>: PostgreSQL, DDL, DML, SQL Injection, Java Database Connectivity, Spring Boot, RESTful API, Docker, HTML, CSS',
            'TA for <i>Knowledge Discovery in Databases</i>: Clustering, DBSCAN, K-Means++, Hierarchical Clustering, Outlier Detection, Naive Bayes, Decision Trees, Nearest Neighbors, SVM, Association Rule Mining, Subspace Clustering, Efficient Indexing',
            'TA for <i>Introduction to Database Systems</i>: Entity-Relationship Model, Relational Databases, Normalization, SQL, DDL, DML, Transaction Management, ACID Properties',
        ],
        keywords: ['Research', 'Teaching', 'Fullstack Development', 'Docker', 'Databases', 'Clustering', 'Classification', 'Spring Boot', 'RESTful API']
    },
    {
        title: 'PhD Candidate / MLOps Engineer / Fullstack Developer',
        company: 'Heinrich Heine University Düsseldorf, Germany & Federal Ministry of Education and Research (BMBF)',
        link: 'https://rapp.hhu.de/',
        period: 'Mar 2021 - Mar 2024',
        responsibilities: [
            'Interdisciplinary research project on <i>Responsible Academic Performance Prediction</i> (RAPP) with social and political scientists and sociologists',
            'Developed an <a href="https://github.com/hhu-rapp/rapp-tool" target="_blank">MLOps GUI</a> collaboratively for training and evaluating ML models for various performance and fairness metrics',
            'Developed a <a href="https://github.com/hhu-rapp/rapp-webapp" target="_blank">dashboard (web app)</a> for data analysis and deployment of machine learning models to predict academic performances of students (Docker, Kubernetes, Flask)',
            'Developed a Flask web application using MariaDB and Docker for the <a href="https://rapp.hhu.de/" target="_blank">project website</a>',
            'Configured CI/CD pipelines on GitLab for test-driven development',
            'Aligning project goals with internal and external stakeholders',
            'Agile project management and team coordination (Scrum)',
            'Publishing and presenting research results at conferences',
            'Supervision of <a href="https://dbs.cs.uni-duesseldorf.de/mitarbeiter.php?id=duong" target="_blank">20+ Bachelor and Master theses</a>'
        ],
        keywords: ['Python', 'Scikit-learn', 'MLOps', 'PyQt5', 'Docker', 'Kubernetes', 'CI/CD', 'Scrum', 'Agile', 'Flask', 'MariaDB', 'JavaScript', 'RESTful API', 'Git']
    },
    {
        title: 'Startup Co-Founder',
        company: 'FitWorks, Düsseldorf, Germany',
        link: '#',
        period: 'Jul 2021 - Aug 2021',
        responsibilities: [
            'Participated in the <a href="https://app.ekipa.de/challenges/tech-for-future/timeline" target="_blank">Solve For Tomorrow Challenge</a> by Samsung Electronics Co., Ltd. & ekipa GmbH for fundraising',
            'Top-10 finalist among >150 teams',
            'Collaborated with a team of 3 to develop a startup',
            'Filmed a video pitch for our startup',
            'Pitched our startup to potential investors multiple times',
            'Developed a business plan for the startup',
            'Startup idea: App for smartwatches to predict heart disease risk'
        ],
        keywords: ['Elevator Pitch', 'Business Plan', 'Consulting', 'AI', 'Healthcare']
    }
    // {
    //     title: 'Research Scientist Intern',
    //     company: 'Global AI Institute',
    //     link: '#',
    //     period: 'Jun 2018 - Aug 2018',
    //     responsibilities: [
    //         'Researched novel attention mechanisms for transformer-based language models',
    //         'Implemented and evaluated multiple model architectures using PyTorch on large-scale text corpora',
    //         'Contributed to open-source ML frameworks with 200+ GitHub stars',
    //         'Presented research findings at internal seminars and contributed to 2 workshop papers',
    //         'Collaborated with cross-functional teams including data engineers and product managers'
    //     ],
    //     keywords: ['PyTorch', 'Transformers', 'NLP', 'Research', 'Python', 'Open Source']
    // },
    // {
    //     title: 'Data Science Intern',
    //     company: 'Analytics Solutions Inc',
    //     link: '#',
    //     period: 'May 2017 - Aug 2017',
    //     responsibilities: [
    //         'Developed predictive models for customer churn using scikit-learn and XGBoost, achieving 85% accuracy',
    //         'Created interactive dashboards using Tableau and Python for business stakeholders',
    //         'Performed exploratory data analysis on large datasets (10M+ records) using SQL and pandas',
    //         'Automated data preprocessing workflows, reducing manual effort by 40 hours per week',
    //         'Presented insights and recommendations to senior management team'
    //     ],
    //     keywords: ['Scikit-learn', 'XGBoost', 'SQL', 'Pandas', 'Tableau', 'Python', 'Data Analysis']
    // }
];

// Generate experience HTML
export function generateExperienceHTML() {
    return experiences.map((exp, index) => `
        <li>
            <div class="collapsible-header">
                <i class="material-icons">work</i>
                <div class="experience-header-content">
                    <strong>${exp.title}</strong>
                    ${exp.link ?
            `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="experience-company blue-text text-darken-2" onclick="event.stopPropagation()">${exp.company}</a>` :
            `<span class="experience-company">${exp.company}</span>`
        }
                    <span class="experience-date grey-text">${exp.period}</span>
                    <div class="experience-keywords">
                        ${exp.keywords.map(keyword => `<div class="chip">${keyword}</div>`).join('\n                        ')}
                    </div>
                </div>
                <i class="material-icons expand-icon">expand_more</i>
            </div>
            <div class="collapsible-body">
                <ul class="browser-default">
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('\n                    ')}
                </ul>
            </div>
        </li>
    `).join('\n\n');
}
