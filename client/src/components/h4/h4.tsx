import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface H4Props {
	className?: string;
	children: ReactNode;
	color?: string;
	fontSize?: string;
	lineHeight?: string;
}

const H4Container: FC<H4Props> = ({ className, children }) => (
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
