import { FC, ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import { Icon, Tooltip } from 'components';
import { ReactComponent as errorIcon } from 'assets/error.svg';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error: string | undefined;
}

const InputContainer: FC<InputProps> = forwardRef(
	({ className, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		return (
			<div className={className}>
				<input {...props} ref={ref} />
				{/*ошибка ввода отображается иконкой справа в поле ввода*/}
				{error && isOpen && (
					<Tooltip bottom="54" right="0">
						{error}
					</Tooltip>
				)}
				{error && <Icon width="32px" iconSrc={errorIcon} setIsOpen={setIsOpen} />}
			</div>
		);
	},
);

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

		&:hover:not(:disabled) {
			background: rgb(50, 50, 51);
		}

		&:focus {
			background: rgb(50, 50, 51);
			color: var(--light);
		}

		&:disabled {
			color: #E6E0E980;
		}
	}

	//иконка ошибки
	& span {
		position: absolute;
		right: 20px;
		top: 20px;
	}
`;
