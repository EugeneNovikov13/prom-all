import styled from 'styled-components';
import { H1 } from '../../../components';
import { Breadcrumbs, Categories } from '../../../widgets';

const CatalogLayoutContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="catalog-container">
				<div className="catalog-header">
					<div className="catalog-header-title">
						<H1 color={'var(--white)'}>Каталог</H1>
					</div>
					<Breadcrumbs />
				</div>
				<Categories />
			</div>
		</section>
	);
};

export const CatalogLayout = styled(CatalogLayoutContainer)`
	display: flex;
	width: 100%;
	padding: 102px 10px 120px;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	background: #070707;

	& div.catalog-container {
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 48px;
		//flex-shrink: 0;

		& div.catalog-header {
			display: flex;
			max-width: 100%;
			flex-direction: column;
			align-items: flex-start;
			gap: 40px;
			align-self: stretch;
			padding: 0 36px;

			& div.catalog-header-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				align-self: stretch;
			}
		}
	}
`;
