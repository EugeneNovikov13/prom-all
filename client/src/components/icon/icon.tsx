import styled from 'styled-components';
import React, { FC } from 'react';

interface IconProps {
	className?: string;
	iconSrc: string;
	/**
	 * Функция установки состояния открыто/закрыто (для Tooltips)
	 */
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	width: string;
	isActive?: boolean;
}

const IconContainer: FC<IconProps> = ({ className, iconSrc, setIsOpen }) => {
	const onTooltipOpen = () => {
		setIsOpen && setIsOpen(true);
	};

	const onTooltipClose = () => {
		setIsOpen && setIsOpen(false);
	};

	return (
		<img
			className={className}
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
