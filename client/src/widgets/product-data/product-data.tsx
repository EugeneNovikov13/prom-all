import { FC } from 'react';
import { H1 } from 'components';
import styled from 'styled-components';

interface ProductDataProps {
	className?: string;
	title: string;
	content: string;
}

const ProductDataContainer: FC<ProductDataProps> = ({ className, title, content }) => {
	return (
		<div className={className}>
			<div className="product-data-container">
				<div className="product-data-header">
					<H1>{title}</H1>
				</div>
				<div
					className="product-data-info"
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
			</div>
		</div>
	);
};

export const ProductData = styled(ProductDataContainer)`
	max-width: 1200px;
	height: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 40px 60px 0;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 7px; /* ширина полосы прокрутки */
		height: 7px; /* высота полосы прокрутки */
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1; /* Цвет фона трека */
	}

	&::-webkit-scrollbar-thumb {
		background: #888; /* Цвет полосы прокрутки */
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555; /* Цвет полосы прокрутки при наведении */
	}

	& div.product-data-container {
		min-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 32px;
		align-self: stretch;

		& div.product-data-header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			align-self: stretch;

			& h1 {
				font-size: 48px;
			}
		}
	}

	& div.product-data-info {
		& table,
		th,
		td {
			border: 1px solid black;
		}

		& table {
			border-collapse: collapse;
		}
	}
`;
