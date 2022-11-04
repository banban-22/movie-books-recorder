import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
import { BsArrowRightCircle } from 'react-icons/bs';

const noImageUrl =
  'https://st3.depositphotos.com/1322515/35964/v/950/depositphotos_359648638-stock-illustration-image-available-icon.jpg';

const MovieDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <Link to="/">back to movies</Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="flex flex-row justify-center mt-10 mx-10">
      <img
        src={poster === 'N/A' ? noImageUrl : poster}
        alt={title}
        className="rounded-lg object-cover"
      />
      <div className="ml-20">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="uppercase text-2xl mt-6">plot</p>
        <p className="bg-slate-100 p-10 rounded-2xl shadow">{plot}</p>
        <p className="uppercase text-2xl mt-7">year</p>
        <h4 className="bg-slate-100 p-6 rounded-2xl shadow">{year}</h4>
        <div className="mt-8">
          <Link
            to="/"
            className="cursor hover:underline hover:underline-offset-8"
          >
            Back to movies
            <BsArrowRightCircle className="inline-block ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
