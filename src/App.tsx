import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FactPage from "./pages/FactPage";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/facts" element={<FactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
