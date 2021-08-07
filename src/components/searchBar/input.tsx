import React from "react";
import '../../app.css';
import { InputProps } from '../../utils/interface';

 const Input: React.FC<InputProps> = ({ inputValue, setInputValue}) => {

    return (
        <span className="search-input-container">
        <input
          type="text"
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
