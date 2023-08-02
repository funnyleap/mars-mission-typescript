import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
