import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,  
  withRouter
} from 'react-router-dom';
import './app.css';
import {
  CSSTransition, 
  TransitionGroup
} from 'react-transition-group';
import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';
import NoMatch from './components/noMatch';


const routes = [
  { path: '/', name: 'Home', Component: NewsPage },
  { path: '/about', name: 'About', Component: About },
  { path: '*', name: 'NoMatch', Component: NoMatch }
];


const createRoutes = (routes) =>
  routes.map(({ Component, path }) => {
    const routRef = React.createRef();

    return (
      <Route key={path} path={path} exact>
        {() => (
          <div
            ref={routRef as React.RefObject<HTMLDivElement>}
            className="page" >
              <Component />
          </div>
        )}
      </Route>
    );
  });

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>{createRoutes(routes)}</Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App = () => (
  // <React.StrictMode>
    <Router>
      <Navigation />
      <AnimatedSwitch />
    </Router>
  // </React.StrictMode>
);

export default App;
