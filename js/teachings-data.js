// Teachings and Supervised Theses Data Module

export const courses = [
    {
        id: 'fair-ml',
        title: 'Fairness in Machine Learning',
        titleDe: 'Fairness in Machine Learning',
        semesters: ['SS 2026', 'SS 2025'],
        semester: 'SS 2026, SS 2025',
        level: 'Master',
        role: 'Lecturer / Course Creator',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Advanced graduate course introducing AI regulations, mathematical fairness definitions, and algorithms for bias mitigation.',
        topics: [
            'AI Act & Regulatory Frameworks',
            'Fairness Criteria (Group, Individual, Causality-based)',
            'Fairness Metrics',
            'Algorithmic Decision-Making (Pareto Fronts, Selection Methods)',
            'Bias Mitigation (Pre-, In-, Post-processing)',
            'Fair Ranking',
            'Bayesian Statistics & Uncertainty',
            'Social Choice Theory'
        ],
        icon: 'balance'
    },
    {
        id: 'nlp',
        title: 'Natural Language Processing',
        titleDe: 'Natural Language Processing',
        semesters: ['WS 2025'],
        semester: 'WS 2025',
        level: 'Master',
        role: 'Lecturer',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Comprehensive graduate course on computational linguistics, modern language models, and deep learning architectures for text processing and generation.',
        topics: [
            'Language Detection',
            'Part-of-Speech (POS) Tagging',
            'Named Entity Recognition (NER)',
            'Text Classification & Sentiment Analysis',
            'Word & Contextual Embeddings',
            'Text Generation',
            'Transformer Architectures & LLMs',
            'Neural Machine Translation',
            'Text Summarization'
        ],
        icon: 'translate'
    },
    {
        id: 'db-advanced',
        title: 'Databases: Advanced Topics',
        titleDe: 'Datenbanken: Weiterführende Konzepte',
        semesters: ['WS 2024'],
        semester: 'WS 2024',
        level: 'Bachelor / Master',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Advanced concepts in enterprise data management, hands-on fullstack application architecture, database internals, and modern web services.',
        topics: [
            'PostgreSQL Administration & Advanced Features',
            'DDL & DML Complex Operations',
            'Database Security & SQL Injection Prevention',
            'Java Database Connectivity (JDBC)',
            'Spring Boot Architecture & RESTful APIs',
            'Docker Containerization & Deployment',
            'Fullstack Integration (HTML/CSS/JS with DB)'
        ],
        icon: 'dns'
    },
    {
        id: 'kdd',
        title: 'Knowledge Discovery in Databases (KDD)',
        titleDe: 'Knowledge Discovery in Databases',
        semesters: ['SS 2024'],
        semester: 'SS 2024',
        level: 'Bachelor / Master',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Theory and practical application of data mining pipelines, pattern extraction algorithms, machine learning models, and high-dimensional analysis.',
        topics: [
            'Clustering (K-Means++, DBSCAN, Hierarchical, Subspace)',
            'Anomaly & Outlier Detection Methods',
            'Supervised Classifiers (Naive Bayes, Decision Trees, k-NN, SVM)',
            'Association Rule Mining (Apriori, FP-Growth)',
            'Efficient Multidimensional Indexing',
            'Feature Extraction & Dimensionality Reduction'
        ],
        icon: 'bubble_chart'
    },
    {
        id: 'db-intro',
        title: 'Introduction to Database Systems',
        titleDe: 'Einführung in Datenbanksysteme',
        semesters: ['SS 2024', 'WS 2020', 'WS 2019'],
        semester: 'SS 2024, WS 2020, WS 2019',
        level: 'Bachelor',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Core undergraduate lecture and lab covering relational database theory, conceptual modeling, standard SQL, and transaction processing.',
        topics: [
            'Entity-Relationship (ER) & Relational Modeling',
            'Relational Algebra & Relational Calculus',
            'Standard SQL (DDL, DML, DQL, Constraints)',
            'Database Normalization (1NF, 2NF, 3NF, BCNF)',
            'Transaction Management & ACID Guarantees',
            'B-Tree Indexing & Physical Data Organization'
        ],
        icon: 'storage'
    },
    {
        id: 'db-rel',
        title: 'Relational Databases and Data Analysis',
        titleDe: 'Relational Databases and Data Analysis',
        semesters: ['WS 2020'],
        semester: 'WS 2020',
        level: 'Bachelor / Master',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Hands-on practical course bridging relational database systems with analytical pipelines, aggregations, and business intelligence queries.',
        topics: [
            'Complex Analytical SQL Queries',
            'Relational Schema Design & Normalization',
            'Aggregation & Window Functions',
            'Data Transformation & ETL Pipelines',
            'Data Analysis Integration with Python & SQL'
        ],
        icon: 'analytics'
    },
    {
        id: 'theo',
        title: 'Theoretical Computer Science',
        titleDe: 'Theoretische Informatik',
        semesters: ['SS 2020'],
        semester: 'SS 2020',
        level: 'Bachelor',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Formal foundations of computing, automata theory, formal languages, computability, and computational complexity.',
        topics: [
            'Finite Automata (DFA, NFA) & Regular Languages',
            'Context-Free Grammars & Pushdown Automata',
            'Turing Machines & Computability',
            'The Halting Problem & Decidability',
            'Complexity Theory (P, NP, NP-Completeness, Reductions)'
        ],
        icon: 'psychology'
    },
    {
        id: 'vorkurs',
        title: 'Preparatory Course: Computer Science',
        titleDe: 'Vorkurs Informatik',
        semesters: ['WS 2020', 'SS 2020', 'WS 2019'],
        semester: 'WS 2020, SS 2020, WS 2019',
        level: 'Preparatory',
        role: 'Tutor',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Preparatory orientation course for first-semester students introducing programming principles, algorithms, and mathematical problem-solving.',
        topics: [
            'Introductory Programming & Control Flow',
            'Algorithmic Problem Solving',
            'Discrete Mathematics & Mathematical Induction',
            'Basic Data Structures'
        ],
        icon: 'school'
    },
    {
        id: 'num',
        title: 'Numerical Methods',
        titleDe: 'Numerik',
        semesters: ['SS 2019'],
        semester: 'SS 2019',
        level: 'Bachelor',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Numerical algorithms for scientific computing, matrix equations, interpolation, and computational stability analysis.',
        topics: [
            'Numerical Linear Algebra (LU, Cholesky, QR)',
            'Root-Finding Algorithms (Newton-Raphson, Secant)',
            'Polynomial & Spline Interpolation',
            'Numerical Differentiation & Quadrature',
            'Conditioning, Stability & Floating Point Errors'
        ],
        icon: 'calculate'
    },
    {
        id: 'la',
        title: 'Computational Linear Algebra',
        titleDe: 'Computergestützte Lineare Algebra',
        semesters: ['WS 2018'],
        semester: 'WS 2018',
        level: 'Bachelor',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Linear algebra from both rigorous theoretical and practical algorithmic computation perspectives.',
        topics: [
            'Vector Spaces, Subspaces & Basis Transformations',
            'Linear Equations Systems & Gaussian Elimination',
            'Matrix Factorizations (LU, QR, Singular Value Decomposition)',
            'Eigenvalues, Eigenvectors & Spectral Theorems',
            'Computational Implementation of Linear Algebra Routines'
        ],
        icon: 'view_in_ar'
    },
    {
        id: 'rndb',
        title: 'Computer Networks, Databases & Operating Systems',
        titleDe: 'Einführung in Rechnernetze, Datenbanken und Betriebssysteme',
        semesters: ['SS 2018', 'SS 2017'],
        semester: 'SS 2018, SS 2017',
        level: 'Bachelor',
        role: 'Teaching Assistant',
        institution: 'Heinrich Heine University Düsseldorf',
        description: 'Broad systems fundamentals introducing networking protocols, relational database management, and operating system mechanics.',
        topics: [
            'ISO/OSI Reference Model & TCP/IP Stack',
            'Network Protocols, Routing & Socket Basics',
            'Relational Database Modeling & Basic SQL',
            'Process Management, Scheduling & Concurrency',
            'Memory Management & File Systems'
        ],
        icon: 'hub'
    }
];

export const theses = [
    // Ongoing Theses (Laufende Themen)
    {
        id: 'ongoing-proj-1',
        title: 'Trading Multiple Stocks with Reinforcement Learning',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Ongoing',
        statusDe: 'Laufendes Thema',
        category: 'Reinforcement Learning / Finance',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Reinforcement Learning', 'Multi-Asset Trading', 'Algorithmic Trading']
    },

    // Master Theses (Abgeschlossene Masterarbeiten)
    {
        id: 'master-1',
        title: 'Approaching Multimodal Embeddings for Tabular Data and Text',
        degree: 'Master Thesis',
        degreeCategory: 'Master',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Deep Learning / NLP',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Multimodal AI', 'Tabular Data', 'Embeddings', 'NLP', 'Transformers']
    },
    {
        id: 'master-2',
        title: 'Debiasing Text-to-Image Generative Models',
        degree: 'Master Thesis',
        degreeCategory: 'Master',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Generative AI',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Generative AI', 'Diffusion Models', 'Debiasing', 'Fair ML', 'Computer Vision']
    },
    {
        id: 'master-3',
        title: 'Gaining Insights Into Terroristic Events Through Fairness-Aware Machine Learning Approaches Based On The GTD',
        degree: 'Master Thesis',
        degreeCategory: 'Master',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Fair ML / High-Stakes Decision Making',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fair ML', 'Global Terrorism Database (GTD)', 'High-Stakes AI', 'Bias Mitigation']
    },

    // Bachelor Theses (Abgeschlossene Bachelorarbeiten)
    {
        id: 'ba-portfolio-rl',
        title: 'Portfolio Management with Reinforcement Learning Agents',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Reinforcement Learning / Finance',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Reinforcement Learning', 'Quantitative Finance', 'Portfolio Optimization', 'Deep RL']
    },
    {
        id: 'ba-1',
        title: 'Time Series Analysis for Outlier Detection Using Statistical Models',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Time Series / Statistics',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Time Series', 'Outlier Detection', 'Statistical Modeling', 'Anomaly Detection']
    },
    {
        id: 'ba-2',
        title: 'OpenUI5 Dashboard for Predictive Analytics Applications',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Fullstack / Analytics',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['OpenUI5', 'Dashboards', 'Predictive Analytics', 'Web Development']
    },
    {
        id: 'ba-3',
        title: 'Comparing Portfolio Optimization Strategies: Quadratic Programming and Reinforcement Learning',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Quantitative Finance / Optimization',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Portfolio Optimization', 'Quadratic Programming', 'Reinforcement Learning', 'Finance']
    },
    {
        id: 'ba-4',
        title: 'Development of an iOS Alarm Clock App with Dynamic Wake-Up Functionality',
        titleDe: 'Entwicklung einer Wecker-App für iOS mit dynamischer Weckfunktion',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Mobile Computing',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['iOS App Development', 'Dynamic Scheduling', 'Swift', 'Mobile Systems']
    },
    {
        id: 'ba-5',
        title: 'Development and Validation of Classification Models for Extracting Defect Descriptions from PDF Documents',
        titleDe: 'Entwicklung und Validierung von Klassifikationsmodellen für die Extraktion von Mängelbeschreibungen aus PDF-Dokumenten',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'NLP / Document AI',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['NLP', 'PDF Extraction', 'Document AI', 'Classification']
    },
    {
        id: 'ba-6',
        title: 'Development and Evaluation of Fair AI Systems: Strategies to Mitigate Bias in Intersectional Groups',
        titleDe: 'Entwicklung und Bewertung fairer KI-Systeme: Strategien zur Überwindung von Bias von intersektionalen Gruppen',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Fairness',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fair ML', 'Intersectional Fairness', 'Bias Mitigation', 'Responsible AI']
    },
    {
        id: 'ba-7',
        title: 'Advanced Study of Genetic Algorithms and Penalty Mechanisms: Towards a Fairer Data Preprocessing Framework',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Combinatorial Optimization / Fairness',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Genetic Algorithms', 'Penalty Functions', 'Fair Preprocessing', 'Optimization']
    },
    {
        id: 'ba-8',
        title: 'Quantifying Dependency for Fairness: Assessing the Independence of Labels from Protected Attributes in Datasets',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Statistics',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fairness Metrics', 'Statistical Independence', 'Protected Attributes', 'Dataset Auditing']
    },
    {
        id: 'ba-9',
        title: 'Backtesting Trading Strategies',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Quantitative Finance',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Backtesting', 'Trading Strategies', 'Financial Modeling', 'Risk Assessment']
    },
    {
        id: 'ba-10',
        title: 'Fairness Metrics for Datasets',
        titleDe: 'Fairness Metriken für Datensätze',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Fairness',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fairness Metrics', 'Data Auditing', 'Demographic Parity', 'Dataset Evaluation']
    },
    {
        id: 'ba-11',
        title: 'Investigation of Statistically Occurring Group Discrimination on Synthetic Data',
        titleDe: 'Untersuchung von statistisch vorkommender Gruppendiskriminierung auf künstlichen Daten',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Synthetic Data',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Synthetic Data', 'Group Discrimination', 'Fair ML', 'Statistical Analysis']
    },
    {
        id: 'ba-12',
        title: 'Comparing Bias Mitigation Methods for Machine Learning',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Fairness',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Bias Mitigation', 'Comparative Benchmark', 'In-Processing', 'Pre-Processing', 'Post-Processing']
    },
    {
        id: 'ba-13',
        title: 'Prediction and Analysis of Heart Attacks Using Explainable Machine Learning Models',
        titleDe: 'Prädiktion und Analyse von Herzinfarkten mit Hilfe von erklärbaren Machine Learning Modellen',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Healthcare AI / Explainability',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Healthcare AI', 'Explainable AI (xAI)', 'Cardiovascular Disease', 'SHAP / Rule Induction']
    },
    {
        id: 'ba-14',
        title: 'Fairness-Aware Machine Learning: Student Performance Prediction Based on Demographic Data',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Educational Data Mining',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fair ML', 'Student Performance Prediction', 'Demographic Data', 'Educational AI']
    },
    {
        id: 'ba-15',
        title: 'Explainable AI: Predicting Students’ Academic Performance',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Explainable AI / Educational Data Mining',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Explainable AI (xAI)', 'Student Success', 'Rule Induction', 'Interpretable ML']
    },
    {
        id: 'ba-16',
        title: 'Explainable AI on Machine Learning-assisted Diagnosis for Knee MRI Scans',
        degree: 'Bachelor Thesis',
        degreeCategory: 'Bachelor',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Medical AI / Computer Vision',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Medical Imaging', 'MRI Analysis', 'Explainable AI (xAI)', 'Deep Learning']
    },

    // Project Works (Abgeschlossene Projektarbeiten)
    {
        id: 'proj-1',
        title: 'Development of a Web Application for Fairness Evaluation of Text-to-Image Models',
        titleDe: 'Entwicklung einer Webanwendung für die Evaluation von Text-zu-Bild Modelle auf Fairness',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Web Development',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Web Application', 'Text-to-Image AI', 'Generative AI', 'Fairness Evaluation']
    },
    {
        id: 'proj-2',
        title: 'Fair Dimensionality Reduction Methods',
        titleDe: 'Faire Dimensionsreduktionsmethoden',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Representation Learning',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fair Representation', 'Dimensionality Reduction', 'PCA', 'Unsupervised Fair ML']
    },
    {
        id: 'proj-3',
        title: 'Comparison of Various Fairness Criteria in Predicting Student Academic Performance',
        titleDe: 'Vergleich von verschiedenen Fairness Kriterien in Bezug auf die Vorhersage studentischer Leistungen',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Responsible AI / Educational Data Mining',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Fairness Criteria', 'Comparative Study', 'Student Success', 'Benchmarking']
    },
    {
        id: 'proj-4',
        title: 'Meta-Comparison of Feature Importance in Student Academic Performance Prediction Across Multiple Datasets',
        titleDe: 'Meta Vergleich von Feature Importance in Bezug auf die Vorhersage studentischer Leistungen anhand mehrerer Datensätze',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Explainable AI / Meta-Analysis',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Feature Importance', 'Meta-Analysis', 'Explainable AI', 'Multi-Dataset Study']
    },
    {
        id: 'proj-social-welfare',
        title: 'Reinforcement Learning Agents for Social Welfare',
        degree: 'Project Work',
        degreeCategory: 'Project',
        status: 'Completed',
        statusDe: 'Abgeschlossen',
        category: 'Multi-Agent Systems / Social Choice',
        institution: 'Heinrich Heine University Düsseldorf',
        tags: ['Multi-Agent Systems', 'Social Welfare', 'Reinforcement Learning', 'Mechanism Design']
    }
];
