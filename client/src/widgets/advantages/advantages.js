import { useState } from 'react';
import { H1 } from '../../components';
import { AdvantageCard } from '../../features';
import { advantagesList } from './constants/advantages-list';
import styled from 'styled-components';

const AdvantagesContainer = ({ className }) => {
	const [openedCardTitle, setOpenedCardTitle] = useState('');

	return (
		<section className={className}>
			<div className="advantages-container">
				<div className="advantages-header">
					<H1 color={'var(--white)'}>Преимущества</H1>
				</div>
				<div className="advantages-body">
					{advantagesList.map(advantage => (
						<AdvantageCard
							key={advantage.id}
							advantage={advantage}
							openedCardTitle={openedCardTitle}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export const Advantages = styled(AdvantagesContainer)`
	display: flex;
	width: 100%;
	min-height: 786px;
	padding: 130px 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;

	& div.advantages-container {
		display: flex;
		max-width: 1200px;
		padding: 0 36px 88px 36px;
		flex-direction: column;
		align-items: center;
		gap: 40px;

		& div.advantages-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
		}

		& div.advantages-body {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			align-content: flex-start;
			gap: 8px;
			flex-wrap: wrap;
		}
	}
`;
