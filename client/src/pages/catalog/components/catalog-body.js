import { Outlet, useMatch } from 'react-router-dom';
import { Categories } from '../../../widgets';
import styled from 'styled-components';

const CatalogBodyContainer = ({ className }) => {
	const isCatalogRoot = useMatch('/catalog');

	return (
		<section className={className}>
			<div className="catalog-body-container">
				{isCatalogRoot ? <Categories /> : <Outlet />}
			</div>
		</section>
	);
};

export const CatalogBody = styled(CatalogBodyContainer)`
	max-width: 100%;
	display: flex;
	padding: 40px 10px;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
	background: #f4f6fa;

	& div.catalog-body-container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		align-items: flex-start;
		gap: 24px;
	}
`;
