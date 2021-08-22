import React, { useEffect, useState } from 'react';
import './search.css';
import Input from './input';
import Label from './label';
import SearchBtn from './searchBtn';
import SelectInput from './selectInput';
import InputDate from './inputDate';
import {
  urlBase,
  apiKey,
  selectOptionsSortBy,
  selectOptionsLanguage
} from '../../utils/data';
import { SearchProps } from '../../utils/interface';
import { useAppDispatch } from '../../redux/hooks';
import { fetchArticles } from '../../redux/articlesSlice';

const Search: React.FC<SearchProps> = ({
  currentPage,
  articlesOnPageNumber
}: SearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [sortByValue, setSortByValue] = useState('');
  const [sortByLang, setSortByLang] = useState('');
  const [inputDateValue, setInputDateValue] = useState('');
  const [urlQuery, setUrlQuery] = useState('');

  const dispatch = useAppDispatch();

  const selectInputsArr = [
    {
      id: 'sortBy',
      selectState: sortByValue,
      setSelectState: setSortByValue,
      options: selectOptionsSortBy
    },
    {
      id: 'language',
      selectState: sortByLang,
      setSelectState: setSortByLang,
      options: selectOptionsLanguage
    }
  ];

  const getUrl = () => {
    const extraQuery = `everything?q=${inputValue}&from=${inputDateValue}
      &sortBy=${sortByValue}&language=${sortByLang}&page=${currentPage}
      &pageSize=${articlesOnPageNumber}&apiKey=${apiKey}`;

    setUrlQuery(urlBase.concat(extraQuery));
  };

  useEffect(() => {
    if (inputValue) {
      getUrl();
    }
  }, [
    currentPage,
    articlesOnPageNumber,
    sortByValue,
    sortByLang,
    inputDateValue
  ]);

  useEffect(() => {
    if (urlQuery) {
      dispatch(fetchArticles(urlQuery));
    }
  }, [urlQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.length !== 0) {
      getUrl();
    }
  };

  return (
    <div className="search-bar flex-center">
      <form className="flex-center" onSubmit={handleSubmit}>
        <Label />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <SearchBtn />
        {selectInputsArr.map((input) => (
          <SelectInput
            key={input.id}
            id={input.id}
            sortValue={input.selectState}
            setSortValue={input.setSelectState}
            selectOptions={input.options}
          />
        ))}
        <InputDate
          inputDateValue={inputDateValue}
          setInputDateValue={setInputDateValue}
        />
      </form>
    </div>
  );
};

export default Search;
