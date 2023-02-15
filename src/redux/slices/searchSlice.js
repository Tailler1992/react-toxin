import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  guests: [
    {id: 1, title: 'взрослые', quantity: 0},
    {id: 2, title: 'дети', quantity: 0},
    {id: 3, title: 'младенцы', quantity: 0},
  ],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
  },
});
export const {setGuests} = searchSlice.actions;
export default searchSlice.reducer;