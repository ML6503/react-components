import React, { useState } from "react";
import { SortBySelectProps } from '../../utils/interface';


const SortBySelect: React.FC<SortBySelectProps> = ({ sortValue, setSortValue }) => {
    const selectOptions = ['relevancy', 'popularity', 'newest'];

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const newValue = (e.target as HTMLSelectElement).value === 'newest' ? 'publishedAt' : (e.target as HTMLSelectElement).value;
        setSortValue(newValue);
    }

    return (
        <span className="sort-by-select-wrapper">
          <label htmlFor="sortBy">sort by:</label>
          <select
            id="sortBy"
            name="sortBy"
            className="sort-by-select"            
            value={sortValue}
            onChange={onSelectChange}
            required
          >
            {(selectOptions as Array<string>).map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>         
        </span>
      );
};

export default SortBySelect;
