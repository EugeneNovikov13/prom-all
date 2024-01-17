export const useDebounce = (refs, func, delay) => {
	return function (...args) {
		clearTimeout(refs.current);
		refs.current = setTimeout(func, delay, ...args);
	};
};
