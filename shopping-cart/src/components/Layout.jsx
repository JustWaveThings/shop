import React, { useState } from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout() {
	const [cart, setCart] = useState([] || null);
	console.log(cart, 'cart');

	return (
		<>
			<Header />
			<Outlet context={[cart, setCart]} />
			<Footer />
		</>
	);
}

export default Layout;
