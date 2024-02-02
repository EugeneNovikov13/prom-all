import { Input } from '../../../features';
import styled from 'styled-components';

const AuthorizationFormFooterContainer = ({ className, register, errors, onInputChange }) => {
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
