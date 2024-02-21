module.exports = (res, error, statusCode = 400) => {
	console.error(error);

	res.status(statusCode)
		.send(error.message);
}
