import { createSlice } from '@reduxjs/toolkit';
import { DataApi } from '../utils/interface';
import { useAppDispatch } from '../redux/hooks';

export const  initialState = {
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
        getArticles: state => {
          state.loading = true
        },
        getArticlesSuccess: (state, action ) => {
        // const payload: DataApi = action.payload;
        const dataApi: DataApi = action.payload;
        const loading = false;
        const hasErrors = false;
        const articles = dataApi.articles;
        return {...state, dataApi, articles, loading, hasErrors }
        //   state.dataApi = payload,
        //   state.articles = payload.articles,
        //   state.loading = false,
        //   state.hasErrors = false
        },
        getArticlesFailure: (state, { payload })  => {
          state.loading = false,
          state.hasErrors = true,
          state.error = payload.message
        },
        getNullError: (state) => {
           const hasErrors = false
            const error = null;
            return {...state, error, hasErrors };
        }
      },
});


export const { getArticles, getArticlesSuccess, getArticlesFailure, getNullError } = articlesSlice.actions;

export default articlesSlice.reducer;

export function fetchArticles(urlQuery: string) {

    const abortCont = new AbortController();
    return async dispatch => {
      dispatch(getArticles());
  
      try {
        const response = await fetch(urlQuery, { signal: abortCont.signal } );
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
    }
  }
