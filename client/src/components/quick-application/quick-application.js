import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetForm } from '../../hooks';
import { H1 } from '../h1/h1';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { P } from '../p/p';
import { Button } from '../button/button';
import { ServerError } from '../server-error/server-error';
import { quickApplicationFormSchema } from '../../settings';
import styled from 'styled-components';

const QuickApplicationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const [isSuccess, setIsSuccess] = useState(false);

	const {
		register,
		reset,
		handleSubmit,
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

	useResetForm(reset, isSuccess);

	const onSubmit = ({ name, organization, email, phone, application }) => {
		console.log({ name, organization, email, phone, application });
		// setIsSuccess(true);
		setServerError(`Не удалось отправить заявку`);
		// request('/register', 'POST', { name, surname, email, password, image }).then(
		// 	({ error, user }) => {
		// 		if (error) {
		// 			setServerError(`Не удалось отправить заявку: ${error}`);
		// 			return;
		// 		}
		//
		// 		dispatch(SET_USER);
		// 		sessionStorage.setItem('userData', JSON.stringify(user));
		// 	},
		// );
	};

	const onInputChange = () => {
		setServerError(null);
	};

	const formError =
		errors?.name?.message ||
		errors?.organization?.message ||
		errors?.email?.message ||
		errors?.phone?.message ||
		errors?.application?.message;

	return (
		<div className={className}>
			<form method="post" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-header">
					<H1 color="#FFFFFF">Быстрая заявка</H1>
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
				{serverError && <ServerError>! {serverError}</ServerError>}
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
		</div>
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
