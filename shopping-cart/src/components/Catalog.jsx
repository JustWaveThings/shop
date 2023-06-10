import React, { Suspense } from 'react';
import Product from './Product';
import getProducts from '../api';
import { useLoaderData, defer, Await } from 'react-router-dom';

export function loader() {
	return defer({
		product: getProducts()
	});
}

function Catalog() {
	const loaderData = useLoaderData();

	return (
		<Suspense fallback={<h2>Loading Products... </h2>}>
			<Await resolve={loaderData.product}>
				<div className="catalog--cont">
					<Product />
					<Product />
					<Product />
				</div>
			</Await>
		</Suspense>
	);
}

export default Catalog;
