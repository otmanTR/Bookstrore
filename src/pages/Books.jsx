import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

export default function Books() {
  return (
    <>
      <div>
        <Book title="Transformation" author="Franz Kafka" />
        <Form />
      </div>

    </>
  );
}
