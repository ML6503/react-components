import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './testUtils';
import App from '../src/App';

import { mockDataApi } from './__mocks__/fetchArticles';
import { AppDispatch } from '../src/redux/store';

import {
    getArticles,
    getArticlesSuccess,
    getArticlesFailure 
  } from '../src/redux/articlesSlice';

// jest.mock('./__mocks__/fetchArticles.ts');

// We use msw to intercept the network request during the test,
// and return the response mockDataApi after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get('/api/news', (req, res, ctx) => {
     res(ctx.json(mockDataApi), ctx.delay(150));
  })
]

// const server = setupServer(...handlers)

// // Enable API mocking before tests.
// beforeAll(() => server.listen())

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers())

// // Disable API mocking after the tests are done.
// afterAll(() => server.close())





test('user after clicking the fetch user button', async () => {
  console.log('Mock API data', mockDataApi);

    const { queryByTestId, findByTestId } = render(App());

  // should show no articles initiall  
  expect(queryByTestId('articles-section')).not.toBeInTheDocument()

  // after adding text in input & clicking the search  button,
  //it should now show that it is fetching the articles
  fireEvent.change(queryByTestId("search-input"),
    { target: { value: 'Cyprus' } }); // invoke handleChange
//   fireEvent.click(screen.getByRole('button'));
  fireEvent.submit(queryByTestId("form"));
  
    screen.debug();
  // after some time, the articles should be received
//   expect(await findByTestId('articles-section')).toBeInTheDocument();

});
