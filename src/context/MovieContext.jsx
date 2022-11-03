import React, { useState, useContext } from 'react';
import useFetch from '../components/useFetch';
// import reducer from '../components/reducer/reducer';
// import {
//   SET_LOADING,
//   SET_MOVIES,
//   REMOVE_MOVIES,
//   HANDLE_SEARCH,
//   HANDLE_PAGE,
// } from '../components/reducer/actions';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState('disney');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <MovieContext.Provider
      value={{ isLoading, error, movies, query, setQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieConext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieProvider };
