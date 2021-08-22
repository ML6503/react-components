import React, { useState } from 'react';
import '../app.css';
import Search from './searchBar/search';
import Articles from './articles/articles';
import { DataApi } from '../utils/interface';
import { useAppSelector } from '../redux/hooks';
import Error from './error';

const defaultCurrentPage = 1;
const ARTICLES_ON_PAGE_DEFAULT_NUMBER = 20;

const NewsPage = (): JSX.Element => {
  const { articles } = useAppSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [articlesOnPageNumber, setArticlesOnPageNumber] = useState(
    ARTICLES_ON_PAGE_DEFAULT_NUMBER
  );

  return (
    <div className="search-page">
      <Search
        currentPage={currentPage}
        articlesOnPageNumber={articlesOnPageNumber}
      />
      {articles.loading && <div className="loading-bar" />}
      {articles.dataApi && articles.dataApi.status === 'ok' && (
        <Articles
          dataApi={articles.dataApi as DataApi}
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

      {articles.hasErrors && <Error error={articles.error} />}
      {articles.dataApi && articles.dataApi.status === 'error' && (
        <Error error={articles.dataApi.message} />
      )}
    </div>
  );
};

export default NewsPage;
