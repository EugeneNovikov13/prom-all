import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import { asyncSetBreadcrumbsById, getCurrentBreadcrumbs } from '../../utils';
import { Crumb } from './components/crumb';
import { BreadcrumbsFirstItem } from './components/breadcrumbs-first-item';
import { SETTINGS } from '../../settings';
import styled from 'styled-components';

const BreadcrumbsContainer = ({ className }) => {
	//устанавливаем Breadcrumbs в соответствии с id в адресной строке
	const [openedCrumb, setOpenedCrumb] = useState('');

	const dispatch = useDispatch();

	const params = useParams();
	const id = params.id;

	const isOtherSectionSelected = useMatch('catalog/section/:id');
	const isProductSectionSelected = useMatch('catalog/product/:id');
	const needToResetBreadcrumbs = useMatch('/catalog');

	useEffect(() => {
		asyncSetBreadcrumbsById(
			dispatch,
			id,
			isOtherSectionSelected,
			isProductSectionSelected,
			needToResetBreadcrumbs,
		);
		setOpenedCrumb('');
	}, [
		dispatch,
		id,
		isOtherSectionSelected,
		isProductSectionSelected,
		needToResetBreadcrumbs,
	]);
	////

	//обработчики открытия-закрытия меню breadcrumbs
	let refCrumbsLeaveDebounceTimeout = useRef(null);

	const onMouseEnter = isOpenedCrumb => {
		if (isOpenedCrumb) {
			clearTimeout(refCrumbsLeaveDebounceTimeout.current);
		}
	};

	const onCrumbMouseLeave = () => {
		setOpenedCrumb('');
	};

	const debouncedOnMouseLeave = useDebounce(
		refCrumbsLeaveDebounceTimeout,
		onCrumbMouseLeave,
		SETTINGS.BREADCRUMBS_MENU_CLOSE_DELAY,
	);

	const onPopupToggle = section => {
		clearTimeout(refCrumbsLeaveDebounceTimeout.current);
		if (section === openedCrumb) {
			setOpenedCrumb('');
			return;
		}
		setOpenedCrumb(section);
	};
	//

	//получаем массив  выбранных breadcrumbs из объекта breadcrumbs в store
	const { countSections, breadcrumbs } = useSelector(state => state.catalogReducer);

	const currentBreadcrumbs = getCurrentBreadcrumbs(countSections, breadcrumbs);
	//

	return (
		<ol className={className}>
			<BreadcrumbsFirstItem />
			{currentBreadcrumbs.map(([section, { selectedId, selectedTitle }], index) => (
				<Crumb
					key={index}
					section={section}
					selectedId={selectedId}
					selectedTitle={selectedTitle}
					isOpen={openedCrumb === section}
					onPopupToggle={onPopupToggle}
					onMouseEnter={onMouseEnter}
					onMouseLeave={debouncedOnMouseLeave}
				/>
			))}
		</ol>
	);
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
	max-width: 1128px;
	height: 60px;
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	user-select: none;

	@media screen and (max-device-height: 1000px) {
		max-width: 340px;
		overflow-x: scroll;
	}

	@media screen and (max-width: 1200px) and (min-device-height: 1000px) {
		max-width: 86vw;
		overflow-x: scroll;

		&::-webkit-scrollbar {
			height: 7px; /* высота полосы прокрутки */
		}

		&::-webkit-scrollbar-track {
			background: #f1f1f1; /* Цвет фона трека */
		}

		&::-webkit-scrollbar-thumb {
			background: #888; /* Цвет полосы прокрутки */
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #555; /* Цвет полосы прокрутки при наведении */
		}

		& svg {
			display: none;
		}
	}
`;
