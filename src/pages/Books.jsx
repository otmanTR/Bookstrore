import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

export default function Books() {
  const { bookList } = useSelector((state) => state.books);
  return (
    <>
      <div>
        {bookList.map((item) => (
          <Book
            key={item.itemId}
            title={item.title}
            author={item.author}
          />
        ))}

        <Form />
      </div>

    </>
  );
}
