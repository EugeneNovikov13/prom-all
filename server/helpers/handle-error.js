module.exports = (res, log, error) => {
	console.log(log);
	res.send({ data: null, error: error || log });
}
