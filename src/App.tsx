import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/GalleryPage";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";
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
          <Route path="/placeholder" element={<h1>Placeholder</h1>} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/area51" element={<Area51Page />} />
          <Route path="/rovers" element={<RoversPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
