export const getRouteFromFullLocation = (location) => {
	const secondMatchIndex = location.indexOf('/',1);

	if (secondMatchIndex === -1) {
		return location
	}

	return location.slice(0, secondMatchIndex);
};
