import { Button } from '../../../components';
import styled from 'styled-components';

const FormFooterContainer = ({ className, formError, captchaToken }) => {
	return (
		<div className={className}>
			<Button
				width="1128px"
				height="60px"
				backgroundColor="#FF7F00"
				type="submit"
				isDisable={!!formError || !captchaToken}
			>
				Отправить сообщение<sup>*</sup>
			</Button>
			<span>
				* Нажимая на кнопку вы соглашаетесь с Пользовательским соглашением и
				Условиями обработки персональных данных.
			</span>
		</div>
	);
};

export const FormFooter = styled(FormFooterContainer)`
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
