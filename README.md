# 📚 Quizify – AI-Powered Quiz Generator

Quizify is a MERN stack web application that transforms your study notes into interactive quizzes using OpenAI’s GPT models. It’s designed for students, educators, and lifelong learners who want to test their knowledge in a fun and efficient way.

---

## 🎥 Demo

---

## 🚀 Features

- **AI-Generated Quizzes** – Paste your notes, and AI instantly creates multiple-choice questions.
- **Quiz Title & Structure** – Generates a relevant quiz title and 5 well-structured MCQs.
- **Question Navigation** – View one question at a time with Back/Next navigation.
- **Answer Review** – Displays correct answers for learning reinforcement.
- **User Authentication** – Secure sign-up/login using JWT.
- **Persistent Storage** – MongoDB & Mongoose store user accounts and quiz history.

---

## 🛠️ Tech Stack

**Frontend**

- React 19
- React Router
- Axios
- Tailwind CSS
- react-hot-toast

**Backend**

- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- OpenAI API

---

## 📂 Project Structure

```bash
quizify/
├── backend/
│   ├── models/Quiz.js
│   ├── routes/quizRoutes.js
│   ├── routes/authRoutes.js
│   ├── server.js
├── frontend/
│   ├── src/components/
│   │   ├── QuizForm.jsx
│   │   ├── QuizPreview.jsx
│   │   ├── QuizCard.jsx
│   ├── src/pages/
│   │   ├── Home.jsx
│   │   ├── GenerateQuiz.jsx
│   │   ├── QuizPage.jsx
│   ├── src/api/axios.js
```

---

## ⚙️ Installation & Setup

**1️⃣ Clone the Repository**

```bash
git clone https://github.com/yourusername/quizify.git
cd quizify
```

**2️⃣ Backend Setup**

```bash
cd backend
npm install
```

Create a .env file:

```ini
PORT=5001
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm run dev
```

**3️⃣ Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

## 📌 Usage

1. Sign up or Log in.
2. Navigate to Generate Quiz.
3. Paste your study notes and click Generate.
4. View the AI-generated quiz and answer the questions.
5. Your quizzes are saved in your account for later review.

---

## 🔮 Future Improvements

- Leaderboard – Track top quiz scorers.
- Export Quizzes – Download as PDF or CSV for offline use.
- Quiz Categories – Organize quizzes into subject-based categories.
- Timed Mode – Add a countdown timer for each quiz attempt.
- AI Feedback – Provide explanations for correct and incorrect answers.

---

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)
