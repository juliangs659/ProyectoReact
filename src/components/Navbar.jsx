import React from 'react';
import '../assets/styles/Navbar.css';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">MiTienda</div>

      <nav className="navbar-links">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/productos">Productos</Link>
        </a>
        <a href="#">Historia</a>
      </nav>

      <div className="navbar-search-cart">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <button className="cart-button">
          <ShoppingCart size={20} />
        </button>
      </div>

      <button className="navbar-toggle" onClick={() => {
        document.querySelector('.navbar-links').classList.toggle('active');
        document.querySelector('.navbar-search-cart').classList.toggle('active');
      }}>
        ☰
      </button>
    </header>
  );
};

export default Navbar;
