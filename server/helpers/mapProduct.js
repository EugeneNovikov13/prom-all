module.exports = function(product) {
	return {
		id: product.id,
		title: product.title,
		images: product.images.map(img => ({
			id: img.id,
			imageURL: img.imageURL,
		})),
		kinds: product.kinds.map(kind => ({
			id: kind.id,
			title: kind.title,
		})),
		description: product.description,
		specification: product.specification,
		section: product.section,
	};
};
