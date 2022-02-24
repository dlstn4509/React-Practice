import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selPosts: '',
  allPosts: [],
};

export const getAllPosts = createAsyncThunk('posts/asyncPosts', async (id) => {
  const data = await axios.get(`https://t1.propline.co.kr/api/test?id=${id}`);
  return data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.selPosts = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.allPosts = payload;
        // action.payload
        console.log(state.allPosts);
        console.log(state.selPosts);
      })
      .addCase(getAllPosts.rejected, (state, { payload }) => {
        console.log('rejected', payload);
      });
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
