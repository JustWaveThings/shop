import React, { useState } from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout() {
	const [cart, setCart] = useState([] || null);
	const [number, setNumber] = useState(0);
	console.log(cart, 'cart');
	console.log(number, 'number');
	return (
		<>
			<Header number={number} />
			<Outlet context={([cart, setCart], [number, setNumber])} />
			<Footer />
		</>
	);
}

export default Layout;
