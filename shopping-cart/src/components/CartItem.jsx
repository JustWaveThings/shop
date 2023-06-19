/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';

function CartItem({ cart }) {
	const checkoutTotal = cart.reduce((acc, val) => acc + val.price * val.qty, 0);
	const displayCartItems = cart.map((item) => (
		<div
			key={item.id}
			className="cart--item--cont">
			<div className="cart--item--title">
				<div>{item.title}</div>
			</div>
			<div className="cart--item--price">
				<div>${item.price}</div>
			</div>
			<div className="cart--item--qty">
				<button
					onClick={() => decrementQty()}
					className="product--qty--increment">
					-
				</button>
				<input
					value={item.qty}
					onChange={(e) => handleChange(e.target.value)}
					className="product--qty--input cart"
					placeholder={0}
					min={0}
					inputMode="numeric"
					step={1}
					pattern="\d*"
				/>
				<button
					onClick={() => incrementQty()}
					className="product--qty--increment">
					+
				</button>
			</div>
			<div className="cart--item--delup">
				<button className="product--qty--increment">Update</button>
				<button className="product--qty--increment">Delete</button>
			</div>

			<div className="cart--item--total">
				<div>Item Total</div>
				<div>${(item.price * item.qty).toFixed(2)}</div>
			</div>
		</div>
	));
	return (
		<Fragment>
			<h2>Your Order:</h2>

			{displayCartItems}
			<h3 className="cart--table--checkoutTotal">
				Checkout Total: ${checkoutTotal.toFixed(2)}
			</h3>
			<button
				className="cart--table-checkoutButton"
				disabled>
				Check Out
			</button>
		</Fragment>
	);
}

export default CartItem;
