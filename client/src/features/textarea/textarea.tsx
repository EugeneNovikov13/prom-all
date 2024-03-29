import { FC, ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import { Icon, Tooltip } from 'components';
import { ReactComponent as errorIcon } from 'assets/error.svg';
import styled from 'styled-components';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	error: string | undefined;
}

const TextareaContainer: FC<TextareaProps> = forwardRef(
	({ className, error, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		return (
			<div className={className}>
				<textarea {...props} ref={ref}></textarea>
				{/*ошибка ввода отображается иконкой справа в поле ввода*/}
				{error && isOpen && (
					<Tooltip top="-19" right="0">
						{error}
					</Tooltip>
				)}
				{error && <Icon width="25px" iconSrc={errorIcon} setIsOpen={setIsOpen} />}
			</div>
		);
	},
);

export const Textarea = styled(TextareaContainer)`
	position: relative;
	flex: 1 0 0;

	& textarea {
		width: 100%;
		min-width: 340px;
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

		&:hover {
			background: rgb(50, 50, 51);
		}

		&:focus {
			background: rgb(50, 50, 51);
			color: var(--light);
		}
	}

	//иконка ошибки
	& span {
		position: absolute;
		right: 20px;
		top: 20px;
	}
`;
