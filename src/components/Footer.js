import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-logo-column">
          <h1 className="footer-logo">P O Z E</h1>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-offerings">
          <h2>What We Offer</h2>
          <ul>
            <li><span className="circle">1</span> POS</li>
            <li><span className="circle">2</span> Stock-take & Data Entry</li>
            <li><span className="circle">3</span> E-Commerce Integration</li>
            <li><span className="circle">4</span> Payment Integration</li>
            <li><span className="circle">5</span> POS Hardwares</li>
            <li><span className="circle">6</span> Tracking Expenses</li>
          </ul>
        </div>
        <div className="footer-contacts">
          <h2>Contacts</h2>
          <p>Seattle, Washington USA</p>
          <p>Nairobi, Kenya.</p>
          <p>+254 717 500 384</p>
          <p>info@irobtechnologies.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright. POZE. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
        <p>Powered by iROB Technologies</p>
      </div>
    </div>
  );
}

export default Footer;
