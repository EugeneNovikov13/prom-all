import styled from 'styled-components';
import { Img } from '../../../components';
import { ReactComponent as Select } from '../assets/down-arrow.svg';
import { Button, Popup } from '../../../features';
import { useEffect, useState } from 'react';
import { capitalizeString, getSectionsByTitle } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { catalogSlice } from '../../../store/reducers';

const CrumbContainer = ({
	className,
	section,
	selectedId,
	selectedTitle,
	isOpen,
	setOpenedCrumb,
	onPopupToggle,
}) => {
	const [sectionItems, setSectionItems] = useState([]);
	const dispatch = useDispatch();
	const { breadcrumbs } = useSelector(state => state.catalogReducer);

	useEffect(() => {
		if (isOpen) {
			setSectionItems(getSectionsByTitle(section, breadcrumbs));
		}
	}, [breadcrumbs, isOpen, section]);

	const onPopupSectionClick = (itemId, itemTitle, sectionTitle) => {
		const payload = {
			selectedId: itemId,
			selectedTitle: itemTitle,
		};
		const action = `set${capitalizeString(sectionTitle)}`;
		dispatch(catalogSlice.actions[action](payload));
		setOpenedCrumb('');
	};

	const onCrumbClick = sectionTitle => {
		const action = `returnTo${capitalizeString(sectionTitle)}`;
		dispatch(catalogSlice.actions[action]());
		setOpenedCrumb('');
	};

	return (
		<div className={className}>
			<div className="crumb-container">
				<Img SvgIconComponent={Select} onClick={() => onPopupToggle(section)} />
				<Button
					link={selectedId ? `/catalog/section/${selectedId}` : ''}
					width="calc(100% + 30px)"
					height="32px"
					borderRadius="100px"
					fontSize="14px"
					color={'#E6E0E9'}
					background={'transparent'}
					hoverBackground={'rgba(232, 222, 248, 0.08)'}
					activeBackground={'rgba(232, 222, 248, 0.12)'}
					isDisable={!selectedId}
					onClick={() => onCrumbClick(section)}
				>
					{selectedTitle}
				</Button>
				{isOpen && (
					<Popup>
						{sectionItems.map(({ id, title }) => (
							<div key={id} className="popup-item-container">
								<Button
									link={`/catalog/section/${id}`}
									justifyContent="flex-start"
									width="100%"
									height="40px"
									borderRadius="0"
									fontSize="14px"
									color={'#E6E0E9'}
									background={'transparent'}
									onClick={() =>
										onPopupSectionClick(id, title, section)
									}
								>
									<span>{title}</span>
								</Button>
							</div>
						))}
					</Popup>
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

		& div.popup-item-container {
			width: 100%;
			height: 40px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0;

			&:not(:last-of-type) {
				border-bottom: 1px solid #f8eede;
			}

			&:last-of-type {
				border-radius: 0 0 20px 20px;
			}

			&:hover {
				background: rgba(232, 222, 248, 0.08);
			}

			&:active {
				background: rgba(232, 222, 248, 0.12);
			}

			& a {
				width: 100%;
			}

			& span {
				padding: 0 10px;
				text-align: left;
			}
		}
	}
`;
