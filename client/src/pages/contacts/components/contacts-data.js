import { copyTextToClipboard } from '../../../utils';
import { H1, H4, Img } from '../../../components';
import { ReactComponent as Copy } from '../assets/copy.svg';
import { SETTINGS } from '../../../settings';
import styled from 'styled-components';

const ContactsDataContainer = ({ className }) => {
	const onClick = text => {
		copyTextToClipboard(text);
	};

	return (
		<div className={className}>
			<H1>Контакты</H1>
			<div className="phone-container">
				<H4>Телефоны</H4>
				<div className="data-item">
					<span>{`${SETTINGS.ORGANIZATION_DATA.phone} — многоканальный`}</span>
					<Img
						iconClassName="data-item-icon"
						SvgIconComponent={Copy}
						maxWidth="16px"
						onClick={() => onClick(SETTINGS.ORGANIZATION_DATA.phone)}
						hoverStrokeColor={'var(--brand-orange)'}
					/>
				</div>
			</div>
			<div className="email-container">
				<H4>Электронная почта</H4>
				{SETTINGS.ORGANIZATION_DATA.email.map(item => (
					<div className="data-item" key={item}>
						<span>{item}</span>
						<Img
							iconClassName="data-item-icon"
							SvgIconComponent={Copy}
							maxWidth="16px"
							onClick={() => onClick(item)}
							hoverStrokeColor="var(--brand-orange)"
						/>
					</div>
				))}
			</div>
			<div className="office-address-container">
				<H4>Адрес офиса</H4>
				<div className="data-item">
					<span>{SETTINGS.ORGANIZATION_DATA.officeAddress}</span>
					<Img
						iconClassName="data-item-icon"
						SvgIconComponent={Copy}
						maxWidth="16px"
						onClick={() => onClick(SETTINGS.ORGANIZATION_DATA.mailAddress)}
						hoverStrokeColor="var(--brand-orange)"
					/>
				</div>
			</div>
			<div className="stock-address-container">
				<H4>Адрес склада</H4>
				<div className="data-item">
					<span>{SETTINGS.ORGANIZATION_DATA.stockAddress}</span>
					<Img
						iconClassName="data-item-icon"
						SvgIconComponent={Copy}
						maxWidth="16px"
						onClick={() => onClick(SETTINGS.ORGANIZATION_DATA.mailAddress)}
						hoverStrokeColor="var(--brand-orange)"
					/>
				</div>
			</div>
			<div className="mail-container">
				<H4>Почтовый адрес</H4>
				<div className="data-item">
					<span>{SETTINGS.ORGANIZATION_DATA.mailAddress}</span>
					<Img
						iconClassName="data-item-icon"
						SvgIconComponent={Copy}
						maxWidth="16px"
						onClick={() => onClick(SETTINGS.ORGANIZATION_DATA.mailAddress)}
						hoverStrokeColor="var(--brand-orange)"
					/>
				</div>
			</div>
		</div>
	);
};

export const ContactsData = styled(ContactsDataContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	flex: 1 0 0;

	& h1 {
		font-size: 48px;
		line-height: 38px;
	}

	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
		align-self: stretch;

		& h4 {
			font-size: 24px;
			line-height: 32px;
		}

		& div.data-item {
			width: 100%;
			height: 20px;
			display: flex;
			align-items: center;
			gap: 20px;

			&:hover {
				& svg.data-item-icon {
					opacity: 1;
				}
			}

			& svg.data-item-icon {
				opacity: 0;
			}

			& span {
				color: rgba(0, 0, 0, 0.85);
				font-family: Inter, sans-serif;
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 20px;
			}
		}
	}
`;
