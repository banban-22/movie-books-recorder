import React from 'react';
import { useMovieConext } from '../../context/MovieContext';

const SearchMovie = () => {
  const { query, setQuery, error } = useMovieConext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div>{error.msg}</div>}
    </form>
  );
};

export default SearchMovie;
