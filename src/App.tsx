import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FactsPage from "./components/FactList";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/facts" element={<FactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
