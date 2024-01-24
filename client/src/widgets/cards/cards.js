import { useSelector } from 'react-redux';
import { ProductCard } from '../../features';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Img } from '../../components';
import { ProductCardContent } from '../../features/product-card/components/product-card-content';

const CardsContainer = ({ className }) => {
	const cards = useSelector(state => state.catalogReducer.cards) || [];
	const isProductCards = useSelector(state => state.catalogReducer.isProductCards);

	return (
		<div className={className}>
			<div className="cards-container">
				{cards.map(({ id, title, image }) => (
					<Link
						to={
							isProductCards
								? `/catalog/product/${id}`
								: `/catalog/section/${id}`
						}
						key={id}
					>
						<ProductCard
							id={id}
							title={title}
							image={image}
							onClick={Function.prototype}
						>
							<Img
								iconClassName="product-card-icon"
								image={image}
								maxWidth="217px"
								maxHeight="150px"
							/>
							<ProductCardContent title={title} />
						</ProductCard>
					</Link>
				))}
			</div>
		</div>
	);
};

export const Cards = styled(CardsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 4 4 834px;
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

		@media screen and (max-device-height: 1000px) {
			justify-content: center;
		}

		& a {
			max-width: 202px;

			@media screen and (max-device-height: 1000px) {
				max-width: 160px;
			}

			& div:first-of-type {
				min-width: 202px;
				height: 268px;
				padding-top: 27px;

				@media screen and (max-device-height: 1000px) {
					min-width: 160px;
					height: 265px;
					padding-top: 12px;
				}
			}

			& img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}

			& div.product-card-title {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 8px;
				align-self: stretch;
				padding: 12px;

				& h4 {
					font-size: 16px;
					font-weight: 700;
					line-height: 20px;
					letter-spacing: -1px;
					text-align: left;
				}
			}
		}
	}
`;
