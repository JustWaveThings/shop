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
			path="shop"
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
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
