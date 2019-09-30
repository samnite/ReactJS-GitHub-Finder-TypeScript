import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  icon: string;
  title: string;
}
const Navbar = ({ icon, title }: NavbarProps) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: '  Github Finder',
  icon: 'fab fa-github'
};

export default Navbar;
