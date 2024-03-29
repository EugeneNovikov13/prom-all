import React, { useState } from 'react';
import { advantagesList } from '../constants/advantages-list';
import { AdvantageCard } from 'features';
import styled from 'styled-components';

interface AdvantagesBodyProps {
	className?: string;
	openedCardId: string;
	setOpenedCardId: React.Dispatch<React.SetStateAction<string>>;
}

const AdvantagesBodyContainer: React.FC<AdvantagesBodyProps> = ({
	className,
	openedCardId,
	setOpenedCardId,
}) => {
	const [hoverCardId, setHoverCardId] = useState<string>('');

	const onClick = (id: string) => {
		if (id === openedCardId) {
			setHoverCardId('');
			setOpenedCardId('');
			return;
		}
		setOpenedCardId(id);
	};

	return (
		<div className={className}>
			{advantagesList.map(advantage => (
				<AdvantageCard
					key={advantage.id}
					advantage={advantage}
					isOpen={openedCardId === advantage.id}
					onClick={onClick}
					hoverCardId={hoverCardId}
					setHoverCardId={setHoverCardId}
				/>
			))}
		</div>
	);
};

export const AdvantagesBody = styled(AdvantagesBodyContainer)`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	gap: 8px;
	flex-wrap: wrap;
	transition: 0.1s;
	padding: ${({ openedCardId }) => (openedCardId ? '0' : '0 68px')};

	@media (max-width: 600px) {
		padding: ${({ openedCardId }) => (openedCardId ? '0' : '0 10px')};
	}

	@media (max-width: 430px) {
		max-width: 320px;
	}
`;
