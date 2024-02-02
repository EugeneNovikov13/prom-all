import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchLogoutMutation, useUpgradeUserMutation } from '../../store/services';
import { changeLoading, logout } from '../../store/reducers';
import { ServerMessage } from '../../components';
import { AccountFormFooter, AccountFormHeader, AccountFormInputs } from './components';
import { SETTINGS } from '../../settings';
import styled from 'styled-components';

const AccountContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [message, setMessage] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [fetchLogout, {error: logoutError}] = useFetchLogoutMutation();
	const [upgradeUser] = useUpgradeUserMutation();

	// const { data: user, isLoading } = useFetchUserQuery();
	const user = useSelector(state => state.appReducer.user);
	const userId = user && user.id;

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			name: user ? user.name : '',
			organization: user ? user.organization : '',
			email: user ? user.email : '',
			phone: user ? user.phone : '',
		},
		resolver: yupResolver(SETTINGS.ACCOUNT_FORM_SCHEMA),
	});

	if (user?.error) {
		return null;
	}

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const onUpgradeSubmit = formData => {
		dispatch(changeLoading(true));

		upgradeUser({ id: userId, ...formData }).then(res => {
			dispatch(changeLoading(false));
			if (!res.error) {
				setIsSubmitted(true);
				setMessage('Данные успешно обновлены');
				return;
			}
			setMessage(res.error.data);
		});
	};

	const onLogout = e => {
		e.preventDefault();
		fetchLogout().then(() => {
			if (!logoutError) {
				dispatch(logout());
				navigate('/');
				return;
			}
			// TODO обработка возможной ошибки
			console.log(logoutError);
		});
	};

	const onCancel = e => {
		e.preventDefault();
		formReset();
		setIsSubmitted(false);
		// navigate('/');
	};

	const onInputChange = () => {
		setMessage(null);
	};

	const formError =
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message;

	return (
		<div className={className}>
			<section className="account-layout">
				<form
					className="account-form"
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
			</section>
		</div>
	);
};

export const Account = styled(AccountContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& section.account-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;
		background: var(--dark);

		& form.account-form {
			max-width: 480px;
			flex: 1 0 0;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 0 32px;
		}
	}
`;
