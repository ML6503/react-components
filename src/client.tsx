import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux/store';

function run() {
  hydrate(
    // App(),
    <Provider store={store}>
      <BrowserRouter>{App()}</BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

run();
