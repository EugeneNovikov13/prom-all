import styled from 'styled-components';

const ProductCardContainer = ({
	className,
	children,
	onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<div
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	position: relative;
	display: flex;
	flex: 1 1 210px;
	max-width: ${({ openCardTitle, title }) =>
		openCardTitle === title ? 316 : openCardTitle ? 210 : 217}px;
	height: 340px;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	border-radius: 8px;
	background: var(--white);
	transition:
		max-width 0.3s,
		box-shadow 0.3s;

	padding-top: ${({ openCardTitle, title }) => (openCardTitle === title ? 0 : 208)}px;

	&:hover {
		box-shadow: 0 8px 14px 0 #16306b;

		& svg.product-card-icon * {
			stroke: var(--brand-orange);
		}
	}

	& div:first-of-type {
		overflow: hidden;
	}
`;
