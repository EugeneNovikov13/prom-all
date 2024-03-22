import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface PProps {
	className?: string;
	children: ReactNode;
	color?: string;
	fontSize?: string;
	lineHeight?: string;
}

const PContainer: FC<PProps> = ({ className, children }) => (
	<p className={className}>{children}</p>
);

export const P = styled(PContainer)`
	margin: 0;
	align-self: stretch;
	color: ${({color}) => color ? color : 'var(--white)'};
	font-family: Inter, sans-serif;
	font-size: ${({fontSize}) => fontSize ? fontSize : '24px'};
	font-style: normal;
	font-weight: 600;
	line-height: ${({lineHeight}) => lineHeight ? lineHeight : '20px'};
`;
