import { useSelector } from 'react-redux';
import { ProductCard } from '../../features';
import styled from 'styled-components';

const CardsContainer = ({ className }) => {
	const cards = useSelector(state => state.catalogReducer.cards) || [];

	return (
		<section className={className}>
			<div className="cards-container">
				{cards.map(({ id, title, image }) => (
					<ProductCard
						key={id}
						id={id}
						title={title}
						image={image}
						onClick={Function.prototype}
					/>
				))}
			</div>
		</section>
	);
};

export const Cards = styled(CardsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 1 0 0;
	align-self: stretch;
	overflow: visible;

	& div.cards-container {
		display: flex;
		align-items: flex-start;
		align-content: flex-start;
		gap: 16px 8px;
		flex: 1 0 0;
		align-self: stretch;
		flex-wrap: wrap;
	}
`;
