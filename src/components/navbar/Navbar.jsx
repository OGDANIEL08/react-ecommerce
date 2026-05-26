import { useState } from "react";
import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? '☰' : '✖' } 
      </div>
      <div className="logo">
        <h1>Aduke</h1>
        <HiOutlineShoppingBag className="logo-icon"/>
      </div>
      

    

   <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
  <li onClick={() => setMenu('shop')} className={menu === 'shop' ? 'list-s' : ''}>
    <Link to="/" className="nav-link">Shop</Link>
  </li>

  <li onClick={() => setMenu('men')} className={menu === 'men' ? 'list-s' : ''}>
    <Link to="/men" className="nav-link">Men</Link>
  </li>

  <li onClick={() => setMenu('women')} className={menu === 'women' ? 'list-s' : ''}>
    <Link to="/women" className="nav-link">Women</Link>
  </li>

  <li onClick={() => setMenu('kids')} className={menu === 'kids' ? 'list-s' : ''}>
    <Link to="/kids" className="nav-link">Kids</Link>
  </li>
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