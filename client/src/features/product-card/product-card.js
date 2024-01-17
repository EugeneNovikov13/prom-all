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
	isOpen,
	onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
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
	width: ${({ isOpen }) => (isOpen ? '316px' : '210px')};
	height: 340px;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	border-radius: 8px;
	background: var(--white);
	transition: box-shadow 1.3s;

	padding-top: ${({ isOpen }) => (isOpen ? 0 : 208)}px;

	&:hover {
		box-shadow: 0 8px 14px 0 #16306b;
	}
`;
