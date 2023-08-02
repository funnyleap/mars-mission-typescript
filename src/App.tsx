import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
