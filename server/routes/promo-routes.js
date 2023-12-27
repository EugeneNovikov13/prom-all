const express = require('express');

const { getPromos, addPromo, editPromo, deletePromo } = require('../controllers/promo');
const mapPromo = require('../helpers/mapPromo');
const authenticated = require('../middlewares/authenticated');
const handleError = require('../helpers/handle-error');

const router = express.Router();

router.get('/promos', async (req, res) => {
	try {
		const promos = await getPromos();

		res.send({ data: promos.map(mapPromo), error: null });
	} catch (e) {
		handleError(res, e, 'Error! Maybe... There isn\'t promos');
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
		handleError(res, e, 'Error! Maybe... This promo is already exists');
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
		handleError(res, e, 'Error! Unable to upgrade promo');
	}
});
router.delete('/promos/:id', authenticated, async (req, res) => {
	try {
		await deletePromo(req.params.id);

		res.send({ error: null });
	} catch (e) {
		handleError(res, e, 'Error! Failed to delete promo');
	}
});

module.exports = router;
