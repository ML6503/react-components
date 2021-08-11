import React, { useEffect, useState } from 'react';
import './search.css';
import Input from './input';
import Label from './label';
import SearchBtn from './searchBtn';
import SelectInput from './selectInput';
import { urlBase, apiKey } from '../../utils/data';
import { SearchProps } from '../../utils/interface';

const selectOptionsSortBy = ['relevancy', 'popularity', 'newest'];
const selectOptionsLanguage = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'zh'];


const Search: React.FC<SearchProps> = ({ setDataApi, currentPage, articlesOnPageNumber, setIsLoading, setErrorHttp })  => {
  const [inputValue, setInputValue] = useState('');
  const [sortByValue, setSortByValue] = useState('');
  const [sortByLang, setSortByLang] = useState('')
  const [urlQuery, setUrlQuery] = useState('');
 

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
    let extraQuery = `everything?q=${inputValue}&from=2021-08-07&sortBy=${sortByValue}&language=${sortByLang}&page=${currentPage}&pageSize=${articlesOnPageNumber}&apiKey=${apiKey}`;

    setUrlQuery(urlBase.concat(extraQuery));
    
  }
 
  useEffect(() => {
    // setUrlQuery(extraQuery);
    inputValue && getUrl()
  }, [currentPage, articlesOnPageNumber, sortByValue, sortByLang ]);

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

  console.log('URL', urlQuery);

  return (
    <div className="search-bar flex-center">
      <form className="flex-center" onSubmit={handleSubmit}>
        <Label />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <SearchBtn />
        {selectInputsArr.map((input) => (
          <SelectInput key={input.id} id={input.id} sortValue={input.selectState} setSortValue={input.setSelectState} selectOptions={input.options}/>
          )
        )}
      </form>
    </div>
  );
};

export default Search;
