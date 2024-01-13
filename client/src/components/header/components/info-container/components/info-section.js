import { copyTextToClipboard } from '../../../../../utils';
import { Icon } from '../../../../icon/icon';
import styled from 'styled-components';

const InfoSectionContainer = ({ className, text, title, iconURL }) => {
	return (
		<div
			className={className}
			title={`${title}Нажмите, чтобы скопировать.`}
			onClick={() => copyTextToClipboard(text)}
		>
			<div className="icon-container">
				<div className="icon-wrapper">
					<Icon width="24px" iconSrc={iconURL} isActive={true} />
				</div>
			</div>
			<span>{text}</span>
		</div>
	);
};

export const InfoSection = styled(InfoSectionContainer)`
	height: 52px;
	display: flex;
	padding: 10px 16px 10px 12px;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	border-radius: 50px;
	background: rgba(23, 23, 23, 1);
	transition: 0.5s;

	& div.icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		background: rgba(255, 255, 255, 0.16);
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3),
		0 4px 8px 3px rgba(0, 0, 0, 0.15);
		transition: 0.5s;

		& div.icon-wrapper {
			display: flex;
			padding: 12px;
			justify-content: center;
			align-items: center;
		}
	}

	&:hover {
		cursor: pointer;
	}

	&:hover div.icon-container {
		background: rgba(255, 255, 255, 0.08);
		transition: 0.5s;
	}

	&:active div.icon-container {
		transform: scale(0.6);
	}

	& span {
		color: var(--white);
		text-align: center;
		white-space: nowrap;
		font-family: Inter, sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0.1px;
	}
`;
