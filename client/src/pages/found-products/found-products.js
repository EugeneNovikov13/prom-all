import { Link, useSearchParams } from 'react-router-dom';
import { useFetchProductByTitleQuery } from '../../store/services';
import { ProductCard } from '../../features';
import { Error, H2, Img, Loader, ServerMessage } from '../../components';
import { ProductCardContent } from '../../features/product-card/components/product-card-content';
import styled from 'styled-components';

const FoundProductsContainer = ({ className }) => {
	const [searchParams] = useSearchParams();
	const title = searchParams.get('title');

	const { data: products, isLoading, error } = useFetchProductByTitleQuery(title);

	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{products && <H2>Поиск по строке « {title} »:</H2>}
					<div className="cards-container">
						{error ? (
							<Error>
								<ServerMessage isError={true}>{error.data}</ServerMessage>
							</Error>
						) : (
							products.map(({ id, title, image }) => (
								<Link to={`/catalog/product/${id}`} key={id}>
									<ProductCard >
										<Img
											iconClassName="product-card-icon"
											image={image}
											maxWidth="217px"
											maxHeight="150px"
										/>
										<ProductCardContent title={title} />
									</ProductCard>
								</Link>
							))
						)}
					</div>
				</>
			)}
		</div>
	);
};

export const FoundProducts = styled(FoundProductsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;
	overflow: visible;
	padding: 0 36px;

	@media (max-width: 600px) {
		padding: 0;
	}

	& div.cards-container {
		display: flex;
		align-items: flex-start;
		align-content: flex-start;
		gap: 16px 10px;
		flex: 1 0 0;
		flex-wrap: wrap;

		@media screen and (max-device-height: 1000px) {
			justify-content: space-evenly;
		}

		@media (max-width: 600px) {
			justify-content: space-evenly;
		}

		& a {
			max-width: 230px;
			flex: 1;

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
`;
