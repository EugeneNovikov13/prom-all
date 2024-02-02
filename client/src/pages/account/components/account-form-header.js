import { H1 } from '../../../components';
import styled from 'styled-components';

const AccountFormInputsContainer = ({ className }) => {
	return (
		<div className={className}>
			<H1 color="var(--white)">
				Личный кабинет
			</H1>
		</div>
	);
};

export const AccountFormHeader = styled(AccountFormInputsContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
