import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/GalleryPage";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/placeholder" element={<h1>Placeholder</h1>} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
