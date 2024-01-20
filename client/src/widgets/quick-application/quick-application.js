import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetForm } from '../../hooks';
import { sendQuickApplication } from '../../utils';
import ReCAPTCHA from 'react-google-recaptcha';
import { ServerMessage } from '../../components';
import { FormFooter, FormHeader, FormInputs } from './components';
import { SETTINGS } from '../../settings';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import styled from 'styled-components';

const QuickApplicationContainer = ({ className }) => {
	const recaptchaRef = React.createRef();

	const [serverError, setServerError] = useState(null);
	const [serverResponse, setServerResponse] = useState(null);
	const [captchaToken, setCaptchaToken] = useState(null);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			name: '',
			organization: '',
			email: '',
			phone: '',
			application: '',
		},
		resolver: yupResolver(SETTINGS.QUICK_APPLICATION_FROM_SCHEMA),
	});

	const isSubmitted = serverError || serverResponse;

	useResetForm(reset, isSubmitted);

	const onSubmit = formData => {
		sendQuickApplication(captchaToken, formData).then(res => {
			setServerError(res.error);
			setServerResponse(res.data);
		});

		setCaptchaToken(null);
		recaptchaRef.current.reset();
	};

	const onCaptchaChange = value => {
		setCaptchaToken(value);
	};

	const onInputChange = () => {
		setServerError(null);
		setServerResponse(null);
	};

	const formError =
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message ||
		errors?.application?.message;

	return (
		<form className={className} method="post" onSubmit={handleSubmit(onSubmit)}>
			<FormHeader />
			<FormInputs
				register={register}
				errors={errors}
				onInputChange={onInputChange}
			/>
			{isValid && (
				<ReCAPTCHA
					ref={recaptchaRef}
					sitekey={RECAPTCHA_SECRET_KEY}
					onChange={onCaptchaChange}
					hl="ru"
				/>
			)}
			{serverError && (
				<ServerMessage isError={serverError}>! {serverError}</ServerMessage>
			)}
			{serverResponse && <ServerMessage>{serverResponse}</ServerMessage>}
			<FormFooter formError={formError} captchaToken={captchaToken} />
		</form>
	);
};

export const QuickApplication = styled(QuickApplicationContainer)`
	max-width: 1200px;
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
	gap: 60px;
	padding: 0 36px;
`;
