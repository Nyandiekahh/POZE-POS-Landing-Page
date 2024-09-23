import React from 'react';
import './InfoCard.css'; // Create a CSS file for styling if needed

const InfoCard = () => {
  return (
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
  );
};

export default InfoCard;
