import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FactPage from "./pages/FactPage";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";
import BirthdayCardPage from "./pages/BirthdayCardPage";
import QuizPage from "./pages/QuizPage";
import Area51Page from "./pages/Area51Page";
import Error404Page from "./pages/Error404Page";
import RoversPage from "./pages/RoversPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/facts" element={<FactPage />} />
          <Route path="/placeholder" element={<h1>Placeholder</h1>} />
          <Route path="/birthday-card" element={<BirthdayCardPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/area51" element={<Area51Page />} />
          <Route path="/rovers" element={<RoversPage />} />
          <Route path="/*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
