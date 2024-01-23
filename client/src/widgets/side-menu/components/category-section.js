import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../features';
import { Img } from '../../../components';
import { SubcategorySection } from './subcategory-section';
import { ReactComponent as Closed } from '../assets/closed.svg';
import { ReactComponent as Opened } from '../assets/opened.svg';
import styled from 'styled-components';

const CategoryButtonContainer = ({
	className,
	id,
	title,
	subcategories,
	isOpen,
	buttonStyleProps,
}) => {
	const [openedSubcategory, setOpenedSubcategory] = useState('');

	const currentSubcategoryTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.subcategory.selectedTitle,
	);

	useEffect(() => {
		setOpenedSubcategory(currentSubcategoryTitle);
	}, [currentSubcategoryTitle]);

	return (
		<div className={className}>
			<Button
				{...buttonStyleProps}
				// background={'transparent'}
				isDisable={isOpen}
				link={`/catalog/section/${id}`}
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
			{isOpen && (
				<ul className="subcategories-container">
					{subcategories.map(({ id, shortTitle, title, types }) => (
						<SubcategorySection
							key={id}
							id={id}
							shortTitle={shortTitle}
							title={title}
							types={types}
							isOpen={title === openedSubcategory}
							buttonStyleProps={buttonStyleProps}
						/>
					))}
				</ul>
			)}
			<div className="divider"></div>
		</div>
	);
};

export const CategorySection = styled(CategoryButtonContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;

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
