import React from 'react';
import './search.css';

const SearchBtn = (): JSX.Element => (
  <button className="search-btn" type="submit" data-testid="search-btn">
    search
  </button>
);

export default SearchBtn;
