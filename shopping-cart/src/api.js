async function getProducts() {
	const url = 'https://fakestoreapi.com/products';
	const res = await fetch(url);
	if (!res.ok) {
		// eslint-disable-next-line no-throw-literal
		throw {
			message: 'failed to fetch products',
			statusText: res.statusText,
			status: res.status
		};
	}
	const data = await res.json();
	console.log(data);
	return data;
}

export default getProducts;
