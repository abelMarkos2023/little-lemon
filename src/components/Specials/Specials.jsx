import React from 'react';
import Card from '../Card/Card';
import './Specials.css';
function Specials() {
  return (
    <section className="specials">
      <div className="special-title">
      <h2>This weeks specials!</h2>
      <button className="menu-btn">Online Menu</button>
      </div>
      <div className="cards">
        <Card 
          img="/images/3.jpg" 
          title="Greek Salad"
          price="$12.99"
          description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
        />
        <Card 
          img="/images/5.jpg" 
          title="Bruschetta"
          price="$5.89"
          description="Grilled bread with garlic, seasoned with salt and olive oil."
        />
        <Card 
          img="/images/4.jpg" 
          title="Lemon Dessert"
          price="$6.00"
          description="Grandma's recipe book dessert. Authentic and fresh."
        />
      </div>
    </section>
  );
}

export default Specials;
