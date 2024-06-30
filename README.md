
# Tech Learning and Interview Preparation Platform
# Node Backend for ML MODEL: https://github.com/sagnik-datta-02/back
# Flask Backend for ML MODEL: https://github.com/sagnik-datta-02/Emotion_Analysis
## Overview
Our platform revolutionizes technological education and interview preparation by providing personalized articles, immersive 3D classrooms, and adaptive mock interviews. Designed with accessibility in mind, it ensures an engaging and inclusive experience for all users, including differently-abled individuals.

## Features
1. *Personalized Technological Content and Knowledge Checks*
   - Delivers relevant articles based on user interests.
   - Generates quizzes to evaluate understanding and knowledge retention.

2. *3D Model Integrated Classroom*
   - Offers an immersive learning experience with a virtual teacher.
   - Tracks performance with interactive questions.
   - Provides an accessible, user-friendly interface for differently-abled individuals.

3. *Mock Interview System*
   - Simulates mock interviews to prepare users for real-world tech interviews.
   - Assesses parameters such as boldness, eye contact, confidence, and clarity.
   - Tailors preparation based on user performance for continuous improvement.

## Technologies Used
- *Frontend*: Next.js
- *Backend*: Node.js and Express.js
- *Database*: MongoDB
- *ML Model*: Custom trained CNN based on a 35K face recognition dataset for emotion recognition in the interview system, hosted using Flask
- *AI Integration Framework*: Langchain, using LLMs like Llama 7B Instruct and Plot 3 by Anthropic for various features
- *Speech Services*: Microsoft Azure Cognitive Services and Assembly AI Translator for text-to-speech and vice-versa in the classroom and interview system

## Challenges and Obstacles Overcome
1. *Integration Complexity*: Overcame by meticulous planning and modular development.
2. *Custom ML Model Hosting*: Optimized performance and ensured scalability.
3. *AI Integration*: Extensive testing and fine-tuning.
4. *Accessibility*: Rigorous user testing and iteration for the 3D classroom.

## Installation

1. *Clone the repository:*
    bash
    git clone https://github.com/your-username/tech-learning-platform.git
    cd tech-learning-platform
    

2. *Frontend Setup:*
    bash
    cd frontend
    npm install
    npm run dev
    

3. *Backend Setup:*
    bash
    cd backend
    npm install
    npm run start
    

4. *Flask ML Model Setup:*
    bash
    cd ml_model
    pip install -r requirements.txt
    flask run
    

## Usage
1. *Visit the Frontend:*
   Open your browser and go to http://localhost:3000.

2. *Explore Features:*
   - Register and input your technological interests to receive personalized articles.
   - Engage with the 3D classroom and answer questions to track your learning progress.
   - Participate in mock interviews to prepare for real-world tech interviews.

## Contribution
1. *Fork the repository*
2. *Create a new branch:*
    bash
    git checkout -b feature-branch
    
3. *Commit your changes:*
    bash
    git commit -m "Add some feature"
    
4. *Push to the branch:*
    bash
    git push origin feature-branch
    
5. *Submit a pull request*

## License
This project is licensed under the MIT License.

---

Feel free to customize it further based on your specific needs and details.
