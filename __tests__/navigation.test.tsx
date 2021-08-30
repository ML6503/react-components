// import {render, screen} from '@testing-library/react'
import { render, screen } from './testUtils';

import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import App from '../src/App';
import Navigation from '../src/components/navigation';
import NoMatch from '../src/components/noMatch';


test('pathname to be a bad page',  ()  =>  {  
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    
    render (      
      < Router  history={history}>    
        <App />
      </ Router>      
    )
        
    expect(history.location.pathname).toBe('/some/bad/route');  
  });

  it('No Match pagetext content check', () => {
          
  const { getByText } =  render (     
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>,    
    )
    expect(getByText(/404/)).toBeInTheDocument();
    
  });

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    < Router history={history}>
      <App />
    </ Router>,
  )

  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/home/i)).toBeInTheDocument()

  const leftClick = {button: 0};
  userEvent.click(screen.getByText(/about/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/about api news search/i)).toBeInTheDocument()
})


test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory();
  const route = '/about';
  history.push(route);
  render(
    <Router history={history}>
      <Navigation />
    </Router>,
  )

  expect(screen.getByTestId('location-display-About')).toHaveTextContent(/about/i);
});
