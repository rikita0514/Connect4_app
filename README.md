# 🎮 Connect 4 – React Game

An interactive 4x4 Connect 4 game built using React.  
Features dynamic game logic, AI-based move suggestions, and clean responsive UI styling.

---

## 🚀 Features

- 🔵 4x4 Game Board
- 🧠 Smart AI Move Suggestion
- 🏆 Win & Draw Detection
- 🔁 Restart Game Option
- 📊 Live Score Tracking
- 🎨 Custom Styled UI with CSS Variables
- ⚡ Built using Modern React (Hooks)

---

## 🛠 Tech Stack

- React (Functional Components )
- JavaScript (ES6+)
- CSS Grid & Flexbox
- Create React App

---

## 📂 Project Structure
src/
│
├── Components/
│ ├── App.js
│ ├── GameBoard.js
│ ├── Header.js
│ ├── Footer.js
│ └── GameCircle.js
│
├── utils/
│ └── helper.js
│
├── styles/
│ └── game.css
│
├── Constants.js
└── index.js

## 🧠 Game Logic

### Win Detection
The game checks all possible:
- Horizontal lines
- Vertical lines

If 4 consecutive cells match, a win is declared.

### Draw Detection
If all board cells are filled and no win condition is met, the game ends in a draw.

### AI Suggestion
The AI:
1. Looks for immediate winning opportunities
2. Otherwise selects a random available move

---

## 🖥 Installation & Setup

Clone the repository: git clone https://github.com/your-username/connect4-react.git

Navigate to project folder: cd connect4-react

Install dependencies: npm install

Run the app: npm start
The app will run at:http://localhost:3000


---

## 🎯 Future Improvements

- Add Minimax AI (advanced difficulty mode)
- Add sound effects
- Add animations
- Add dark mode
- Make board size configurable
- Deploy live version

---

## 📸 Preview

<img width="1233" height="768" alt="image" src="https://github.com/user-attachments/assets/5fb205ec-8aaa-4043-97ee-fdb2e0d7c117" />


---

## 📌 Author

Developed as a React logic practice project and UI refinement exercise.

---

## 📄 License

This project is open-source and available under the MIT License.

