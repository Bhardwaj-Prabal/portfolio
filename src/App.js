import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Footer from "./Layouts/Footer";
import HomePage from "./Pages/HomePage";
import Resume from "./Pages/resume";
import Projects from "./Pages/Projects";
import ProjectPage from "./Pages/ProjectPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <HomePage />
              <Footer iconColor="#e0e0e0" />
            </div>
          }
        />
        <Route
          path="https://main--prabalbhardwaj.netlify.app/Resume/"
          element={
            <div className="Resume">
              <Resume />
              <Footer iconColor="#e0e0e0" />
            </div>
          }
        />
        <Route
          path="https://main--prabalbhardwaj.netlify.app/ProjectPage/"
          element={
            <div className="App">
              <ProjectPage />
              <Footer iconColor="#e0e0e0" />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
