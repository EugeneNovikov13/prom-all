import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import { getCurrentBreadcrumbs, setBreadcrumbsById } from '../../utils';
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
		setBreadcrumbsById(
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
			<li className="breadcrumbs-item">
				{currentBreadcrumbs.map(
					([section, { selectedId, selectedTitle }], index) => (
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
					),
				)}
			</li>
		</ol>
	);
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
	max-width: 1128px;
	height: 40px;
	display: flex;
	align-items: center;
	align-self: stretch;
	margin: 0;
	padding: 0;
	user-select: none;

	& li.breadcrumbs-item {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
`;
