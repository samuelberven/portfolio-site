import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import WorkHistory from './pages/WorkHistory';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ToggleThemeButton from './components/ToggleThemeButton';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  // If ThemeContext is undefined it defaults to 'light'.
  const theme = themeContext?.theme || 'light';

  return (
    <Router>
      <div className={theme}>
        {/* Header with navigation */}
        <Header />

        {/* Button to toggle theme */}
        <ToggleThemeButton />

        {/* Routing for different sections of the portfolio */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<WorkHistory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer with copyright */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;