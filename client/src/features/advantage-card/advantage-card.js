import { useState } from 'react';
import { OpenedCard } from './components/opened-card';
import { ClosedCard } from './components/closed-card';
import styled from 'styled-components';

const AdvantageCardContainer = ({
	className,
	advantage: { id, title, image, text },
	isOpen,
	onClick,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);

	return (
		<div className={className} onClick={onClick}>
			{isOpen ? (
				<OpenedCard
					title={title}
					image={image}
					text={text}
					onTouchEnd={() => setIsHovered(false)}
				/>
			) : (
				<ClosedCard
					id={id}
					title={title}
					image={image}
					isHovered={isHovered}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			)}
		</div>
	);
};

export const AdvantageCard = styled(AdvantageCardContainer)`
	display: flex;
	width: ${({ isOpen }) => isOpen ? 318 : 181}px;
	height: 350px;
	padding: 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	border: 2px solid #071123;
	background: ${({ isOpen }) => isOpen ? 'inherit' : 'var(--white)'};
	box-shadow: 0 0 20px 0 rgba(255, 122, 0, 0.1) inset;
	transition: 0.1s;

	&:hover {
		cursor: pointer;
		border: 2px solid rgba(255, 255, 255, 0.4);
		background: rgba(7, 17, 35, 0.1);
		box-shadow: 0 0 20px 0 rgba(255, 122, 0, 0.1) inset;
	}
`;
