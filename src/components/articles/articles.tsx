// Unsplash Source API for random images
import React from 'react';
import '../../app.css';
import { ArticlesProps } from '../../utils/interface';


const Articles: React.FC<ArticlesProps> = ({ dataApi }) => {
const articles = dataApi.articles;
const totalResults = dataApi.totalResults;

console.log('Articles', articles);
console.log('totalResults', totalResults);

  return (
    <section className="cards-container flex-center">
      {articles.map((el) => (
        <div key={el.title} className="card-container flex-center">
          <div className="card flex-center">
            <span className="details">
              <h3>{el.title}</h3>
              {el.author && <p>by: {el.author}</p>}
            </span>
            
            <span className="article-container flex-center">
                  
               <article className="article ">
               { el.urlToImage && <img
              className="img"
              src={el.urlToImage}
              alt={"Image for article".concat(el.title)}
             
            /> }        
                 <p>{el.description}</p>
                 <a href={el.url}>read more at {el.source.name}</a>
               </article>
               
              
            </span>
          </div>
        </div>
      ))}
    </section>
  );

};

export default Articles;
