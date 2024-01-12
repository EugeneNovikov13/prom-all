import styled from 'styled-components';
import { H1 } from '../h1/h1';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { P } from '../p/p';
import { Button } from '../button/button';

const QuickApplicationContainer = ({ className }) => {
	return (
		<div className={className}>
			<form method="post">
				<div className="form-header">
					<H1 color="#FFFFFF">Быстрая заявка</H1>
					<P>Заполните форму, ответим на все вопросы</P>
				</div>
				<div className="form-wrapper">
					<div className="input-wrapper">
						<Input name='name' placeholder="Ваше имя" />
						<Input name='organization' placeholder="Название организации" />
						<Input name='email' placeholder="Электронная почта" />
						<Input name='phone' placeholder="Контактный телефон" />
					</div>
					<Textarea
						name="application"
						placeholder="Здесь вы можете более подробно описать цель вашего обращения"
					/>
				</div>
				<div className='form-footer'>
					<Button width='1128px' height='60px' backgroundColor='#FF7F00'>Отправить сообщение<sup>*</sup></Button>
					<span>* Нажимая на кнопку вы соглашаетесь с Пользовательским соглашением и Условиями обработки персональных данных.</span>
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
				font-family: Inter,sans-serif;
				font-size: 16px;
				opacity: 0.7;
			}
		}
	}
`;
