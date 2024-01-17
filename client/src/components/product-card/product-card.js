import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SubcategoriesCard } from './components/subcategories-card';
import { ProductCardContent } from './components/product-card-content';

const ProductCardContainer = ({
	className,
	title,
	SvgIconComponent,
	image,
	link,
	subcategories,
	isOpen,
	onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
	const CategoryCard = isOpen ? (
		<SubcategoriesCard
			SvgIconComponent={SvgIconComponent}
			subcategories={subcategories}
			link={link}
		/>
	) : (
		<ProductCardContent
			title={title}
			SvgIconComponent={SvgIconComponent}
			image={image}
		/>
	);

	return (
		<div
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{link ? (
				<Link to={link}>
					<ProductCardContent title={title} image={image} />
				</Link>
			) : (
				CategoryCard
			)}
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	width: ${({ isOpen }) => (isOpen ? '316px' : '210px')};
	height: 340px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: var(--white);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 14px 0 #16306b;
	}
`;
