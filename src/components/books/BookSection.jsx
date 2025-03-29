import { books } from 'data/books';
import React from 'react';
import { Book } from './Book';

export const BookSection = ({ title, category }) => {
  return (
    <section className="books-section">
      <p className="mb-8 text-3xl font-bold">{title}</p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {books.map((e) => {
          if (e.language === category) {
            return <Book key={e.title} data={e} />;
          }
        })}
      </div>
    </section>
  );
};
