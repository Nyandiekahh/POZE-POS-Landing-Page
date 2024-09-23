// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card; // Ensure you're using default export
