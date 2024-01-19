import { Button } from '../../../../../features';
import styled from 'styled-components';

const MenuLinkContainer = ({ className, title, link, isActive }) => {
	return (
		<li className={className}>
			<Button
				link={link}
				width="100%"
				height="100%"
				color={isActive ? '#FF7F00' : '#cac4d0'}
				background={'inherit'}
				hoverBoxShadow={false}
				activeBackground="#3C3A3FFF"
			>
				{title}
			</Button>
		</li>
	);
};

export const MenuLink = styled(MenuLinkContainer)`
	position: relative;
	min-width: 100px;
	height: 47px;
	flex: 1 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid rgba(23, 23, 23, 0);
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
		width: 100%;
		height: 100%;
	}

	&:hover {
		background: #2b2930;
	}
`;
