import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({
  item_id: id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bookList">
        <h2> List of Books</h2>
        <ul>
          <li className="bookItems">
            <p>
              {title}
            </p>
            <p>
              {author}
            </p>
            <p>
              {category}
            </p>
            <button type="button" className="button key" onClick={() => dispatch(removeBook(id))}>Remove</button>
          </li>
        </ul>
      </div>
    </>
  );
}
Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
