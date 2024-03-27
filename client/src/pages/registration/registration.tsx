import { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkFormFieldsIsDirty } from 'utils';
import { useSubmitRegForm } from './hooks/use-submit-reg-form';
import { ServerMessage } from 'components';
import {
	RegistrationFormFooter,
	RegistrationFormHeader,
	RegistrationFormInputs,
} from './components';
import { RECAPTCHA_SECRET_KEY } from 'config';
import { SETTINGS } from 'settings';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { IRegistrationForm } from 'types';

interface RegistrationProps {
	className?: string;
}

const RegistrationContainer: FC<RegistrationProps> = ({ className }) => {
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const [serverError, setServerError] = useState<string>('');
	const [captchaToken, setCaptchaToken] = useState<string>('');

	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields, defaultValues },
	} = useForm<IRegistrationForm>({
		defaultValues: {
			login: '',
			password: '',
			passwordConfirm: '',
			name: '',
			organization: '',
			email: '',
			phone: '',
		},
		resolver: yupResolver(SETTINGS.REGISTRATION_FORM_SCHEMA),
		mode: 'onChange',
	});

	const { submitRegForm } = useSubmitRegForm(setServerError);

	const onSubmit: SubmitHandler<IRegistrationForm> = formData => {
		const data = {
			userData: formData,
			captchaToken,
		};

		submitRegForm(data);

		setCaptchaToken('');
		recaptchaRef.current?.reset();
	};

	const onCaptchaChange = (value: string | null) => {
		value && setCaptchaToken(value);
	};

	const onInputChange = () => {
		setServerError('');
	};

	const formError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.passwordConfirm?.message ||
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message;

	// Проверяем все ли поля были изменены
	const isAllFieldsDirty = checkFormFieldsIsDirty<IRegistrationForm>(
		dirtyFields,
		defaultValues,
	);

	return (
		<div className={className}>
			<section className="registration-layout">
				<form
					className="registration-form"
					method="post"
					onSubmit={handleSubmit(onSubmit)}
				>
					<RegistrationFormHeader />
					<RegistrationFormInputs
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
					<RegistrationFormFooter
						formError={formError}
						captchaToken={captchaToken}
					/>
				</form>
			</section>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& section.registration-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;

		& form.registration-form {
			max-width: 480px;
			flex: 1 0 0;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 0 32px;
		}
	}
`;
