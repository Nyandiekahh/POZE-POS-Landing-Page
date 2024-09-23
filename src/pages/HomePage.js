import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <div className="hero-text-box">
          <p>Experience efficiency, flexibility,<br/>
          and 24/7 customer support with<br/>
          POZE POS system.</p>
        </div>
      </div>

      <div className="cards-section">
        <div className="card info-card">
          <h2>Our POS System</h2>
          <p>
            Our POS system is designed to simplify business operations with its ease of use, versatility, and industry-specific features. Whether you're running a retail store, restaurant, or e-commerce business, our solution adapts seamlessly to your needs.
          </p>
          <ul>
            <li>Intuitive interface for quick navigation and minimal training.</li>
            <li>Real-time data tracking for sales, inventory, and customer management.</li>
            <li>Multi-device accessibility on tablets, desktops, and mobile phones.</li>
            <li>Scalable to grow with your business, from a single store to multiple locations.</li>
          </ul>
          <p>Experience efficiency, flexibility, and 24/7 customer support with our POS system.</p>
        </div>
        <div className="card image-card">
          <img src="path/to/image.jpg" alt="POS System" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
