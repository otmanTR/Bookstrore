import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducer: {
    checkStatus: (state) => ({
      ...state,
      categories: 'Under construction',
    }),

  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
