// Unsplash Source API for random images
import React, { useState } from 'react';
import '../../app.css';
import { ArticlesProps } from '../../utils/interface';
import OneArticle from './oneArticle';
import Pagination from './pagination';

// const pageLinksNumber = 50;
const defaultArticleOnPageNumber = 20;


const Articles: React.FC<ArticlesProps> = ({ dataApi, currentPage, setCurrentPage }) => {
const articles = dataApi.articles;
const totalResults = dataApi.totalResults;
const [articleOnPageNumber, setArticleOnPageNumber] = useState(defaultArticleOnPageNumber);

const pageLinksNumber = () => Math.ceil(totalResults / articleOnPageNumber);
console.log('Articles', articles);
console.log('totalResults', totalResults);
console.log(' currentPage',  currentPage, pageLinksNumber());

const linksArr: Array<number> = Array.from(Array(pageLinksNumber()).keys());


  return (
    <>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} linksArr={linksArr} pageLinksNumber={pageLinksNumber} />
    <section className="cards-container flex-center">
      {articles.map((article) => < OneArticle article={article} key={ article.title} />
        )}
    </section>
    </>
  );

};

export default Articles;
