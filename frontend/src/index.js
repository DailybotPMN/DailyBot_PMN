import React from 'react';
import {createRoot} from 'react-dom/client';
import './Styles/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);