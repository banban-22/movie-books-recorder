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
