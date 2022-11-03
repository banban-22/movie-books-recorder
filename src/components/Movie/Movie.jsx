import React from 'react';
import { useMovieConext } from '../../context/MovieContext';
import { Link } from 'react-router-dom';

const Movie = () => {
  const { movie, isLoading } = useMovieConext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="container">
      {movie.map((item) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = item;
        return (
          <Link to={`/movies/${id}`} key={id}>
            <article>
              <img src={poster} alt={title} />
              <div>
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movie;
