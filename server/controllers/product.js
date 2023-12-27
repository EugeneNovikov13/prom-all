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

function getProducts(section) {
	return Product.find({ section });
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
