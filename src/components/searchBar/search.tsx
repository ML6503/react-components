import React, { useEffect, useState } from 'react';
import './search.css';
import Input from './input';
import Label from './label';
import SearchBtn from './searchBtn';
import { urlBase, apiKey } from '../../utils/data';
import { SearchProps } from '../../utils/interface';

const Search: React.FC<SearchProps> = ({ setDataApi, currentPage = 1 })  => {
  const [inputValue, setInputValue] = useState('');
  const [urlQuery, setUrlQuery] = useState('');

  let extraQuery = `everything?q=Apple&from=2021-08-07&sortBy=popularity&page=${currentPage}&apiKey=${apiKey}`;
 
  const getUrl = (urlQuery: string) => {
       
    return urlBase.concat(urlQuery);
  }
 
  useEffect(() => {
    setUrlQuery(extraQuery);
  }, [currentPage]);

  useEffect(() => {
    urlQuery.length !== 0 && fetch(getUrl(urlQuery))
      .then(res => {
        return res.json();
      })
        .then((data) => {
          setDataApi(data);
          console.log('data', data);
        })
  }, [urlQuery]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setUrlQuery(extraQuery);
  };

  return (
    <div className="search-bar flex-center">
      <form className="flex-center" onSubmit={handleSubmit}>
        <Label />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <SearchBtn />
      </form>
    </div>
  );
};

export default Search;
