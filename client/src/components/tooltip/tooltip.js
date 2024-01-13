import styled from 'styled-components';

const TooltipContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Tooltip = styled(TooltipContainer)`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: ${({ top }) => top}px;
	right: ${({ right }) => right}px;
	border: ${({ isInvisible }) => (isInvisible ? 'none' : '1px solid #000')};
	border-radius: 10px;
	background: ${({ isInvisible }) => (isInvisible ? 'transparent' : '#FFFFFF')};
	padding: 8px;
	z-index: 100;
`;
