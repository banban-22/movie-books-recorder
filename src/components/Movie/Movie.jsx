import React from 'react';
import { useGlobalMovieContext } from '../../context/MovieContext';
import { Link } from 'react-router-dom';
import SearchMovie from './SearchMovie';
import DarkMode from '../DarkMode/DarkMode';

const noImageUrl =
  'https://st3.depositphotos.com/1322515/35964/v/950/depositphotos_359648638-stock-illustration-image-available-icon.jpg';

const Movie = () => {
  const { movies, isLoading } = useGlobalMovieContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="w-full">
      <DarkMode />
      <SearchMovie />
      <div className="m-8 grid grid-cols-6 gap-6">
        {movies.map((item) => {
          const { imdbID: id, Poster: poster, Title: title, Year: year } = item;
          return (
            <Link
              to={`/movies/${id}`}
              key={id}
              // className="rounded-lg relative overflow-hidden hover:translate-y-0"
              className="movie"
            >
              <div>
                <img
                  src={poster === 'N/A' ? noImageUrl : poster}
                  alt={title}
                  className="block object-cover w-full h-96 rounded-lg hover:opacity-80 hover:translate-y-0"
                />
                {/* <div className="absolute b-0 l-0 w-full py-2 px-4 bg-black bg-opacity-60 translate-y-full transition-all duration-300 ease-linear hover:translate-y-0"> */}
                <div className="movie-info">
                  {/* <p className="px-3 text-lg uppercase pt-3 hover:opacity-80"> */}
                  <p className="text-white">
                    {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                  </p>
                  <p className="pt-1 text-center text-white mb-1 hover:opacity-80">
                    ({year})
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
