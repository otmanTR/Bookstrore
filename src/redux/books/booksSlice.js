import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducer: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookList.splice(action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
