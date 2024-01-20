import { Guide } from '../../widgets/guide/guide';
import { CatalogLayout } from './layouts';
import styled from 'styled-components';

const CatalogContainer = ({ className }) => {
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
