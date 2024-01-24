module.exports = function(product) {
	return {
		id: product.id,
		title: product.title,
		image: product.images[0].imageURL,
	};
};
