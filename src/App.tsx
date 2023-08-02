import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageWithNavBar from "./components/PageWithNavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/hello"
          element={
            <PageWithNavBar>
              <h1>Hello</h1>{" "}
            </PageWithNavBar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
