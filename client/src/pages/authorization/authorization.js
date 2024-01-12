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

	const [fetchRegister, { error: regError, isLoading, isError: isRegError }] = useFetchRegisterMutation();
	const [fetchAuth, { error: authError, isError: isAuthError }] = useFetchAuthMutation();
	const [fetchLogout] = useFetchLogoutMutation();

	const registration = async () => {
		await fetchRegister({ login, password });
	};

	const authorization = async () => {
		await fetchAuth({ login, password });
	};

	const logout = () => {
		fetchLogout();
	};

	return (
		<div className={className}>
			{isLoading ? <h2>Идёт запрос...</h2> :
				<div>
					<input
						type="text"
						id="login"
						name="login"
						placeholder="Введите логин..."
						value={login}
						onChange={({ target }) => setLogin(target.value)}
					/>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Введите пароль..."
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
					<button onClick={registration}>Регистрация</button>
					<button onClick={authorization}>Авторизация</button>
					<button onClick={logout}>Выйти</button>
				</div>
			}
			{isRegError && <p>{regError.data}</p>}
			{isAuthError && <p>{authError.data}</p>}
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

	h2 {
		color: white;
	}
`;
