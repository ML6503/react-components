import {
  Action,
  createSlice,
  StoreEnhancer,
  ThunkDispatch
} from '@reduxjs/toolkit';
import { DataApi } from '../utils/interface';
import { AppDispatch } from './store';

export const initialState = {
  dataApi: null,
  articles: [],
  loading: false,
  hasErrors: false,
  error: null
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticles: (state) => {
      const loading = true;
      return { ...state, loading };
    },
    getArticlesSuccess: (state, action) => {
      const dataApi: DataApi = action.payload;
      const loading = false;
      const hasErrors = false;
      const { articles } = dataApi;
      return { ...state, dataApi, articles, loading, hasErrors };
    },
    getArticlesFailure: (state, { payload }) => {
      const loading = false;
      const hasErrors = true;
      const error = payload.message;
      return { ...state, loading, hasErrors, error };
    },
    getNullError: (state) => {
      const hasErrors = false;
      const error = null;
      return { ...state, error, hasErrors };
    }
  }
});

export const {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  getNullError
} = articlesSlice.actions;

export default articlesSlice.reducer;

export const fetchArticles = (
  urlQuery: string
): ThunkDispatch<StoreEnhancer, null, Action> => {
  const abortCont = new AbortController();

  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(getArticles());

    try {
      const response: Response = await fetch(urlQuery, {
        signal: abortCont.signal
      });
      if (!response.ok) {
        throw Error('API news server status: Not reachable');
      }
      const data = await response.json();
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      dispatch(getArticlesSuccess(data));
    } catch (error) {
      if (error.name !== 'AbortError') {
        dispatch(getArticlesFailure(error));
      }
    }
  };
};
