import React from 'react';
import './app.css';


const Search = () => (
    <div className="search-bar">
    <span className="search-logo"><img src='../public/magnifying-glass.svg' alt='magnifying glass logo'/></span>
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search web</span>
        </label>
        <span className="search-input-container">
            <input
                type="text"
                id="header-search"
                placeholder="Search web"
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