import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_header.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

 return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Sasmi</Link>
        </h1>
        <nav>
          {/* Dynamically adds the 'active' class based on menuOpen state */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>About</Link></li>
            <li><Link to="/projectspage" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Say Hey!</Link></li>
          </ul>
        </nav>
        {/* Hamburger icon with a click handler */}
        <div className="hamburger" onClick={handleMenuClick}>
          &#9776;
        </div>
      </div>
    </header>
  );
};

export default Header;