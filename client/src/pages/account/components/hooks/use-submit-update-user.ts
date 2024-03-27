import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { serverErrorHandler } from 'utils';
import { useUpdateUserMutation } from 'store/services';
import { changeLoading, editUser } from 'store/reducers';
import { ERROR } from '../../../../constants';
import { AppDispatch } from 'store/store';
import { IAccountForm } from 'types';

export const useSubmitUpdateUser = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [updateUser] = useUpdateUserMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitUpdateUser = async (id: string, formData: IAccountForm) => {
		dispatch(changeLoading(true));

		try {
			await updateUser({ id, formData }).unwrap();
			dispatch(editUser(formData));
			navigate('/');
		} catch (err) {
			serverErrorHandler(err, setServerError, ERROR.UNKNOWN_UPDATE_USER_ERROR);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	return { submitUpdateUser };
};
