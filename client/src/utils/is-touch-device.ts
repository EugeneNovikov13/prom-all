/**
 * Проверить есть ли у устройства touch-screen
 * @returns boolean
 */
export const isTouchDevice = (): boolean => {
	return 'ontouchstart' in window && !!navigator.maxTouchPoints;
};
