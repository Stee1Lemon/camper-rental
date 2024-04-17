import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './GlobalStyle.styled.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/camper-rental">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
