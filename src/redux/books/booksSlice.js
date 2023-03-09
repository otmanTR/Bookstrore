import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/47AFGoySH1SCvySlkvEp/books/';
export const getBooks = createAsyncThunk('books/getBooks', () => fetch(url)
  .then((resp) => resp.json())
  .catch((err) => (err.message)));
const initialState = {
  bookList: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      bookList: state.bookList.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
