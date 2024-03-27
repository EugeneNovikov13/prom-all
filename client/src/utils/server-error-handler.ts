import React from 'react';
import { isErrorWithMessage, isFetchBaseQueryError } from '../http/helpers';

export const serverErrorHandler = (
	err: unknown,
	setServerError: React.Dispatch<React.SetStateAction<string>>,
	unknownMessage: string,
) => {
	if (isFetchBaseQueryError(err)) {
		setServerError(
			typeof err.data === 'string'
				? err.data
				: unknownMessage,
		);
	} else if (isErrorWithMessage(err)) {
		setServerError(err.message);
	}
	console.error('ERROR: ', err);
};
