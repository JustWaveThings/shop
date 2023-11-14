import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Catalog, { loader as productLoader } from './components/Catalog.jsx';
import Cart from './components/Cart.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="catalog"
				element={<Catalog />}
				loader={productLoader}
			/>
			<Route
				path="cart"
				element={<Cart />}
			/>
			{/* This catch-all route DOES NOT WORK in a GH pages deployment due to how GH interacts with the CRA react app. Given that CRA is now deprecated, and the solution to the issue is to use HashRouter, which is strongly discouraged to use, I am going to leave this 'as-is' */}
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Route>
	),
	{
		basename: '/shop'
	}
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
