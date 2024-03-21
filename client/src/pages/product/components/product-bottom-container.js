import styled from 'styled-components';
import { Button } from '../../../features';
import { bottomButtonStyle } from '../config/bottom-button-style';
import { ReactComponent as ExpandMore } from '../assets/expand_more.svg';
import { Img } from '../../../components';
import { openModal } from '../../../store/reducers';
import { useDispatch } from 'react-redux';

const ProductBottomContainerContainer = ({
	className,
	title,
	description,
	specification,
}) => {
	const dispatch = useDispatch();

	const onDescriptionClick = () => {
		const modalOptions = {
			backgroundColor: 'var(--white)',
			component: 'product-data',
			title: title,
			content: description,
		};

		dispatch(openModal(modalOptions));
	};

	const onSpecificationClick = () => {
		const modalOptions = {
			backgroundColor: 'var(--white)',
			component: 'product-data',
			title: title,
			content: specification,
		};

		dispatch(openModal(modalOptions));
	};

	return (
		<div className={className}>
			<Button {...bottomButtonStyle} onClick={onDescriptionClick}>
				<span>Описание</span>
				<Img SvgIconComponent={ExpandMore} maxWidth="32px"></Img>
			</Button>
			<Button
				{...bottomButtonStyle}
				onClick={onSpecificationClick}
				isDisable={!specification}
			>
				<span>Технические характеристики</span>
				<Img SvgIconComponent={ExpandMore} maxWidth="32px"></Img>
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

	@media (max-width: 600px) {
		padding: 0;
	}

	& button {
		border-bottom: 1px solid rgba(52, 57, 65, 0.3);
		font-weight: 500;
	}

	& span {
		white-space: pre-wrap;
		text-align: left;
	}
`;
