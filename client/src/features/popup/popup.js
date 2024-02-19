import { useSelector } from 'react-redux';
import { selectBreadcrumbs } from '../../store/reducers';
import { getSubsectionsBySectionTitle } from '../../utils';
import { PopupItemProducts, PopupItemSections } from './components';
import styled from 'styled-components';

const PopupContainer = ({ className, section }) => {
	const breadcrumbs = useSelector(selectBreadcrumbs);

	// Если здесь undefined, значит это продуктовый crumb
	const sectionItems = getSubsectionsBySectionTitle(section, breadcrumbs);

	const listVariants = {
		visible: i => ({
			height: '40px',
			opacity: 1,
			transition: {
				ease: 'linear',
				delay: i * 0.025,
			},
		}),
		hidden: {
			height: '0',
			opacity: 0,
		},
	};

	return (
		<div className={className}>
			{sectionItems ? (
				sectionItems.map(({ id, title }, index) => (
					<PopupItemSections
						key={id}
						id={id}
						title={title}
						index={index}
						listVariants={listVariants}
					/>
				))
			) : (
				<PopupItemProducts listVariants={listVariants} />
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
