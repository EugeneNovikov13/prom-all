import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetForm } from '../../hooks';
import { changeLoading, closeModal } from '../../store/reducers';
import { sendQuickOrder } from '../../utils';
import ReCAPTCHA from 'react-google-recaptcha';
import { ServerMessage } from '../../components';
import { FormFooter, FormHeader, FormInputs } from './components';
import { SETTINGS } from '../../settings';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import styled from 'styled-components';

const QuickOrderContainer = ({ className }) => {
	const orderData = useSelector(state => state.orderReducer.orderData);

	const recaptchaRef = React.createRef();

	const isOpen = useSelector(state => state.appReducer.modal.isOpen);
	const dispatch = useDispatch();

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
			order: orderData,
		},
		resolver: yupResolver(SETTINGS.QUICK_ORDER_FROM_SCHEMA),
	});

	const isSubmitted = serverError || serverResponse;

	useResetForm(reset, isSubmitted);

	const onSubmit = formData => {
		dispatch(changeLoading(true));

		sendQuickOrder(captchaToken, formData).then(res => {
			setServerError(res.error);
			setServerResponse(res.data);
			dispatch(changeLoading(false));

			setTimeout(() => {
				if (isOpen) {
					dispatch(closeModal());
				}
			}, 2000);
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
		errors?.order?.message;

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

export const QuickOrder = styled(QuickOrderContainer)`
	max-width: 1200px;
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	gap: 60px;
	padding: 0 36px;
`;
