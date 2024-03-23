import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'features';
import { bottomButtonStyleProps } from '../config/bottom-button-style-props';
import { ReactComponent as ExpandMore } from '../assets/expand_more.svg';
import { Img, Modal } from 'components';
import { ProductData } from 'widgets';
import styled from 'styled-components';

interface ProductBottomContainerProps {
	className?: string;
	/**
	 * Название товара
	 */
	title: string;
	/**
	 * Описание товара
	 */
	description: string;
	/**
	 * Характеристики товара
	 */
	specification: string;
}

const ProductBottomContainerContainer: FC<ProductBottomContainerProps> = ({
	className,
	title,
	description,
	specification,
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<string>('');

	const onInfoBlockClick = (info: string) => {
		setModalContent(info);
		setIsModalOpen(true);
	};

	return (
		<div className={className}>
			<Button {...bottomButtonStyleProps} onClick={() => onInfoBlockClick(description)}>
				<span>Описание</span>
				<Img SvgIconComponent={ExpandMore} maxWidth="32px"></Img>
			</Button>
			<Button
				{...bottomButtonStyleProps}
				onClick={() => onInfoBlockClick(specification)}
				isDisable={!specification}
			>
				<span>Технические характеристики</span>
				<Img SvgIconComponent={ExpandMore} maxWidth="32px"></Img>
			</Button>
			{isModalOpen &&
				createPortal(
					<Modal
						setIsModalOpen={setIsModalOpen}
						children={<ProductData title={title} content={modalContent} />}
					/>,
					document.body,
				)}
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
