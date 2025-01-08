import { jsx as _jsx } from "react/jsx-runtime";
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
createRoot(document.getElementById('root')).render(
// <StrictMode>
//   <App />
// </StrictMode>,
_jsx(ThemeProvider, { children: _jsx(App, {}) }));
//# sourceMappingURL=main.js.map