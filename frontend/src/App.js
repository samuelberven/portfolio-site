import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
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
const App = () => {
    const themeContext = useContext(ThemeContext);
    // If ThemeContext is undefined it defaults to 'light'.
    const theme = themeContext?.theme || 'light';
    return (_jsx(Router, { children: _jsxs("div", { className: theme, children: [_jsx(Header, {}), _jsx(ToggleThemeButton, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/education", element: _jsx(Education, {}) }), _jsx(Route, { path: "/work", element: _jsx(WorkHistory, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }) }));
};
export default App;
//# sourceMappingURL=App.js.map