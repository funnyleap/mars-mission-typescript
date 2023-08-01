import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
