import { Link } from 'react-router-dom';
import { navigationMenu } from '../../../constants';
import { Icon } from '../../icon/icon';
import styled from 'styled-components';

const NavigationFooterMenuContainer = ({ className }) => {
	return (
		<nav className={className}>
			<ul>
				{navigationMenu.map(({ title, link, iconURL }, ind) => (
					<li className={className} key={ind}>
						<Link to={link}>
							<Icon width="18px" iconSrc={iconURL} isActive={true} />
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export const NavigationFooterMenu = styled(NavigationFooterMenuContainer)`
	& ul {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;

		& li {
			list-style: none;
			border-radius: 100px;

			& a {
				display: flex;
				align-items: center;
				gap: 8px;
				padding: 10px 16px 10px 12px;
				color: var(--white, #fff);
				font-family: Inter, sans-serif;
				font-size: 20px;
				font-style: normal;
				font-weight: 500;
				line-height: 28px;
				letter-spacing: 0.1px;
			}

			&:hover {
				cursor: pointer;
				background: #2b2930;
			}
		}
	}
`;
