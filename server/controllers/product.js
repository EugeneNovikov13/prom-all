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
		throw new Error('Ошибка! В этом разделе нет товаров или он не существует')
	}

	return products;
}

// get item by title

async function getProductsByTitle(search) {
	const products = await Product.find({ title: { $regex: search, $options: 'i' } });

	if (!products.length) {
		throw new Error('Ошибка! В каталоге нет товаров с таким названием')
	}

	return products;
}

module.exports = {
	addProduct,
	getProduct,
	getProducts,
	getProductsByTitle,
};
