import styled from 'styled-components';

const ErrorContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Error = styled(ErrorContainer)`
	width: 100%;
	min-height: 200px;
	color: #ff7f00;
`;
