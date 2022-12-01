import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./locales/i18next";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// component, style, onClick, props, react hooks (useState, useEffect, useRef)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);