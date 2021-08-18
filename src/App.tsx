import React,  { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch  
} from 'react-router-dom';
import './app.css';
import { CSSTransition, TransitionGroup,  } from 'react-transition-group';


import NewsPage from './components/newsPage';
import About from './components/about';
import Navigation from './components/navigation';
import NoMatch from './components/noMatch';
import { RouteInterface } from './utils/interface';
import Details from './components/articleDetails/details';

type Props = { component: FunctionComponent } & RouteComponentProps;

const routes: Array<RouteInterface > = [ 
  // const routes = [ 
  { path: '/', name: 'Home', Component: NewsPage, exact: true },
  { path: '/about', name: 'About', Component: About, exact: true },
  { path: '/details/:id', name: 'Details', Component: Details, exact: false },  
  { path: '*', name: 'NoMatch', Component: NoMatch,  exact: false },  
];


const App = () => {
  // const [dataApi, setDataApi] = useState(null);

  return (  
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
        {routes.map(({ path, Component, exact }) => (
          // <Route path={path} exact={path !== '*'} key={path}>
          // <Route path={path} exact={exact} key={path} component={ () => <Component dataApi = {dataApi} setDataApi={setDataApi} />} />
          // <Route path={path} exact={exact} key={path} component={ (props: Props) => <Component {...props} />} />
          <Route path={path} exact={exact} key={path}>
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
};


export default App;
