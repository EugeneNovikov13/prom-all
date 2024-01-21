import { PopupItemProducts, PopupItemSections } from './components';
import styled from 'styled-components';

const PopupContainer = ({
	className,
	isProductSection,
	sectionItems,
	onPopupSectionClick,
	section,
}) => {
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
			{isProductSection ? (
				<PopupItemProducts onPopupSectionClick={onPopupSectionClick} listVariants={listVariants}/>
			) : (
				sectionItems.map(({ id, title }, index) => (
					<PopupItemSections
						key={id}
						id={id}
						title={title}
						index={index}
						section={section}
						onPopupSectionClick={onPopupSectionClick}
						listVariants={listVariants}
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
