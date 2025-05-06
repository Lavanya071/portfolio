import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'; // keep this
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './context/ThemeContext'; // ✅ import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* ✅ wrap App in ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
