import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { bookList, status } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
    if (status === 'succeed') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);
  return (
    <>
      <div>
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
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
