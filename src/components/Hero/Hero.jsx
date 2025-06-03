import React from 'react';
import './Hero.css';
function HeroSection() {
  return (
    <section className="hero">
     <div className="hero-container">
     <div className="hero-text">
        <span className='hero-title'>Little Lemon</span>
        <span className='hero-subtitle'>Chicago</span>
        <span className='hero-description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</span>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/images/2.jpg" alt="Food" />
      </div>
     </div>
    </section>
  );
}

export default HeroSection;
