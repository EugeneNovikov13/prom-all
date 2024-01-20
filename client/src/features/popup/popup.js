import { PopupItemProducts, PopupItemSections } from './components';
import styled from 'styled-components';

const PopupContainer = ({
	className,
	isProductSection,
	sectionItems,
	onPopupSectionClick,
	section,
}) => {
	return (
		<div className={className}>
			{isProductSection ? (
				<PopupItemProducts onPopupSectionClick={onPopupSectionClick} />
			) : (
				sectionItems.map(({ id, title }) => (
					<PopupItemSections
						key={id}
						id={id}
						title={title}
						section={section}
						onPopupSectionClick={onPopupSectionClick}
					/>
				))
			)}
		</div>
	);
};

export const Popup = styled(PopupContainer)`
	min-width: 250px;
	position: absolute;
	top: 40px;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 0 0 20px 20px;
	background: var(--dark);
	z-index: 100;
`;
