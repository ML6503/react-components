// Unsplash Source API for random images
import React from 'react';
import './articles.css';
import { ArticlesProps } from '../../utils/interface';
import OneArticle from './oneArticle';
import Pagination from '../pagination/pagination';

const Articles: React.FC<ArticlesProps> = ({
  dataApi,
  currentPage,
  setCurrentPage,
  articlesOnPageNumber,
  setArticlesOnPageNumber
}: ArticlesProps) => {
  const { articles } = dataApi;
  const { totalResults } = dataApi;

  const pageLinksNumber = () => Math.ceil(totalResults / articlesOnPageNumber);

  const linksArr: Array<number> = Array.from(Array(pageLinksNumber()).keys());

  return (
    <>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        linksArr={linksArr}
        pageLinksNumber={pageLinksNumber}
        inputValue={articlesOnPageNumber}
        setInputValue={setArticlesOnPageNumber}
      />
      <section className="cards-container flex-center" data-testid="articles-section">
        {articles.map((article) => (
          <OneArticle
            article={article}
            articles={articles}
            key={`${article.title}-${article.url}`}
          />
        ))}
      </section>
    </>
  );
};

export default Articles;
