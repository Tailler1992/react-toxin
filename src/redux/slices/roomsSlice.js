import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  data: [],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const fetchRooms = createAsyncThunk(
    'rooms/fetchRoomsByStatus',
    async (currentPage, thunkAPI) => {

      const params = new URLSearchParams();
      params.append('page', currentPage.toString());
      params.append('limit', '12');

      const res = await axios.get('https://63f9eff4897af748dcc5f3ab.mockapi.io/rooms', {params});
      return res.data;
    }
);

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state, action) => {
      state.data = [];
      state.loading = 'pending';
    });
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.data = [];
      state.loading = 'failed';
    });

  },
});
export const {setRooms} = roomsSlice.actions;
export default roomsSlice.reducer;