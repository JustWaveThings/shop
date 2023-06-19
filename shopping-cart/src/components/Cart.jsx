import React, { Fragment } from 'react';
import CartItem from './CartItem';
import { useOutletContext } from 'react-router-dom';
function Cart() {
	const [cart, setCart] = useOutletContext();
	return (
		<Fragment>
			<CartItem
				cart={cart}
				setCart={setCart}
			/>
		</Fragment>
	);
}

export default Cart;
