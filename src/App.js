import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Movie from './components/Movie/Movie';
// import Book from './components/Book/Book';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
      {/* <Route path="/books/:id" element={<Book />} /> */}
    </Routes>
  );
};

export default App;
