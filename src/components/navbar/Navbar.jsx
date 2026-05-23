import { useState } from "react";
import cart_icon from "../assets/cart_icon.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? '☰' : 'X' } 
      </div>
      <div className="logo">
        <h1>Aduke</h1>
        <HiOutlineShoppingBag className="logo-icon"/>
      </div>
      

    

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Owambe</li>
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