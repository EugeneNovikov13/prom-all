import styled from 'styled-components';

const H2Container = ({ className, children }) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Container)`
	margin: 0;
	font-family: Inter, sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -1.6px;
	color: ${({ color }) => (color ? color : '#111111')};
`;
