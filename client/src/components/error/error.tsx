import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface ErrorProps {
	className?: string;
	children: ReactNode;
}

const ErrorContainer: FC<ErrorProps> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Error = styled(ErrorContainer)`
	width: 100%;
	max-width: 1128px;
	min-height: 200px;
	flex: 1 0 0;
	display: flex;
	flex-direction: column;
	gap: 24px;
	color: var(--white);
	font-size: 30px;
`;
