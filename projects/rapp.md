## Project Overview
The Responsible Academic Performance Prediction (RAPP) project aimed to enable the socially acceptable use of AI for Academic Performance Prediction (APP) at universities, e.g., predicting dropout risk, grades, study duration, etc. The core goal was to overcome stakeholders' concerns by researching ethical implications, developing bias mitigation strategies, and deploying transparent AI models. By predicting academic performances, preventive measures can be taken to support students.

## Key Technologies

- Python
- PyTorch
- CUDA
- Docker

## Challenges & Solutions
**Challenge**: Ethical concerns
**Solution**: Conducted multiple long-term surveys and interviews with students to understand their concerns and develop a transparent AI system. Qualitative and quantitative research methods were used to evaluate the survey results.

**Challenge**: Data privacy
**Solution**: Worked with data protection officers to ensure the privacy of students' data in compliance with GDPR. Implemented own solutions to store data encrypted in EU servers.

**Challenge**: Model bias
**Solution**: Implemented multiple bias mitigation strategies for binary groups, non-binary groups, and multiple protected attributes as a Python library [pip install fairdo](https://github.com/mkduong-ai/fairdo).

**Challenge**: Model explainability & transparency
**Solution**: Used xAI methods to explain the model's predictions (LIME, SHAP, etc.) for black-box models. Employed decision trees for transparency.

## Outcomes
- Developed a web application (dashboard) to visualize the model's predictions of students' academic performances and explainability results
- Developed an MLOps GUI tool to train, evaluate (fairness + performance metrics), and save machine learning models (Neural Nets, KNN, SVM, Decision Trees)