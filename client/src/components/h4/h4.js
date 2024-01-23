import styled from 'styled-components';

const H4Container = ({ className, children }) => (
	<h4 className={className}>{children}</h4>
);

export const H4 = styled(H4Container)`
	margin: 0;
	font-family: Inter, sans-serif;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '20')}px;
	font-style: normal;
	font-weight: 500;
	line-height: ${({lineHeight}) => lineHeight ? lineHeight : '24px'};
	letter-spacing: -1px;
	color: ${({ color }) => (color ? color : 'var(--dark)')};
`;
