import { Icon } from '../../../components';
import { ReactComponent as cell } from '../assets/cell.svg';
import { ReactComponent as email } from '../assets/email.svg';
import { ReactComponent as location } from '../assets/location.svg';
import { SETTINGS } from '../../../settings';
import styled from 'styled-components';
import { FC } from 'react';

interface InformationProps {
	className?: string;
}

const InformationContainer: FC<InformationProps> = ({ className }) => {
	return (
		<div className={className}>
			<div className="phone wrapper">
				<Icon width="18px" iconSrc={cell} />
				<span>{SETTINGS.ORGANIZATION_DATA.phone}</span>
			</div>
			<div className="emails wrapper">
				<Icon width="18px" iconSrc={email} />
				<div className="emails-list">
					{SETTINGS.ORGANIZATION_DATA.email.map(item => (
						<span key={item}>{item}</span>
					))}
				</div>
			</div>
			<div className="address wrapper">
				<Icon width="18px" iconSrc={location} />
				<span>{SETTINGS.ORGANIZATION_DATA.officeAddress}</span>
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
			color: var(--white);
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
