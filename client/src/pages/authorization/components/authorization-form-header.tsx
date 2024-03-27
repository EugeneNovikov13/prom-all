import { H1 } from 'components';
import styled from 'styled-components';
import { FC } from 'react';

interface AuthorizationFormHeaderProps {
	className?: string;
}

const AuthorizationFormFooterContainer: FC<AuthorizationFormHeaderProps> = ({ className }) => {
	return (
		<div className={className}>
			<H1 color="var(--white)">
				Авторизация
			</H1>
		</div>
	);
};

export const AuthorizationFormHeader = styled(AuthorizationFormFooterContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
