import React, { useState } from 'react';
import '../app.css';
import Search from './searchBar/search';
import Articles from './articles/articles';
import { DataApi } from '../utils/interface';

const defaultCurrentPage = 1;
const ARTICLES_ON_PAGE_DEFAULT_NUMBER = 20;

// const NewsPage: React.FC<ApiGlobalProps> = (
// {dataApi, setDataApi} : ApiGlobalProps): JSX.Element => {
const NewsPage = (): JSX.Element => {
  const [dataApi, setDataApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorHttp, setErrorHttp] = useState(null);

  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [articlesOnPageNumber, setArticlesOnPageNumber] = useState(
    ARTICLES_ON_PAGE_DEFAULT_NUMBER
  );

  return (
    <div className="search-page">
      <Search
        setDataApi={setDataApi}
        currentPage={currentPage}
        articlesOnPageNumber={articlesOnPageNumber}
        setIsLoading={setIsLoading}
        setErrorHttp={setErrorHttp}
      />
      {isLoading && <div className="loading-bar" />}
      {dataApi && dataApi.status === 'ok' && (
        <Articles
          dataApi={dataApi as DataApi}
          currentPage={currentPage as number}
          setCurrentPage={
            setCurrentPage as React.Dispatch<React.SetStateAction<number>>
          }
          articlesOnPageNumber={articlesOnPageNumber as number}
          setArticlesOnPageNumber={
            setArticlesOnPageNumber as React.Dispatch<
              React.SetStateAction<number>
            >
          }
        />
      )}
      {errorHttp && (
        <div className="error">
          <p>Error: {errorHttp}</p>
          <button
            className="error-back-btn"
            onClick={() => setErrorHttp(null)}
            type="button"
          >
            back
          </button>
        </div>
      )}
      {dataApi && dataApi.status === 'error' && (
        <div className="error">Error: {dataApi.message}</div>
      )}
    </div>
  );
};

export default NewsPage;
