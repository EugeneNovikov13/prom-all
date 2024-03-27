import { FC, FormEvent, MouseEventHandler, useState } from 'react';
import { H1, ServerMessage } from '../../components';
import { Button, Input } from '../../features';
import styled from 'styled-components';
import { useSubmitLogout } from '../../hooks';
import { useSubmitAuthSecondStep } from './hooks';

interface AuthorizationSecondStepProps {
	className?: string;
}

const AuthorizationSecondStepContainer: FC<AuthorizationSecondStepProps> = ({
	className,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [serverError, setServerError] = useState('');

	const { submitAuthSecondStep } = useSubmitAuthSecondStep(setServerError);
	const { submitSubmitLogout } = useSubmitLogout(setServerError);

	const onSubmit = async (e: FormEvent<HTMLFormElement>, value: string) => {
		e.preventDefault();
		if (!value) return;

		const data = { code: value };

		await submitAuthSecondStep(data);
	};

	const onInputChange = (value: string) => {
		setInputValue(value);
		setServerError('');
	};

	const onLogout: MouseEventHandler<HTMLButtonElement> = async e => {
		e.preventDefault();
		await submitSubmitLogout();
	};

	return (
		<div className={className}>
			<section className="authorization-second-step-layout">
				<form
					className="authorization-second-step-form"
					method="post"
					onSubmit={e => onSubmit(e, inputValue)}
				>
					<div className="authorization-second-step-header">
						<H1 color="var(--white)">Код на E-mail</H1>
					</div>
					<div className="authorization-second-step-input">
						<div className="input-wrapper">
							<Input
								name="code"
								placeholder="Код авторизации"
								type="text"
								onChange={({ target }) => onInputChange(target.value)}
								error={undefined}
							/>
						</div>
					</div>
					{serverError && (
						<ServerMessage isError={!!serverError}>
							! {serverError}
						</ServerMessage>
					)}
					<div className="authorization-second-step-footer">
						<Button
							width="100%"
							height="60px"
							background={'var(--brand-orange)'}
							type="submit"
							isDisable={!inputValue}
							hoverBoxShadow={true}
							activeBackground={'var(--active-orange)'}
						>
							Войти
						</Button>
						<Button
							width="100%"
							height="60px"
							background={'var(--brand-orange)'}
							hoverBoxShadow={true}
							activeBackground={'var(--active-orange)'}
							onClick={e => onLogout(e)}
						>
							Отменить авторизацию
						</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export const AuthorizationSecondStep = styled(AuthorizationSecondStepContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& section.authorization-second-step-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;

		& form.authorization-second-step-form {
			max-width: 480px;
			flex: 1 0 0;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 0 32px;

			& div.authorization-second-step-header {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			& div.authorization-second-step-input {
				display: flex;
				flex-wrap: wrap;

				& div.input-wrapper {
					display: flex;
					flex: 1 0 0;
					flex-direction: column;
					gap: 16px;
				}
			}

			& div.authorization-second-step-footer {
				display: flex;
				flex-direction: column;
				gap: 24px;
				align-self: stretch;
			}
		}
	}
`;
