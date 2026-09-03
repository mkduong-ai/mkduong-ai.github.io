## Project Summary

**RAPP (Responsible Academic Performance Prediction)** is an interdisciplinary AI research and software engineering research project funded by the German Federal Ministry of Education and Research (**BMBF**, Project No. 16DHB4020, 2021–2024; [Official Website](https://rapp.hhu.de/en/)). 

The project delivered an end-to-end, socially responsible, and privacy-compliant machine learning platform designed to predict academic performance and identify student dropout risks at early semesters. By detecting risk factors, higher education institutions can provide preventive counseling for students. In simple terms, RAPP helps universities predict dropouts before they happen.

The engineering core of RAPP focused on solving the fundamental dilemmas of algorithmic fairness, ML opacity, and stakeholder trust in institutional AI systems:
1. **Bias Mitigation & Fair ML**: Developing algorithms that prevent discriminatory disparities across demographic subgroups (e.g., gender, nationality, socio-economic background).
2. **Explainable AI (xAI) & Rule Induction**: Delivering white-box models and counterfactual explanations of predictions that students and academic advisors can understand.
3. **MLOps & Decision Support Software**: Building production-grade open-source libraries, benchmarking GUI tools, and web dashboards for end users in universities.

---

## Software Developed

### 1. `fairdo` — Open-Source Python Library for Algorithmic Fairness
* **PyPI / GitHub**: [`github.com/mkduong-ai/fairdo`](https://github.com/mkduong-ai/fairdo) (Author & Core Maintainer)
* **Core Functionality**: A modular Python library specifically engineered to measure and mitigate algorithmic bias in tabular datasets.
* **Non-Binary & Intersectional Fairness**: While standard literature focuses almost exclusively on binary protected attributes, `fairdo` introduces novel pre-processing optimization techniques capable of handling **multi-categorical, non-binary, and multiple protected attributes** simultaneously without degrading predictive accuracy.
* **Optimization Techniques**: Implements data-driven sample reweighting, fairness-constrained sample removal, and synthetic data generation to equilibrate subgroup representations while maximizing data fidelity.
* **Standardized Fairness Metrics**: Built-in estimators for **Equalised Odds**, **Demographic Parity (Statistical Parity)**, **Disparate Impact**, and **Individual Fairness**.

### 2. RAPP-Tool — MLOps GUI & Multi-Objective Model Benchmarking Platform
* **Repository**: [github.com/hhu-rapp/rapp-tool](https://github.com/hhu-rapp/rapp-tool) (MIT License)
* **Dataset Generation & SQL Integration**: Provides an interactive desktop interface allowing researchers and data engineers to construct custom training datasets directly via SQL queries.
* **Automated Training & Evaluation Pipeline**: Automated training, hyperparameter tuning, and cross-validation across a diverse suite of machine learning models:
  * Decision Trees (CART, C4.5)
  * Random Forests & Gradient Boosted Trees
  * Multi-Layer Perceptrons (MLP / Neural Networks in PyTorch)
  * Support Vector Machines (SVM) & K-Nearest Neighbors (KNN)
  * Logistic Regression & Linear Regression
* **Pareto Frontier Optimization**: Visualizes multi-objective **Pareto Frontiers** (e.g., plotting *Balanced Accuracy* vs. *Equalised Odds Disparity*), enabling data scientists to quantitatively navigate the fairness-accuracy trade-off and select Pareto-optimal models for deployment.
* **Model Serialization & Export**: Standardized model artifact export for downstream deployment into production services.

### 3. RAPP WebApp — Decision Support Dashboard for Higher Education
* **Repository**: [github.com/hhu-rapp/rapp-webapp](https://github.com/hhu-rapp/rapp-webapp) (MIT License)
* **Target Audience**: Designed specifically for non-technical administrative users, including university study advisors (*Zentrale Studienberatung*), examination boards, and faculty deans.
* **Role-Based Access Control (RBAC)**: Secure authentication and granular permission management ensuring advisors only view authorized student cohorts and degree programs.
* **Cohort & Individual Analytics**: Visualizes demographic distributions, cohort-level ECTS progress trajectories, and comparative individual performance curves against historical degree cohorts.
* **Traffic-Light Early Warning System**: Flags at-risk students through automated risk scores (green/red indicators) tied to specific early-semester academic indicators (e.g., first-semester exam attempts and credit milestones).
* **Human-in-the-Loop Governance**: The AI system solely serves as a transparent decision-support aid. Administrative counselors retain full autonomy and must manually confirm at-risk flags before initiating outreach or supportive interventions, ensuring human accountability.

---

## ML-driven Decision Support System Pipeline

```
┌─────────────────────────────────────────────────────────┐
│          Relational Student Database & Surveys          │
│       (Pseudonymized Grades, ECTS, Sociodemographics)   │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 fairdo Pre-processing                   │
│   • Multi-Attribute Bias Measurement (Equalised Odds)   │
│   • Synthetic Data Generation & Sample Optimization     │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 RAPP-Tool MLOps Engine                  │
│   • Model Training (Decision Trees, SVM, MLP, ...)      │
│   • Multi-Objective Pareto-Front Optimization           │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│           Explainable AI (xAI) & Rule Induction         │
│   • White-box Decision Tree Branch Traversal            │
│   • Minimal Counterfactual Explanation Generation       │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│               RAPP WebApp Decision Support              │
│   • Role-Based Access Control (RBAC) & GDPR Security    │
│   • Traffic-Light Risk Scores + Human-in-the-Loop       │
└─────────────────────────────────────────────────────────┘
```

<!-- ### Worldview Formulation: WYSIWYG & Equalised Odds
* Conducted theoretical and empirical investigations into algorithmic fairness worldviews (*"We're All Equal"* vs. *"What You See Is What You Get"*).
* Proved that in university performance prediction, prior examination records are already established administrative facts. Under this formulation, adopting the **WYSIWYG** worldview and optimizing for **Equalised Odds** mathematically prevents the inadvertent introduction of reverse discrimination. -->

### White-Box Interpretable Models & Counterfactuals
* Rather than relying on opaque deep neural networks paired with unstable post-hoc approximations (such as LIME or SHAP, which can obscure critical biases), RAPP prioritized **inherently interpretable Decision Trees**.
* **Rule Induction**: Extracted transparent if-then decision paths from tree branches, showing users the exact criteria leading to a risk score.
* **Counterfactual Explanations**: Calculated minimal actionable feature adjustments (e.g., *"Earning 12 additional ECTS in Semester 2 shifts the prediction from at-risk to on-track"*).
* Empirical benchmark results demonstrated that Decision Trees consistently matched or outperformed complex black-box classifiers while remaining on the Pareto frontier for both Balanced Accuracy and fairness metrics.

### Key Target Variables Modeled
1. **Student Dropout Risk (*Studienabbruch*)**: Binary classification predicting non-completion based on 1st/2nd semester performance.
2. **On-Time Graduation (*Regelstudienzeit*)**: Classification of degree completion within standard curriculum duration.
3. **Credit Milestone (>100 ECTS by Semester 4)**: Intermediate progression milestone prediction.
4. **Master's Program Admission (*MA-Zulassung*)**: Predicting qualification for consecutive graduate studies.
5. **Final Degree Grade (*Bachelor-Abschlussnote*)**: Continuous regression modeling via Linear Regression (MSE < 0.08 in Social Sciences, MSE < 0.27 in CS).

---

## Data Engineering, Privacy & GDPR Governance

* **Longitudinal Data Harmonization**: Engineered a secure data pipeline merging pseudonymized administrative examination records from Heinrich Heine University Düsseldorf with 3 waves of longitudinal socio-demographic surveys (150+ variables covering educational background, social capital, commuter times, self-efficacy, and study intentions).
* **Privacy by Design & GDPR Compliance**: Worked directly with university Data Protection Officers (*Datenschutzbeauftragte*) to formulate strict data governance protocols, pseudonymization keys, and encrypted storage deployed exclusively on EU-based university infrastructure.

---

## Interdisciplinary Collaboration & Stakeholder Leadership

The RAPP project was structured across three collaborative work packages:
* **AP1 (Computer Science — Core Development & Modeling)**: Led model training, fairness algorithms, xAI rule induction, `fairdo`, RAPP-Tool, and RAPP WebApp.
* **AP2 (Sociology — Ethical Requirements & Data Gathering)**: Conducted 35+ qualitative expert interviews with university stakeholders and executed 3 survey waves of students.
* **AP3 (Communication Science — Fairness Perception & Experiments)**: Developed a multidimensional scale for perceived algorithmic fairness and conducted randomized field experiments.

Conducted structured stakeholder workshops with university leadership (Vice-President for Teaching, Central Student Advisory Service, Deans of Studies, and Student Council representatives) to gather operational requirements and align software capabilities with real institutional workflows.

---

## Peer-Reviewed Publications & Research Output

The methodologies and software developed in RAPP were presented and published in international peer-reviewed venues:

* **BTW 2023**: *RAPP: A Responsible Academic Performance Prediction Tool for Decision-Making in Educational Institutes* — Duong, M. K., Dunkelau, J., Cordova, J. A., Conrad, S.
* **DaWaK 2023 (Springer LNCS)**: *Dealing with Data Bias in Classification: Can Generated Data Ensure Representation and Fairness?* — Duong, M. K., Conrad, S.
* **AusDM 2023 (Springer CCIS)**: *Towards Fairness and Privacy: A Novel Data Pre-processing Optimization Framework for Non-binary Protected Attributes* — Duong, M. K., Conrad, S.
* **ECAI 2024 (IOS Press)**: *(Un)certainty of (Un)fairness: Preference-Based Selection of Certainly Fair Decision-Makers* — Duong, M. K., Conrad, S.
* **AEQUITAS 2024 (CEUR)**: *Measuring and Mitigating Bias for Tabular Datasets with Multiple Protected Attributes* — Duong, M. K., Conrad, S.
* **DaWaK 2024 (Springer LNCS)**: *Trusting Fair Data: Leveraging Quality in Fairness-Driven Data Removal Techniques* — Duong, M. K., Conrad, S.
* **FATED @ EDM 2022**: *Towards Equalised Odds as Fairness Metric in Academic Performance Prediction* — Dunkelau, J., Duong, M. K.

---
<!-- 
## Recruiter & Technical Keyword Matrix

| Competency Area | Keywords & Technologies |
| :--- | :--- |
| **Responsible AI & Fair ML** | Algorithmic Fairness, Bias Mitigation, FairML, Equalised Odds, Demographic Parity, Disparate Impact, Multi-Attribute Bias, Pre-processing Optimization, Synthetic Data Generation |
| **Explainable AI (xAI)** | Interpretable Machine Learning, White-Box Modeling, Decision Trees, Rule Induction, Counterfactual Explanations, Feature Importance, Model Auditing |
| **Machine Learning & Modeling** | Supervised Learning, Classification & Regression, Multi-Objective Pareto Optimization, Scikit-learn, PyTorch, Random Forests, SVM, KNN, Linear Regression |
| **Software & Open Source** | Python, `pip`/PyPI Packaging (`fairdo`), GUI Desktop App Development, Full-Stack Web Development, Materialize CSS, RESTful APIs, Git, Docker, CI/CD |
| **Data Engineering & Databases** | SQL, Relational Database Modeling, PostgreSQL, Pandas, NumPy, Data Pipeline Architecture, Longitudinal Data Processing, Pseudonymization |
| **Governance & Leadership** | BMBF Research Grant Delivery, GDPR / Privacy by Design, Human-in-the-Loop (HITL), Stakeholder Requirements Engineering, Peer-Reviewed Scientific Publishing | -->

## References & Links

* **Official Project Website**: [rapp.hhu.de/en/](https://rapp.hhu.de/en/)
* **Project Team**: [rapp.hhu.de/en/team](https://rapp.hhu.de/en/team)
* **Final Project Report (Abschlussbericht PDF)**: [rapp.hhu.de/Abschlussbericht.pdf](https://rapp.hhu.de/Abschlussbericht.pdf)
* **`fairdo` GitHub Repository**: [github.com/mkduong-ai/fairdo](https://github.com/mkduong-ai/fairdo)
* **RAPP-Tool GitHub Repository**: [github.com/hhu-rapp/rapp-tool](https://github.com/hhu-rapp/rapp-tool)
* **RAPP-WebApp GitHub Repository**: [github.com/hhu-rapp/rapp-webapp](https://github.com/hhu-rapp/rapp-webapp)