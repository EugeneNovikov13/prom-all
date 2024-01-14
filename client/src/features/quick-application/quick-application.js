import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetForm } from '../../hooks';
import { quickApplicationFormSchema } from '../../settings';
import styled from 'styled-components';
import { Button, Captcha, H1, Input, P, ServerMessage, Textarea } from '../../components';
import { sendQuickApplication } from '../../utils/send-quick-application';

const QuickApplicationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const [serverResponse, setServerResponse] = useState(null);
	const [isCaptcha, setIsCaptcha] = useState(false);

	const {
		register,
		reset,
		handleSubmit,
		getValues,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			organization: '',
			email: '',
			phone: '',
			application: '',
		},
		resolver: yupResolver(quickApplicationFormSchema),
	});

	const isSubmitted = serverError || serverResponse;

	useResetForm(reset, isSubmitted);

	const onSubmit = () => {
		setIsCaptcha(true);
	};

	const onCaptchaChange = (...args) => {
		setIsCaptcha(false);

		sendQuickApplication(...args).then(res => {
			console.log(res);
			setServerError(res.error);
			setServerResponse(res.data);
		});
	};

	const onCaptchaErrored = () => {
		setIsCaptcha(false);
		setError('captchaError', { message: 'Не пройдена проверка Captcha' });
		setServerError(errors.captchaError.message);
	};

	const onCaptchaExpired = () => {
		setIsCaptcha(false);
		setError('captchaError', { message: 'Время проверки Captcha истекло' });
		setServerError(errors.captchaError.message);
	};

	const onInputChange = () => {
		setServerError(null);
		setServerResponse(null);
	};

	const formData = getValues();

	const formError =
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message ||
		errors?.application?.message;

	return (
		<section className={className}>
			<form method="post" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-header">
					<H1 color="var(--white)">Быстрая заявка</H1>
					<P>Заполните форму, ответим на все вопросы</P>
				</div>
				<div className="form-wrapper">
					<div className="input-wrapper">
						<Input
							name="name"
							placeholder="Ваше имя"
							type="text"
							error={errors?.name?.message}
							{...register('name', {
								onChange: onInputChange,
							})}
						/>
						<Input
							name="organization"
							placeholder="Название организации"
							type="text"
							error={errors?.organization?.message}
							{...register('organization', {
								onChange: onInputChange,
							})}
						/>
						<Input
							name="email"
							placeholder="Электронная почта"
							type="email"
							error={errors?.email?.message}
							{...register('email', {
								onChange: onInputChange,
							})}
						/>
						<Input
							name="phone"
							placeholder="Контактный телефон"
							type="text"
							error={errors?.phone?.message}
							{...register('phone', {
								onChange: onInputChange,
							})}
						/>
					</div>
					<Textarea
						name="application"
						placeholder="Здесь вы можете более подробно описать цель вашего обращения"
						type="text"
						error={errors?.application?.message}
						{...register('application', {
							onChange: onInputChange,
						})}
					/>
				</div>
				{serverError && (
					<ServerMessage isError={serverError}>! {serverError}</ServerMessage>
				)}
				{serverResponse && <ServerMessage>{serverResponse}</ServerMessage>}
				<div className="form-footer">
					<Button
						width="1128px"
						height="60px"
						backgroundColor="#FF7F00"
						type="submit"
						isDisable={!!formError}
					>
						Отправить сообщение<sup>*</sup>
					</Button>
					<span>
						* Нажимая на кнопку вы соглашаетесь с Пользовательским соглашением
						и Условиями обработки персональных данных.
					</span>
				</div>
			</form>
			<Captcha
				onChange={(value) => onCaptchaChange(value, formData)}
				// onErrored={onCaptchaErrored}
				// onExpired={onCaptchaExpired}
				isVisible={isCaptcha}
			/>
		</section>
	);
};

export const QuickApplication = styled(QuickApplicationContainer)`
	display: flex;
	max-width: 1920px;
	padding: 160px 0;
	flex-direction: column;
	align-items: center;
	background: var(--dark);

	& form {
		display: flex;
		flex-direction: column;
		gap: 60px;
		padding: 0 36px;

		& div.form-header {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		& div.form-wrapper {
			display: flex;
			flex-wrap: wrap;
			gap: 24px;

			& div.input-wrapper {
				display: flex;
				flex-direction: column;
				gap: 16px;
			}
		}

		& div.form-footer {
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-self: stretch;

			span {
				color: var(--white, #FFF);
				font-family: Inter, sans-serif;
				font-size: 16px;
				opacity: 0.7;
			}
		}
	}
`;
