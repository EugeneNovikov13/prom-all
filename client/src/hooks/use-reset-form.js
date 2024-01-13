import { useEffect } from 'react';

export const useResetForm = (reset, isSuccess) => {
	useEffect(() => {
		if (isSuccess) {
			reset();
		}
	}, [reset, isSuccess]);
};
