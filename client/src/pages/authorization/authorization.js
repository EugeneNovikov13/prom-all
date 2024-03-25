import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchAuthMutation } from '../../store/services';
import { changeLoading, setUser } from '../../store/reducers';
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

const AuthorizationContainer = ({ className }) => {
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
		},
		resolver: yupResolver(SETTINGS.AUTHORIZATION_FORM_SCHEMA),
		mode: 'onChange',
	});

	if (isSubmitted) {
		formReset();
		setIsSubmitted(false);
	}

	const [fetchAuth] = useFetchAuthMutation();

	const onSubmit = formData => {
		dispatch(changeLoading(true));

		const data = {
			userData: formData,
			captchaToken,
		};

		fetchAuth(data)
			.then(res => {
				if (!res.error && res.data === 'admin') {
					setIsSubmitted(true);
					navigate('/authorization-second-step', { replace: true });
					return;
				}

				if (!res.error) {
					dispatch(setUser(res.data));
					setIsSubmitted(true);
					navigate('/', { replace: true });
					return;
				}
				setServerError(res.error.data);
				console.error(res.error);
			})
			.catch(e => {
				console.error(e);
			})
			.finally(() => {
				dispatch(changeLoading(false));
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

	const formError = errors?.login?.message || errors?.password?.message;

	// Проверяем все ли поля были изменены
	const isAllFieldsDirty =
		Object.values(dirtyFields).length === Object.values(inputCounter).length;

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
						<ServerMessage isError={serverError}>
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
