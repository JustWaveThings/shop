import React from "react";
import cart from "../assets/shopping-cart.svg";

function Header() {
  return (
    <div className="header--cont">
      <div className="header--cont--left">
        <div className="header--title"> the Shop</div>
        <div className="header--subtitle"> Your one-stop shop for all your shop needs</div>
      </div>
      <div className="header--cont--center">
        <div className="header--link--catalog">Catalog</div>
      </div>
      <div className="header--cont--right">
        <div className="header--cart--count">0</div>
        <img className="header--cart" src={cart} alt="Shopping Cart Icon"></img>
      </div>
    </div>
  );
}

export default Header;
