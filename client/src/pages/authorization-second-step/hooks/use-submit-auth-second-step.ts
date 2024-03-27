import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { serverErrorHandler } from 'utils';
import { useFetchAuthSecondStepMutation } from 'store/services';
import { changeLoading, setUser } from 'store/reducers';
import { ERROR } from '../../../constants';
import { AppDispatch } from 'store/store';

export const useSubmitAuthSecondStep = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [fetchAuthSecondStep] = useFetchAuthSecondStepMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitAuthSecondStep = async (data: { code: string }) => {
		dispatch(changeLoading(true));

		try {
			const res = await fetchAuthSecondStep(data).unwrap();
			dispatch(setUser(res));
			navigate('/account', { replace: true });
		} catch (err) {
			serverErrorHandler(err, setServerError, ERROR.UNKNOWN_AUTH_ERROR);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	return { submitAuthSecondStep };
};
