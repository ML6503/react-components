import React, { useState } from 'react';
import '../app.css';
import Search from './searchBar/search';
import Articles from './articles/articles';
import { DataApi } from '../utils/interface';

const defaultCurrentPage = 1;

const NewsPage: React.FC = () => {
  const [dataApi, setDataApi] = useState(null);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  return (
    <div className="search-page">
      <Search setDataApi={setDataApi} currentPage={currentPage} />
      {dataApi && <Articles dataApi={dataApi as DataApi } currentPage={currentPage as number} setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>} />}
    </div>
  );
 };

export default NewsPage;
