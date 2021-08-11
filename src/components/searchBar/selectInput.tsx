import React from "react";
import { SortBySelectProps } from '../../utils/interface';

// Get display names of language in English
let languageNames = new Intl.DisplayNames(['en'], {type: 'language'});


const SelectInput: React.FC<SortBySelectProps> = ({ id, sortValue, setSortValue, selectOptions }) => {
  

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const newValue = (e.target as HTMLSelectElement).value === 'newest' ? 'publishedAt' : (e.target as HTMLSelectElement).value;
        
        setSortValue(newValue);
    }

    return (
        <span className="select-wrapper">
          <label htmlFor="sortBy">{ id === 'language' ? id : 'sort by'} :</label>
          <select
            id={id}
            name={id}
            className="select"            
            value={sortValue}
            onChange={onSelectChange}
            required
          >
            {(selectOptions as Array<string>).map((c) => (
              <option value={c} key={c}>
                { id === 'language' ? languageNames.of(c) : c }
              </option>
            ))}
          </select>         
        </span>
      );
};

export default SelectInput;
