import React from 'react';
import './Card.css';
function Card({ img, title, price, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-content">
        <div className="card-title">
          <h4>{title}</h4>
          <span>{price}</span>
        </div>
        <p>{description}</p>
        <button className="order-btn">Order a delivery 🍽️</button>
      </div>
    </div>
  );
}

export default Card;
