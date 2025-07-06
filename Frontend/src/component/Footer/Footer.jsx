import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
