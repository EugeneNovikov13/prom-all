import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSubsectionsBySectionId } from '../../utils';
import { ProductCard } from '../../features';
import { Img } from '../../components';
import { ProductCardContent } from '../../features/product-card/components/product-card-content';
import styled from 'styled-components';

const CardsContainer = ({ className }) => {
	const productCards = useSelector(state => state.catalogReducer.productCards);

	const params = useParams();

	const subsections = getSubsectionsBySectionId(params.id);

	const cards = subsections ? subsections : productCards || [];

	return (
		<div className={className}>
			<div className="cards-container">
				{cards.map(({ id, title, image }) => (
					<Link
						to={
							!subsections
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
			justify-content: space-evenly;
		}

		@media (max-width: 600px) {
			justify-content: space-evenly;
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
