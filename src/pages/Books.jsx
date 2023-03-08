import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

export default function Books() {
  const { bookList } = useSelector((state) => state.books);
  return (
    <>
      <div>
        {bookList.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}

        <Form />
      </div>

    </>
  );
}
