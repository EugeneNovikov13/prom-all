import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { serverErrorHandler } from 'utils';
import { useFetchAuthMutation } from 'store/services';
import { changeLoading, setUser } from 'store/reducers';
import { AppDispatch } from 'store/store';
import { ERROR } from '../../../constants';
import { IAuthorizationRequest } from 'http/models/request';

export const useSubmitAuthForm = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [fetchAuth] = useFetchAuthMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitAuthForm = async (data: IAuthorizationRequest) => {
		dispatch(changeLoading(true));

		try {
			const res = await fetchAuth(data).unwrap();
			if (res === 'admin') {
				navigate('/authorization-second-step', { replace: true });
				return;
			}

			dispatch(setUser(res));
			navigate('/', { replace: true });
		} catch (err) {
			serverErrorHandler(err, setServerError, ERROR.UNKNOWN_AUTH_ERROR);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	return { submitAuthForm };
};
