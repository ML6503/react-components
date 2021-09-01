import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach } from '@jest/globals';
import { cleanup } from '@testing-library/react';
import App from '../src/App';
import { render, fireEvent, screen } from '../__mocks__/testUtils';
import { mockDataApi } from '../__mocks__/mockDataApi';

const fakeFetch = jest.fn();

const globalRef: typeof globalThis = global;
globalRef.fetch = fakeFetch;

beforeEach(() => jest.clearAllMocks());

afterEach(cleanup);

describe('Search Component in App', () => {
  it('App has search btn & all relevant inputs', () => {
    const appEl = render(App());

    const searchEl = appEl.getByTestId('search-btn');
    expect(searchEl).toBeInTheDocument();
    expect(appEl.getByRole('textbox')).toBeInTheDocument();

    expect(screen.queryByLabelText(/sort/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });

  it('text input and search click return loading', async () => {
    const appEl = render(App());
    // we find our input with no value
    const inputEl = appEl.getByRole('textbox');
    expect(screen.queryByText(/React/i)).toBeNull();
    expect(inputEl).toHaveValue('');
    // we produce synthetic mock event to get 'React' value into text input
    fireEvent.change(inputEl, {
      target: { value: 'React' }
    });

    expect(inputEl).toHaveValue('React');
    const searchBtn = appEl.getByTestId('search-btn');
    const articlesSection = appEl.queryByTestId('articles-section');
    expect(articlesSection).toBeNull();
    fireEvent.click(searchBtn);
    expect(appEl.getByTestId('loading')).toBeInTheDocument();
  });
});

it('should return fetch', (done) => {
  const mockSuccessResponse = mockDataApi;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  globalRef.fetch();

  expect(globalRef.fetch).toReturn();
  done();
});

describe('select events', () => {
  it('select sort by published time change', () => {
    const appEl = render(App());
    const sortBySelector = appEl.getByTestId('sortBy');
    fireEvent.change(sortBySelector, { target: { value: 'popularity' } });
    const options = appEl.getAllByTestId('select-option');
    expect((options[0] as HTMLOptionElement).selected).toBeFalsy();
    expect((options[1] as HTMLOptionElement).selected).toBeTruthy();
    expect((options[2] as HTMLOptionElement).selected).toBeFalsy();
    userEvent.selectOptions(sortBySelector, 'newest');
    expect(
      (appEl.getByText('newest') as HTMLOptionElement).selected
    ).toBeTruthy();
    expect(
      (appEl.getByText('relevancy') as HTMLOptionElement).selected
    ).toBeFalsy();
  });

  it('select language change', () => {
    const appEl = render(App());
    const langSelector = appEl.getByTestId('language');

    userEvent.selectOptions(langSelector, 'ru');
    expect(
      (appEl.getByText('Russian') as HTMLOptionElement).selected
    ).toBeTruthy();
    expect((appEl.getByText('all') as HTMLOptionElement).selected).toBeFalsy();
  });

  it('date input change', () => {
    const appEl = render(App());
    const dateInput = appEl.getByTestId('date-input');
    fireEvent.change(dateInput, { target: { value: '2020-05-24' } });
    expect((dateInput as HTMLInputElement).value).toBe('2020-05-24');
  });
});
