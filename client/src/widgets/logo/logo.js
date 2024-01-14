import styled from 'styled-components';
import icon from './assets/icon.svg';
import title from './assets/title.svg';

const LogoContainer = ({ className }) => {
	return (
		<div className={className}>
			<img src={icon} alt="П/А" />
			<img className="title" src={title} alt="ПРОМЫШЛЕННЫЙ АЛЬЯНС" />
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 6px;
	padding: 2px 0;

	& :hover {
		cursor: pointer;
	}
`;
