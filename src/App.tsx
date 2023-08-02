import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import Area51Page from "./pages/Area51Page";
import Error404Page from "./pages/Error404Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/area51" element={<Area51Page />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
};

export default App;
