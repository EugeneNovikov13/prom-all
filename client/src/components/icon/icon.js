import styled from 'styled-components';

const IconContainer = ({ className, iconSrc, onClick, setIsOpen }) => {
	const onTooltipOpen = () => {
		setIsOpen && setIsOpen(true);
	};

	const onTooltipClose = () => {
		setIsOpen && setIsOpen(false);
	};

	return (
		<img
			className={className}
			onClick={onClick}
			onMouseEnter={onTooltipOpen}
			onMouseLeave={onTooltipClose}
			onTouchStart={onTooltipOpen}
			onTouchEnd={onTooltipClose}
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
