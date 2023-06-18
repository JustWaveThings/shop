/* eslint-disable react/prop-types */
import React from 'react';

function Product({
	image,
	description,
	title,
	price,
	id,
	decrementQty,
	handleChange,
	incrementQty,
	addProductToCart,
	qty
}) {
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
						onClick={decrementQty}
						className="product--qty--increment">
						-
					</button>
					<input
						onChange={(e) => handleChange(e.target.value)}
						className="product--qty--input"
						placeholder={0}
						value={qty}
						type="number"
						min={0}
					/>

					<button
						onClick={incrementQty}
						className="product--qty--increment">
						+
					</button>
				</div>
				<button
					onClick={() => addProductToCart(qty, title, price)}
					className="product--add--to--cart">
					{' '}
					Add to Cart{' '}
				</button>
			</div>
		</div>
	);
}

export default Product;
