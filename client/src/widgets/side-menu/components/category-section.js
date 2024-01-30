import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { setCards } from '../../../store/reducers';
import { Button } from '../../../features';
import { Img } from '../../../components';
import { SubcategorySection } from './subcategory-section';
import { ReactComponent as Closed } from '../assets/closed.svg';
import { ReactComponent as Opened } from '../assets/opened.svg';
import { buttonStyleProps } from '../constants/button-style-props';
import styled from 'styled-components';

const CategoryButtonContainer = ({
	className,
	id,
	title,
	subcategories,
	isOpen,
	setOpenedCategory,
}) => {
	const currentSubcategoryTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.subcategory.selectedTitle,
	);

	const countSections = useSelector(
		state => state.catalogReducer.countSections,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isOpen && countSections === 2) {
			const payload = {
				isProductCards: false,
				data: subcategories,
			};
			dispatch(setCards(payload));
		}
	}, [currentSubcategoryTitle, dispatch, isOpen, subcategories, countSections]);

	const onClick = categoryTitle => {
		if (isOpen) {
			setOpenedCategory('');
			return;
		}
		setOpenedCategory(categoryTitle);
	};

	return (
		<div className={className}>
			<Button
				{...buttonStyleProps}
				link={`/catalog/section/${id}`}
				onClick={() => onClick(title)}
			>
				<div className="category-button-content">
					<span>{title}</span>
					<Img
						SvgIconComponent={isOpen ? Opened : Closed}
						maxWidth="24px"
						maxHeight="24px"
					/>
				</div>
			</Button>
			<AnimatePresence>
				{isOpen && (
					<ul className="subcategories-container">
						{subcategories.map(({ id: subcategoryId, shortTitle, title: subcategoryTitle, types }, index) => (
							<SubcategorySection
								key={subcategoryId}
								id={subcategoryId}
								shortTitle={shortTitle}
								title={subcategoryTitle}
								types={types}
								isOpen={subcategoryTitle === currentSubcategoryTitle}
								index={index}
							/>
						))}
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
