import React, { useEffect, useState } from 'react';
import './search.css';
import Input from './input';
import Label from './label';
import SearchBtn from './searchBtn';
import SortBySelect from './sortBySelect';
import { urlBase, apiKey } from '../../utils/data';
import { SearchProps } from '../../utils/interface';

const Search: React.FC<SearchProps> = ({ setDataApi, currentPage, articlesOnPageNumber, setIsLoading, setErrorHttp })  => {
  const [inputValue, setInputValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [urlQuery, setUrlQuery] = useState('');
 

  const getUrl = () => {
    let extraQuery = `everything?q=${inputValue}&from=2021-08-07&sortBy=${sortValue}&page=${currentPage}&pageSize=${articlesOnPageNumber}&apiKey=${apiKey}`;

    setUrlQuery(urlBase.concat(extraQuery));
    console.log('URL', urlQuery);
  }
 
  useEffect(() => {
    // setUrlQuery(extraQuery);
    inputValue && getUrl()
  }, [currentPage, articlesOnPageNumber, sortValue]);

  useEffect(() => {

    urlQuery  && fetch(urlQuery)
      .then(res => {
        if(!res.ok) {
          throw Error('API news server status: Not reachable');
        }
        
        return res.json();
      })
        .then((data) => {
          if(data.status === 'error') {
            throw new Error(data.message);
          }
          setDataApi(data);
          console.log('data', data);
          setIsLoading(false);
          setErrorHttp(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorHttp(err.message);
        })
  }, [urlQuery]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    if (inputValue.length !== 0) {
      getUrl();
      setIsLoading(true);
    }
    
    
  };

  return (
    <div className="search-bar flex-center">
      <form className="flex-center" onSubmit={handleSubmit}>
        <Label />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <SearchBtn />
        <SortBySelect sortValue={sortValue} setSortValue={setSortValue}/>
      </form>
    </div>
  );
};

export default Search;
