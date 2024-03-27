import React from 'react';
import { OpenedCard } from './components/opened-card';
import { ClosedCard } from './components/closed-card';
import styled from 'styled-components';
import { IAdvantage } from 'types/advantage-types';

interface AdvantageCardProps {
	className?: string;
	advantage: IAdvantage;
	isOpen: boolean;
	onClick: (id: string) => void;
	hoverCardId: string;
	setHoverCardId: React.Dispatch<React.SetStateAction<string>>;
}

const AdvantageCardContainer: React.FC<AdvantageCardProps> = ({
	className,
	advantage: { id, title, image, text },
	isOpen,
	onClick,
	hoverCardId,
	setHoverCardId,
}) => {
	const onMouseEnter = () => setHoverCardId(id);
	const onMouseLeave = () => setHoverCardId('');

	return (
		<div
			className={className}
			onClick={() => onClick(id)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{isOpen ? (
				<OpenedCard
					title={title}
					image={image}
					text={text}
					onTouchEnd={() => setHoverCardId('')}
				/>
			) : (
				<ClosedCard
					title={title}
					image={image}
					isHovered={hoverCardId === id}
				/>
			)}
		</div>
	);
};

export const AdvantageCard = styled(AdvantageCardContainer)`
	min-width: ${({ isOpen }) => (isOpen ? 318 : 181)}px;
	height: 350px;
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px;
	border-radius: 8px;
	border: 2px solid #071123;
	background: ${({ isOpen }) => (isOpen ? 'inherit' : 'var(--white)')};
	box-shadow: 0 0 20px 0 rgba(255, 122, 0, 0.1) inset;
	transition: 0.1s;

	&:hover {
		cursor: pointer;
		border: 2px solid rgba(255, 255, 255, 0.4);
		background: rgba(7, 17, 35, 0.1);
		box-shadow: 0 0 20px 0 rgba(255, 122, 0, 0.1) inset;
	}
`;
