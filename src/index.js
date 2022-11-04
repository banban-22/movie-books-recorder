import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import { BookProvider } from './context/BookContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BookProvider>
      <MovieProvider>
        <Router>
          <App />
        </Router>
      </MovieProvider>
    </BookProvider>
  </React.StrictMode>
);
