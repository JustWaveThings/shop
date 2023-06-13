import React, { useState } from 'react';

function Product(props) {
	const [qty, setQty] = useState(0);

	const incrementQty = () => {
		setQty((prevQty) => +prevQty + 1);
	};

	const decrementQty = () => {
		setQty((prevQty) => +prevQty - 1);
	};

	const addProductToCart = (qty, title, price) => {
		console.log(
			`added product ${title} to cart Qty ${qty} at price - $${price} per item.`
		);
	};

	function handleChange(value) {
		setQty(value);
	}

	return (
		<div className="product--cont">
			<img
				src={`${props.image}`}
				alt={`${props.description}`}
				className="product--cont--image"
			/>
			<div className="product--cont--bottom">
				<div className="product--cont--bottom--top">
					<div className="product--name">{props.title}</div>
					<div className="product--price">${props.price}</div>
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
					onClick={() => addProductToCart(qty, props.title, props.price)}
					className="product--add--to--cart">
					{' '}
					Add to Cart{' '}
				</button>
			</div>
		</div>
	);
}

export default Product;
