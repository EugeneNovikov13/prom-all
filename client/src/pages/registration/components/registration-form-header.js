import { H1 } from '../../../components';
import styled from 'styled-components';

const RegistrationFormHeaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<H1 color="var(--white)">
				Регистрация
			</H1>
		</div>
	);
};

export const RegistrationFormHeader = styled(RegistrationFormHeaderContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
