import { useState } from 'react';
import { Counter, H1, Select } from '../../../components';
import { Button } from '../../../features';
import styled from 'styled-components';

const ProductApplicationFormContainer = ({ className, title, kinds }) => {
	const [counter, setCounter] = useState(1);

	const onCounterChange = (dif) => {
		if (counter + dif < 1) {
			setCounter(1);
			return;
		}
		setCounter(counter + dif);
	}

	const options = kinds && kinds.map(kind => ({ value: kind.id, label: kind.title}));

	return (
		<div className={className}>
			<div className="product-application-title">
				<H1>{title}</H1>
			</div>
			<div className="product-application-inputs">
				<div className="product-application-counter">
					<span>Количество</span>
					<Counter counter={counter} onCounterChange={onCounterChange} />
				</div>
				{!!kinds.length &&
					<div className="product-application-kind">
						<span>Модель исполнения</span>
						<Select options={options} />
					</div>
				}
			</div>
			<Button
				width="100%"
				height="64px"
				fontSize="20px"
				color={'var(--white)'}
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				Оформить заказ
			</Button>
		</div>
	);
};

export const ProductApplicationForm = styled(ProductApplicationFormContainer)`
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	& div.product-application-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		align-self: stretch;

		h1 {
			font-size: 48px;
		}
	}

	& div.product-application-inputs {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: stretch;

		& div.product-application-counter {
			height: 86px;
			flex: 1 0 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			padding: 10px 16px 10px 12px;
			border-bottom: 1px solid rgba(52, 57, 65, 0.30);
		}

		& div.product-application-kind {
			height: 86px;
			flex: 1 0 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			padding: 10px 16px 10px 12px;
			border-bottom: 1px solid rgba(52, 57, 65, 0.30);
		}

		& span {
			color: var(--dark);
			text-align: center;
			font-family: Inter,sans-serif;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
		}
	}
`;
