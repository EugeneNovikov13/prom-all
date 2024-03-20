import styled from 'styled-components';
import React, { FC } from 'react';

interface ImgProps {
	className?: string;
	/**
	 * className иконки (для установки собственных уникальных стилей)
	 */
	iconClassName?: string;
	/**
	 * SVG иконка
	 */
	SvgIconComponent?: FC<React.SVGAttributes<SVGElement>>;
	/**
	 * src картинки (если не  SVG)
	 */
	image?: string;
	/**
	 * Функция обработки клика на иконку
	 */
	onClick?: () => void;
	position?: string;
	top?: string;
	left?: string;
	maxWidth?: string;
	maxHeight?: string;
	transition?: string;
	/**
	 * цвет обводки SVG при наведении мышью
	 */
	hoverStrokeColor?: string;
	/**
	 * цвет обводки SVG
	 */
	strokeColor?: string;
	/**
	 * цвет заполнения SVG
	 */
	fill?: string;
}

const ImgContainer: FC<ImgProps> = ({
	className,
	iconClassName,
	SvgIconComponent,
	image,
	onClick,
}) => {
	return (
		<div className={className}>
			{SvgIconComponent ? (
				<SvgIconComponent className={iconClassName} onClick={onClick} />
			) : (
				<img
					className={iconClassName}
					src={image}
					alt="Ошибка загрузки картинки"
					onClick={onClick}
				/>
			)}
		</div>
	);
};

export const Img = styled(ImgContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: top 0.3s;

	position: ${({ position }) => position};
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	max-width: ${({ maxWidth }) => maxWidth};
	max-height: ${({ maxHeight }) => maxHeight};

	&:hover {
		cursor: ${({ hoverStrokeColor }) => (!!hoverStrokeColor ? 'pointer' : 'default')};
	}

	& svg * {
		stroke: ${({ strokeColor }) => strokeColor};
		fill: ${({ fill }) => fill};
		transition: ${({ transition }) => (transition ? transition : '0.3s')};
	}

	& svg:hover * {
		stroke: ${({ hoverStrokeColor }) => hoverStrokeColor};
	}
`;
