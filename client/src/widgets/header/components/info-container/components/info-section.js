import { Icon } from '../../../../../components';
import styled from 'styled-components';

const InfoSectionContainer = ({ className, name, text, title, iconURL, href }) => {
	return (
		<div className={className} title={title} data-name={name}>
			<a className="icon-container" href={href}>
				<div className="icon-wrapper">
					<Icon width="24px" iconSrc={iconURL} isActive={true} />
				</div>
			</a>
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
	transition: 0.5s;

	&[data-name='accessTime'] {
		@media (max-width: 1200px) {
			display: none;
		}
	}

	&[data-name='contacts'] span {
		@media (max-width: 1000px) {
			display: none;
		}
	}

	@media (max-width: 800px) {
		padding: 0;
	}

	& a.icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		background: rgba(255, 255, 255, 0.16);
		box-shadow:
			0 1px 3px 0 rgba(0, 0, 0, 0.3),
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
