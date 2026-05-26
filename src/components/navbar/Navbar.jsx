import { useState } from "react";
import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? '☰' : '✖'}
      </div>
      <div className="logo">
        <h1>Aduke</h1>
        <HiOutlineShoppingBag className="logo-icon" />
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={closeMenu}>Shop</Link></li>
        <li><Link to="/men" className="nav-link" onClick={closeMenu}>Men</Link></li>
        <li><Link to="/women" className="nav-link" onClick={closeMenu}>Women</Link></li>
        <li><Link to="/kids" className="nav-link" onClick={closeMenu}>Kids</Link></li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;