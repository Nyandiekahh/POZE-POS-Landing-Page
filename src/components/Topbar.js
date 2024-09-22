import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="logo">P O Z E</h1>
      </div>
      <div className="topbar-links">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#">What We Offer</a>
          <div className="dropdown-content">
            <a href="#">POS</a>
            <a href="#">Stock-take & Data Entry</a>
            <a href="#">E-Commerce Integration</a>
            <a href="#">Payment Integration</a>
            <a href="#">POS Hardwares</a>
            <a href="#">Tracking Expenses</a>
          </div>
        </div>
        <a href="#">Products</a>
        <a href="#">Why Rack?</a>
        <a href="#">About Us</a>
        <a href="#">Click For Trial</a>
        <a href="#">Get in Touch</a>
      </div>
    </div>
  );
}

export default Topbar;
