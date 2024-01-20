import styled from 'styled-components';

const PopupContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Popup = styled(PopupContainer)`
	position: absolute;
	top: 40px;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 0 0 20px 20px;
	background: var(--dark);
	z-index: 10;
`;
