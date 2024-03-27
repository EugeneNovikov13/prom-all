import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectBreadcrumbs } from 'store/reducers';
import { getSubsectionsBySectionTitle } from 'utils';
import { PopupItemProducts, PopupItemSections } from './components';
import styled from 'styled-components';

interface PopupProps {
	className?: string;
	section: 'category' | 'subcategory' | 'type';
}

const PopupContainer: FC<PopupProps> = ({ className, section }) => {
	const breadcrumbs = useSelector(selectBreadcrumbs);

	const sectionItems = getSubsectionsBySectionTitle(section, breadcrumbs);
	// Если здесь true, значит это не продуктовый crumb
	const isNotProductCrumb = !!sectionItems;

	return (
		<div className={className}>
			{isNotProductCrumb ? (
				sectionItems.map(({ id, title }, index) => (
					<PopupItemSections
						key={id}
						id={id}
						title={title}
						index={index}
					/>
				))
			) : (
				<PopupItemProducts />
			)}
		</div>
	);
};

export const Popup = styled(PopupContainer)`
	min-width: 250px;
	position: absolute;
	top: 35px;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid #f8eede;
	border-radius: 0 0 20px 20px;
	background: var(--dark);
	z-index: 100;
`;
