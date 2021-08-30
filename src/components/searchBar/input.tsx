import React from 'react';
import './search.css';
import { InputProps } from '../../utils/interface';

const Input: React.FC<InputProps> = ({
  inputValue,
  setInputValue
}: InputProps) => (
  <span className="search-input-container">
    <input
      type="text"
      minLength={1}
      required
      id="header-search"
      placeholder="Search news"
      name="s"
      className="search-input"
      data-testid="search-input"
      value={inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue((e.target as HTMLInputElement).value)
      }
    />
  </span>
);

export default Input;
