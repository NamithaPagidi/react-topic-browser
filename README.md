React Topic Browser – Round 1 Submission (TOTLE Frontend Internship)

This project is a simple React-based Topic Browser developed as part of the TOTLE Round 1 Coding Submission. The application displays a list of topics and allows users to filter them through a search input. As the user types, the UI dynamically filters topics by name in a case-insensitive manner. The design is kept clean and minimal to resemble a catalogue-style browsing system, similar to TOTLE’s Catalogue Management UI. The project also includes basic animations using Framer Motion to enhance user experience.
The application uses an in-memory array of sample topics, each containing an id, name, and category. When the search input matches one or more topics, the corresponding cards are displayed. If no matches are found, a message saying “No topics found” is shown. Empty input gracefully resets the list to display all topics. The project was created using Vite for fast development and includes a simple folder structure for easy understanding.

A step-by-step workflow explanation and a two-minute video walkthrough of the case study and code structure have also been added, as required by the assignment. The GitHub repository contains the complete source code, README documentation, and the demo video for review.
Project Features
Search bar to filter topics by name (case-insensitive)
Topic cards with name and category
Smooth animations for card appearance
“No topics found” message for unmatched search results
Clean and minimal UI using simple CSS
Built using React + Vite
Tech Stack
React
Vite
JavaScrip
CSS
Framer Motion
How to Run the Project
Follow the steps below to run the application locally:
Clone the repository
git clone https://github.com/NamithaPagidi/react-topic-browser.git

Navigate to the project folder

cd react-topic-browser


Install dependencies

npm install


Start the development server

npm run dev


Open the application in your browser

http://localhost:5173/

Folder Structure
react-topic-browser/
│── public/
│── src/
│   ├── components/
│   │   └── TopicSearch.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── README.md
│── package.json
│── vite.config.js
│── video.mp4 (2-minute explanation)

Follow previous README run & push steps. The dev server runs at http://localhost:5173
