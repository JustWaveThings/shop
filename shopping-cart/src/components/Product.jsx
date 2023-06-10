import React from "react";


function Product() {
  return <div className="product--cont">
    <img src="favicon.ico" alt="test" className="product--cont--image"/>
    <div className="product--cont--bottom">
      <div className="product--cont--bottom--top">
        <div className="product--name">Test Product</div>
        <div className="product--price">$100</div>
      </div>
      <div className="product--cont--bottom--bottom">
        <div className="product--qty--label">Qty:</div>
        <button className="product--qty--increment">-</button>
        <input className="product--qty--input" placeholder="0" type="number" min={0} />

        <button className="product--qty--increment">+</button>

      </div>
      <button className="product--add--to--cart"> Add to Cart </button>
    </div>
  </div>;
}

export default Product;
