import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movie/Movie';
import MovieDetail from './components/Movie/MovieDetail';
import Books from './components/Book/Book';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/" element={<Movies />} />
      <Route path="/books/" element={<Books />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      {/* <Route path="/books/:id" element={<Book />} /> */}
    </Routes>
  );
};

export default App;
