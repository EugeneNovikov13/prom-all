import { useState } from 'react';
import { Cards, SideMenu } from '../../widgets';
import styled from 'styled-components';

const SectionsContainer = ({ className }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 600);

	return (
		<div className={isMenuOpen ? className : `${className} side-menu__closed`}>
			<SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
			<Cards />
		</div>
	);
};

export const Sections = styled(SectionsContainer)`
	position: relative;
	max-width: 1200px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 24px;
	padding: 0 36px;
	align-self: stretch;

	@media (max-width: 600px) {
		flex: 1 0 0;
		flex-direction: column;
		align-items: center;
		padding: 0;
	}

	@media screen and (max-device-height: 1000px) {
		padding: 0;
	}

	&.side-menu__closed {
		flex-direction: column;
	}
`;
