import { forwardRef, useState } from 'react';
import { Icon, Tooltip } from '../../components';
import errorIcon from '../../assets/error.svg';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, error, ...props }, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={className}>
			<input {...props} ref={ref} />
			{/*ошибка ввода отображается иконкой справа в инпуте*/}
			{error && isOpen && (
				<Tooltip top="-15" right="0">
					{error}
				</Tooltip>
			)}
			{error && <Icon width="25px" iconSrc={errorIcon} setIsOpen={setIsOpen} />}
		</div>
	);
});

export const Input = styled(InputContainer)`
	position: relative;

	& input {
		width: 100%;
		min-width: 340px;
		height: 72px;
		padding: 24px 40px;
		border-radius: 10px;
		border: none;
		outline: none;
		background: rgba(255, 255, 255, 0.08);

		color: #e6e0e9;
		font-family: Inter, sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.5px;

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
