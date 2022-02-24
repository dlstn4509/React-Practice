import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './reducers/counter';
// import { counter } from './reducers/counter';
import postsSlice from './reducers/posts-slice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
  },
  middleware: (def) => def({ serializableCheck: false }),
});
