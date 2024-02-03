import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchRegisterMutation } from '../../store/services';
import { changeLoading, setUser } from '../../store/reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import { ServerMessage } from '../../components';
import {
	RegistrationFormFooter,
	RegistrationFormHeader,
	RegistrationFormInputs,
} from './components';
import { SETTINGS } from '../../settings';
import styled from 'styled-components';

const RegistrationContainer = ({ className }) => {
	const recaptchaRef = React.createRef();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [serverError, setServerError] = useState(null);
	const [captchaToken, setCaptchaToken] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, dirtyFields, defaultValues: inputCounter },
	} = useForm({
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
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const [fetchRegister] = useFetchRegisterMutation();

	const onSubmit = formData => {
		dispatch(changeLoading(true));

		const data = {
			userData: formData,
			captchaToken,
		};

		fetchRegister(data).then(res => {
			dispatch(changeLoading(false));
			if (!res.error) {
				dispatch(setUser(res.data));
				setIsSubmitted(true);
				navigate('/', { replace: true });
				return;
			}
			setServerError(res.error.data);
		});

		setCaptchaToken(null);
		recaptchaRef.current.reset();
	};

	const onCaptchaChange = value => {
		setCaptchaToken(value);
	};

	const onInputChange = () => {
		setServerError(null);
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
	const isAllFieldsDirty =
		Object.values(dirtyFields).length === Object.values(inputCounter).length;

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
						<ServerMessage isError={serverError}>
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
		background: var(--dark);

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
