import {configureStore} from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    searchSlice,
    filterSlice,
  },
});