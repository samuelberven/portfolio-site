import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Intro />} /> {/* Home/Intro */}
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

