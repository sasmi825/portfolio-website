import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-logo">Sasmi</span>
        <div className="footer-info">
          Seattle, WA
          <br />
          <a href="mailto:sasmipolu@gmail.com">sasmipolu@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
