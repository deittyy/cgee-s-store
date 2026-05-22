import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiHome, FiGrid, FiInfo, FiShoppingCart } from "react-icons/fi"; // Feather icons
// OR use Lucide (more modern):
// import { Home, Grid, Info, ShoppingCart } from 'lucide-react';

const Sidebar = () => {
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          CGEE<span>_here</span>
        </div>
        <div className="sidebar-nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            <FiHome className="icon" /> Home
          </Link>
          <Link
            to="/collections"
            className={`nav-link ${isActive("/collections") ? "active" : ""}`}
          >
            <FiGrid className="icon" /> Collections
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            <FiInfo className="icon" /> About
          </Link>
        </div>
        <div className="cart-icon-side" onClick={toggleCart}>
          <FiShoppingCart className="icon" /> <span>Cart</span>{" "}
          <span className="cart-count-side">{totalItems}</span>
        </div>
      </div>
      <style>{`
        .icon { margin-right: 12px; vertical-align: middle; }
        .nav-link, .cart-icon-side { display: flex; align-items: center; }
      `}</style>
    </>
  );
};
