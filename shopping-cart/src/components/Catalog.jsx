import React, { Suspense } from 'react';
import Product from './Product';
import getProducts from '../api';
import { useLoaderData, defer, Await } from 'react-router-dom';

export async function loader() {
	return defer({
		product: getProducts()
	});
}

function Catalog() {
	const data = useLoaderData();

	return (
		<Suspense fallback={<h2>Loading Products... </h2>}>
			<Await resolve={data.product}>
				{(product) => (
					<div className="catalog--cont">
						{product?.map((prod) => (
							<Product
								image={prod.image}
								description={prod.description}
								price={prod.price}
								title={prod.title}
							/>
						))}
					</div>
				)}
			</Await>
		</Suspense>
	);
}

export default Catalog;
