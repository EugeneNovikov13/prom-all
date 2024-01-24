import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../features';
import { CategorySection } from './components/category-section';
import { ReactComponent as Burger } from './assets/burger.svg';
import { catalogList } from '../../constants';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Img } from '../../components';
import { buttonStyleProps } from './constants/button-style-props';

const SideMenuContainer = ({ className, isOpen, setIsOpen }) => {
	const [openedCategory, setOpenedCategory] = useState('');

	const currentCategoryTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.category.selectedTitle,
	);

	const dispatch = useDispatch();

	const categories = catalogList.map(cat => ({
		id: cat.id,
		title: cat.title,
		image: cat.image,
		subcategories: cat.subcategories,
	}));

	useEffect(() => {
		setOpenedCategory(currentCategoryTitle);
	}, [categories, currentCategoryTitle, dispatch, isOpen]);

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
				/>
			))}
		</motion.aside>
	);
};

export const SideMenu = styled(SideMenuContainer)`
	position: relative;
	flex: ${({ isOpen }) => (isOpen ? '1 1 270px' : '1 0 0')};
	height: ${({ isOpen }) => (isOpen ? '' : '80px')};
	min-width: 270px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 12px;
	border-radius: 16px;
	background: var(--white);

	@media screen and (max-device-height: 1000px) {
		position: absolute;
		top: 0;
		left: -400px;
	}

	& button {
		white-space: break-spaces;
	}
`;
