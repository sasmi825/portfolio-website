import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Sasmi
        </Link>
        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-cta" onClick={closeMenu}>
                Say Hey!
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
