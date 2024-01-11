import styled from 'styled-components';

const IconContainer = ({ className, iconSrc, onClick, onMouseEnter, onMouseLeave }) => {
	return (
		<img
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			src={iconSrc}
			alt="icon"
		/>
	);
};

export const Icon = styled(IconContainer)`
	width: ${({ width }) => width};
	vertical-align: top;

	&:hover {
		cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
	}
`;