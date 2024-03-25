import { AnimatePresence, motion } from 'framer-motion';
import { Button } from 'features';
import { Icon } from '../icon/icon';
import { ReactComponent as Close } from './assets/close.svg';
import { animationVariants } from './config';
import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

interface ModalProps {
	className?: string;
	children: ReactNode;
	backgroundColor?: string;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContainer: FC<ModalProps> = ({
	className,
	children,
	backgroundColor = 'var(--white)',
	setIsModalOpen,
}) => {
	const onClose = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<AnimatePresence>
				<div className={className}>
					<div className="modal-overlay" onClick={onClose}></div>
					<motion.div
						className="modal-container"
						style={{ backgroundColor: backgroundColor }}
						variants={animationVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.15, easy: 'easyOut' }}
					>
						{children}

						<div className="close-button-container">
							<Button
								width="48px"
								height="48px"
								background={'var(--brand-orange)'}
								hoverBoxShadow={true}
								activeBackground={'var(--active-orange)'}
								onClick={onClose}
							>
								<Icon iconSrc={Close} width={'32px'} isActive={true} />
							</Button>
						</div>
					</motion.div>
				</div>
			</AnimatePresence>
		</>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;
	opacity: 1;
	z-index: 10000;

	@media screen and (max-device-height: 1000px) {
		position: absolute;
	}

	& div.modal-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	& div.modal-container {
		width: 100%;
		max-width: 1128px;
		position: relative;
		background-color: ${({ backgroundColor }) =>
			backgroundColor ? backgroundColor : 'var(--white)'};
		border-radius: 20px;
		margin: 0 36px;
		padding: 20px;
		z-index: 10001;

		@media screen and (max-device-height: 1000px) {
			padding: 20px 0;
		}
	}

	& div.close-button-container {
		position: absolute;
		top: 20px;
		right: 20px;

		& svg:active {
			transform: scale(0.8);
		}
	}
`;
