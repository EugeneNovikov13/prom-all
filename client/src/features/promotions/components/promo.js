import { Button, H2 } from '../../../components';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const PromoContainer = ({ className, title, content }) => {
	return (
		<div className={className}>
			<div className="promo-body">
				<div className="promo-title">
					<H2 color="var(--white)">{title}</H2>
				</div>
				<div
					className="promo-content"
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
				<div className="promo-button">
					<HashLink smooth to={'/#quick_application_section'}>
						<Button
							width="300px"
							height="48px"
							fontSize="20px"
							backgroundColor="var(--brand-orange)"
						>
							Купить
						</Button>
					</HashLink>
				</div>
			</div>
		</div>
	);
};

export const Promo = styled(PromoContainer)`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	background:
		linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
		url(${({ background }) => background}),
		lightgray 50% / cover no-repeat;
	background-size: cover;
	background-position: center;

	& div.promo-body {
		display: flex;
		max-width: 1200px;
		padding: 0 36px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 48px;
		align-self: stretch;

		& div.promo-title {
			max-height: 30vh;
			overflow: hidden;
		}

		& div.promo-content {
			max-width: 800px;
			max-height: 26vh;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;

			color: var(--white);
			text-align: left;
			font-family: Inter, sans-serif;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
		}

		& div.promo-button {
			display: flex;
			flex-direction: column;
			width: 300px;
		}
	}
`;
