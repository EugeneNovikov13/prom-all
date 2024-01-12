import { Icon } from '../../icon/icon';
import cell from '../assets/cell.svg';
import email from '../assets/email.svg';
import location from '../assets/location.svg';
import styled from 'styled-components';

const InformationContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="phone wrapper">
				<Icon width="18px" iconSrc={cell} />
				<span>+7 (473) 247-00-80</span>
			</div>
			<div className="emails wrapper">
				<Icon width="18px" iconSrc={email} />
				<div className="emails-list">
					<span>office@prom-all.ru</span>
					<span>info@prom-all.com</span>
					<span>info@prom-all.ru</span>
				</div>
			</div>
			<div className="address wrapper">
				<Icon width="18px" iconSrc={location} />
				<span>Россия, г. Воронеж, ул. Красных Зорь, 38</span>
			</div>
		</div>
	);
};

export const Information = styled(InformationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	& div.wrapper {
		display: flex;
		align-items: center;
		align-self: stretch;
		padding: 10px 16px 10px 12px;
		gap: 8px;

		& span {
			color: var(--white, #fff);
			font-family: Inter, sans-serif;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
		}
	}

	& div.emails-list {
		display: flex;
		flex-direction: column;
	}

	& div.phone span {
		font-size: 20px;
		line-height: 28px;
	}
`;
