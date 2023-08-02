import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

const App = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
