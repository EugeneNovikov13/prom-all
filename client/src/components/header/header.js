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
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--dark);
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	color: var(--white);
	z-index: 1000;

	& div.first-line {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: #171717;

		& div.header-top-wrapper {
			max-width: 1200px;
			padding: 0 36px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1 0 0;
		}
	}

	& div.second-line {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: #171717;

		& div.header-bottom-wrapper {
			max-width: 1200px;
			padding: 0 36px;
			display: flex;
			justify-content: center;
			gap: 5px;
			flex: 1 0 0;

			@media screen and (max-width: 600px) {
				padding: 0 10px;
			}

			@media screen and (max-width: 450px) {
				flex-wrap: wrap;
			}
		}
	}
`;
