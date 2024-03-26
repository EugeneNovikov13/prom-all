import { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import { ServerMessage } from '../../components';
import {
	AuthorizationFormFooter,
	AuthorizationFormHeader,
	AuthorizationFormInputs,
} from './components';
import { SETTINGS } from '../../settings';
import styled from 'styled-components';
import { IAuthorizationForm } from '../../types';
import { checkFormFieldsIsDirty } from '../../utils';
import { useSubmitAuthForm } from './hooks/use-submit-auth-form';

interface AuthorizationProps {
	className?: string;
}

const AuthorizationContainer: FC<AuthorizationProps> = ({ className }) => {
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const [captchaToken, setCaptchaToken] = useState<string>('');
	const [serverError, setServerError] = useState<string>('');

	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields, defaultValues },
	} = useForm<IAuthorizationForm>({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(SETTINGS.AUTHORIZATION_FORM_SCHEMA),
		mode: 'onChange',
	});

	const { submitAuthForm } = useSubmitAuthForm(setServerError);

	const onSubmit: SubmitHandler<IAuthorizationForm> = formData => {
		const data = {
			userData: formData,
			captchaToken,
		};

		submitAuthForm(data);

		setCaptchaToken('');
		recaptchaRef.current?.reset();
	};

	const onCaptchaChange = (value: string | null) => {
		value && setCaptchaToken(value);
	};

	const onInputChange = () => {
		setServerError('');
	};

	const formError = errors?.login?.message || errors?.password?.message;

	// Проверяем все ли поля были изменены
	const isAllFieldsDirty = checkFormFieldsIsDirty<IAuthorizationForm>(
		dirtyFields,
		defaultValues,
	);

	return (
		<div className={className}>
			<section className="authorization-layout">
				<form
					className="authorization-form"
					method="post"
					onSubmit={handleSubmit(onSubmit)}
				>
					<AuthorizationFormHeader />
					<AuthorizationFormInputs
						register={register}
						errors={errors}
						onInputChange={onInputChange}
					/>
					{isAllFieldsDirty && (
						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey={RECAPTCHA_SECRET_KEY}
							onChange={onCaptchaChange}
							hl="ru"
						/>
					)}
					{serverError && (
						<ServerMessage isError={!!serverError}>
							! {serverError}
						</ServerMessage>
					)}
					<AuthorizationFormFooter
						formError={formError}
						captchaToken={captchaToken}
					/>
				</form>
			</section>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& section.authorization-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;

		& form.authorization-form {
			max-width: 480px;
			flex: 1 0 0;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 0 32px;
		}
	}
`;
