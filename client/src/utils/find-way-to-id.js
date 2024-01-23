export const findWayToId = (catalog, id) => {
	const way = [];
	for (let cat of catalog) {
		if (cat.id === id) {
			way.push({ id: cat.id, title: cat.title });
			break;
		}
		for (let subcat of cat.subcategories) {
			if (subcat.id === id) {
				way.push({ id: cat.id, title: cat.title });
				way.push({ id: subcat.id, title: subcat.title });
				break;
			}
			if (subcat.types) {
				for (let type of subcat.types) {
					if (type.id === id) {
						way.push({ id: cat.id, title: cat.title });
						way.push({ id: subcat.id, title: subcat.title });
						way.push({ id: type.id, title: type.title });
						break;
					}
				}
			}
		}
	}
	return way;
};
