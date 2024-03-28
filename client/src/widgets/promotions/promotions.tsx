import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useFetchAllPromoQuery } from '../../store/services';
import { Loader } from 'components';
import { Promo } from './components/promo';
import { SETTINGS } from 'settings';
import styled from 'styled-components';

interface PromotionsProps {
	className?: string;
}

const PromotionsContainer: FC<PromotionsProps> = ({ className }) => {
	const { data: promos, isLoading } = useFetchAllPromoQuery('');

	return (
		<section className={className}>
			{isLoading ? (
				<Loader />
			) : (
				<Splide aria-label="Промо-акции" options={SETTINGS.PROMO_SLIDER_CONFIG}>
					{promos && promos.map(({ id, title, content, background }) => (
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
		</section>
	);
};

export const Promotions = styled(PromotionsContainer)`
	ul.splide__pagination {
		display: flex;
		gap: 5px;
		padding-bottom: 10px;
	}
`;
