import { useSelector } from 'react-redux';
import { selectBreadcrumbs } from '../../../store/reducers';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../../../features';
import { Img } from '../../../components';
import { SubcategorySection } from './subcategory-section';
import { ReactComponent as Closed } from '../assets/closed.svg';
import { buttonStyleProps } from '../config/button-style-props';
import styled from 'styled-components';

const CategoryButtonContainer = ({
	className,
	id,
	title,
	subcategories,
	isActiveCategory,
}) => {
	const currentSubcategoryTitle =
		useSelector(selectBreadcrumbs).subcategory.selectedTitle;

	return (
		<div className={className}>
			<Button {...buttonStyleProps} link={`/catalog/section/${id}`}>
				<div className="category-button-content">
					<span>{title}</span>
					<Img
						SvgIconComponent={Closed}
						maxWidth="24px"
						maxHeight="24px"
						iconClassName={isActiveCategory ? 'active-category-icon' : ''}
						hoverStrokeColor='#141414'
					/>
				</div>
			</Button>
			<AnimatePresence>
				{isActiveCategory && (
					<ul className="subcategories-container">
						{subcategories.map(
							(
								{
									id: subcategoryId,
									shortTitle,
									title: subcategoryTitle,
									types,
								},
								index,
							) => (
								<SubcategorySection
									key={subcategoryId}
									id={subcategoryId}
									shortTitle={shortTitle}
									title={subcategoryTitle}
									types={types}
									isActiveSubcategory={
										subcategoryTitle === currentSubcategoryTitle
									}
									index={index}
								/>
							),
						)}
					</ul>
				)}
			</AnimatePresence>
			<div className="divider"></div>
		</div>
	);
};

export const CategorySection = styled(CategoryButtonContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	overflow: hidden;

	& div.category-button-content {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1 0 0;

		& span {
			flex: 1 0 0;
			text-align: left;
		}

		& svg {
			transition: transform 0.3s;
		}

		& svg.active-category-icon {
			transform: rotate(45deg);
		}
	}

	&:not(:last-of-type) div.divider {
		height: 1px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-self: stretch;
		margin: 0 16px;
		background: #cac4d0;
	}

	& ul.subcategories-container {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	& a {
		width: 100%;
	}
`;
