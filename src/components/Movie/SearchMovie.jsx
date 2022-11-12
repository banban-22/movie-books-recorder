import React from 'react';
import { useGlobalMovieContext } from './context/MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchMovie = () => {
  const { query, setQuery, error } = useGlobalMovieContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="relative mx-auto mt-5 text-center p-3 text-2xl border border-gray-300 shadow-md max-w-lg rounded-3xl"
    >
      <input
        type="text"
        value={query}
        className="border border-gray-500 pl-5 py-2 rounded-full w-9/12 pt-3 bg-inherit"
        onChange={(e) => setQuery(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-24 top-7 text-gray-400"
      />
      {error.show && <div>{error.msg}</div>}
    </form>
  );
};

export default SearchMovie;
