import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FactsPage from "./components/FactList";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/facts" element={<FactsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
