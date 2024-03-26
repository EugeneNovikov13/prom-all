import { Input } from 'features';
import styled from 'styled-components';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAuthorizationForm } from 'types';
import { FC } from 'react';

interface AuthorizationFormInputsProps {
	className?: string;
	register: UseFormRegister<IAuthorizationForm>;
	errors: FieldErrors<IAuthorizationForm>;
	onInputChange: () => void;
}

const AuthorizationFormFooterContainer: FC<AuthorizationFormInputsProps> = ({ className, register, errors, onInputChange }) => {
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
			</div>
		</div>
	);
};

export const AuthorizationFormInputs = styled(AuthorizationFormFooterContainer)`
	display: flex;
	flex-wrap: wrap;

	& div.input-wrapper {
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 16px;
	}
`;
