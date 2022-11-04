/* import React from 'react';
import { useGlobalContext } from '../../context/BookContext';
import { Link } from 'react-router-dom';

const Book = () => {
  const { isLoading, hits, removeBooks } = useGlobalContext();

  if (isLoading) {
    return <div className="Loading"></div>;
  }

  return (
    <section className="container">
      {hits.map((book) => {
        const { isbn: id, title, author, itemUrl, mediumImageUrl } = book;

        return (
          <Link to={`/books/${id}`} key={id}>
            <article>
              <a href={itemUrl}>
                <img src={mediumImageUrl} alt={title} />
                <div>
                  <h4>{title}</h4>
                  <p>{author}</p>
                </div>
              </a>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Book;
 */

import React from 'react';
import { useGlobalBookContext } from '../../context/BookContext';
import { Link } from 'react-router-dom';
import SearchBook from './SearchBook';
import DarkMode from '../DarkMode/DarkMode';

const noImageUrl =
  'https://st3.depositphotos.com/1322515/35964/v/950/depositphotos_359648638-stock-illustration-image-available-icon.jpg';

const Book = () => {
  const { books, isLoading } = useGlobalBookContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="w-full">
      <DarkMode />
      <SearchBook />
      <div className="m-8 grid grid-cols-6 gap-6">
        {books.map((item) => {
          const { isbn: id, mediumImageUrl: cover, title, author } = item;
          return (
            <Link
              to={`/books/${id}`}
              key={id}
              // className="rounded-lg relative overflow-hidden hover:translate-y-0"
              className="books"
            >
              <div>
                <img
                  src={cover === 'N/A' ? noImageUrl : cover}
                  alt={title}
                  className="block object-cover w-full h-96 rounded-lg hover:opacity-80 hover:translate-y-0"
                />
                {/* <div className="absolute b-0 l-0 w-full py-2 px-4 bg-black bg-opacity-60 translate-y-full transition-all duration-300 ease-linear hover:translate-y-0"> */}
                <div className="book-info">
                  {/* <p className="px-3 text-lg uppercase pt-3 hover:opacity-80"> */}
                  <p className="text-white">
                    {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                  </p>
                  <p className="pt-1 text-center text-white mb-1 hover:opacity-80">
                    {author}
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

export default Book;
