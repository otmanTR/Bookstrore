import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducer: {
    checkStatus: (state, action) => {
      state.bookList = action.payload === 'Under construction'
        ? 'Under construction'
        : state.bookList;
    },

  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
