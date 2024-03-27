import { FC } from 'react';
import { H1 } from 'components';
import styled from 'styled-components';

interface RegistrationFormHeaderProps {
	className?: string;
}

const RegistrationFormHeaderContainer: FC<RegistrationFormHeaderProps> = ({ className }) => {
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
