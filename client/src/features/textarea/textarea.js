import { forwardRef, useState } from 'react';
import { Icon } from '../../components/icon/icon';
import { Tooltip } from '../../components/tooltip/tooltip';
import errorIcon from '../../assets/error.svg';
import styled from 'styled-components';

const TextareaContainer = forwardRef(({ className, error, ...props }, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={className}>
			<textarea {...props} ref={ref}></textarea>
			{/*ошибка ввода отображается иконкой справа в поле ввода*/}
			{error && isOpen && (
				<Tooltip top="-15" right="0">
					{error}
				</Tooltip>
			)}
			{error && <Icon width="25px" iconSrc={errorIcon} setIsOpen={setIsOpen} />}
		</div>
	);
});

export const Textarea = styled(TextareaContainer)`
	position: relative;

	& textarea {
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
	}

	& img {
		position: absolute;
		right: 20px;
		top: 24px;
	}
`;
