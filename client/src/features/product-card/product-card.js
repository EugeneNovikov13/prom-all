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
	max-width: ${({ isOpen, openCardTitle }) =>
		isOpen ? 316 : openCardTitle ? 210 : 217}px;
	height: 340px;
	flex: 1 1 210px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: var(--white);
	transition:
		height 0.3s,
		max-width 0.3s,
		box-shadow 0.3s;

	@media (max-width: 500px) {
		max-width: none;
		min-width: ${({ isOpen }) =>
			isOpen ? 340 : ''}px;
		height: ${({ isOpen }) => (isOpen ? 340 : 240)}px;
		flex: 1 1 150px;
		margin-top: ${({ isOpen }) => (isOpen ? 70 : 0)}px;
	}

	&:hover {
		cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};
		box-shadow: 0 8px 14px 0 #16306b;

		& svg.product-card-icon * {
			stroke: var(--brand-orange);
		}
	}

	& div:first-of-type {
		overflow: hidden;
	}
`;
