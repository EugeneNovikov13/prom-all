import { FC, useState } from 'react';
import { AdvantagesBody } from './components/advantages-body';
import { H1 } from 'components';
import styled from 'styled-components';

interface AdvantagesProps {
	className?: string;
}

const AdvantagesContainer: FC<AdvantagesProps> = ({ className }) => {
	const [openedCardId, setOpenedCardId] = useState<string>('');

	return (
		<section className={className}>
			<div className="advantages-container">
				<div className="advantages-header">
					<H1 color={'var(--white)'}>Преимущества</H1>
				</div>
				<AdvantagesBody
					openedCardId={openedCardId}
					setOpenedCardId={setOpenedCardId}
				/>
			</div>
		</section>
	);
};

export const Advantages = styled(AdvantagesContainer)`
	display: flex;
	width: 100%;
	min-height: 786px;
	padding: 130px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;

	& * {
		user-select: none;
	}

	& div.advantages-container {
		max-width: 1264px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		padding-bottom: 88px;

		& div.advantages-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			padding: 0 68px;
		}
	}
`;
