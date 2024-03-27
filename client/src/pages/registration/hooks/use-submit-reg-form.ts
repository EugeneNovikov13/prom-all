import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { serverErrorHandler } from 'utils';
import { useFetchRegisterMutation } from 'store/services';
import { changeLoading, setUser } from 'store/reducers';
import { AppDispatch } from 'store/store';
import { ERROR } from '../../../constants';
import { IRegistrationRequest } from 'http/models/request';

export const useSubmitRegForm = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [fetchRegister] = useFetchRegisterMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitRegForm = async (data: IRegistrationRequest) => {
		dispatch(changeLoading(true));

		try {
			const res = await fetchRegister(data).unwrap();
			dispatch(setUser(res));
			navigate('/', { replace: true });
		} catch (err) {
			serverErrorHandler(err, setServerError, ERROR.UNKNOWN_REG_ERROR);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	return { submitRegForm };
};
