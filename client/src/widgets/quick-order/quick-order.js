import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendQuickOrderAsync } from '../../store/services';
import { changeLoading, closeModal } from '../../store/reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { ServerMessage } from '../../components';
import { OrderFormFooter, OrderFormHeader, OrderFormInputs } from './components';
import { SETTINGS } from '../../settings';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import styled from 'styled-components';

const QuickOrderContainer = ({ className }) => {
	const orderData = useSelector(state => state.orderReducer.orderData);

	const recaptchaRef = React.createRef();

	const user = useSelector(state => state.appReducer.user);
	const isOpen = useSelector(state => state.appReducer.modal.isOpen);
	const dispatch = useDispatch();

	const [serverError, setServerError] = useState(null);
	const [serverResponse, setServerResponse] = useState(null);
	const [captchaToken, setCaptchaToken] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			name: user ? user.name : '',
			organization: user ? user.organization : '',
			email: user ? user.email : '',
			phone: user ? user.phone : '',
			order: orderData,
		},
		resolver: yupResolver(SETTINGS.QUICK_ORDER_FORM_SCHEMA),
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const onSubmit = formData => {
		dispatch(changeLoading(true));

		sendQuickOrderAsync(captchaToken, formData).then(res => {
			setServerError(res.error);
			setServerResponse(res.data);
			setIsSubmitted(true);
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
			<OrderFormHeader />
			<OrderFormInputs
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
			<OrderFormFooter formError={formError} captchaToken={captchaToken} />
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
