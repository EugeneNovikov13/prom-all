import styled from 'styled-components';
import { useState } from 'react';
import {
	useFetchAuthMutation,
	useFetchLogoutMutation,
	useFetchRegisterMutation,
} from '../../store/services';

const AuthorizationContainer = ({ className }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const [fetchRegister, { error: regError }] = useFetchRegisterMutation();
	const [fetchAuth, { error: authError }] = useFetchAuthMutation();
	const [fetchLogout] = useFetchLogoutMutation();

	const onChange = (value, setFn) => {
		setFn(value);
	};

	const registration = async () => {
		await fetchRegister({ login, password });
		setError(regError);
	};

	if (error) {
		console.log(regError);
	}

	const authorization = async () => {
		await fetchAuth({ login, password });
	};

	const logout = () => {
		fetchLogout();
	};

	return (
		<div className={className}>
			<form>
				<input
					type="text"
					id="login"
					name="login"
					placeholder="Введите логин..."
					value={login}
					onChange={({ target }) => onChange(target.value, setLogin)}
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Введите пароль..."
					value={password}
					onChange={({ target }) => onChange(target.value, setPassword)}
				/>
				<button onClick={registration}>
					Регистрация
				</button>
				<button onClick={authorization}>
					Авторизация
				</button>
				<button onClick={logout}>Выйти</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	form {
		width: 200px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
