import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/reducers';
import { Button } from '../../features';
import { QuickOrder } from '../../widgets';
import { Img } from '../img/img';
import { ReactComponent as Close } from './assets/close.svg';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(state => state.appReducer.modal.isOpen);
	const backgroundColor = useSelector(state => state.appReducer.modal.backgroundColor);
	const component = useSelector(state => state.appReducer.modal.component);
	const orderData = useSelector(state => state.orderReducer.orderData);

	const [children, setChildren] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (component === 'order') {
			setChildren(<QuickOrder orderData={orderData} />);
		}
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}
	}, [component, isOpen, orderData]);

	if (!isOpen) {
		return null;
	}

	const onClose = () => {
		document.body.style.overflow = '';
		dispatch(closeModal());
	};

	return (
		<div className={className}>
			<div className="modal-overlay" onClick={onClose}></div>
			<div className="modal-container" style={{ backgroundColor: backgroundColor }}>
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
			</div>
		</div>
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
	transition: all 0.2s; //???????
	opacity: 1;
	z-index: 10000;

	& div.modal-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	& div.modal-container {
		position: relative;
		background-color: ${({ backgroundColor }) =>
			backgroundColor ? backgroundColor : 'var(--white)'};
		border-radius: 20px;
		padding: 20px;
		z-index: 10001;
	}

	& div.close-button-container {
		position: absolute;
		top: 20px;
		right: 20px;

		& svg:active {
			transform: scale(0.8);
		}
	}

	& .simple-modal {
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		width: 400px;
		margin: 0 auto;
		padding: 0 20px 20px;
		text-align: center;
		background-color: #fff;
		border: 2px solid #000;
		z-index: 10001;

		& .simple-modal-buttons {
			display: flex;
			justify-content: center;
			gap: 10px;
		}
	}
`;
