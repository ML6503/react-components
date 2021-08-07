import React, { useState } from 'react';
import '../app.css';
import Search from './searchBar/search';
import Articles from './articles/articles';
import { DataApi } from '../utils/interface';

const NewsPage: React.FC = () => {
  const [dataApi, setDataApi] = useState(null);

  return (
    <div className="search-page">
      <Search setDataApi={setDataApi} />
      {dataApi && <Articles dataApi={dataApi as DataApi } />}
    </div>
  );
 };

export default NewsPage;
