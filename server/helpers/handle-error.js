module.exports = (res, error) => {
	console.log(error);
	res.status(400);
	res.send(error.message);
}
