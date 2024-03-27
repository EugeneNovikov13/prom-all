import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Input } from 'features';
import styled from 'styled-components';
import { IRegistrationForm } from 'types';

interface RegistrationFormInputsProps {
	className?: string;
	register: UseFormRegister<IRegistrationForm>;
	errors: FieldErrors<IRegistrationForm>;
	onInputChange: () => void;
}

const RegistrationFormInputsContainer: FC<RegistrationFormInputsProps> = ({ className, register, errors, onInputChange }) => {
	return (
		<div className={className}>
			<div className="input-wrapper">
				<Input
					placeholder="Логин"
					type="text"
					error={errors?.login?.message}
					{...register('login', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Пароль"
					type="password"
					error={errors?.password?.message}
					{...register('password', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Повторите пароль"
					type="password"
					error={errors?.passwordConfirm?.message}
					{...register('passwordConfirm', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="ФИО"
					type="text"
					error={errors?.name?.message}
					{...register('name', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Название организации"
					type="text"
					error={errors?.organization?.message}
					{...register('organization', {
						onChange: onInputChange,
					})}
				/>
				<Input
					placeholder="Электронная почта"
					type="text"
					error={errors?.email?.message}
					{...register('email', {
						onChange: onInputChange,
					})}
				/>
				<Input
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
