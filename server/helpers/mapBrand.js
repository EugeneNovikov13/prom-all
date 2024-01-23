module.exports = function (brand) {
	return {
		id: brand.id,
		title: brand.title,
		logo: brand.logo,
		isOfficial: brand.isOfficial ? brand.isOfficial : false,
	}
}
