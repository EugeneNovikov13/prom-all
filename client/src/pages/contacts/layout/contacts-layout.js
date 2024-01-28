import { ContactsData } from '../components/contacts-data';
import { MapIFrame } from '../../../widgets';
import { SETTINGS } from '../../../settings';
import styled from 'styled-components';

const ContactsLayoutContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="contacts-container">
				<div className="office-contacts">
					<ContactsData />
					<div className="office-map-container">
						<MapIFrame
							title={'Расположение офиса'}
							width={'100%'}
							height={462}
							src={SETTINGS.OFFICE_MAP_SRC}
						/>
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

		& div.office-contacts {
			flex: 1 0 0;
			display: flex;
			max-width: 1128px;
			align-items: flex-start;
			gap: 100px;

			@media (max-width: 800px) {
				flex-direction: column;
			}

			& div.office-map-container {
				width: 100%;
				flex: 1 0 0;
			}
		}
	}
`;
