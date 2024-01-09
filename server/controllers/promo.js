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
	return Promo.deleteOne({ _id: id });
}

// get list

async function getPromos() {
	const promos = await Promo.find();

	if (!promos.length) {
		throw new Error('Ошибка! Возможно... Промо-акций не существует')
	}

	return promos;
}

module.exports = {
	addPromo,
	editPromo,
	deletePromo,
	getPromos,
}
