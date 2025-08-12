
import React from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1 className="header-title">NexWear</h1>
    </div>
    <div className="header-center">
      <input
        type="text"
        className="header-search"
        placeholder="Search for products..."
        aria-label="Search"
      />
    </div>
    <div className="header-right">
      {/* Liked Icon */}
      <button className="header-icon" aria-label="Liked">
        <FiHeart size={24} />
      </button>
      {/* Cart Icon */}
      <button className="header-icon" aria-label="Cart">
        <FiShoppingCart size={24} />
      </button>
      {/* User Icon */}
      <button className="header-icon" aria-label="User">
        <FiUser size={24} />
      </button>
    </div>
  </header>
);

export default Header;