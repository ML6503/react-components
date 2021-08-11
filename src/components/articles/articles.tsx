// Unsplash Source API for random images
import React, { useState } from 'react';
import './articles.css';
import { ArticlesProps } from '../../utils/interface';
import OneArticle from './oneArticle';
import Pagination from '../pagination/pagination';

// const pageLinksNumber = 50;



const Articles: React.FC<ArticlesProps> = ({ dataApi, currentPage, setCurrentPage, articlesOnPageNumber, setArticlesOnPageNumber }) => {
const articles = dataApi.articles;
const totalResults = dataApi.totalResults;

const pageLinksNumber = () => Math.ceil(totalResults / articlesOnPageNumber);
console.log('Articles', articles);
console.log('totalResults', totalResults);
console.log(' currentPage',  currentPage, pageLinksNumber());

const linksArr: Array<number> = Array.from(Array(pageLinksNumber()).keys());


  return (
    <>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} linksArr={linksArr} pageLinksNumber={pageLinksNumber} inputValue={articlesOnPageNumber} setInputValue={setArticlesOnPageNumber}/>
    <section className="cards-container flex-center">
      {articles.map((article, i) => < OneArticle article={article} key={`${article.title}-${i}`} /> )}
    </section>
    </>
  );

};

export default Articles;
