import styled from 'styled-components';

const H4Container = ({ className, children }) => (
	<h2 className={className}>{children}</h2>
);

export const H4 = styled(H4Container)`
	margin: 0;
	font-family: Inter, sans-serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: -1px;
	color: ${({ color }) => (color ? color : '#111111')};
`;
