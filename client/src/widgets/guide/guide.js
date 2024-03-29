import { ReactComponent as Step1 } from './assets/step1.svg';
import { ReactComponent as Step2 } from './assets/step2.svg';
import { ReactComponent as Step3 } from './assets/step3.svg';
import { H1, P } from '../../components';
import styled from 'styled-components';

const GuideContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="guide-container">
				<div className="guide-header">
					<H1>Как сделать заказ</H1>
				</div>
				<div className="guide-body">
					<div className="guide-item">
						<div className="guide-content">
							<Step1 className="guide-icon" style={{ left: '-10px' }} />
							<P lineHeight="28px">
								Выберите товар, его параметры и количество
							</P>
						</div>
					</div>
					<div className="guide-item">
						<div className="guide-content">
							<Step2 className="guide-icon" />
							<P lineHeight="28px">
								Нажмите кнопку «Оформить заказ», появится форма заказа
							</P>
						</div>
					</div>
					<div className="guide-item">
						<div className="guide-content">
							<Step3 className="guide-icon" />
							<P lineHeight="28px">
								Оставьте контактные данные и менеджер с вами свяжется
							</P>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Guide = styled(GuideContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 120px 10px;
	background: #e8e8e8;

	& div.guide-container {
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;
		padding: 0 36px 114px 36px;

		& div.guide-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
		}

		& div.guide-body {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			gap: 20px;
			align-self: stretch;

			& div.guide-item {
				min-width: 300px;
				height: 282px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 1 0 0;
				padding: 32px 20px;
				border-radius: 8px;
				background: #071123;

				& div.guide-content {
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-start;
					flex: 1 0 0;
					align-self: stretch;

					& svg.guide-icon {
						position: absolute;
						top: -30px;
						left: -20px;
					}

					& p {
						max-width: 317px;
					}
				}
			}
		}
	}
`;
