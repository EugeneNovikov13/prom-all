/**
 * получить текущую страницу из адресной строки
 * @param location - адресная строка без BASE_URL
 */
export const getRouteFromFullLocation = (location: string) => {
	const secondMatchIndex = location.indexOf('/',1);

	if (secondMatchIndex === -1) {
		return location
	}

	return location.slice(0, secondMatchIndex);
};
