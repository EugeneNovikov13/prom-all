import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../features';
import { CategorySection } from './components/category-section';
import { catalogList } from '../../constants';
import styled from 'styled-components';

const SideMenuContainer = ({ className }) => {
	const [openedCategory, setOpenedCategory] = useState('');

	const currentCategoryTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.category.selectedTitle,
	);

	useEffect(() => {
		setOpenedCategory(currentCategoryTitle);
	}, [currentCategoryTitle]);

	const buttonStyleProps = {
		width: '100%',
		height: '56px',
		color: '#49454F',
		justifyContent: 'flex-start',
		padding: '8px 16px',
		fontSize: '14px',
		background: 'transparent',
		hoverBackground: 'rgba(29, 27, 32, 0.08)',
		activeBackground: 'rgba(29, 27, 32, 0.12)',
	};

	return (
		<aside className={className}>
			<Button {...buttonStyleProps}>Каталог</Button>
			{catalogList.map(({ id, title, subcategories }) => (
				<CategorySection
					key={id}
					id={id}
					title={title}
					subcategories={subcategories}
					isOpen={title === openedCategory}
					buttonStyleProps={buttonStyleProps}
				/>
			))}
		</aside>
	);
};

export const SideMenu = styled(SideMenuContainer)`
	min-width: 270px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 12px;
	border-radius: 16px;
	background: var(--white);

	& button {
		white-space: break-spaces;
	}
`;
