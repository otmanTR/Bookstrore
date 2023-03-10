import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const clickAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        item_id: uniqid(),
        title: newTitle,
        author: newAuthor,
        category: 'science',
      },
    ));
  };
  return (
    <>
      <form>
        <h3>Adding a Book</h3>
        <input type="text" placeholder="title" required onChange={(e) => setNewTitle(e.target.value)} />
        <input type="text" placeholder="author" required onChange={(e) => setNewAuthor(e.target.value)} />
        <button type="submit" onClick={clickAddBook}>Add Book</button>
      </form>
    </>
  );
}
