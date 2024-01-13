import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuLink } from './components/menu-link';
import { navigationMenu } from '../../../../constants';
import { getRouteFromFullLocation } from '../../../../utils';
import styled from 'styled-components';

const NavigationMenuContainer = ({ className }) => {
	const location = useLocation();
	const currentLocation = getRouteFromFullLocation(location.pathname);
	const [currentRoute, setCurrentRoute] = useState(currentLocation);

	if (currentLocation !== currentRoute) {
		setCurrentRoute(currentLocation);
	}

	return (
		<nav className={className}>
			<ul>
				{navigationMenu.map(({ title, link }) => (
					<MenuLink
						key={title}
						title={title}
						link={link}
						isActive={link === currentRoute}
					/>
				))}
			</ul>
		</nav>
	);
};

export const NavigationMenu = styled(NavigationMenuContainer)`
	flex: 5 0 0;

	& ul {
		display: flex;
		justify-content: space-around;
		gap: 5px;
		margin: 0;
		padding: 0;
	}
`;
