const express = require('express');

const { getPromos, addPromo, editPromo, deletePromo } = require('../controllers/promo');
const authenticated = require('../middlewares/authenticated');
const mapPromo = require('../helpers/mapPromo');
const handleError = require('../services/handle-error');

const router = express.Router();

router.get('/promos', async (req, res) => {
	try {
		const promos = await getPromos();

		res.send(promos.map(mapPromo));
	} catch (e) {
		handleError(res, e);
	}
});

router.post('/promos', authenticated, async (req, res) => {
	try {
		const newPromo = await addPromo({
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send(mapPromo(newPromo));
	} catch (e) {
		if (e.name === "ValidationError") {
			e.message = 'Не удалось добавить промо-акцию. Отправлены некорректные или неполные данные';
		}
		handleError(res, e);
	}
});

router.patch('/promos/:id', authenticated, async (req, res) => {
	try {
		const editedPromo = await editPromo(req.params.id, {
			title: req.body.title,
			content: req.body.content,
			background: req.body.background,
		});

		res.send(mapPromo(editedPromo));
	} catch (e) {
		e.message = 'Ошибка! Не удалось изменить параметры промо-акции';
		handleError(res, e);
	}
});
router.delete('/promos/:id', authenticated, async (req, res) => {
	try {
		await deletePromo(req.params.id);

		res.send('Удаление успешно выполнено');
	} catch (e) {
		e.message = 'Ошибка! Не удалось удалить промо-акцию';
		handleError(res, e);
	}
});

module.exports = router;
