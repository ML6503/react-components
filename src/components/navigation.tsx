import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import '../app.css';
import { NavLinkProps } from "../utils/interface";

const  NavLink = ({ label, to, activeOnlyWhenExact }: NavLinkProps) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li >     
      <Link className={match ? "active-link" : ""} to={to}>{label}</Link>
    </li>
  );
}
const Navigation = (): JSX.Element => {
   
  return (
    <nav className="navigation-wrapper">
        <ul className="navigation flex-center">
          <NavLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home" />
          <NavLink to="/about" label="About"/>
        </ul>
    </nav>
  );
};

export default Navigation;
