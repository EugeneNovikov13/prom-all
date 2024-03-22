import { MenuLink } from './components/menu-link';
import { menuList } from '../../constants/menu-list';
import styled from 'styled-components';

const NavigationMenuContainer = ({ className, location }) => {
	return (
		<nav className={className} >
			<ul>
				{menuList.map(({ title, link }) => (
					<MenuLink
						key={title}
						title={title}
						link={link}
						isActive={link === location}
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
