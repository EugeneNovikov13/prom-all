import { InfoSection } from './components/info-section';
import { informationMenu } from '../../../../constants/information-menu';
import styled from 'styled-components';

const InfoContainerContainer = ({ className }) => {
	return (
		<div className={className}>
			{informationMenu.map(({text, title, iconURL}, ind) => (
				<InfoSection key={ind} text={text} title={title} iconURL={iconURL}/>
			))}
		</div>
	);
};

export const InfoContainer = styled(InfoContainerContainer)`
	display: flex;
	align-items: center;
	gap: 16px;
`;
