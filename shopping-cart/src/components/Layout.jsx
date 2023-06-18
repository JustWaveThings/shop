import React, { useState } from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout() {
	const [qty, setQty] = useState(0);
	console.log(qty);
	return (
		<>
			<Header qty={qty} />
			<Outlet context={[qty, setQty]} />
			<Footer />
		</>
	);
}

export default Layout;
