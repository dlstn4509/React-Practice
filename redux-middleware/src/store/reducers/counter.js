import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: (state, action) => {
      state.number += 1;
    },
    miss: (state, action) => {
      state.number -= 1;
    },
  },
  extraReducers: {},
});

export const { plus, miss } = counterSlice.actions;
export default counterSlice.reducer;
