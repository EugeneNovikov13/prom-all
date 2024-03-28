import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDebounce } from 'hooks';
import { useSetBreadcrumbsById } from './hooks';
import { sliceCurrentBreadcrumbs } from 'utils';
import { useSelector } from 'react-redux';
import { selectBreadcrumbs, selectCountSections } from 'store/reducers';
import { Crumb } from './components/crumb';
import { BreadcrumbsFirstItem } from './components/breadcrumbs-first-item';
import { SETTINGS } from 'settings';
import styled from 'styled-components';

interface BreadcrumbsProps {
	className?: string;
}

const BreadcrumbsContainer: FC<BreadcrumbsProps> = ({ className }) => {
	//устанавливаем Breadcrumbs в соответствии с id в адресной строке
	const [openedCrumb, setOpenedCrumb] = useState<string>('');

	const params = useParams();
	const id = params.id;

	const { setBreadcrumbsById } = useSetBreadcrumbsById();

	useEffect(() => {
		setBreadcrumbsById(id);
		setOpenedCrumb('');
	}, [id, setBreadcrumbsById]);
	////

	//обработчики открытия-закрытия меню breadcrumbs
	let refCrumbsLeaveDebounceTimeout = useRef<NodeJS.Timeout>();

	const onMouseEnter = (isOpenedCrumb: boolean) => {
		if (isOpenedCrumb) {
			clearTimeout(refCrumbsLeaveDebounceTimeout.current);
		}
	};

	const onMouseLeave = () => {
		setOpenedCrumb('');
	};

	const debouncedOnMouseLeave = useDebounce(
		refCrumbsLeaveDebounceTimeout,
		onMouseLeave,
		SETTINGS.BREADCRUMBS_MENU_CLOSE_DELAY,
	);

	const onPopupToggle = (section: string) => {
		clearTimeout(refCrumbsLeaveDebounceTimeout.current);
		if (section === openedCrumb) {
			setOpenedCrumb('');
			return;
		}
		setOpenedCrumb(section);
	};
	//

	//получаем массив  выбранных breadcrumbs из объекта breadcrumbs в store
	const countSections = useSelector(selectCountSections);
	const breadcrumbs = useSelector(selectBreadcrumbs);

	const currentBreadcrumbs = sliceCurrentBreadcrumbs(countSections, breadcrumbs);
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

	@media (max-width: 1200px) {
		max-width: 86vw;
		overflow-x: scroll;

		& svg {
			display: none;
		}
	}

	@media (max-device-height: 719px), (max-device-width: 500px) {
		max-width: 94vw;
		overflow-x: scroll;
	}


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
`;
