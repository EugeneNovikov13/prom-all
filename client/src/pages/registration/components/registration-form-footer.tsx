import { FC } from 'react';
import { Button } from 'features';
import styled from 'styled-components';

interface RegistrationFormFooterProps {
	className?: string;
	formError: string | undefined;
	captchaToken: string;
}

const RegistrationFormFooterContainer: FC<RegistrationFormFooterProps> = ({ className, formError, captchaToken }) => {
	return (
		<div className={className}>
			<Button
				width="100%"
				height="60px"
				background={'var(--brand-orange)'}
				type="submit"
				isDisable={!!formError || !captchaToken}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				Отправить<sup>*</sup>
			</Button>
			<span>
				* Нажимая на кнопку вы соглашаетесь с Пользовательским соглашением и
				Условиями обработки персональных данных.
			</span>
		</div>
	);
};

export const RegistrationFormFooter = styled(RegistrationFormFooterContainer)`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-self: stretch;

	span {
		color: var(--white, #fff);
		font-family: Inter, sans-serif;
		font-size: 16px;
		opacity: 0.7;
	}
`;
