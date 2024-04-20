import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './GlobalStyle.styled.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reduxApp/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/camper-rental">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
