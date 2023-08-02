import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import FactsPage from "./components/FactList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<FactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
