import { Input } from '../../../features';
import styled from 'styled-components';

const RegistrationFormInputsContainer = ({ className, register, errors, onInputChange }) => {
	return (
		<div className={className}>
			<div className="input-wrapper">
				<Input
					name="login"
					placeholder="Логин"
					type="text"
					error={errors?.login?.message}
					{...register('login', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="password"
					placeholder="Пароль"
					type="password"
					error={errors?.password?.message}
					{...register('password', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="password_confirm"
					placeholder="Повторите пароль"
					type="password"
					error={errors?.passwordConfirm?.message}
					{...register('passwordConfirm', {
						onChange: onInputChange,
					})}
				/>
				<Input
					name="name"
					placeholder="ФИО"
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
					type="text"
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
		</div>
	);
};

export const RegistrationFormInputs = styled(RegistrationFormInputsContainer)`
	display: flex;
	flex-wrap: wrap;

	& div.input-wrapper {
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 16px;
	}
`;
