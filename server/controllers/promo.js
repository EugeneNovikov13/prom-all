const Promo = require('../models/Promo');

// add

function addPromo(promo) {
	return Promo.create(promo);
}

// edit

function editPromo(id, promo) {
	return Promo.findByIdAndUpdate(id, promo, { returnDocument: 'after' });
}

// delete

function deletePromo(id) {
	Promo.deleteOne({ _id: id });
}

// get list

function getPromos() {
	return Promo.find();
}

module.exports = {
	addPromo,
	editPromo,
	deletePromo,
	getPromos,
}
