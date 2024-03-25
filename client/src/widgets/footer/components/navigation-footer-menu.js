import { HashLink } from 'react-router-hash-link';
import { Icon } from '../../../components';
import { menuList } from '../constants/menu-list';
import styled from 'styled-components';

const NavigationFooterMenuContainer = ({ className }) => {
	return (
		<nav className={className}>
			<ul>
				{menuList.map(({ title, link, iconURL }, ind) => (
					<li className={className} key={ind}>
						<HashLink smooth to={`${link}#top`}>
							<Icon width="18px" iconSrc={iconURL} isActive={true} />
							{title}
						</HashLink>
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
				color: var(--white);
				font-family: Inter, sans-serif;
				font-size: 20px;
				font-style: normal;
				font-weight: 500;
				line-height: 28px;
				letter-spacing: 0.1px;

				& span {
					height: 24px;
				}
			}

			&:hover {
				cursor: pointer;
				background: #2b2930;
			}
		}
	}
`;
