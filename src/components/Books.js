import React, { useState } from 'react';

export default function Books() {
  const [bookList] = useState({ title: 'Transformation', author: 'Franz Kafka     ' });
  const { title, author } = bookList;

  return (
    <>

      <div className="bookList">
        <h2> List of Books</h2>
        <ul>
          <li>
            <p>{title}</p>
            <p>{author}</p>
            <button type="button" className="button key">Remove</button>
          </li>
        </ul>
      </div>
      <form>
        <h3>Adding a Book</h3>
        <input placeholder="title" />
        <input placeholder="author" />
      </form>

    </>
  );
}
