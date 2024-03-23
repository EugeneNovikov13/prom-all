import { FC, useState } from 'react';
import { Counter, H1, Modal, Select } from 'components';
import { Button } from 'features';
import { QuickOrder } from 'widgets';
import { productOrderSelectProps } from '../config/product-order-select-props';
import styled from 'styled-components';
import { IKind } from 'types';
import { SingleValue } from 'react-select';
import { Option } from 'components/select/select-types';
import { createPortal } from 'react-dom';

interface ProductOrderFormProps {
	className?: string;
	title: string;
	kinds: IKind[];
}

const ProductOrderFormContainer: FC<ProductOrderFormProps> = ({
	className,
	title,
	kinds,
}) => {
	const [counter, setCounter] = useState(1);
	const [selectValue, setSelectValue] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [orderData, setOrderData] = useState('');

	const onCounterChange = (dif: number) => {
		if (counter + dif < 1) {
			setCounter(1);
			return;
		}
		setCounter(counter + dif);
	};

	const options = kinds && kinds.map(kind => ({ value: kind.id, label: kind.title }));

	const onClick = () => {
		const orderData = `Требуется: ${title} ${
			selectValue && `\nМодель исполнения: ${selectValue}`
		}\nКоличество: ${counter}шт.`;

		setOrderData(orderData);
		setIsModalOpen(true);
	};

	const onSelect = (value: SingleValue<Option>) => {
		if (value) {
			setSelectValue(value.label);
			return;
		}
		setSelectValue('');
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
						<Select
							options={options}
							onSelect={onSelect}
							placeholder={options[0].label}
							selectProps={productOrderSelectProps}
						/>
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
			{isModalOpen &&
				createPortal(
					<Modal
						backgroundColor={'var(--dark)'}
						setIsModalOpen={setIsModalOpen}
						//@ts-ignore
						children={<QuickOrder orderData={orderData} />}
					/>,
					document.body,
				)}
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
			word-break: break-word;

			@media (max-width: 700px) {
				font-size: 7vw;
			}
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
