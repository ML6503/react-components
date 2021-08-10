import React, { useState } from 'react';
import '../app.css';
import Search from './searchBar/search';
import Articles from './articles/articles';
import { DataApi } from '../utils/interface';

const defaultCurrentPage = 1;
const ARTICLES_ON_PAGE_DEFAULT_NUMBER = 20;

const NewsPage: React.FC = () => {
  const [dataApi, setDataApi] = useState(null);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);  
  const [articlesOnPageNumber, setArticlesOnPageNumber] = useState(ARTICLES_ON_PAGE_DEFAULT_NUMBER);

  return (
    <div className="search-page">
      <Search setDataApi={setDataApi} currentPage={currentPage} articlesOnPageNumber={articlesOnPageNumber}/>
      {dataApi && 
        <Articles 
          dataApi={dataApi as DataApi }
          currentPage={currentPage as number}
          setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
          articlesOnPageNumber={articlesOnPageNumber as number}
          setArticlesOnPageNumber={setArticlesOnPageNumber as React.Dispatch<React.SetStateAction<number>>}
         />}
    </div>
  );
 };

export default NewsPage;
