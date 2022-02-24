import { configureStore } from '@reduxjs/toolkit';

import { counter } from './reducers/counter';

export const store = configureStore({
  reducer: {
    counter,
  },
});
