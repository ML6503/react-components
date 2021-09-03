import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import App from './App';
import { store } from './redux/store';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  /* Example with Empty content */
  // const content = '';

  /* Example with SSR */
  //   const content = renderToString(App());

  /* Example with Routing */
  //   let context = {};

  //   const content = renderToString(
  //     <StaticRouter location={req.url} context={context}>
  //       { App() }
  //     </StaticRouter>
  //   );

  /* Example with Data */
  const context = {};
  // let data = await fetchDataByUrl(req.url);

  // let store = createStore(
  //   (state) => state,
  //   data,
  // );

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {App()}
      </StaticRouter>
    </Provider>
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content
      // data: JSON.stringify(data),
    })
  );
});

app.listen(3000, () => {
  //   console.log('Server is listening on port: 3000');
});
