import { useEffect } from 'react';

export const useResetForm = (reset, isReadyToReset) => {
	useEffect(() => {
		if (isReadyToReset) {
			reset();
		}
		console.log('useResetForm');
	}, [reset, isReadyToReset]);
};
