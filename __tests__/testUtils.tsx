// test-utils.jsx
import React, { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import articlesReducer from '../src/redux/articlesSlice'

function render(
  ui: ReactElement,
  {
    
    store = configureStore({ reducer: {  articles: articlesReducer }}),
    ...renderOptions
  } = {}
) {
    const Wrapper: React.FC =({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
};



// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
