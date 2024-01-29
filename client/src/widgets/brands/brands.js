import { useFetchAllBrandsQuery } from '../../store/services';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { H1, Loader } from '../../components';
import { BrandCard, Button } from '../../features';
import { SETTINGS } from '../../settings';
import styled from 'styled-components';

const BrandsContainer = ({ className }) => {
	const { data: brands, isLoading } = useFetchAllBrandsQuery();

	return (
		<section className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<div className="brands-container">
					<div className="brands-header">
						<H1>Бренды</H1>
					</div>
					<div className="brands-slider">
						<Splide
							aria-label="Партнёры"
							options={SETTINGS.BRAND_SLIDER_CONFIG}
						>
							{brands.map(({ id, title, logo, isOfficial }) => (
								<SplideSlide key={id}>
									<BrandCard
										title={title}
										logo={logo}
										isOfficial={isOfficial}
									/>
								</SplideSlide>
							))}
						</Splide>
					</div>
					<div className="brands-footer">
						<Button
							link="/about#top"
							width="360px"
							border="2px solid var(--dark)"
							background={'inherit'}
							activeBackground="#79747E"
						>
							Подробнее
						</Button>
					</div>
				</div>
			)}
		</section>
	);
};

export const Brands = styled(BrandsContainer)`
	display: flex;
	width: 100%;
	height: 800px;
	padding: 140px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
	flex-shrink: 0;
	background-color: var(--light);

	& div.brands-container {
		display: flex;
		max-width: 1200px;
		padding-bottom: 40px;
		flex-direction: column;
		align-items: center;
		gap: 32px;

		& div.brands-header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			align-self: stretch;
			padding: 0 26px;
		}

		& div.brands-slider {
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 1180px;
			height: 182px;

			& .splide__arrow--prev {
				@media (min-width: 460px) {
					left: -10px;
				}
			}

			& .splide__arrow--next {
				@media (min-width: 460px) {
					right: -10px;
				}
			}

			& .splide__arrow {
				top: 43%;
			}
		}

		& div.brands-footer {
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
