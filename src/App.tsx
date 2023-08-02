import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<PageWithNavBar />}>
          <Route path="/placeholder" element={<h1>Placeholder</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
