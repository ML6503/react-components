/* eslint-disable react/prop-types */
import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import  reducer
import articlesReducer from '../src/redux/articlesSlice';

interface ProviderProps {
  children?: NonNullable<ReactNode>;
}

function render(
  ui: ReactElement,
  {
    store = configureStore({ reducer: { articles: articlesReducer } }),
    ...renderOptions
  } = {}
): RenderResult {
  const Wrapper: React.FC<ProviderProps> = ({ children }): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
