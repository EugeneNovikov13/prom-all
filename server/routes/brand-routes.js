const express = require('express');

const { getBrands, addBrand, deleteBrand } = require('../controllers/brand');
const authenticated = require('../middlewares/authenticated');
const mapBrand = require('../helpers/mapBrand');
const handleError = require('../helpers/handle-error');

const router = express.Router();

router.get('/brands', async (req, res) => {
	try {
		const brands = await getBrands();

		res.send({ data: brands.map(mapBrand), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Can\'t get brands');
	}
});

router.post('/brands', authenticated, async (req, res) => {
	try {
		const newBrand = await addBrand({
			title: req.body.title,
			logo: req.body.logo,
			isOfficial: req.body.isOfficial,
		});

		res.send({ data: mapBrand(newBrand), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Creation of brand is impossible');
	}
});

router.delete('/brands/:id', authenticated, async (req, res) => {
	try {
		await deleteBrand(req.params.id);

		res.send({ error: null });
	} catch (e) {
		handleError(res, e, 'Error! Failed to delete brand');
	}
});

module.exports = router;
