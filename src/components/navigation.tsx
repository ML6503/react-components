import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../app.css';
import { NavLinkProps } from '../utils/interface';

const NavLink = ({ label, to, activeOnlyWhenExact }: NavLinkProps) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li>
      <Link className={match ? 'active-link' : ''} to={to} data-testid={`location-display-${label}`}>
        {label}
      </Link>
    </li>
  );
};

const Navigation = (): JSX.Element => (
  <nav className="navigation-wrapper" data-testid='navigation-container'>
    <ul className="navigation flex-center">
      <NavLink activeOnlyWhenExact to="/" label="Home" />
      <NavLink to="/about" label="About" />
    </ul>
  </nav>
);

export default Navigation;
