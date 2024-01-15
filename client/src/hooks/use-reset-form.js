import { useEffect } from 'react';

export const useResetForm = (reset, isReadyToReset) => {
	useEffect(() => {
		if (isReadyToReset) {
			reset();
		}
	}, [reset, isReadyToReset]);
};
