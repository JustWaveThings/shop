/* eslint-disable react/prop-types */
import React, { Fragment, Suspense } from 'react';
import Product from './Product';
import getProducts from '../api';
import { useLoaderData, defer, Await } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

export async function loader() {
	return defer({
		product: getProducts()
	});
}

function Catalog() {
	const [cart, setCart] = useOutletContext();
	const data = useLoaderData();

	function addProductToCart(id, qty, price, title) {
		const product = {
			id: id,
			qty: qty,
			price: price,
			title: title
		};

		let productInCart = cart.some((obj) => obj.id === id);

		if (productInCart) {
			if (qty === 0) {
				setCart((prevCart) => prevCart.filter((item) => item.id !== id));
			} else {
				setCart((prevCart) =>
					prevCart.map((item) => (item.id === id ? product : item))
				);
			}
		} else {
			setCart((prevCart) => [product, ...prevCart]);
		}
	}

	return (
		<Suspense fallback={<h2>Loading Products... </h2>}>
			<Await resolve={data.product}>
				{(product) => (
					<div className="catalog--cont">
						{product?.map((prod) => (
							<Fragment key={prod.id}>
								<Product
									image={prod.image}
									description={prod.description}
									price={prod.price.toFixed(2)}
									title={prod.title}
									id={prod.id}
									addProductToCart={addProductToCart}
								/>
							</Fragment>
						))}
					</div>
				)}
			</Await>
		</Suspense>
	);
}
export default Catalog;
