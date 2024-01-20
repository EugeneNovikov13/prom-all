import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetBreadcrumbs } from '../../store/reducers';
import { Guide } from '../../widgets/guide/guide';
import { CatalogLayout } from './layouts';
import styled from 'styled-components';

const CatalogContainer = ({ className }) => {
	const needToResetBreadcrumbs = useMatch('/catalog');
	const dispatch = useDispatch();

	useEffect(() => {
		//сбрасываем Breadcrumbs после монтирования компонента
		if (needToResetBreadcrumbs) {
			dispatch(resetBreadcrumbs());
		}
	}, [dispatch, needToResetBreadcrumbs]);

	return (
		<div className={className}>
			<CatalogLayout />
			<Guide />
		</div>
	);
};

export const Catalog = styled(CatalogContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
