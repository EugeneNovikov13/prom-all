import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSubsectionsBySectionTitle } from '../../../utils';
import { ReactComponent as Select } from '../assets/down-arrow.svg';
import { Img } from '../../../components';
import { Button, Popup } from '../../../features';
import styled from 'styled-components';

const CrumbContainer = ({
	className,
	section,
	selectedId,
	selectedTitle,
	isOpen,
	onPopupToggle,
	onMouseEnter,
	onMouseLeave,
}) => {
	//получаем перечень подразделов открытого раздела каталога
	const [sectionItems, setSectionItems] = useState([]);
	const { breadcrumbs } = useSelector(state => state.catalogReducer);

	useEffect(() => {
		if (isOpen) {
			setSectionItems(getSubsectionsBySectionTitle(section, breadcrumbs));
		}
	}, [breadcrumbs, isOpen, section]);
	////

	//проверяем, является ли подраздел подразделом продуктов
	const isProductSection = section === 'product';

	const crumbButtonStyleProps = {
		isDisable: !selectedId,
		width: 'calc(100% + 30px)',
		height: '32px',
		borderRadius: '100px',
		fontSize: '14px',
		color: '#E6E0E9',
		background: 'transparent',
		hoverBackground: 'rgba(232, 222, 248, 0.08)',
		activeBackground: 'rgba(232, 222, 248, 0.12)',
	};

	return (
		<div
			className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="crumb-container">
				<Img SvgIconComponent={Select} onClick={() => onPopupToggle(section)} />

				<Button
					{...crumbButtonStyleProps}
					link={selectedId ? `/catalog/section/${selectedId}` : ''}
				>
					{selectedTitle}
				</Button>

				{isOpen && (
					<Popup
						isProductSection={isProductSection}
						sectionItems={sectionItems}
					/>
				)}
			</div>
		</div>
	);
};

export const Crumb = styled(CrumbContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border: 1px solid #938f99;

	&:last-of-type {
		border-radius: 0 100px 100px 0;
	}

	& div.crumb-container {
		position: relative;
		display: flex;
		flex: 1 0 0;
		justify-content: center;
		align-items: center;
		gap: 8px;
		padding: ${({ selectedId }) => (selectedId ? '0 54px 0 24px' : '0 24px')};

		& svg {
			width: 18px;
			height: 18px;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
