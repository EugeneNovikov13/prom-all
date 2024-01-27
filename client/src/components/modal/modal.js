import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { closeModal } from '../../store/reducers';
import { Button } from '../../features';
import { ProductData, QuickOrder } from '../../widgets';
import { Img } from '../img/img';
import { ReactComponent as Close } from './assets/close.svg';
import { animationVariants } from './constants/animation-variants';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(state => state.appReducer.modal.isOpen);
	const backgroundColor = useSelector(state => state.appReducer.modal.backgroundColor);
	const component = useSelector(state => state.appReducer.modal.component);

	const [children, setChildren] = useState(<></>);

	const dispatch = useDispatch();

	useEffect(() => {
		if (component === 'order') {
			setChildren(<QuickOrder />);
		}
		if (component === 'product-data') {
			setChildren(<ProductData />);
		}
	}, [component, isOpen]);

	const onClose = () => {
		dispatch(closeModal());
	};

	return (
		<>
			<AnimatePresence>
				{isOpen && (
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
									<Img SvgIconComponent={Close} />
								</Button>
							</div>
						</motion.div>
					</div>
				)}
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
