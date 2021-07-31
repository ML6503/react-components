import React from 'react';
import './app.css';
import Search from './search';
import Images from './images';

const App = (): JSX.Element => (
  <div className="search-page">
    <Search />
    <Images />
  </div>
);

export default App;
