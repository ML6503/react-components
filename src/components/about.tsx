import React from 'react';
import '../app.css';
// import { NewsPageProps } from '../utils/interface';

// const About = ({dataApi, setDataApi} : NewsPageProps): JSX.Element => (
  const About = (): JSX.Element => (
  <section className="about-page">
    <h2 className="about-header">About API NEWS Search</h2>
    <article>
      This search App uses News API. More information can be found at{' '}
      <a href="https://newsapi.org" target="_blank" rel="noreferrer">
        newsapi.org
      </a>
    </article>
  </section>
);

export default About;
