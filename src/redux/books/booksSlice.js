import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/47AFGoySH1SCvySlkvEp/books/';
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  bookList: [],
  status: 'emty',
  error: null,
  newStatus: '',
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
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const newArray = [];
        keys.forEach((key) => {
          newArray.push(Object.assign({ id: key }, ...payload[key]));
        });
        state.books = [...newArray];
        state.status = 'loaded';
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
