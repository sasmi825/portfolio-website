import React from "react";
import { Link } from "react-router-dom";
import "../styles/_header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Sasmi</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Say Hey!</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
