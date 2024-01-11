import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuLink } from '../../../search/components/menu-link';
import { navigationMenu } from '../../../../constants';
import { getRouteFromFullLocation } from '../../../../utils';
import styled from 'styled-components';

const NavigationMenuContainer = ({ className }) => {
	const location = useLocation();
	const currentLocation = getRouteFromFullLocation(location.pathname);
	const [currentRoute, setCurrentRoute] = useState(currentLocation);

	const onChangeCurrentRoute = link => {
		setCurrentRoute(link);
	};

	return (
		<nav className={className}>
			<ul>
				{navigationMenu.map(({ title, link }) => (
						<MenuLink
							key={title}
							title={title}
							link={link}
							isActive={link === currentRoute}
							onClick={onChangeCurrentRoute}
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
		margin: 0;
		padding: 0;
	}
`;
