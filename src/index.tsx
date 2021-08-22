import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

// ReactDOM.render(App(), document.getElementById('root'));
// process.env.NODE_ENV === "development"
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
