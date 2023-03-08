import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [newId, setNewId] = useState('{bookList.length}');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const clickAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        id: newId,
        title: newTitle,
        author: newAuthor,
      },
    ));
  };
  return (
    <>
      <form>
        <h3>Adding a Book</h3>
        <input type="text" placeholder="title" required onChange={(e) => setNewTitle(e.target.value)} />
        <input type="text" placeholder="author" required onChange={(e) => setNewAuthor(e.target.value)} />
        <button type="submit" onChange={(e) => setNewId(e.target.value)} onClick={clickAddBook}>Add Book</button>
      </form>
    </>
  );
}
