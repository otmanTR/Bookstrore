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

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    const response = await axios.post(url, newBook);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(url + id);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  bookList: [],
  status: 'idle',
  error: null,
  newStatus: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
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
        state.bookList = [...newArray];
        state.status = 'loaded';
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }))
      .addCase(addBook.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }))
      .addCase(removeBook.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }));
  },
});

export default booksSlice.reducer;
