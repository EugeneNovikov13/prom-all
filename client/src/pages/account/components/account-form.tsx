import { FC, MouseEventHandler, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSubmitLogout, useSubmitUpdateUser } from './hooks';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/reducers';
import { AccountFormFooter, AccountFormHeader, AccountFormInputs } from './components';
import { Error, H1, ServerMessage } from 'components';
import { SETTINGS } from 'settings';
import { ERROR } from '../../../constants';
import { IAccountForm } from 'types';
import styled from 'styled-components';

interface AccountFormProps {
	className?: string;
}

const AccountFormContainer: FC<AccountFormProps> = ({ className }) => {
	const user = useSelector(selectUser);

	const [message, setMessage] = useState<string>('');

	const { submitUpdateUser } = useSubmitUpdateUser(setMessage);
	const { submitSubmitLogout } = useSubmitLogout(setMessage);

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

	const onUpdateSubmit: SubmitHandler<IAccountForm> = async formData => {
		await submitUpdateUser(user.id, formData);
	};

	const onLogout: MouseEventHandler<HTMLButtonElement> = async e => {
		e.preventDefault();
		await submitSubmitLogout();
	};

	const onCancel: MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault();
		formReset();
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
					onSubmit={handleSubmit(onUpdateSubmit)}
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
