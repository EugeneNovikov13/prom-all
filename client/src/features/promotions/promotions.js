import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useFetchAllPromoQuery } from '../../store/services';
import { Loader } from '../../widgets';
import { Promo } from './components/promo';
import { promoSliderConfig } from '../../settings';
import styled from 'styled-components';

const PromotionsContainer = ({ className }) => {
	const { data: promos, isLoading } = useFetchAllPromoQuery();

	return (
		<div className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<Splide
					aria-label="Промо-акции"
					tag="section"
					options={promoSliderConfig}
				>
					{promos.map(({ id, title, content, background }) => (
						<SplideSlide key={id}>
							<Promo
								title={title}
								content={content}
								background={background}
							/>
						</SplideSlide>
					))}
				</Splide>
			)}
		</div>
	);
};

export const Promotions = styled(PromotionsContainer)``;
