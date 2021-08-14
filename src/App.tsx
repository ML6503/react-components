import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';
import NoMatch from './components/noMatch';
import { CSSTransition } from 'react-transition-group';


const routes = [
  { path: '/', name: 'Home', Component: NewsPage },
  { path: '/about', name: 'About', Component: About },
  // { path: '*', name: 'NoMatch', Component: NoMatch },
]

const App = (): JSX.Element => (
    <Router>
      <div>
          <Navigation />
          
          <main className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="container">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </main>
      </div>
    </Router>
    
);

export default App;
