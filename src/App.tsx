import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import './app.css';
import { CSSTransition, TransitionGroup,  } from 'react-transition-group';


import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';
import NoMatch from './components/noMatch';
import { RouteInterface } from './utils/interface';

const routes: Array<RouteInterface > = [ 
  { path: '/', name: 'Home', Component: NewsPage },
  { path: '/about', name: 'About', Component: About },
  { path: '*', name: 'NoMatch', Component: NoMatch },  
];

const App = (): JSX.Element => (  
  <Router>
    <Navigation />
    <Route render={({location}) => (
      <div className="container">
      <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames='page'
        key={location.key}
      >
    <Switch location={location}> 
      {routes.map(({ path, Component }) => (
        <Route path={path} exact={path !== '*'}>
          <Component />
        </Route>
      ))}
         
    </Switch>
    </CSSTransition>
      </TransitionGroup>
      </div>
)}/>
  </Router>

);

export default App;
