import { H1 } from '../../../components';
import { Button } from '../../../features';
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
				<div className="categories-footer">
					<Button
						link="/catalog"
						width="360px"
						border="2px solid var(--dark, #111)"
						background={'inherit'}
						activeBackground="#79747E"
					>
						Подробнее
					</Button>
				</div>
			</div>
		</section>
	);
};

export const CategoriesLayout = styled(CategoriesLayoutContainer)`
	display: flex;
	max-width: 100%;
	min-height: 1198px;
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

		& div.categories-footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 100px;

			&:hover {
				background-color: rgba(103, 80, 164, 0.08);
			}
		}
	}
`;
