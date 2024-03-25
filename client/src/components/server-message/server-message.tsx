import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface ServerMessageProps {
	className?: string;
	children: ReactNode;
	/**
	 * Сообщение об ошибке или нет
	 */
	isError?: boolean;
}

const ServerMessageContainer: FC<ServerMessageProps> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const ServerMessage = styled(ServerMessageContainer)`
	margin: 0 40px;
	font-size: 20px;
	color: ${({ isError }) => (isError ? 'red' : 'var(--brand-orange)')};
	word-wrap: break-word;
`;
