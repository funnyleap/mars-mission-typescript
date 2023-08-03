import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";
import BirthdayCardPage from "./pages/BirthdayCardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/placeholder" element={<h1>Placeholder</h1>} />
          <Route path="/birthday-card" element={<BirthdayCardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
