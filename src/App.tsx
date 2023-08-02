import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/GalleryPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
