import styled from 'styled-components';
import React, { FC } from 'react';

interface IconProps {
	className?: string;
	/**
	 * URL иконки или SVG-иконка
	 */
	iconSrc: FC<React.SVGAttributes<SVGElement>> | string;
	/**
	 * Функция установки состояния открыто/закрыто (для Tooltips)
	 */
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	width: string;
	isActive?: boolean;
}

const IconContainer: FC<IconProps> = ({
	className,
	iconSrc,
	setIsOpen,
}) => {
	const onTooltipOpen = () => {
		setIsOpen && setIsOpen(true);
	};

	const onTooltipClose = () => {
		setIsOpen && setIsOpen(false);
	};

	const SvgIconComponent = typeof iconSrc !== 'string' ? iconSrc : null;

	return (
		<span
			className={className}
			onMouseEnter={onTooltipOpen}
			onMouseLeave={onTooltipClose}
			onTouchStart={onTooltipOpen}
			onTouchEnd={onTooltipClose}
		>
			{SvgIconComponent ? (
				<SvgIconComponent />
			) : (
				<img
					src={iconSrc as string}
					alt="icon"
				/>
			)}
		</span>
	);
};

export const Icon = styled(IconContainer)`
	width: ${({ width }) => width};
	height: ${({ width }) => width};
	vertical-align: top;

	&:hover {
		cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
	}

	& svg, img {
		width: ${({ width }) => width};
		height: ${({ width }) => width};
	}
`;
