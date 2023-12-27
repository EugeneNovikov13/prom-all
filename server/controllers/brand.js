const Brand = require('../models/Brand');

// add

function addBrand(brand) {
	return Brand.create(brand);
}

// delete

function deleteBrand(id) {
	return Brand.deleteOne({ _id: id });
}

// get list

function getBrands() {
	return Brand.find();
}

module.exports = {
	addBrand,
	deleteBrand,
	getBrands,
}
