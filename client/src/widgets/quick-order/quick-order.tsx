import { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendQuickOrderAsync } from 'http/services';
import { changeLoading, selectUser } from 'store/reducers';
import ReCAPTCHA from 'react-google-recaptcha';
import { ServerMessage } from 'components';
import { OrderFormFooter, OrderFormHeader, OrderFormInputs } from './components';
import { SETTINGS } from 'settings';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import { ERROR } from '../../constants';
import styled from 'styled-components';
import { AppDispatch } from 'store/store';
import { IQuickOrderForm } from 'types';

interface QuickOrderProps {
	className?: string;
	orderData: string;
}

const QuickOrderContainer: FC<QuickOrderProps> = ({ className, orderData = '' }) => {
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const user = useSelector(selectUser);
	const dispatch: AppDispatch = useDispatch();

	const [serverError, setServerError] = useState<string>('');
	const [serverResponse, setServerResponse] = useState<string>('');
	const [captchaToken, setCaptchaToken] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const {
		register,
		reset: formReset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IQuickOrderForm>({
		defaultValues: {
			name: user ? user.name : '',
			organization: user ? user.organization : '',
			email: user ? user.email : '',
			phone: user ? user.phone : '',
			order: orderData,
		},
		resolver: yupResolver(SETTINGS.QUICK_ORDER_FORM_SCHEMA),
		mode: 'onChange',
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const onSubmit: SubmitHandler<IQuickOrderForm> = formData => {
		dispatch(changeLoading(true));

		sendQuickOrderAsync(captchaToken, formData)
			.then(res => {
				setServerResponse(res.data);
				setIsSubmitted(true);
			})
			.catch(e => {
				setServerError(ERROR.REQUEST_ERROR);
				console.error(e);
			})
			.finally(() => {
				dispatch(changeLoading(false));
				setCaptchaToken('');
			});

		recaptchaRef.current?.reset();
	};

	const onCaptchaChange = (value: string | null) => {
		value && setCaptchaToken(value);
	};

	const onInputChange = () => {
		setServerError('');
		setServerResponse('');
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
				<ServerMessage isError={!!serverError}>! {serverError}</ServerMessage>
			)}
			{serverResponse && (
				<ServerMessage>
					<mark>{serverResponse}</mark>
				</ServerMessage>
			)}
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

	& mark {
		background-color: var(--brand-orange);
		text-transform: uppercase;
		color: var(--white);
	}
`;
