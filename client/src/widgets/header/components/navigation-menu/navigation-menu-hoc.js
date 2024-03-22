import { useLocation } from 'react-router-dom';
import { getRouteFromFullLocation } from '../../../../utils';
import { NavigationMenu } from './navigation-menu';

export const NavigationMenuHoc = () => {
	const location = useLocation();
	const currentLocation = getRouteFromFullLocation(location.pathname);

	return <NavigationMenu location={currentLocation} />;
};
