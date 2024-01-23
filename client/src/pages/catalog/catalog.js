import { Guide } from '../../widgets/guide/guide';
import { CatalogBody, CatalogHeader } from './components';
import styled from 'styled-components';

const CatalogContainer = ({ className }) => {
	return (
		<main className={className}>
			<CatalogHeader />
			<CatalogBody />
			<Guide />
		</main>
	);
};

export const Catalog = styled(CatalogContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
