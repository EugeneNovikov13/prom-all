import { useMatch } from 'react-router-dom';
import { H1 } from '../../../components';
import { Breadcrumbs } from '../../../widgets';
import styled from 'styled-components';

const CatalogHeaderContainer = ({ className }) => {
	const isSearch = useMatch('/catalog/search');

	return (
		<section className={className} id="catalog-header">
			<div className="catalog-header-container">
				<div className="catalog-header-title">
					<H1 color={'var(--white)'}>{isSearch ? 'Поиск' : 'Каталог'}</H1>
				</div>
				<Breadcrumbs />
			</div>
		</section>
	);
};

export const CatalogHeader = styled(CatalogHeaderContainer)`
	max-width: 100%;
	display: flex;
	padding: 80px 10px 40px;
	flex-direction: column;
	align-items: center;
	align-self: stretch;
	background: var(--dark);

	& div.catalog-header-container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 40px;
		padding: 0 36px;

		@media (max-width: 600px) {
			padding: 0;
		}

		& div.catalog-header-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
		}
	}
`;
