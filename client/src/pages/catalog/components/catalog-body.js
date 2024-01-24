import { useMatch } from 'react-router-dom';
import { Cards, Categories, SideMenu } from '../../../widgets';
import styled from 'styled-components';
import { useState } from 'react';

const CatalogBodyContainer = ({ className }) => {
	const [isOpen, setIsOpen] = useState(true);
	const isCatalogRoot = useMatch('/catalog');

	return (
		<section className={className}>
			<div className="catalog-body-container">
				{isCatalogRoot ? (
					<Categories />
				) : (
					<div
						className={
							isOpen
								? 'catalog-body-subcategories'
								: 'side-menu__closed catalog-body-subcategories'
						}
					>
						<SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
						<Cards />
					</div>
				)}
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

		& div.catalog-body-subcategories {
			position: relative;
			max-width: 1200px;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			gap: 24px;
			padding: 0 36px;
			align-self: stretch;

			@media screen and (max-device-height: 1000px) {
				padding: 0;
			}

			&.side-menu__closed {
				flex-direction: column;
			}
		}
	}
`;
