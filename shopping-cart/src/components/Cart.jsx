import React, { Fragment } from 'react';
import CartItem from './CartItem';
import { useOutletContext } from 'react-router-dom';
function Cart() {
	const [cart, setCart] = useOutletContext();

	function removeFromCart(id) {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	}
	return (
		<Fragment>
			<CartItem
				cart={cart}
				setCart={setCart}
				removeFromCart={removeFromCart}
			/>
		</Fragment>
	);
}

export default Cart;
