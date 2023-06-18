/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Product({
	image,
	description,
	title,
	price,
	id,
	handleChange,
	addProductToCart
}) {
	const [productQty, setProductQty] = useState(0);

	function handleChange(value) {
		setProductQty(+value);
	}

	function incrementQty() {
		productQty >= 0 ? setProductQty((prevValue) => prevValue + 1) : null;
	}

	function decrementQty() {
		productQty >= 1 ? setProductQty((prevValue) => prevValue - 1) : null;
	}

	return (
		<div className="product--cont">
			<img
				src={`${image}`}
				alt={`${description}`}
				className="product--cont--image"
			/>
			<div className="product--cont--bottom">
				<div className="product--cont--bottom--top">
					<div className="product--name">{title}</div>
					<div className="product--price">${price}</div>
				</div>
				<div className="product--cont--bottom--bottom">
					<div className="product--qty--label">Qty:</div>
					<button
						onClick={() => decrementQty()}
						className="product--qty--increment">
						-
					</button>
					<input
						value={productQty}
						onChange={(e) => handleChange(e.target.value)}
						className="product--qty--input"
						placeholder={0}
						min={0}
						type="number"
					/>

					<button
						onClick={() => incrementQty()}
						className="product--qty--increment">
						+
					</button>
				</div>
				<button
					onClick={() => addProductToCart(id, title, price, productQty)}
					className="product--add--to--cart">
					{' '}
					Add to Cart{' '}
				</button>
			</div>
		</div>
	);
}

export default Product;
