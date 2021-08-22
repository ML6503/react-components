import React from 'react';
import { useLocation} from 'react-router-dom';
import { useAppSelector} from '../../redux/hooks';
import { Article, DetailsLocationState } from '../../utils/interface';
import { useAppDispatch } from '../../redux/hooks';
import { getNullError,  } from '../../redux/articlesSlice';
import './details.css';


const Details = (): JSX.Element => {  
  const location = useLocation();
  const { publishedAt, title } = location.state as DetailsLocationState;  
  const { articles } = useAppSelector((state) => state);

  const getDate = () => {
    const date = new Date(publishedAt).toString().split(' ', 4).join(' ');
    return date;
  };


  const oneArticle = () : Article => 
    (articles.articles as Array<Article>).filter((a) => a.publishedAt === publishedAt && a.title === title)[0];

  const dispatch = useAppDispatch();

  return (
    oneArticle()  && (
      <section className="article-details">
        <div className="card flex-center">
          <span className="details details-header">
            <h3>{title}</h3>
            {oneArticle().author && <p>by: {oneArticle().author}</p>}
          </span>
          <span className="article-container details-container flex-center">
            <article className="article ">
            {oneArticle().urlToImage && (
                <img
                  onError={({ target }) => 
                    (target as HTMLImageElement).src = '../../../public/ashni-Wh9ZC4727e4-unsplash.jpg'}
                  className="img img-details"
                  src={oneArticle().urlToImage}
                  alt={'Image for article'.concat(title)}
                />
              )}
              <p>{oneArticle().description}</p>
              <a href={oneArticle().url} target="_blank" rel="noreferrer">
                read more at {oneArticle().source.name}
              </a>
            </article>
          </span>
          <p className="details-date">published on {getDate()}</p>
        </div>
        {articles.error && (
          <div className="error">
            <p>Error: {articles.error}</p>
            <button
              className="error-back-btn"            
              onClick={() => dispatch(getNullError())}
              type="button"
            >
              back
            </button>
          </div>
        )}
      </section>
    )
  );
};

export default Details;
