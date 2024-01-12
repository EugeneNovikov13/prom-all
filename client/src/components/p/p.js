import styled from 'styled-components';

const PContainer = ({ className, children }) => <p className={className}>{children}</p>;

export const P = styled(PContainer)`
	margin: 0;
	align-self: stretch;
	color: var(--white);
	font-family: Inter, sans-serif;
	font-size: ${({fontSize}) => fontSize ? fontSize : '24px'};
	font-style: normal;
	font-weight: 600;
	line-height: ${({lineHeight}) => lineHeight ? lineHeight : '20px'};
`;
