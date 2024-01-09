const Brand = require('../models/Brand');

// add

function addBrand(brand) {
	return Brand.create(brand);
}

// delete

async function deleteBrand(id) {
	await Brand.deleteOne({ _id: id });
}

// get list

async function getBrands() {
	const brands = await Brand.find();

	if (!brands.length) {
		throw new Error('Ошибка! Бренды не найдены')
	}

	return brands;
}

module.exports = {
	addBrand,
	deleteBrand,
	getBrands,
}
