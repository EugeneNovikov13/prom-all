import { H1 } from '../../../components';
import { Categories } from '../../../widgets';
import styled from 'styled-components';

const CategoriesLayoutContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="categories-container">
				<div className="categories-header">
					<H1>Каталог товаров</H1>
				</div>
				<Categories />
			</div>
		</section>
	);
};

export const CategoriesLayout = styled(CategoriesLayoutContainer)`
	display: flex;
	max-width: 100%;
	min-height: 1092px;
	padding: 140px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--beige);

	& div.categories-container {
		display: flex;
		max-width: 1200px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;

		& div.categories-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			margin: 0 36px;
		}
	}
`;
