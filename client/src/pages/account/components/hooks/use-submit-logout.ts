import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { serverErrorHandler } from 'utils';
import { useFetchLogoutMutation } from 'store/services';
import { changeLoading, logout } from 'store/reducers';
import { ERROR } from '../../../../constants';
import { AppDispatch } from 'store/store';

export const useSubmitLogout = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [fetchLogout] = useFetchLogoutMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitSubmitLogout = async () => {
		dispatch(changeLoading(true));

		try {
			await fetchLogout('').unwrap();
			dispatch(logout());
			navigate('/', { replace: true });
		} catch (err) {
			serverErrorHandler(err, setServerError, ERROR.UNKNOWN_LOGOUT_ERROR);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	return { submitSubmitLogout };
};
