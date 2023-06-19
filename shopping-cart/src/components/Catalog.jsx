/* eslint-disable react/prop-types */
import React, { Fragment, Suspense } from 'react';
import Product from './Product';
// import getProducts from '../api';
//import { useLoaderData, defer, Await } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

/* export async function loader() {
	return defer({
		product: getProducts()
	});
} */

function Catalog() {
	const [cart, setCart] = useOutletContext();
	const [number, setNumber] = useOutletContext();

	function cartItemQtyIncrease() {
		console.log('cartItemQtyIncrease');
		setNumber((prevNumber) => prevNumber + 1);
	}

	function cartItemQtyDecrease() {
		console.log('cartItemQtyDecrease');
		setNumber((prevNumber) => prevNumber - 1);
	}

	function addProductToCart(id, qty, price, title) {
		const addProduct = {
			id: id,
			qty: qty,
			price: price,
			title: title
		};

		console.log(
			`added product ${title} to cart Qty ${qty} at price - $${price} per item. item id ${id}`
		);
	}

	//const data = useLoaderData();
	const fakeData = [
		{
			id: 1,
			title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
			price: 109.95,
			description:
				'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			rating: { rate: 3.9, count: 120 }
		},
		{
			id: 2,
			title: 'Mens Casual Premium Slim Fit T-Shirts ',
			price: 22.3,
			description:
				'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
			category: "men's clothing",
			image:
				'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
			rating: { rate: 4.1, count: 259 }
		}
	];
	return (
		<div className="catalog--cont">
			{' '}
			{fakeData.map((prod) => (
				<Fragment key={prod.id}>
					<Product
						image={prod.image}
						description={prod.description}
						price={prod.price}
						title={prod.title}
						id={prod.id}
						addProductToCart={addProductToCart}
						cartItemQtyDecrease={cartItemQtyDecrease}
						cartItemQtyIncrease={cartItemQtyIncrease}
					/>
				</Fragment>
			))}
		</div>
	);
}
/* <Suspense fallback={<h2>Loading Products... </h2>}>
			<Await resolve={data.product}>
				{(product) => (
					<div className="catalog--cont">
						{product?.map((prod) => (
							<Fragment key={prod.id}>
								<Product
									image={prod.image}
									description={prod.description}
									price={prod.price}
									title={prod.title}
									id={prod.id}
								/>
							</Fragment>
						))}
					</div>
				)}
			</Await>
		</Suspense> */

export default Catalog;
