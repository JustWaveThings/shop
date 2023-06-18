import React, { useState } from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout() {
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
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
