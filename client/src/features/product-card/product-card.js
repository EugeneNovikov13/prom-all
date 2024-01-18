import { Img } from '../../components';
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
			<Img
				iconClassName="product-card-icon"
				SvgIconComponent={SvgIconComponent}
				image={image}
				maxWidth={217}
				maxHeight={150}
				position={'absolute'}
				top={isOpen ? '-80px' : '63px'}
				strokeColor={isOpen ? 'var(--brand-orange)' : ''}
				hoverStrokeColor={'var(--brand-orange)'}
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

	& svg.product-card-icon {
		z-index: 1;
	}

	& svg.product-card-icon * {
		stroke: ${({ strokeColor }) => strokeColor};
		transition: ${({ transition }) => (transition ? transition : '0.3s')};
	}

	& svg.product-card-icon:hover * {
		stroke: ${({ hoverStrokeColor }) => hoverStrokeColor};
	}
`;
