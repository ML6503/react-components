import { configureStore } from '@reduxjs/toolkit'
// import errorReducer from './errorSlice';
// import loadingReducer from './loadingSlice';
import articlesReducer from './articlesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    // loading: loadingReducer,
    // error: errorReducer,
  },
  // devTools: false,
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
