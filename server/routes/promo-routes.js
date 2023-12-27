const express = require('express');
const { getPromos, addPromo, editPromo, deletePromo } = require('../controllers/promo');
const mapPromo = require('../helpers/mapPromo');
const authenticated = require('../middlewares/authenticated');

const router = express.Router();

router.get('/promos', async (req, res) => {
	try {
		const promos = await getPromos();

		res.send({ data: promos.map(mapPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... There isn\'t promos' });
		console.log(e);
	}
});

router.post('/promos', authenticated, async (req, res) => {
	try {
		const newPromo = await addPromo({
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send({ data: mapPromo(newPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: 'Error! Maybe... This promo is already exists' });
		console.log(e);
	}
});

router.patch('/promos/:id', authenticated, async (req, res) => {
	try {
		const editedPromo = await editPromo(req.params.id, {
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send({ data: mapPromo(editedPromo), error: null });
	} catch (e) {
		res.send({ data: null, error: e });
		console.log(e);
	}
});
router.delete('/promos/:id', authenticated, async (req, res) => {
	try {
		await deletePromo(req.params.id);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: 'Error. Failed to delete test' });
		console.log(e);
	}
});

module.exports = router;
