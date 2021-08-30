import * as reactRedux from 'react-redux'
import { beforeEach, afterEach } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import { render, fireEvent, screen } from './testUtils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { mockDataApi } from './__mocks__/fetchArticles';
import App from '../src/App';
import reducer, {  getArticlesSuccess } from '../src/redux/articlesSlice';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  });


test('should handle a APi data being added to the redux state', () => {
   

    const initialState = {
        dataApi: null,
        articles: [],
        loading: false,
        hasErrors: false,
        error: null
      };
  

    expect(reducer(initialState, getArticlesSuccess(mockDataApi))).toEqual(
      {
        dataApi: mockDataApi,
        articles: mockDataApi.articles,
        loading: false,
        hasErrors: false,
        error: null
      }
   );

  });

describe('articles have all details', () => {
    it('articles array is desplayed', () => {
       
          useSelectorMock.mockReturnValue({ articles: {
            dataApi: mockDataApi,
            articles: mockDataApi.articles,
            loading: false,
            hasErrors: false,
            error: null
          } });

          const appEl = render(App());

          screen.debug();

    });
});