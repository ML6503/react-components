import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';

const App = (): JSX.Element => (
    <Router>
      <div>
          <Navigation />
          <Switch>
              <Route exact path="/">
                <NewsPage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
          </Switch>
      </div>
    </Router>
    
);

export default App;
