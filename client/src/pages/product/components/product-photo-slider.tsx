import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Img } from 'components';
import { SETTINGS } from 'settings';
import styled from 'styled-components';
import { FC } from 'react';
import { IImage } from 'types';

interface ProductPhotoSliderProps {
	className?: string,
	images: IImage[];
}

const ProductPhotoSliderContainer: FC<ProductPhotoSliderProps> = ({ className, images }) => {
	return (
		<div className={className}>
			<Splide aria-label="Фото товара" options={SETTINGS.PRODUCT_SLIDER_CONFIG}>
				{images.map(({ id, image }) => (
					<SplideSlide key={id}>
						<Img image={image} />
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};

export const ProductPhotoSlider = styled(ProductPhotoSliderContainer)`
	flex: 1 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;

	& button.splide__arrow {
		transform: scale(1.2) translateY(-50%);
	}

	& li {
		display: flex;
		justify-content: center;
		align-items: center;

		& img {
			width: 352px;
			height: auto;

			@media (max-width: 610px) {
				width: 288px;
			}

			@media (max-width: 500px) {
				width: 225px;
			}
		}
	}
`;
