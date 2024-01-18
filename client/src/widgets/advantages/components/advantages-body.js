import styled from 'styled-components';
import { advantagesList } from '../constants/advantages-list';
import { AdvantageCard } from '../../../features';

const AdvantagesBodyContainer = ({ className, openedCardId, setOpenedCardId }) => {
	const onClick = (id) => {
		if (id === openedCardId) {
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
					onClick={() => onClick(advantage.id)}
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
	padding: ${({openedCardId}) => openedCardId? '0' : '0 68px'};
`;
