import React from "react";
import cart from "../assets/shopping-cart.svg";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header--cont">
      <div className="header--cont--left">
        <Link
          to="/"
          className="header--title">the Shop</Link>
        <div className="header--subtitle"> Your one-stop shop for all your shop needs</div>
      </div>
      <div className="header--cont--center">
        <Link to="catalog" className="header--link--catalog">Catalog</Link>
      </div>
      <div className="header--cont--right">
        <div className="header--cart--count">0</div>
        <Link to="cart">
            <img className="header--cart" src={cart} alt="Shopping Cart Icon"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
