import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import roomsSlice from './slices/roomsSlice';
export const store = configureStore({
  reducer: {
    filterSlice,
    roomsSlice
  },
});