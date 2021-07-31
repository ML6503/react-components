import React from 'react';
import './app.css';

const Search = (): JSX.Element => (
  <div className="search-bar flex-center">
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="search-logo">
          <img
            src="../public/magnifying-glass.svg"
            alt="magnifying glass logo"
          />
        </span>
      </label>
      <span className="search-input-container">
        <input
          type="text"
          id="header-search"
          placeholder="Search photos"
          name="s"
          className="search-input"
        />
      </span>
      <button className="search-btn" type="submit">
        search
      </button>
    </form>
  </div>
);

export default Search;
