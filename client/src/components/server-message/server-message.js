import styled from 'styled-components';

const ServerMessageContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const ServerMessage = styled(ServerMessageContainer)`
	margin: 0 40px;
	font-size: 20px;
	color: ${({ isError }) => (isError ? 'red' : 'var(--brand-orange)')};
	word-wrap: break-word;
`;
