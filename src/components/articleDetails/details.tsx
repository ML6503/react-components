import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../../utils/interface';
import './details.css';
import { urlBase, apiKey } from '../../utils/data';

// const Details = ({dataApi, setDataApi} : NewsPageProps)  => {
const Details = (): JSX.Element => {
  const articleId = useParams<{ id: string }>();
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);

  const str = articleId.id.split(' ').reverse()[0];
  const utcDate = str.substr(str.indexOf('$') + 1);

  const getTitle = () => articleId.id.split('$2', 1);
  const getDate = () => {
    const date = new Date(utcDate).toString().split(' ', 4).join(' ');
    return date;
  };

  const searchForArticle = (articles: Array<Article>) => {
    setArticle(articles.filter((a) => a.publishedAt === utcDate)[0]);
  };

  const urlQuery = urlBase.concat(
    `everything?q=${getTitle()}&apiKey=${apiKey}`
  );

  useEffect(() => {
    const abortCont = new AbortController();

    if (urlQuery) {
      fetch(urlQuery, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('API news server status: Not reachable');
          }

          return res.json();
        })
        .then((data) => {
          if (data.status === 'error') {
            throw new Error(data.message);
          }
          searchForArticle(data.articles);

          setError(null);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        });
    }
  }, []);

  return (
    article && (
      <section className="article-details">
        <div className="card flex-center">
          <span className="details details-header">
            <h3>{getTitle()}</h3>
            {article.author && <p>by: {article.author}</p>}
          </span>
          <span className="article-container details-container flex-center">
            <article className="article ">
              {article.urlToImage && (
                <img
                  className="img img-details"
                  src={article.urlToImage}
                  alt={'Image for article'.concat(article.title)}
                />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">
                read more at {article.source.name}
              </a>
            </article>
          </span>
          <p className="details-date">published on {getDate()}</p>
        </div>
        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <button
              className="error-back-btn"
              onClick={() => setError(null)}
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
