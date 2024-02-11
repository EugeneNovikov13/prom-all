import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchLogoutMutation, useUpgradeUserMutation } from '../../../store/services';
import { changeLoading, logout, updateUser } from '../../../store/reducers';
import { AccountFormFooter, AccountFormHeader, AccountFormInputs } from './components';
import { Error, H1, ServerMessage } from '../../../components';
import { SETTINGS } from '../../../settings';
import { ERROR } from '../../../constants';
import styled from 'styled-components';

const AccountFormContainer = ({ className, user }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [message, setMessage] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [fetchLogout, { error: logoutError }] = useFetchLogoutMutation();
	const [upgradeUser] = useUpgradeUserMutation();

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			name: user.name,
			organization: user.organization,
			email: user.email,
			phone: user.phone,
		},
		resolver: yupResolver(SETTINGS.ACCOUNT_FORM_SCHEMA),
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const onUpgradeSubmit = formData => {
		dispatch(changeLoading(true));

		upgradeUser({ id: user.id, ...formData })
			.then(res => {
				if (!res.error) {
					dispatch(updateUser(formData));
					navigate('/');
					return;
				}
				setMessage(res.error.data);
				console.error(res.error);
			})
			.catch(e => {
				console.error(e);
				setMessage("Ошибка запроса. Не удалось обновить данные.");
			})
			.finally(() => {
				dispatch(changeLoading(false));
			});
	};

	const onLogout = e => {
		e.preventDefault();
		fetchLogout()
			.then(() => {
				if (!logoutError) {
					dispatch(logout());
					navigate('/', { replace: true });
					return;
				}
				setMessage(logoutError);
			})
			.catch(e => {
				console.error(e);
			});
	};

	const onCancel = e => {
		e.preventDefault();
		setIsSubmitted(true);
		setMessage('');
	};

	const onInputChange = () => {
		setMessage('');
	};

	const formError =
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message;

	return (
		<>
			{user.id ? (
				<form
					className={className}
					method="post"
					onSubmit={handleSubmit(onUpgradeSubmit)}
				>
					<AccountFormHeader />
					<AccountFormInputs
						register={register}
						errors={errors}
						onInputChange={onInputChange}
					/>
					{message && (
						<ServerMessage isError={message}>! {message}</ServerMessage>
					)}
					<AccountFormFooter
						formError={formError}
						isDirty={isDirty}
						onCancel={onCancel}
						onLogout={onLogout}
					/>
				</form>
			) : (
				<Error>
					<H1 color={'var(--brand-orange)'}>{ERROR.SHOULD_LOGIN}</H1>
				</Error>
			)}
		</>
	);
};

export const AccountForm = styled(AccountFormContainer)`
	max-width: 480px;
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 32px;
`;
