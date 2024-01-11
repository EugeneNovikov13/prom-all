import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuLinkContainer = ({ className, title, link, onClick }) => {
	return (
		<li className={className} onClick={() => onClick(link)}>
			<Link to={link}>{title}</Link>
		</li>
	);
};

export const MenuLink = styled(MenuLinkContainer)`
	position: relative;
	height: 47px;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid rgba(23, 23, 23, 1);
	border-radius: 23px;

	${({ isActive }) => (isActive ? '&::after' : '')} {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--brand-orange);
	}

	& a {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		color: ${({ isActive }) => (isActive ? '#FF7F00' : '#cac4d0')};
	}

	&:hover {
		background: #2b2930;
	}
`;
