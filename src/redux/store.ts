import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer
  },
  // devTools: false,
  devTools: process.env.NODE_ENV !== 'production'
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {articles: ArticlesState }
export type AppDispatch = typeof store.dispatch;
