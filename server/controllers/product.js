const Product = require('../models/Product');

// add

function addProduct(product) {
	return Product.create(product);
}

// get item

function getProduct(id) {
	return Product.findById(id);
}

// get list

async function getProducts(section) {
	const products = await Product.find({ section });

	if (!products.length) {
		throw new Error('Error! Maybe... This sections is empty or not exist')
	}

	return products;
}

// get item by title

function getProductsByTitle(search) {
	return Product.find({ title: { $regex: search, $options: 'i' } });
}

module.exports = {
	addProduct,
	getProduct,
	getProducts,
	getProductsByTitle,
};
