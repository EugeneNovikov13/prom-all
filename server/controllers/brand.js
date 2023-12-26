const Brand = require('../models/Brand');

// add

async function addBrand(brand) {
	const newBrand = await Brand.create(brand);

	return newBrand;
}

// delete

async function deleteBrand(id) {
	await Brand.deleteOne({ _id: id });
}

// get list

async function getBrands() {
	const brands = await Brand.find();

	return brands;
}

module.exports = {
	addBrand,
	deleteBrand,
	getBrands,
}
