import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/booksSlice';

export default function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const deleteReload = () => {
    dispatch(removeBook(id));
    dispatch(getBooks());
  };
  return (
    <>
      <div className="bookContainer">
        <div className="bookList">
          <ul>
            <li className="bookItems">
              <p className="category">
                {category}
              </p>
              <p className="title">
                {title}
              </p>
              <p className="author">
                {author}
              </p>
              <div className="buttonContainer">
                <button type="button" className="button key">Comments</button>
                <div className="borderButton" />
                <button type="button" className="button key" onClick={() => deleteReload()}>Remove</button>
                <div className="borderButton" />
                <button type="button" className="button key">Edit</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="complated">
          <div className="icon" />
          <div className="info">
            <p>75%</p>
            <p>Complated</p>
          </div>
        </div>
        <div className="border" />
        <div className="chapterContainer">
          <p className="cChapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="updateButton">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
