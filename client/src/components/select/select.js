import ReactSelect from 'react-select';
import { reactSelectProps } from './constants/react-select-props';
import styled from 'styled-components';

const SelectContainer = ({ className, options, setSelectValue }) => {
	const onChange = value => {
		if (value) {
			setSelectValue(value.label);
			return;
		}
		setSelectValue('');
	};

	return (
		<div className={className}>
			<div className="select-container">
				<ReactSelect
					options={options}
					onChange={onChange}
					placeholder={options[0].label}
					{...reactSelectProps}
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
