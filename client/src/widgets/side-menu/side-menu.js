import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Button } from '../../features';
import { CategorySection } from './components/category-section';
import { Img } from '../../components';
import { ReactComponent as Burger } from './assets/burger.svg';
import { catalogList } from '../../constants';
import { buttonStyleProps } from './constants/button-style-props';
import styled from 'styled-components';

const SideMenuContainer = ({ className, isOpen, setIsOpen }) => {
	const [openedCategory, setOpenedCategory] = useState('');

	const currentCategoryTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.category.selectedTitle,
	);

	const categories = catalogList.map(cat => ({
		id: cat.id,
		title: cat.title,
		image: cat.image,
		subcategories: cat.subcategories,
	}));

	useEffect(() => {
		setOpenedCategory(currentCategoryTitle);
	}, [currentCategoryTitle]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.aside className={className}>
			<Button
				{...buttonStyleProps}
				justifyContent="space-between"
				onClick={toggleMenu}
			>
				<span>Каталог</span>
				<Img SvgIconComponent={Burger} maxWidth="34px" maxHeight="34px" />
			</Button>
			{categories.map(({ id, title, subcategories }) => (
				<CategorySection
					key={id}
					id={id}
					title={title}
					subcategories={subcategories}
					isOpen={title === openedCategory}
					setOpenedCategory={setOpenedCategory}
				/>
			))}
		</motion.aside>
	);
};

export const SideMenu = styled(SideMenuContainer)`
	position: relative;
	min-width: 270px;
	height: ${({ isOpen }) => (isOpen ? '' : '80px')};
	display: flex;
	flex: ${({ isOpen }) => (isOpen ? '1 1 270px' : '1 0 0')};
	flex-direction: column;
	align-items: flex-start;
	padding: 12px;
	border-radius: 16px;
	background: var(--white);

	@media (max-width: 600px) {
		width: 100%;
	}

	& button {
		white-space: break-spaces;
	}
`;
