import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import { AppProvider } from './context/BookContext';
import { MovieProvider } from './context/MovieContext';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </>
);
