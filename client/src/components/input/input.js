import { forwardRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/icon';

const InputContainer = forwardRef(({ className, error, ...props }, ref) => {
	return (
		<>
			<input className={className} {...props} ref={ref} />
			{/*ошибка ввода отображается иконкой справа в инпуте*/}
			{/*<Icon />*/}
		</>
	);
});

export const Input = styled(InputContainer)`
	width: 552px;
	height: 72px;
	padding: 24px 40px;
	border-radius: 10px;
	border: none;
	outline: none;
	background: rgba(255, 255, 255, 0.08);

	color: #E6E0E9;
	font-family: Inter, sans-serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.5px;

	@media (max-width: 600px) {
		width: 360px;
	}

	&:hover {
		background: rgb(50, 50, 51);
	}

	&:focus {
		background: rgb(50, 50, 51);
		color: var(--light);
	}
`;
