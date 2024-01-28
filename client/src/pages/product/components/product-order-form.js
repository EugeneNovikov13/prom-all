import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, setOrderData } from '../../../store/reducers';
import { Counter, H1, Select } from '../../../components';
import { Button } from '../../../features';
import styled from 'styled-components';

const ProductOrderFormContainer = ({ className, title, kinds }) => {
	const [counter, setCounter] = useState(1);
	const [selectValue, setSelectValue] = useState('');

	const dispatch = useDispatch();

	const onCounterChange = dif => {
		if (counter + dif < 1) {
			setCounter(1);
			return;
		}
		setCounter(counter + dif);
	};

	const options = kinds && kinds.map(kind => ({ value: kind.id, label: kind.title }));

	const onClick = () => {
		const orderData = `Требуется: ${title} \nМодель исполнения: ${selectValue} \nКоличество: ${counter}шт.`;

		dispatch(setOrderData(orderData));
		dispatch(
			openModal({
				backgroundColor: 'var(--dark)',
				component: 'order',
			}),
		);
	};

	return (
		<div className={className}>
			<div className="product-order-title">
				<H1>{title}</H1>
			</div>
			<div className="product-order-inputs">
				<div className="product-order-counter">
					<span className="product-order-span">Количество</span>
					<Counter counter={counter} onCounterChange={onCounterChange} />
				</div>
				{!!kinds.length && (
					<div className="product-order-kind">
						<span className="product-order-span">Модель исполнения</span>
						<Select options={options} setSelectValue={setSelectValue} />
					</div>
				)}
			</div>
			<Button
				width="100%"
				height="64px"
				fontSize="20px"
				color={'var(--white)'}
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
				onClick={onClick}
			>
				Оформить заказ
			</Button>
		</div>
	);
};

export const ProductOrderForm = styled(ProductOrderFormContainer)`
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	gap: 18px;

	& div.product-order-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		align-self: stretch;

		h1 {
			font-size: 48px;
		}
	}

	& div.product-order-inputs {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: stretch;

		& div.product-order-counter {
			height: 86px;
			flex: 1 0 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			padding: 10px 16px 10px 12px;
			border-bottom: 1px solid rgba(52, 57, 65, 0.3);

			@media (max-width: 450px) {
				height: 94px;
				flex-direction: column;
				gap: 8px;
			}
		}

		& div.product-order-kind {
			height: 86px;
			flex: 1 0 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			padding: 10px 16px 10px 12px;
			border-bottom: 1px solid rgba(52, 57, 65, 0.3);

			@media (max-width: 450px) {
				height: 94px;
				flex-direction: column;
				gap: 8px;
			}

			& span {
				flex: 1;
			}
		}

		& span {
			color: var(--dark);
			font-family: Inter, sans-serif;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
			text-align: left;
		}

		& span.product-order-span {
			@media (max-width: 450px) {
				align-self: start;
			}

			@media (max-width: 350px) {
				white-space: nowrap;
			}
		}
	}
`;