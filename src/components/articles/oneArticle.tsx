import React from "react";
import './articles.css';
import { ArticleProps } from '../../utils/interface';

const OneArticle: React.FC<ArticleProps> = ({ article }): JSX.Element => (
    <div className="card-container flex-center">
      <div className="card flex-center">
        <span className="details">
          <h3>{ article.title}</h3>
          { article.author && <p>by: { article.author}</p>}
        </span>            
        <span className="article-container flex-center">                  
           <article className="article ">
           {  article.urlToImage && <img
          className="img"
          src={ article.urlToImage}
          alt={"Image for article".concat( article.title)}
         
        /> }        
             <p>{ article.description}</p>
             <a href={ article.url}>read more at { article.source.name}</a>
           </article>               
          
        </span>
      </div>
    </div>);

export default OneArticle;
