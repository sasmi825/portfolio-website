// src/components/Footer.tsx
import React from "react";
import "../styles/_footer.scss"; // Ensure you have the styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h3>Sasmi</h3>
      <div className="footer-info">
        <p>Seattle, WA</p>
        <p>sasmipolu@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
