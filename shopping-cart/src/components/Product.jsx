import React from 'react';

function Product(props) {
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
					<button className="product--qty--increment">-</button>
					<input
						className="product--qty--input"
						placeholder="0"
						type="number"
						min={0}
					/>

					<button className="product--qty--increment">+</button>
				</div>
				<button className="product--add--to--cart"> Add to Cart </button>
			</div>
		</div>
	);
}

export default Product;
