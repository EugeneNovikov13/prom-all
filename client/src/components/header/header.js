import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import styled from 'styled-components';
import { InfoContainer, NavigationMenu } from './components';
import { Search } from '../search/search';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="first-line">
				<div className="header-top-wrapper">
					<Link to="/">
						<Logo />
					</Link>
					<InfoContainer />
				</div>
			</div>
			<div className="second-line">
				<div className="header-bottom-wrapper">
					<NavigationMenu />
					<Search />
				</div>
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	display: flex;
	width: 100vw;
	height: 112px;
	flex-direction: column;
	align-items: center;
	background: var(--dark);
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	color: var(--white);

	& div.first-line {
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: #171717;

		& div.header-top-wrapper {
			display: flex;
			max-width: 1200px;
			padding: 0 36px;
			justify-content: space-between;
			align-items: center;
			flex: 1 0 0;
		}
	}

	& div.second-line {
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: #171717;

		& div.header-bottom-wrapper {
			display: flex;
			max-width: 1200px;
			padding: 0 36px;
			flex: 1 0 0;
		}
	}
`;
