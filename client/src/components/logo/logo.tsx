import styled from 'styled-components';
import { ReactComponent as icon } from './assets/icon.svg';
import { ReactComponent as title } from './assets/title.svg';
import { FC } from 'react';
import { Img } from '../img/img';

interface LogoProps {
	className?: string;
}

const LogoContainer: FC<LogoProps> = ({ className }) => {
	return (
		<div className={className}>
			<Img SvgIconComponent={icon} hoverStrokeColor={'transparent'} />
			<Img SvgIconComponent={title} hoverStrokeColor={'transparent'} />
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 6px;
	padding: 2px 0;

	&:hover {
		cursor: pointer;
	}
`;
