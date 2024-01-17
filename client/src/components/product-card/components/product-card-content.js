import styled from 'styled-components';
import { H4 } from '../../h4/h4';

const ProductCardContentContainer = ({ className, SvgIconComponent, image, title }) => {
	return (
		<div className={className}>
			<div className="product-card-image">
				{SvgIconComponent ? (
					<SvgIconComponent className="product-card-icon" />
				) : (
					<img src={image} alt="Ошибка загрузки картинки" />
				)}
			</div>
			<div className="product-card-title">
				<H4>{title}</H4>
			</div>
		</div>
	);
};

export const ProductCardContent = styled(ProductCardContentContainer)`
	display: flex;
	max-height: 217px;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;

	& div.product-card-image {
		max-width: 217px;
		max-height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;

		& svg.product-card-icon * {
			transition: 0.3s;
		}

		& svg.product-card-icon:hover * {
			stroke: var(--brand-orange);
		}
	}

	& div.product-card-title {
		display: flex;
		height: 68px;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 20px 16px 0 12px;
		text-align: center;
	}
`;
