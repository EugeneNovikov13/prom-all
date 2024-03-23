import React, { FC } from 'react';
import ReactSelect, { Props, SingleValue } from 'react-select';
import styled from 'styled-components';
import { Option } from './select-types';

interface SelectProps {
	className?: string;
	/**
	 * Доступные опции для выбора в React-Select
	 */
	options: Option[];
	/**
	 * Обработчик события смены значения в React-Select
	 * @param value - объект нового значения типа Option
	 */
	onSelect: (value: SingleValue<Option>) => void;
	placeholder: string;
	/**
	 * Настройки React-Select
	 */
	selectProps: Props<Option, false>
}

const SelectContainer: FC<SelectProps> = ({ className, options, onSelect, placeholder, selectProps }) => {
	return (
		<div className={className}>
			<div className="select-container">
				<ReactSelect
					{...selectProps}
					options={options}
					onChange={onSelect}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export const Select = styled(SelectContainer)`
	min-width: 144px;
	height: 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 100px;
	border: 2px solid var(--dark);

	@media (max-width: 450px) {
		align-self: end;
	}

	&:hover {
		border: 2px solid var(--brand-orange);
	}

	&:active {
		border: 2px solid var(--brand-orange);
	}

	& div.select-container {
		flex: 1 0 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;
		padding: 10px 16px 10px 32px;
	}
`;
