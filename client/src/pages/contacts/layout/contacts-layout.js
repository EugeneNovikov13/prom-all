import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ContactsData } from '../components/contacts-data';
import { H2 } from '../../../components';
import { MapIFrame } from '../../../widgets';
import { SETTINGS } from '../../../settings';
import { mapsConfig } from '../constants/maps-config';
import styled from 'styled-components';

const ContactsLayoutContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="contacts-container">
				<div className="organization-contacts">
					<ContactsData />
					<div className="map-container">
						<Splide
							aria-label="Карта проезда"
							options={SETTINGS.MAP_SLIDER_CONFIG}
						>
							{mapsConfig.map(({ title, width, height, src }) => (
								<SplideSlide key={title}>
									<H2>{title}</H2>
									<MapIFrame
										title={title}
										width={width}
										height={height}
										src={src}
									/>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>
			</div>
		</section>
	);
};

export const ContactsLayout = styled(ContactsLayoutContainer)`
	max-width: 100%;
	display: flex;
	padding: 80px 10px;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background: #f4f6fa;

	& div.contacts-container {
		max-width: 1200px;
		width: 100%;
		display: flex;
		align-items: flex-start;
		gap: 30px;
		padding: 0 36px;

		@media (max-width: 450px) {
			padding: 0;
		}

		& div.organization-contacts {
			flex: 1 0 0;
			display: flex;
			max-width: 1128px;
			align-items: flex-start;
			gap: 100px;

			@media (max-width: 800px) {
				flex-direction: column;
			}

			& div.map-container {
				max-width: 514px;
				width: 100%;
				flex: 1 0 0;

				& h2 {
					text-align: center;
					margin-bottom: 12px;
					background: #f4f6fa;
				}

				& .splide__arrow {
					transform: scale(1.4) translateY(-190px);
				}
			}
		}
	}
`;
