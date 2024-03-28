import { Dispatch, FC, SetStateAction } from 'react';
import { mapCategoryList } from './utils';
import { useSelector } from 'react-redux';
import { selectBreadcrumbs } from 'store/reducers';
import { motion } from 'framer-motion';
import { Button } from 'features';
import { CategorySection } from './components/category-section';
import { Icon } from 'components';
import { catalogList } from '../../constants';
import { buttonStyleProps } from './config/button-style-props';
import { ReactComponent as Burger } from './assets/burger.svg';
import styled from 'styled-components';

interface SideMenuProps {
	className?: string;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SideMenuContainer: FC<SideMenuProps> = ({ className, setIsOpen }) => {
	const currentCategoryTitle = useSelector(selectBreadcrumbs).category.selectedTitle;

	const categories = catalogList.map(mapCategoryList);

	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<motion.aside className={className}>
			<Button
				{...buttonStyleProps}
				justifyContent="space-between"
				onClick={toggleMenu}
			>
				<span>Каталог</span>
				<Icon iconSrc={Burger} width="34px" isActive={true} />
			</Button>
			{categories.map(({ id, title, subcategories }) => (
				<CategorySection
					key={id}
					id={id}
					title={title}
					subcategories={subcategories}
					isActiveCategory={title === currentCategoryTitle}
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
