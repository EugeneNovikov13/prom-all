const express = require('express');

const { getBrands, addBrand, deleteBrand } = require('../controllers/brand');
const mapBrand = require('../helpers/mapBrand');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/brands', async (req, res) => {
	try {
		const brands = await getBrands();

		res.send({ data: brands.map(mapBrand), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Can\'t get brands' });
		console.log(e);
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
		res.send({ data: null, error: 'Creation of brand is impossible' });
		console.log(e);
	}
});

router.delete('/brands/:id', authenticated, async (req, res) => {
	try {
		await deleteBrand(req.params.id);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: 'Error. Failed to delete brand' });
		console.log(e);
	}
});

module.exports = router;
