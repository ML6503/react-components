import React from "react";
import { Link } from 'react-router-dom';
import '../app.css';

const Navigation = (): JSX.Element => (
    <nav className="navigation-wrapper">
        <ul className="navigation flex-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>        
        </ul>
    </nav>
);

export default Navigation;
