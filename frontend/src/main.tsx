// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './App.css'
import './index.css'
import './styles/global.css';
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
