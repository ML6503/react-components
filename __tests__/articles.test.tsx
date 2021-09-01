/* eslint-disable max-len */
import React from 'react';
import { Router } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import { beforeEach } from '@jest/globals';
import routeData from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '../__mocks__/testUtils';
import '@testing-library/jest-dom';
import { mockDataApi } from '../__mocks__/mockDataApi';

import reducer, { getArticlesSuccess } from '../src/redux/articlesSlice';
import Articles from '../src/components/articles/articles';

const mockLocation = {
  pathname:
    '/details/Cyprus says to strip passports from Turk Cypriot officials - Reuters$2021-08-23T13:04:00Z',
  hash: '',
  search: '',
  state: {
    title: mockDataApi.articles[0].title,
    publishedAt: mockDataApi.articles[0].publishedAt
  }
};

beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
});

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

test('API data must be added to the redux state', () => {
  const initialState = {
    dataApi: null,
    articles: [],
    loading: false,
    hasErrors: false,
    error: null
  };

  expect(reducer(initialState, getArticlesSuccess(mockDataApi))).toEqual({
    dataApi: mockDataApi,
    articles: mockDataApi.articles,
    loading: false,
    hasErrors: false,
    error: null
  });
});

describe('articles have all details', () => {
  it('articles array is desplayed', async () => {
    const history = createMemoryHistory();
    const { getByTestId, findAllByRole, findAllByTestId } = render(
      <Router history={history}>
        <Articles
          dataApi={mockDataApi}
          currentPage={1}
          setCurrentPage={jest.fn()}
          articlesOnPageNumber={2}
          setArticlesOnPageNumber={jest.fn()}
        />
      </Router>
    );

    expect(getByTestId('articles-section')).toBeInTheDocument();
    const articlesEl = await findAllByTestId('article');
    expect(articlesEl).toHaveLength(2);
    const images = await findAllByRole('img');
    expect(images).toHaveLength(2);
    const links = await findAllByTestId('article-link');
    expect(links).toHaveLength(2);
  });

  it('articles section has all details', () => {
    const history = createMemoryHistory();

    const { getByTestId, getAllByRole } = render(
      <Router history={history}>
        <Articles
          dataApi={mockDataApi}
          currentPage={1}
          setCurrentPage={jest.fn()}
          articlesOnPageNumber={6}
          setArticlesOnPageNumber={jest.fn()}
        />
      </Router>
    );

    expect(getByTestId('pagination')).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(3);
    const numInput = getByTestId('input-number');
    expect(numInput).toBeInTheDocument();
    fireEvent.change(numInput, { target: { value: '6' } });
    expect((numInput as HTMLInputElement).value).toBe('6');
  });

  it('article details are open once clicked on article', async () => {
    const history = createMemoryHistory();
    const { findAllByTestId, findByText } = render(
      <Router history={history}>
        <Articles
          dataApi={mockDataApi}
          currentPage={1}
          setCurrentPage={jest.fn()}
          articlesOnPageNumber={6}
          setArticlesOnPageNumber={jest.fn()}
        />
      </Router>
    );
    const links = await findAllByTestId('article-link');
    fireEvent.click(links[0]);
    history.push(
      'Cyprus says to strip passports from Turk Cypriot officials - Reuters$2021-08-23T13:04:00Z'
    );

    expect(history.location.pathname).toBe(
      '/details/Cyprus says to strip passports from Turk Cypriot officials - Reuters$2021-08-23T13:04:00Z'
    );
    const articleTxt = await findByText(
      'Cyprus says to strip passports from Turk Cypriot officials - Reuters'
    );
    expect(articleTxt).toBeInTheDocument();
  });
});
