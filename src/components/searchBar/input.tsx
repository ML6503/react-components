import React from "react";
import './search.css';
import { InputProps } from '../../utils/interface';

 const Input: React.FC<InputProps> = ({ inputValue, setInputValue}) => {

    return (
        <span className="search-input-container">
        <input
          type="text"
          minLength={1}
          pattern="^\d*[a-zA-Z][a-zA-Z0-9]*$"
          required
          id="header-search"
          placeholder="Search news"
          name="s"
          className="search-input"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue((e.target as HTMLInputElement).value)}
        />
      </span>
    );
};

export default Input;
