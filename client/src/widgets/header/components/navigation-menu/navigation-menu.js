import { forwardRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuLink } from './components/menu-link';
import { getRouteFromFullLocation } from '../../../../utils';
import { menuList } from '../../constants/menu-list';
import styled from 'styled-components';

const NavigationMenuContainer = forwardRef(({ className }, ref) => {
	const location = useLocation();
	const currentLocation = getRouteFromFullLocation(location.pathname);
	const [currentRoute, setCurrentRoute] = useState(currentLocation);

	if (currentLocation !== currentRoute) {
		setCurrentRoute(currentLocation);
	}

	return (
		<nav className={className} ref={ref}>
			<ul>
				{menuList.map(({ title, link }) => (
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
});

export const NavigationMenu = styled(NavigationMenuContainer)`
	flex: 5 0 0;

	& ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 5px;
		margin: 0;
		padding: 0;
		overflow: hidden;

		@media screen and (max-width: 630px) {
			gap: 5px 10px;
		}
	}
`;
