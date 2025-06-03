import React from 'react';
import './Navbar.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">🍋 Little Lemon</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
