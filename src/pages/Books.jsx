import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { bookList, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === true) {
      dispatch(getBooks());
    }
    if (isLoading === false) {
      dispatch(getBooks());
    }
  }, [isLoading, dispatch]);

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
