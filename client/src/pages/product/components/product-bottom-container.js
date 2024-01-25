import styled from 'styled-components';
import { Button } from '../../../features';
import { bottomButtonStyle } from '../constants/bottom-button-style';
import {ReactComponent as ExpandMore} from '../assets/expand_more.svg';
import { Img } from '../../../components';

const ProductBottomContainerContainer = ({ className }) => {
	return (
		<div className={className}>
			<Button {...bottomButtonStyle}>
				Описание
				<Img SvgIconComponent={ExpandMore} maxWidth='32px'></Img>
			</Button>
			<Button {...bottomButtonStyle}>
				Технические характеристики
				<Img SvgIconComponent={ExpandMore} maxWidth='32px'></Img>
			</Button>
		</div>
	);
};

export const ProductBottomContainer = styled(ProductBottomContainerContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	align-self: stretch;
	padding: 0 36px;

	& button {
		border-bottom: 1px solid rgba(52, 57, 65, 0.3);
		font-weight: 500;
	}
`;
