import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';
import NoMatch from './components/noMatch';
import { RouteInterface } from './utils/interface';
import Details from './components/articleDetails/details';

const routes: Array<RouteInterface> = [
  { path: '/', name: 'Home', Component: NewsPage, exact: true },
  { path: '/about', name: 'About', Component: About, exact: true },
  { path: '/details/:id', name: 'Details', Component: Details, exact: false },
  { path: '*', name: 'NoMatch', Component: NoMatch, exact: false }
];

const App = (): JSX.Element => (
  <Router>
    <Navigation />
    <Route
      render={({ location }) => (
        <div className="container">
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="page"
              key={location.pathname}
            >
              <Switch location={location}>
                {routes.map(({ path, Component, exact }) => (
                  <Route path={path} exact={exact} key={path}>
                    <Component />
                  </Route>
                ))}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
);
export default App;
