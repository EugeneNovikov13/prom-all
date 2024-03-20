const Product = require('../models/Product');
const checkSectionForTypes = require('../helpers/checkSectionForTypes');

// add

function addProduct(product) {
	return Product.create(product);
}

// get item

function getProduct(id) {
	return Product.findById(id);
}

// get list

async function getProducts(sectionId) {
	const sectionWithTypes = checkSectionForTypes(sectionId);

	if (sectionWithTypes) {
		const countProductsInSection = await Promise.all(
			sectionWithTypes.typesId.map(id => getNumberOfProductsInSection(id)),
		);
		return { counter: countProductsInSection.reduce((counter, item) => counter + item, 0) };
	}

	const products = await Product.find({ section: sectionId });

	if (!products.length) {
		throw new Error('Ошибка! В этом разделе нет товаров или он не существует')
	}

	return { products };
}

// get item by title

async function getProductsByTitle(search) {
	const products = await Product.find({ title: { $regex: search, $options: 'i' } });

	if (!products.length) {
		throw new Error('В каталоге нет товаров с таким названием');
	}

	return products;
}

// get the number of products in a section

async function getNumberOfProductsInSection(sectionId) {
	return Product.countDocuments({ section: sectionId });
}

module.exports = {
	addProduct,
	getProduct,
	getProducts,
	getProductsByTitle,
};
