const Promo = require('../models/Promo');

// add

async function addPromo(promo) {
	const newPromo = await Promo.create(promo);

	return newPromo;
}

// edit

async function editPromo(id, promo) {
	const newPromo = await Promo.findByIdAndUpdate(id, promo, { returnDocument: 'after' });

	return newPromo;
}

// delete

async function deletePromo(id) {
	await Promo.deleteOne({ _id: id });
}

// get list

async function getPromos() {
	const promos = await Promo.find();

	return promos;
}

module.exports = {
	addPromo,
	editPromo,
	deletePromo,
	getPromos,
}
