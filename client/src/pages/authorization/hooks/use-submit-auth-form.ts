import { useFetchAuthMutation } from '../../../store/services';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { changeLoading, setUser } from '../../../store/reducers';
import { IAuthorizationRequest } from '../../../http/models/request';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const useSubmitAuthForm = (
	setServerError: React.Dispatch<React.SetStateAction<string>>,
) => {
	const [fetchAuth] = useFetchAuthMutation();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const submitAuthForm = (data: IAuthorizationRequest) => {
		dispatch(changeLoading(true));

		fetchAuth(data)
			.then(res => {
				if ('data' in res) {
					if (res.data === 'admin') {
						navigate('/authorization-second-step', { replace: true });
						return;
					}

					dispatch(setUser(res.data));
					navigate('/', { replace: true });
				} else if ('error' in res) {
					if ('status' in res.error) {
						const errMsg = JSON.stringify(res.error.data);
						setServerError(errMsg);
					} else {
						setServerError(
							res.error.message || 'Ошибка. Не удалось авторизоваться.',
						);
					}
					console.error('ERROR: ', res.error);
				}
			})
			.catch(e => {
				setServerError('Неизвестная ошибка. Не удалось авторизоваться.');
				console.error(e);
			})
			.finally(() => {
				dispatch(changeLoading(false));
			});
	};

	return { submitAuthForm }
};
