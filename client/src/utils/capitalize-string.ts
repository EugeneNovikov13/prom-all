/**
 * Сделать строку с большой буквы
 * @param str любой текст
 * @returns текст с большой буквы
 */
export const capitalizeString = (str: string): string => {
	return str[0].toUpperCase() + str.slice(1);
};
