import React, { useState } from 'react';
import Form from './Form';

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
      <Form />
    </>
  );
}
