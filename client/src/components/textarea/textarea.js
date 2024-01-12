import { forwardRef } from 'react';
import styled from 'styled-components';

const TextareaContainer = forwardRef(({ className, error, ...props }, ref) => {
	return (
		<>
			<textarea className={className} {...props} ref={ref}></textarea>
			{/*ошибка ввода отображается иконкой справа в поле ввода*/}
			{/*<Icon />*/}
		</>
	);
});

export const Textarea = styled(TextareaContainer)`
	width: 552px;
	height: 336px;
	border-radius: 10px;
	border: none;
	outline: none;
	background: rgba(255, 255, 255, 0.08);
	padding: 24px 40px;
	resize: none;

	color: #e6e0e9;
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
