import { Button } from '../../../../features';
import { InfoSection } from './components/info-section';
import { Img } from '../../../../components';
import { ReactComponent as Account } from '../../assets/account.svg';
import { informationMenu } from '../../constants/information-menu';
import styled from 'styled-components';

const InfoContainerContainer = ({ className }) => {
	return (
		<div className={className}>
			{informationMenu.map(({ name, text, title, iconURL, href }, ind) => (
				<InfoSection
					key={ind}
					name={name}
					text={text}
					title={title}
					iconURL={iconURL}
					href={href}
				/>
			))}
			<Button
				link="/registration"
				width="130px"
				height="48px"
				justifyContent="space-evenly"
				fontSize="20px"
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				<Img SvgIconComponent={Account} maxWidth="20px" />
				<span>Кабинет</span>
			</Button>
		</div>
	);
};

export const InfoContainer = styled(InfoContainerContainer)`
	display: flex;
	align-items: center;
	gap: 0;

	@media (max-width: 1000px) {
		gap: 8px;
	}
`;
