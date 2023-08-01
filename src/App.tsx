import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import Gallery from "./pages/GalleryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
