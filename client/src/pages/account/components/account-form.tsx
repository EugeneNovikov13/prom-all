import { FC, MouseEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isErrorWithMessage, isFetchBaseQueryError } from 'http/helpers';
import { useFetchLogoutMutation, useUpgradeUserMutation } from 'store/services';
import { changeLoading, logout, selectUser, updateUser } from 'store/reducers';
import { AccountFormFooter, AccountFormHeader, AccountFormInputs } from './components';
import { Error, H1, ServerMessage } from 'components';
import { SETTINGS } from 'settings';
import { ERROR } from '../../../constants';
import styled from 'styled-components';
import { AppDispatch } from 'store/store';
import { IAccountForm } from 'types';

interface AccountFormProps {
	className?: string;
}

const AccountFormContainer: FC<AccountFormProps> = ({ className }) => {
	const user = useSelector(selectUser);

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const [message, setMessage] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const [fetchLogout] = useFetchLogoutMutation();
	const [upgradeUser] = useUpgradeUserMutation();

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<IAccountForm>({
		defaultValues: {
			name: user.name,
			organization: user.organization,
			email: user.email,
			phone: user.phone,
		},
		resolver: yupResolver(SETTINGS.ACCOUNT_FORM_SCHEMA),
		mode: 'onChange',
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const onUpgradeSubmit: SubmitHandler<IAccountForm> = async (formData) => {
		dispatch(changeLoading(true));

		try {
			await upgradeUser({ id: user.id, formData });
			dispatch(updateUser(formData));
			navigate('/');
		} catch (err) {
			console.log('ERROR: ',err);
			if (isFetchBaseQueryError(err)) {
				setMessage("Ошибка запроса. Не удалось обновить данные.");
			} else if (isErrorWithMessage(err)) {
				setMessage(err.message);
			}
			console.error(err);
		} finally {
			dispatch(changeLoading(false));
		}
	};

	const onLogout: MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault();

		try {
			await fetchLogout('');
			dispatch(logout());
			navigate('/', { replace: true });
		} catch (err) {
			if (isFetchBaseQueryError(err)) {
				setMessage("Не удалось выйти из профиля.");
			} else if (isErrorWithMessage(err)) {
				setMessage(err.message);
			}
			console.error(err);
		}
	};

	const onCancel: MouseEventHandler<HTMLButtonElement> = e => {
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
						<ServerMessage isError={!!message}>! {message}</ServerMessage>
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
