import React from 'react';
import { Link } from 'react-router-dom';
import './articles.css';
import { ArticleProps } from '../../utils/interface';

const OneArticle: React.FC<ArticleProps> = ({
  article
}: ArticleProps): JSX.Element => (
  <div className="card-container flex-center">
    <Link
      to={`details/${article.title}$${article.publishedAt}`}
      className="article-link"
      target="_blank"
    >
      <div className="card flex-center">
        <span className="details">
          <h3>{article.title}</h3>
          {article.author && <p>by: {article.author}</p>}
        </span>
        <span className="article-container flex-center">
          <article className="article ">
            {article.urlToImage && (
              <img
                className="img"
                src={article.urlToImage}
                alt={'Image for article'.concat(article.title)}
              />
            )}
            <p>{article.description}</p>
          </article>
        </span>
      </div>
    </Link>
  </div>
);

export default OneArticle;
