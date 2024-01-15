import styled from 'styled-components';

const H1Container = ({ className, children }) => (
	<h1 className={className}>{children}</h1>
);

export const H1 = styled(H1Container)`
	margin: 0;
	font-family: Inter,sans-serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -1.6px;
	color: ${({color}) => color ? color : '#111111'};
`;
