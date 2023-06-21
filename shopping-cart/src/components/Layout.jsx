import React, { useState } from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout() {
	const [cart, setCart] = useState([]);

	const cartQty = cart.reduce((a, b) => a + b.qty, 0);

	return (
		<>
			<Header cartQty={cartQty} />
			<Outlet context={[cart, setCart]} />
			<Footer />
		</>
	);
}

export default Layout;
