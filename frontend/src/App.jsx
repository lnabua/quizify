import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import GenerateQuiz from "./pages/GenerateQuiz";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GenerateQuiz />} />
      </Routes>
    </div>
  );
};

export default App;
