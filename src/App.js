import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movie/Movie';
import MovieDetail from './components/Movie/MovieDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default App;
