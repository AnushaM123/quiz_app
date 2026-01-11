# React Quiz Application

This project is a React-based quiz application built to practice **complex state management using `useReducer`** and to understand how application state flows through well-defined transitions.

The focus of this project is **state design, reducer logic, predictable UI behavior, and utility-first styling with Tailwind CSS**, rather than visual complexity.

---

## Features

- Fetches quiz questions from an API
- Multiple application states:
  - Loading
  - Ready
  - Active
  - Finished
  - Restart
- Question-by-question navigation
- Answer selection with score calculation
- Timer-based quiz completion
- Progress indicator and points tracking
- Ability to restart the quiz with state reset
- Styling implemented using **Tailwind CSS**

---

## Core React Concepts Applied

### useReducer for State Management
Instead of managing multiple `useState` hooks, the application uses a **single reducer** to handle related state changes in a predictable way.

The reducer manages:
- Data loading success and failure
- Quiz start and restart
- Answer selection
- Question navigation
- Timer countdown
- Quiz completion

Each transition is driven by explicit action types.

---

### State Transitions Over UI Logic
The application flow is controlled by a `status` field in the reducer:
- `loading`
- `ready`
- `active`
- `finished`
- `restart`

This approach ensures the UI always reflects the current application state and prevents invalid transitions.

---

### Preventing Invalid Updates
- Answers cannot be changed once selected
- The quiz automatically finishes when the timer reaches zero
- Guards inside the reducer prevent inconsistent state updates

---

### Derived State
Values such as:
- Total points
- Number of questions
- Progress indicators

are **derived from existing state** instead of being stored separately, reducing redundancy and improving reliability.

---

### Styling with Tailwind CSS
Tailwind CSS is used for styling to:
- Keep component files focused on logic
- Apply consistent spacing, layout, and typography
- Avoid large CSS files and custom class naming
- Speed up UI iteration while maintaining clarity

---

## Tech Stack

- React
- JavaScript (ES6+)
- React Hooks (`useReducer`, `useEffect`)
- Tailwind CSS
- Fetch API

---

## Project Structure
src/
├── components/
│ ├── Header.jsx
│ ├── Main.jsx
│ ├── StartScreen.jsx
│ ├── Question.jsx
│ ├── ProgressIndicator.jsx
│ ├── Timer.jsx
│ ├── Next.jsx
│ ├── QuizCompleted.jsx
│ ├── Loader.jsx
│ ├── Error.jsx
│ └── Footer.jsx
├── App.jsx
└── index.js


---
#

## Getting Started

### 1. Clone the repository:
```bash
git clone https://https://github.com/AnushaM123/quiz_app

2. Install dependencies:
npm install

3. Start the developer server
npm run dev

4. Start the API server
npm run server

5. Ensure the API server is running:
http://localhost:8000/questions


Key Takeaway

This project helped me understand when useReducer is a better choice than useState, especially for applications with multiple related state changes and clear workflows.

Combining reducer-driven state with utility-first styling kept the codebase maintainable, predictable, and easy to extend.



