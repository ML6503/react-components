import React from 'react';
import '../app.css';

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
