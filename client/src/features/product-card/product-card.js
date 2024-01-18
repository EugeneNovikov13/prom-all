import { Image } from '../../components';
import { SubcategoriesCard } from './components/subcategories-card';
import { ProductCardContent } from './components/product-card-content';
import styled from 'styled-components';

const ProductCardContainer = ({
	className,
	id,
	title,
	SvgIconComponent,
	image,
	subcategories,
	openCardTitle,
	onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
	const isOpen = openCardTitle === title;

	const CategoryCard = isOpen ? (
		<SubcategoriesCard subcategories={subcategories} id={id} />
	) : (
		<ProductCardContent title={title} />
	);

	return (
		<div
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Image
				SvgIconComponent={SvgIconComponent}
				image={image}
				maxWidth={217}
				maxHeight={150}
				strokeColor={isOpen ? 'var(--brand-orange)' : ''}
				hoverStrokeColor={'var(--brand-orange)'}
				position={'absolute'}
				top={isOpen ? -80 : 63}
			/>
			{CategoryCard}
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	position: relative;
	display: flex;
	width: ${({ openCardTitle, title }) =>
		openCardTitle === title ? 316 : openCardTitle ? 210 : 217}px;
	height: 340px;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	border-radius: 8px;
	background: var(--white);
	transition:
		width 0.3s,
		box-shadow 0.3s;

	padding-top: ${({ openCardTitle, title }) => (openCardTitle === title ? 0 : 208)}px;

	&:hover {
		box-shadow: 0 8px 14px 0 #16306b;

		& svg.product-card-icon * {
			stroke: var(--brand-orange);
		}
	}
`;
