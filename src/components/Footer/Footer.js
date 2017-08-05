import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer-text">
        {props.footerText}
      </div>
    </footer>
  );
};

export default Footer;
